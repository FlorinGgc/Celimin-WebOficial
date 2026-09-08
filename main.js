/**
 * CELIMIN Main Application Logic
 * Full Internationalization Engine (ES/EN), Photo Carousel, Lightbox Modal, and Animations.
 */

const i18nData = {
  es: {
    // Header & Nav
    logo_subtitle: "CENTRO DE INVESTIGACIÓN AVANZADA DEL LITIO Y MINERALES INDUSTRIALES",
    nav_home: "INICIO",
    nav_team: "SOMOS",
    nav_research: "LÍNEAS DE TRABAJO",
    nav_conference: "CONGRESO",
    nav_tour: "TOUR VIRTUAL",
    nav_consulting: "ASESORÍAS",
    nav_contact: "CONTACTO",
    lbl_bg_effect: "Efecto de Fondo:",
    btn_motion_pause: "Pausar Fondo",
    btn_motion_play: "Reanudar Fondo",

    // Committee Section
    committee_sec_sub: "Líderes Académicos y Científicos de IWLiME 2026",
    committee_sec_title: "Comités del Congreso (Committee)",

    // Program Section
    program_sec_sub: "Conferencistas Plenarios, Invitados e Industria de IWLiME 2026",
    program_sec_title: "Programa Oficial (Program)",

    // Hero Section
    conf_nav_home: "INICIO",
    conf_nav_committee: "COMITÉ",
    conf_nav_program: "PROGRAMA",
    conf_nav_posters: "POSTERS Y REGISTRO",
    conf_nav_edition: "ÚLTIMAS VERSIONES",
    conf_target_text: "Esta actividad científico-industrial está dirigida a investigadores y profesionales de la industria, academia, centros de investigación y estudiantes de posgrado.",
    conf_badge: "CONGRESO INTERNACIONAL 2026",
    conf_title_sub: "13º Congreso Internacional en Litio, Minerales Industriales y Energía",
    conf_date: "9 al 11 de Noviembre, 2026. Antofagasta, Chile",
    conf_btn: "Más Información & Registro",
    conf_venue_title: "Sede y Entorno del Congreso en Antofagasta",
    conf_img1_title: "Letras de Antofagasta",
    conf_img1_desc: "Plaza Central & Monumento Histórico",
    conf_img2_title: "Puerto y Costa de Antofagasta",
    conf_img2_desc: "Entorno Marino del Desierto de Atacama",
    conf_img3_title: "Hotel Enjoy Antofagasta (Sede)",
    conf_img3_desc: "Centro de Convenciones y Alojamiento Oficial",
    side_card_title: "Centro CELIMIN",
    side_card_text: "El Centro CELiMIN propone obtener sales de alta pureza exportadas a la industria de mercados globales.",
    projects_title: "PROYECTOS DESTACADOS DE INVESTIGACIÓN Y DESARROLLO",
    btn_explore_all: "Explorar Todos",

    // Congress Home Extra Sections
    obj_title: "El Objetivo",
    obj_p1: "El objetivo de este congreso internacional es presentar los trabajos más recientes en investigación y desarrollo en la región llamada \"triángulo del litio\" (Argentina, Bolivia y Chile) y en el mundo en temas de minerales industriales y estratégicos, con especial énfasis en el litio.",
    obj_p2: "Buscamos fortalecer y construir nuevas redes de colaboración nacionales e internacionales entre investigadores de estos 3 países junto con la industria nacional e internacional, así como investigadores de instituciones académicas más allá del triángulo del litio, promoviendo así la investigación, desarrollo e innovación en la cadena de valor del litio con una visión sustentable y sostenible.",
    topics_title: "Ejes Temáticos",
    topic_1: "1. HIDROGEOLOGÍA, AGUA Y ECOSISTEMAS DE SALARES",
    topic_2: "2. EXTRACCIÓN DIRECTA DE LITIO (EDL), PROCESAMIENTO QUÍMICO E INNOVACIÓN TECNOLÓGICA",
    topic_3: "3. MATERIALES DE BATERÍAS, MANUFACTURA Y ALMACENAMIENTO DE ENERGÍA",
    topic_4: "4. ECONOMÍA CIRCULAR Y RECICLAJE DE BATERÍAS",
    topic_5: "5. GOBERNANZA Y POLÍTICA SOCIOAMBIENTAL",
    venue_sec_title: "Sede del Evento",
    venue_place_text: "Lugar: Hotel Antofagasta salón Cobremar y terraza adyacente. Av. Balmaceda 2634, Antofagasta, Chile",
    org_title: "Organizado por",
    co_org_title: "Co-organizado por",
    sponsor_magnesium_title: "Auspiciadores Magnesium",

    // SOMOS Presentation Block
    unique_place_title: "Un lugar único en el mundo...",
    unique_place_p1: "La región de Antofagasta se ubica en la denominada zona del triángulo del litio, razón por la cual la región ha tomado la iniciativa de formar un centro de investigación en minerales industriales que incluye este recurso. Esta condición geográfica puede ser una ventaja en el desarrollo de un clúster del litio en el norte de Chile y también para la integración económica con países vecinos.",
    unique_place_p2: "En consecuencia, las principales actividades de CELIMIN son la innovación de nuevos procesos productivos, la búsqueda de nuevas aplicaciones y nuevos productos, y brindar servicio a la industria en el marco de la investigación, desarrollo e innovación (I+D+i), en el ámbito del litio y minerales industriales.",
    presentations_title: "PRESENTACIONES",
    unique_place_p3: "La segunda es una región activa productora de sales inorgánicas como nitratos, sulfatos, cloruros e hidróxidos, vinculadas a compuestos de litio, sodio y potasio, así como otros como yodo y ácido bórico. La producción de estas sales históricamente ha culminado con una importante exportación sin un valor agregado significativo.",

    // Research Areas Section
    research_sec_sub: "Excelencia Científica en Litio y Sales Industriales",
    research_sec_title: "Líneas de Investigación Avanzada",
    r1_title: "Química de Salmueras y Purificación",
    r1_desc: "Desarrollo de procesos fisicoquímicos avanzados para la extracción directa de litio (EDL) y concentración sustentable.",
    r2_title: "Sales Industriales de Alta Pureza",
    r2_desc: "Síntesis y refinamiento de sales de grado batería (Carbonato e Hidróxido de Litio) para mercados internacionales.",
    r3_title: "Almacenamiento de Energía",
    r3_desc: "Investigación aplicada en nuevos materiales catódicos, electrolitos de estado sólido y baterías de alta densidad.",
    r4_title: "Sustentabilidad Hídrica",
    r4_desc: "Modelamiento hidrogeológico y preservación de los frágiles ecosistemas de cuencas salinas en el desierto de Atacama.",

    // Virtual Tour Section
    tour_sec_sub: "Instalaciones y Equipamiento de Vanguardia",
    tour_sec_title: "Tour Virtual de Laboratorios",
    tour_title: "Explora Nuestros Laboratorios de Última Generación",
    tour_desc: "Sumérgete en un tour virtual interactivo 360° por nuestras instalaciones de pilotaje e investigación en Antofagasta.",
    btn_open_360: "Abrir Tour Virtual 360° (cdeaua.cl)",
    btn_modal_preview: "Vista Previa Modal",

    // Gallery Titles
    gallery_title: "Galería de Infraestructura y Equipamiento Real",
    g1_title: "Estación de Ensamble y Glovebox",
    g1_sub: "Laboratorio de Energía",
    g2_title: "Cámara de Atmósfera Inerte",
    g2_sub: "Síntesis de Baterías",
    g3_title: "Puestos de Análisis Fisicoquímico",
    g3_sub: "Investigación de Procesos",
    g4_title: "Laboratorio de Espectrofotometría",
    g4_sub: "Análisis Instrumental",
    g5_title: "Analizador Térmico STA 449 Jupiter",
    g5_sub: "Estudio de Procesos II",
    g6_title: "Sistema Biorreactor y Purificación Solaris",
    g6_sub: "Investigación de Procesos",
    g7_title: "Reactor Encamisado de Vidrio de Alta Presión",
    g7_sub: "Estudio de Procesos II",

    // Labs Titles
    lab1_title: "Laboratorio de Energía y Procesos Sustentables",
    lab2_title: "Laboratorio de Investigación de Procesos",
    lab3_title: "Laboratorio Instrumental",
    lab4_title: "Laboratorio de Estudio de Procesos II",

    // Advisory Section
    advisory_sec_sub: "Proyectos de Consultoría y Asistencia Técnica",
    advisory_sec_title: "Asesorías",

    // Advisory Items Objectives
    adv1_obj: "Proporcionar la descripción técnica de las tecnologías actuales de litio y otros minerales a partir de salmueras.",
    adv2_obj: "Evaluar y analizar procesos tecnológicos convencionales y nuevos procesos innovadores que reduzcan o eliminen la concentración de Boro, Sodio a partir de soluciones de relave de SX y licor madre de planta carbonato de litio.",
    adv3_obj: "Desarrollar proceso de conversión LiOH a diferentes condiciones de operación.",
    adv4_obj: "Realizar rutas de evaporación de litio a 4 salmueras a temperatura ambiente.",
    adv5_obj: "Determinar la actividad de agua en salmueras de litio, con distintos porcentajes de agua y a temperaturas específicas para cada salmuera.",
    adv6_obj: "Análisis avanzado de caracterización por Difracción de Rayos X (DRX) y Microscopía Electrónica de Barrido (SEM).",
    adv7_obj: "Dos etapas con una duración de dos meses cada etapa. Objetivo: Analizar la calidad química de los nitratos.",
    adv8_obj: "Duración: dos meses. Objetivo: Demostrar a escala laboratorio la factibilidad del proceso de tratamiento térmico para eliminación de perclorato.",
    adv9_obj: "Duración: un mes. Objetivo: Identificar los compuestos que se originan como resultado de corrosión por nitratos fundidos.",
    adv10_obj: "Etapas: 2012 (tres etapas de un mes cada una), 2013 (un mes), 2014 (un mes), 2015 (un mes). Objetivo: Realizar el control de calidad química de sales nitrato.",
    adv11_obj: "Duración: un mes. Objetivo: Determinar puntos de fusión y cristalización, calores de fusión y cristalización, capacidad calorífica en nitratos prilados.",

    // Contact Section
    contact_sec_sub: "Información y Consultas",
    contact_sec_title: "Contacto",
    contact_info_heading: "Información de contacto",
    lbl_email: "E-mail:",
    lbl_phone: "Tel.:",
    lbl_address: "Dirección:",

    // Sites of Interest
    sites_of_interest_title: "Sitios de Interés",
    sites_dept_chem: "Departamento de Ingeniería Química (UA)",
    sites_phd: "Doctorado en Ciencias de la Ingeniería, Mención Procesos de Minerales",
    sites_master: "Magíster en Ciencias de la Ingeniería, Mención Procesos de Minerales",
    sites_serc: "SERC CHILE | Centro de Investigación en Energía Solar",
    sites_columbia: "Center for Life Cycle Analysis (CLCA) - Columbia University",
    sites_belarus_tech: "Belarusian State Technological University",
    sites_belarus_chem: "Belgor Khimprom SA - Instituto de Investigación Minera",
    sites_argonne: "Argonne National Laboratory",
    sites_rist: "Research Institute of Industrial Science and Technology (RIST)",
    sites_grea: "GREA Innovació Concurrent",
    val_address: "Av. Universidad de Antofagasta 02800, Antofagasta, Antofagasta, Chile",
    contact_form_title: "Por favor ingrese su información de contacto",
    ph_name: "Nombre *",
    ph_email: "Email *",
    ph_institution: "Institución *",
    ph_telephone: "Teléfono *",
    ph_subject: "Asunto *",
    ph_message: "Mensaje *",
    btn_send: "Enviar",
    msg_sent_success: "¡Gracias por contactarnos! Su mensaje ha sido enviado exitosamente.",

    // Modal Tour
    modal_tour_heading: "Tour Virtual CELIMIN 360°",
    modal_tour_body: "Explora en 360° los laboratorios y plantas piloto de CELIMIN en la Universidad de Antofagasta.",
    btn_fullscreen_360: "Abrir en pantalla completa (cdeaua.cl)",

    // Classic Nav Buttons
    classic_btn_projects: "Proyectos",
    classic_btn_publications: "Publicaciones",
    classic_btn_infrastructure: "Infraestructura",
    classic_btn_human_capital: "Capital Humano",
    classic_btn_news: "Novedades",
    projects_tab_title: "PROYECTOS",
    publications_tab_title: "PUBLICACIONES",

    // Footer
    footer_text: "© 2026 Centro de Investigación Avanzada del Litio y Minerales Industriales (CELIMIN). Universidad de Antofagasta, Chile."
  },

  en: {
    // Header & Nav
    logo_subtitle: "CENTER FOR ADVANCED RESEARCH ON LITHIUM AND INDUSTRIAL MINERALS",
    nav_home: "HOME",
    nav_team: "ABOUT US",
    nav_research: "WORK AREAS",
    nav_conference: "CONGRESS",
    nav_tour: "VIRTUAL TOUR",
    nav_consulting: "ADVISORY",
    nav_contact: "CONTACT",
    lbl_bg_effect: "Background Effect:",
    btn_motion_pause: "Pause Motion",
    btn_motion_play: "Play Motion",

    // Committee Section
    committee_sec_sub: "Academic and Scientific Leaders of IWLiME 2026",
    committee_sec_title: "Congress Committees",

    // Program Section
    program_sec_sub: "Plenary, Guest, Industry & Emerging Speakers of IWLiME 2026",
    program_sec_title: "Official Program",

    // Hero Section
    conf_nav_home: "HOME",
    conf_nav_committee: "COMMITTEE",
    conf_nav_program: "PROGRAM",
    conf_nav_posters: "POSTERS AND REGISTRATION",
    conf_nav_edition: "LAST VERSIONS",
    conf_target_text: "This scientific-industrial activity is aimed at researchers and professionals from industry, academy, research centers and postgraduate students.",
    conf_badge: "INTERNATIONAL CONGRESS 2026",
    conf_title_sub: "13th International Congress on Lithium, Industrial Minerals and Energy",
    conf_date: "November 9th to 11th, 2026. Antofagasta, Chile",
    conf_btn: "Learn More & Register",
    conf_venue_title: "Congress Venue & Location in Antofagasta",
    conf_img1_title: "Antofagasta Landmark",
    conf_img1_desc: "Central Plaza & Historic Monument",
    conf_img2_title: "Antofagasta Harbor & Coast",
    conf_img2_desc: "Atacama Desert Marine Environment",
    conf_img3_title: "Hotel Enjoy Antofagasta (Venue)",
    conf_img3_desc: "Official Convention Center & Hotel",
    side_card_title: "CELIMIN Center",
    side_card_text: "CELiMIN Center proposes to obtain high purity salts exported to global markets industry.",
    projects_title: "FEATURED RESEARCH & DEVELOPMENT PROJECTS",
    btn_explore_all: "Explore All",

    // Congress Home Extra Sections
    obj_title: "The Objective",
    obj_p1: "The objective of this international congress is to present the most recent works in research and development in the region called \"lithium triangle\" (Argentina, Bolivia and Chile) and in the world on issues of industrial and strategic minerals, with special emphasis on lithium.",
    obj_p2: "We aim to strengthen and build new national and international collaboration networks between researchers from these 3 countries together with national and international industry, as well as researchers from academic institutions beyond the lithium triangle, in this way, promote research, development and innovation in the lithium value chain with a sustainable and supportable vision.",
    topics_title: "Topics",
    topic_1: "1. HYDROGEOLOGY, WATER AND SALT FLAT ECOSYSTEMS",
    topic_2: "2. DIRECT LITHIUM EXTRACTION (DLE), CHEMICAL PROCESSING, AND TECHNOLOGICAL INNOVATION",
    topic_3: "3. BATTERY MATERIALS, MANUFACTURING, AND ENERGY STORAGE",
    topic_4: "4. CIRCULAR ECONOMY, AND BATTERY RECYCLING",
    topic_5: "5. GOVERNANCE AND SOCIO-ENVIRONMENTAL POLICY",
    venue_sec_title: "Event place",
    venue_place_text: "Place Hotel Antofagasta salón Cobremar y terraza adyacente. Av. Balmaceda 2634, Antofagasta, Chile",
    org_title: "Organized by",
    co_org_title: "Co-organized by",
    sponsor_magnesium_title: "Magnesium Sponsor",

    // SOMOS Presentation Block
    unique_place_title: "A unique place in the world...",
    unique_place_p1: "Antofagasta region is located in the so called lithium triangle zone, reason why the region has take the initiative to form a research center for industrial minerals that includes this resource. This geographical condition can be an advantage in the development of a lithium cluster in the north of Chile and also for economic integration with neighbor countries.",
    unique_place_p2: "Consequently, the main activities of CELiMIN is the innovation of new production processes, finding new applications and new products, and provide service to the industry as part of the research, development and innovation (R + D + i), in the field of lithium and industrial minerals.",
    presentations_title: "PRESENTATIONS",
    unique_place_p3: "The second is an active region producing inorganic salts such as nitrates, sulfates, chlorides and hydroxides, linked to compounds of lithium, sodium and potassium, as well as other iodine and boric acid. The production of these salts has historically culminate with a major export without significant added value.",

    // Research Areas Section
    research_sec_sub: "Scientific Excellence in Lithium and Industrial Salts",
    research_sec_title: "Advanced Research Areas",
    r1_title: "Brine Chemistry & Extraction",
    r1_desc: "Development of advanced physicochemical processes for direct lithium extraction (DLE) and sustainable concentration.",
    r2_title: "High Purity Mineral Salts",
    r2_desc: "Synthesis and refinement of battery-grade salts (Lithium Carbonate & Hydroxide) for global technology markets.",
    r3_title: "Energy Storage Systems",
    r3_desc: "Applied research on new cathode materials, solid-state electrolytes, and high-energy density battery cells.",
    r4_title: "Water & Environmental Sustainability",
    r4_desc: "Hydrogeological modeling and ecosystem preservation of delicate salt flat basins in the Atacama Desert.",

    // Virtual Tour Section
    tour_sec_sub: "Cutting-Edge Facilities & Equipment",
    tour_sec_title: "Virtual Laboratory Tour",
    tour_title: "Explore Our Cutting-Edge Laboratories",
    tour_desc: "Immerse yourself in a 360° virtual tour through our pilot plants and scientific research facilities in Antofagasta.",
    btn_open_360: "Open 360° Virtual Tour (cdeaua.cl)",
    btn_modal_preview: "Modal Preview",

    // Gallery Titles
    gallery_title: "Real Infrastructure & Equipment Photo Gallery",
    g1_title: "Glovebox & Cell Assembly Station",
    g1_sub: "Energy Laboratory",
    g2_title: "Sealed Inert Atmosphere Chamber",
    g2_sub: "Battery Synthesis",
    g3_title: "Physicochemical Analysis Workstations",
    g3_sub: "Process Research",
    g4_title: "Spectrophotometry Laboratory",
    g4_sub: "Instrumental Analysis",
    g5_title: "STA 449 Jupiter Thermal Analyzer",
    g5_sub: "Process Study II",
    g6_title: "Solaris Bioreactor & Purification System",
    g6_sub: "Process Research",
    g7_title: "High Pressure Jacketed Glass Reactor",
    g7_sub: "Process Study II",

    // Labs Titles
    lab1_title: "Laboratory of Energy and Sustainable Processes",
    lab2_title: "Process Research Laboratory",
    lab3_title: "Instrumental Laboratory",
    lab4_title: "Process Study Laboratory II",

    // Advisory Section
    advisory_sec_sub: "Technical Consulting & Advisory Projects",
    advisory_sec_title: "Advisory Projects",

    // Advisory Items Objectives
    adv1_obj: "Provide technical description of current lithium and other mineral extraction technologies from brines.",
    adv2_obj: "Evaluate and analyze conventional and innovative technology processes to reduce or eliminate Boron and Sodium concentration from SX tailing solutions and lithium carbonate plant mother liquor.",
    adv3_obj: "Develop LiOH conversion process under different operating conditions.",
    adv4_obj: "Perform lithium evaporation routes on 4 brines at ambient temperature.",
    adv5_obj: "Determine water activity in lithium brines with varying water percentages and at specific temperatures for each brine.",
    adv6_obj: "Advanced characterization analysis using X-Ray Diffraction (XRD) and Scanning Electron Microscopy (SEM).",
    adv7_obj: "Two phases lasting two months each. Objective: Analyze the chemical quality of nitrates used for thermal storage.",
    adv8_obj: "Duration: two months. Objective: Demonstrate laboratory-scale feasibility of thermal treatment process for perchlorate removal.",
    adv9_obj: "Duration: one month. Objective: Identify compounds originating from molten nitrate corrosion on coil parts.",
    adv10_obj: "Phases: 2012 (three 1-month phases), 2013 (1 month), 2014 (1 month), 2015 (1 month). Objective: Perform chemical quality control of nitrate salts.",
    adv11_obj: "Duration: one month. Objective: Determine melting/crystallization points, heat of fusion/crystallization, and heat capacity in prilled nitrates.",

    // Contact Section
    contact_sec_sub: "Information & Inquiries",
    contact_sec_title: "Contact Us",
    contact_info_heading: "Contact Information",
    lbl_email: "E-mail:",
    lbl_phone: "Phone:",
    lbl_address: "Address:",

    // Sites of Interest
    sites_of_interest_title: "Sites of Interest",
    sites_dept_chem: "Department of Chemical Engineering (UA)",
    sites_phd: "PhD in Engineering Science, Major Mineral Processes",
    sites_master: "Master in Engineering Science, Major Mineral Processes",
    sites_serc: "SERC CHILE | Solar Energy Research Center",
    sites_columbia: "Center for Life Cycle Analysis (CLCA) at Columbia University",
    sites_belarus_tech: "Belarusian State Technological University",
    sites_belarus_chem: "Belgor Khimprom SA - Mining Research Institute",
    sites_argonne: "Argonne National Laboratory",
    sites_rist: "Research Institute of Industrial Science and Technology (RIST)",
    sites_grea: "GREA Innovació Concurrent",
    val_address: "Av. Universidad de Antofagasta 02800, Antofagasta, Antofagasta, Chile",
    contact_form_title: "Please enter your contact information",
    ph_name: "Name *",
    ph_email: "Email *",
    ph_institution: "Institution *",
    ph_telephone: "Telephone *",
    ph_subject: "Subject *",
    ph_message: "Message *",
    btn_send: "Send",
    msg_sent_success: "Thank you for contacting us! Your message has been sent successfully.",

    // Modal Tour
    modal_tour_heading: "CELIMIN Virtual Tour 360°",
    modal_tour_body: "Explore CELIMIN laboratories and pilot plants in 360° at the University of Antofagasta.",
    btn_fullscreen_360: "Open fullscreen (cdeaua.cl)",

    // Classic Nav Buttons
    classic_btn_projects: "Projects",
    classic_btn_publications: "Publications",
    classic_btn_infrastructure: "Infrastructure",
    classic_btn_human_capital: "Human Capital",
    classic_btn_news: "News",
    projects_tab_title: "PROJECTS",
    publications_tab_title: "PUBLICATIONS",

    // Footer
    footer_text: "© 2026 Center for Advanced Research on Lithium and Industrial Minerals (CELIMIN). University of Antofagasta, Chile."
  }
};

