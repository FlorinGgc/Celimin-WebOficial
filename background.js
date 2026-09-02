/**
 * Dynamic Interactive Canvas Background ("Fondo Movido")
 * Renders liquid lithium wave motion and floating mineral particles with mouse interaction.
 */

class InteractiveBackground {
  constructor() {
    this.canvas = document.getElementById('bg-canvas');
    if (!this.canvas) return;
    this.ctx = this.canvas.getContext('2d');
    
    this.particles = [];
    this.particleCount = 55;
    this.mouse = { x: null, y: null, radius: 180 };
    this.wavePhase = 0;
    this.isAnimated = true;
    
    this.init();
    this.bindEvents();
    this.animate();
  }

  init() {
    this.resize();
    this.createParticles();
  }

  resize() {
    this.width = this.canvas.width = window.innerWidth;
    this.height = this.canvas.height = window.innerHeight;
  }

  createParticles() {
    this.particles = [];
    for (let i = 0; i < this.particleCount; i++) {
      this.particles.push({
        x: Math.random() * this.width,
        y: Math.random() * this.height,
        size: Math.random() * 3 + 1.5,
        speedX: (Math.random() - 0.5) * 0.8,
        speedY: (Math.random() - 0.5) * 0.8,
        baseAlpha: Math.random() * 0.6 + 0.2,
        color: i % 3 === 0 ? '#00e5ff' : (i % 3 === 1 ? '#00b4d8' : '#ffffff')
      });
    }
  }

  bindEvents() {
    window.addEventListener('resize', () => this.resize());

    window.addEventListener('mousemove', (e) => {
      this.mouse.x = e.clientX;
      this.mouse.y = e.clientY;
    });

    window.addEventListener('mouseleave', () => {
      this.mouse.x = null;
      this.mouse.y = null;
    });

    const toggleBtn = document.getElementById('toggle-bg-anim');
    if (toggleBtn) {
      toggleBtn.addEventListener('click', () => {
        this.isAnimated = !this.isAnimated;
        toggleBtn.textContent = this.isAnimated ? 'Pause Motion' : 'Play Motion';
        if (this.isAnimated) this.animate();
      });
    }
  }

  drawWaves() {
    const { ctx, width, height, wavePhase } = this;

    // Deep ocean base gradient
    const bgGradient = ctx.createLinearGradient(0, 0, 0, height);
    bgGradient.addColorStop(0, '#050d1a');
    bgGradient.addColorStop(0.5, '#081a30');
    bgGradient.addColorStop(1, '#050d1a');
    ctx.fillStyle = bgGradient;
    ctx.fillRect(0, 0, width, height);

    // Render fluid lithium brine waves
    const waveLayers = [
      { amplitude: 35, frequency: 0.005, speed: 0.02, color: 'rgba(0, 180, 216, 0.15)', offsetY: height * 0.65 },
      { amplitude: 45, frequency: 0.003, speed: 0.015, color: 'rgba(0, 229, 255, 0.12)', offsetY: height * 0.75 },
      { amplitude: 25, frequency: 0.008, speed: 0.025, color: 'rgba(0, 119, 182, 0.2)', offsetY: height * 0.85 }
    ];

    waveLayers.forEach(layer => {
      ctx.beginPath();
      ctx.moveTo(0, height);

      for (let x = 0; x <= width; x += 10) {
        // Mouse influence on wave shape
        let distToMouse = 0;
        if (this.mouse.x !== null) {
          const dx = x - this.mouse.x;
          distToMouse = Math.exp(- (dx * dx) / 30000) * 20;
        }

        const y = Math.sin(x * layer.frequency + wavePhase * layer.speed) * layer.amplitude + layer.offsetY - distToMouse;
        ctx.lineTo(x, y);
      }

      ctx.lineTo(width, height);
      ctx.closePath();
      ctx.fillStyle = layer.color;
      ctx.fill();
    });
  }

  drawParticles() {
    const { ctx, particles, mouse } = this;

    for (let i = 0; i < particles.length; i++) {
      const p = particles[i];

      // Move particle
      p.x += p.speedX;
      p.y += p.speedY;

      // Wrap edges
      if (p.x < 0) p.x = this.width;
      if (p.x > this.width) p.x = 0;
      if (p.y < 0) p.y = this.height;
      if (p.y > this.height) p.y = 0;

      // Mouse repulsion / interaction ("fondo movido")
      let alpha = p.baseAlpha;
      if (mouse.x !== null && mouse.y !== null) {
        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < mouse.radius) {
          const force = (mouse.radius - dist) / mouse.radius;
          const angle = Math.atan2(dy, dx);
          p.x -= Math.cos(angle) * force * 3;
          p.y -= Math.sin(angle) * force * 3;
          alpha = Math.min(1, p.baseAlpha + force * 0.8);
        }
      }

      // Draw particle dot
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fillStyle = p.color;
      ctx.globalAlpha = alpha;
      ctx.shadowBlur = 10;
      ctx.shadowColor = p.color;
      ctx.fill();
      ctx.shadowBlur = 0;
      ctx.globalAlpha = 1;

      // Draw subtle connecting constellation lines between nearby particles
      for (let j = i + 1; j < particles.length; j++) {
        const p2 = particles[j];
        const dx = p.x - p2.x;
        const dy = p.y - p2.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 120) {
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.strokeStyle = '#00e5ff';
          ctx.globalAlpha = (1 - dist / 120) * 0.15;
          ctx.lineWidth = 0.8;
          ctx.stroke();
          ctx.globalAlpha = 1;
        }
      }
    }
  }

  animate() {
    if (!this.isAnimated) return;

    this.ctx.clearRect(0, 0, this.width, this.height);
    this.wavePhase += 1;

    this.drawWaves();
    this.drawParticles();

    requestAnimationFrame(() => this.animate());
  }
}

document.addEventListener('DOMContentLoaded', () => {
  window.bgApp = new InteractiveBackground();
});