class AppController {
  constructor() {
    this.currentLang = localStorage.getItem('celimin_lang') || 'es';
    this.currentSlide = 0;
    this.totalSlides = 7;
    
    this.initLanguage();
    this.bindEvents();
    this.initCarousel();
    this.initCardTilt();
    this.initTabNavigation();
  }

  initLanguage() {
    this.setLanguage(this.currentLang);
  }

  setLanguage(lang) {
    this.currentLang = lang;
    localStorage.setItem('celimin_lang', lang);

    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.lang === lang);
    });

    const dict = i18nData[lang];
    if (!dict) return;

    // Plain text replacement
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.dataset.i18n;
      if (dict[key]) {
        el.textContent = dict[key];
      }
    });

    // HTML replacement
    document.querySelectorAll('[data-i18n-html]').forEach(el => {
      const key = el.dataset.i18nHtml;
      if (dict[key]) {
        el.innerHTML = dict[key];
      }
    });

    // Image src replacement
    document.querySelectorAll('[data-en-src][data-es-src]').forEach(img => {
      const newSrc = img.getAttribute(`data-${lang}-src`);
      if (newSrc) img.src = newSrc;
    });

    // Input placeholders
    document.querySelectorAll('[data-i18n-ph]').forEach(el => {
      const key = el.dataset.i18nPh;
      if (dict[key]) {
        el.setAttribute('placeholder', dict[key]);
      }
    });

    // Refresh Lightbox text if open
    this.updateLightboxCaption();
  }

  initCarousel() {
    const prevBtn = document.getElementById('carousel-prev');
    const nextBtn = document.getElementById('carousel-next');
    const thumbs = document.querySelectorAll('.carousel-thumb');
    const slides = document.querySelectorAll('.carousel-slide');

    if (prevBtn) {
      prevBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        this.changeSlide(this.currentSlide - 1);
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        this.changeSlide(this.currentSlide + 1);
      });
    }

    thumbs.forEach(thumb => {
      thumb.addEventListener('click', () => {
        const idx = parseInt(thumb.dataset.index);
        this.changeSlide(idx);
      });
    });

    // Slide click opens Lightbox Modal
    slides.forEach(slide => {
      slide.addEventListener('click', () => {
        this.openLightbox(this.currentSlide);
      });
    });

    // Lightbox Controls
    const lbModal = document.getElementById('lightbox-modal');
    const lbClose = document.getElementById('lightbox-close');
    const lbPrev = document.getElementById('lightbox-prev');
    const lbNext = document.getElementById('lightbox-next');

    if (lbClose && lbModal) {
      lbClose.addEventListener('click', () => this.closeLightbox());
      lbModal.addEventListener('click', (e) => {
        if (e.target === lbModal) this.closeLightbox();
      });
    }

    if (lbPrev) lbPrev.addEventListener('click', () => this.changeSlide(this.currentSlide - 1));
    if (lbNext) lbNext.addEventListener('click', () => this.changeSlide(this.currentSlide + 1));

    // Keyboard navigation
    window.addEventListener('keydown', (e) => {
      if (lbModal && lbModal.classList.contains('active')) {
        if (e.key === 'ArrowLeft') this.changeSlide(this.currentSlide - 1);
        if (e.key === 'ArrowRight') this.changeSlide(this.currentSlide + 1);
        if (e.key === 'Escape') this.closeLightbox();
      }
    });
  }

  changeSlide(newIdx) {
    if (newIdx < 0) newIdx = this.totalSlides - 1;
    if (newIdx >= this.totalSlides) newIdx = 0;

    this.currentSlide = newIdx;

    const slides = document.querySelectorAll('.carousel-slide');
    const thumbs = document.querySelectorAll('.carousel-thumb');

    slides.forEach((s, idx) => s.classList.toggle('active', idx === newIdx));
    thumbs.forEach((t, idx) => t.classList.toggle('active', idx === newIdx));

    this.updateLightboxCaption();
  }

  openLightbox(idx) {
    const lbModal = document.getElementById('lightbox-modal');
    if (lbModal) {
      this.changeSlide(idx);
      lbModal.classList.add('active');
    }
  }

  closeLightbox() {
    const lbModal = document.getElementById('lightbox-modal');
    if (lbModal) lbModal.classList.remove('active');
  }

  updateLightboxCaption() {
    const lbImg = document.getElementById('lightbox-img');
    const lbTitle = document.getElementById('lightbox-title');
    const lbCounter = document.getElementById('lightbox-counter');

    if (!lbImg) return;

    const currentSlideEl = document.querySelector(`.carousel-slide[data-index="${this.currentSlide}"] img`);
    if (currentSlideEl) {
      lbImg.src = currentSlideEl.src;
    }

    const dict = i18nData[this.currentLang];
    const titleKey = `g${this.currentSlide + 1}_title`;
    if (dict && dict[titleKey] && lbTitle) {
      lbTitle.textContent = dict[titleKey];
    }

    if (lbCounter) {
      lbCounter.textContent = `${this.currentSlide + 1} / ${this.totalSlides}`;
    }
  }

  bindEvents() {
    // Language Switcher buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        this.setLanguage(btn.dataset.lang);
      });
    });

    // Modal Tour interactions
    const tourBtns = document.querySelectorAll('.trigger-tour-modal');
    const modal = document.getElementById('tour-modal');
    const closeBtn = document.getElementById('modal-close-btn');

    tourBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        if (modal) modal.classList.add('active');
      });
    });

    if (closeBtn && modal) {
      closeBtn.addEventListener('click', () => {
        modal.classList.remove('active');
      });
      modal.addEventListener('click', (e) => {
        if (e.target === modal) modal.classList.remove('active');
      });
    }

    // Register Modal interactions
    const regBtns = document.querySelectorAll('.trigger-register-modal');
    const regModal = document.getElementById('register-modal');
    const regCloseBtn = document.getElementById('register-close-btn');

    regBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        if (regModal) regModal.classList.add('active');
      });
    });

    if (regCloseBtn && regModal) {
      regCloseBtn.addEventListener('click', () => {
        regModal.classList.remove('active');
      });
      regModal.addEventListener('click', (e) => {
        if (e.target === regModal) regModal.classList.remove('active');
      });
    }

    // Registration form submission handler
    const regForm = document.getElementById('iwlime-registration-form');
    if (regForm) {
      regForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert("Registration form submitted successfully!");
        regForm.reset();
        if (regModal) regModal.classList.remove('active');
      });
    }



    // Contact Form Submit Handler
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
      contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const dict = i18nData[this.currentLang];
        alert(dict.msg_sent_success || "Message sent!");
        contactForm.reset();
      });
    }

    // Classic sidebar tab navigation
    document.querySelectorAll('.classic-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const targetId = btn.getAttribute('data-target');
        if (targetId) {
          e.preventDefault();
          document.querySelectorAll('.classic-tab-content').forEach(tab => {
            tab.style.display = 'none';
          });
          const targetTab = document.getElementById(targetId);
          if (targetTab) {
            targetTab.style.display = 'block';
          }
        }
      });
    });
  }

  initTabNavigation() {
    const tabSections = document.querySelectorAll('.tab-section');
    if (!tabSections.length) return;

    const switchTab = (targetId, updateHash = true) => {
      let id = targetId ? targetId.replace('#', '') : 'home';
      let targetSection = document.getElementById(id);

      if (!targetSection) {
        id = 'home';
        targetSection = document.getElementById(id);
      }

      tabSections.forEach(section => {
        if (section.id === id) {
          section.classList.add('active-tab');
        } else {
          section.classList.remove('active-tab');
        }
      });

      // Update Nav links in header
      document.querySelectorAll('.main-nav .nav-link').forEach(link => {
        const href = link.getAttribute('href');
        link.classList.toggle('active', href === `#${id}`);
      });

      // Update sub-nav links in Congress section
      document.querySelectorAll('.conference-nav-bar .conf-nav-btn').forEach(btn => {
        const href = btn.getAttribute('href');
        btn.classList.toggle('active', href === `#${id}`);
      });

      if (updateHash && history.pushState) {
        history.pushState(null, null, `#${id}`);
      }

    };

    document.body.addEventListener('click', (e) => {
      const anchor = e.target.closest('a[href^="#"]');
      if (anchor) {
        const href = anchor.getAttribute('href');
        const targetId = href.replace('#', '');
        const targetElement = document.getElementById(targetId);
        
        // Handle conference sub-tabs
        if (anchor.classList.contains('conf-nav-btn')) {
          e.preventDefault();
          
          // Update active button
          document.querySelectorAll('.conference-nav-bar .conf-nav-btn').forEach(btn => btn.classList.remove('active'));
          anchor.classList.add('active');
          
          // Show target sub-section
          document.querySelectorAll('.conf-sub-section').forEach(sec => sec.style.display = 'none');
          if (targetElement) {
            targetElement.style.display = 'block';
          }
          return;
        }

        // Only trigger the main tab switch if the target exists and is a main tab section
        if (href && href !== '#' && targetElement && targetElement.classList.contains('tab-section')) {
          e.preventDefault();
          switchTab(href);
        } else if (href === '#') {
          e.preventDefault();
          switchTab('#home');
        }
      }
    });

    window.addEventListener('popstate', () => {
      switchTab(window.location.hash || '#home', false);
    });

    const initialHash = window.location.hash || '#home';
    switchTab(initialHash, false);
  }

  initCardTilt() {
    // 3D tilt effect removed per user request to keep elements static.
  }
}

document.addEventListener('DOMContentLoaded', () => {
  window.appInstance = new AppController();

  // Quienes Somos Carousel Logic
  const track = document.querySelector('.qs-carousel-track');
  if (track) {
    let currentIndex = 0;
    const slidesCount = track.children.length;
    setInterval(() => {
      currentIndex = (currentIndex + 1) % slidesCount;
      track.style.transform = `translateX(-${currentIndex * 100}%)`;
    }, 4000);
  }

  // Congress Venue Carousel Logic
  const venueTrack = document.querySelector('.venue-carousel-track');
  const venuePrev = document.getElementById('venue-prev-btn');
  const venueNext = document.getElementById('venue-next-btn');
  if (venueTrack && venuePrev && venueNext) {
    let venueIndex = 0;
    const venueSlidesCount = venueTrack.children.length;

    const updateVenueSlide = () => {
      venueTrack.style.transform = `translateX(-${venueIndex * 100}%)`;
    };

    venuePrev.addEventListener('click', () => {
      venueIndex = (venueIndex - 1 + venueSlidesCount) % venueSlidesCount;
      updateVenueSlide();
    });

    venueNext.addEventListener('click', () => {
      venueIndex = (venueIndex + 1) % venueSlidesCount;
      updateVenueSlide();
    });
  }

  // --- Supabase Contact Form Integration ---
  const supabaseUrl = 'https://vwokjlewqebmborevnfo.supabase.co'; // URL configurada
  const supabaseKey = 'sb_publishable_xq6FTB2rw-D4OL9wA4kWeQ_-9ILOs-l'; // Clave anon/public configurada
  
  if (typeof supabase !== 'undefined') {
    const supabaseClient = supabase.createClient(supabaseUrl, supabaseKey);
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
      contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const submitBtn = contactForm.querySelector('.btn-submit');
        const originalBtnText = submitBtn.innerText;
        submitBtn.innerText = 'Enviando...';
        submitBtn.disabled = true;

        const name = document.getElementById('contact-name').value;
        const email = document.getElementById('contact-email').value;
        const institution = document.getElementById('contact-institution').value;
        const phone = document.getElementById('contact-phone').value;
        const subject = document.getElementById('contact-subject').value;
        const message = document.getElementById('contact-message').value;

        const { data, error } = await supabaseClient
          .from('contact_messages') // ASEGURARSE DE QUE LA TABLA SE LLAME ASÍ
          .insert([{ name, email, institution, phone, subject, message }]);

        if (error) {
          console.error('Error insertando mensaje:', error);
          alert('Hubo un error al enviar el mensaje: ' + error.message);
        } else {
          alert('¡Mensaje enviado exitosamente!');
          contactForm.reset();
        }
        
        submitBtn.innerText = originalBtnText;
        submitBtn.disabled = false;
      });
    }
  }
});
