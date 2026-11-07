/**
 * CELIMIN Main Application Logic
 * Full Internationalization Engine (ES/EN), Photo Carousel, Lightbox Modal, and Animations.
 */

const i18nData = {
  es: {
    // Header & Nav
    logo_subtitle: "CENTRO DE INVESTIGACIÓN AVANZADA DEL LITIO Y MINERALES INDUSTRIALES",
    nav_home: "INICIO",
    nav_team: "SOMOS / ABOUT US",
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
    conf_posters_title: "Directrices y Registro",
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
    sponsor_main_title: "Main Sponsor",
    sponsor_co_title: "Co-Sponsored by",
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
    project_item_1: "Proyecto: Fondecyt Postdoctoral ID 32969 Título: DESARROLLO DE TAMICES DE Li₂TiO₃ DOPADOS CON VANADIO Y/O MAGNESIO UTILIZANDO ESTRATEGIAS COMBINADAS DE DOPAJE Y DISTRIBUCIÓN CONTROLADA DE TAMAÑO DE PARTÍCULA NANOMÉTRICA",
    project_item_2: "Prototipo de un Reactor Electroquímico para la Purificación de Salmueras de Litio mediante la Remoción de Mg y Ca. CONCURSO INNOVADORES UA. 2024–2025",
    project_item_3: "Innovación tecnológica para el reciclaje sostenible de baterías de ion-litio: recuperación de materiales críticos para la seguridad de la transición energética (RecLIBs). ATE240011. 2024–2027.",
    project_item_4: "Síntesis de un Nuevo Material de Extracción Directa de Litio basado en LADH dopado con Titanio para Superar Obstáculos Técnicos y Ambientales en la Minería de Litio, Fondecyt Iniciación N° 11250700. 2025–2028",
    project_item_5: "Proyecto: ‘Escalamiento y optimización del proceso de producción de LiOH grado batería a partir de salmueras del Salar de Atacama mediante procesos de electromembrana’, Fondef ID 24I10368, ANID DE N° 331, 24/5/2024. 2024–2026",
    project_item_6: "Desarrollo de nuevos fluidos de transferencia de calor como suspensiones de cambio de fase mejoradas con nanopartículas de Janus para aplicaciones solares. Proyecto Fondecyt Regular N° 1231721. 2023–2025",
    project_item_7: "Estudio y desarrollo de electrodos basados en paladio para la electrocatálisis de H₂ verde en un proceso de electrólisis con membrana de intercambio aniónico (AEM) y evaluación de su desempeño en un medio alcalino. ANID/FONDECYT POSTDOCTORAL 2023. 2023–2025",
    project_item_8: "Plataforma para la producción de materiales avanzados sostenibles y la fabricación de baterías de litio. CELiMIN-SQM. 2022–2026",
    project_item_9: "Intercambio y Cooperación Científica 2022 entre el Instituto de Conversión de Energía de Guangzhou (China) y CELiMIN (Chile). Proyecto número G2022030062L.",
    project_item_10: "Desarrollo colaborativo de tecnologías de refrigeración renovables/accionadas térmicamente e integradas con almacenamiento. H2020-MSCA-RISE-2020 Nº101007976. 2021-2024.",
    project_item_11: "Climatización y agua caliente sanitaria de viviendas mediante la utilización de la tecnología de materiales de cambio de fase y su introducción en el mercado de la construcción. CORFO. 2021-2022",
    project_item_12: "Metal Organic Frameworks como materiales de electrodo para baterías recargables. Fondecyt Postdoctoral N° 3180199, 2018-2020",
    project_item_13: "Desarrollo de nuevos materiales nanoestructurados de alto rendimiento para baterías de ion litio dopados con elementos obtenidos de materiales de desecho del Salar de Atacama y otros minerales industriales. Fondecyt Regular N° 1191347, 2019-2022",
    project_item_14: "Materiales de bajo costo para sistemas de almacenamiento de energía térmica (Fondecyt Regular N° 1170675, 2017-2020)",
    project_item_15: "Cooperación internacional entre CELiMIN e INSPIRES y desarrollo de nuevas aplicaciones para el litio y otros minerales industriales del norte de Chile como materiales de almacenamiento de energía solar mediante el fortalecimiento de la formación de capital humano, CONICYT/PCI/REDES 170131, 2018-2019",
    project_item_16: "Almacenamiento de Energía Térmica con Materiales de Cambio de Fase para Aplicaciones de Calefacción y Refrigeración Solar: Un análisis de viabilidad tecnológica (PCMSOL) (ERANeT-LAC, ELAC2015/T06-0988, 2017-2019).",
    project_item_17: "Desarrollo de materiales de alta densidad energética basados en litio para el almacenamiento de energía solar (Fondef ID16I10159, 2017-2018).",
    project_item_18: "Desarrollo de una aplicación comercial de una batería litio-aire para generación autónoma y modular de 1kW de potencia. Contrato Tecnológico, CORFO 15COTE-46275. 2015-2016, adjudicado año 2015. Investigación aplicada.",
    project_item_19: "Obtención de energía ERNC a través de nueva tecnología en la generación de Hidrógeno utilizando litio metálico, Validación y Empaquetamiento de Innovaciones, del Programa de Innovación Tecnológica Empresarial, CORFO. 15ITE-46323, adjudicado año 2015. Investigación aplicada.",
    project_item_20: "Diseño y Construcción de un Módulo Energético, Compuesto por Baterías de Litio y Paneles Fotovoltaicos, para Almacenamiento y Uso en Purificación de Agua (FIC 2013-2015).",
    project_item_21: "Centro de Investigación de Energía Solar – SERC Chile. (FONDAP 2011-2016, 2017-2021).",
    project_item_22: "Fortalecimiento de la Universidad de Antofagasta como referente Regional y Nacional en Energías Renovables. (Convenios de Desempeño 2012, MINEDUC 2013-2015).",
    project_item_23: "Procesamiento de Salmueras de Litio mediante Cristalización y Electrodiálisis FONDECYT 1120192 (2012-2014).",
    project_item_24: "Sales chilenas como materiales de cambio de fase para almacenamiento de energía térmica en viviendas. Fondecyt 1120422. (2012-2014).",
    project_item_25: "Uso de sales existentes en el norte de Chile como energía alternativa no convencional. Proyecto FIC Regional Arica Parinacota 2011-2012.",
    publications_tab_title: "PUBLICACIONES",

    // Team Members
    team_our_team: "NUESTRO EQUIPO",
    team_director: "Director de Celimin",
    team_inv_princ: "Investigador Principal",
    team_inv_asoc: "Investigador Asociado",
    team_mario_area: "Procesos de Litio y Materiales Avanzados para Baterías de Litio",
    team_mario_deg1: "Ingeniero Civil Metalúrgico",
    team_mario_deg2: "Doctor en Ciencias de la Ingeniería<br>Mención en Ciencias de los Materiales",
    team_svetlana_area: "Almacenamiento de Energía Térmica",
    team_svetlana_deg1: "INGENIERO CIVIL METALÚRGICO",
    team_paula_area: "Materiales Nanoestructurados en Almacenamiento Energético y Extracción Directa de Litio (EDL)",
    team_paula_deg1: "QUÍMICO EN METALURGIA EXTRACTIVA",
    team_alonso_area: "Procesos y Electrodiálisis",
    team_alonso_deg1: "INGENIERO CIVIL QUÍMICO",
    team_marcelo_area: "Cátodos y Manufactura en Baterías de Ion Litio",
    team_marcelo_deg1: "LICENCIATURA EN FÍSICA",
    team_adrian_area: "Procesos y Electrólisis",
    team_adrian_deg1: "INGENIERO QUÍMICO",
    team_kumaresan_area: "Materiales Catódicos Avanzados y Sostenibles para Baterías de Ion Litio",
    team_kumaresan_deg1: "LICENCIATURA EN QUÍMICA",
    team_sagar_area: "Síntesis de Materiales a partir del Reciclaje de Baterías de Ion Litio",
    team_sagar_deg1: "MAESTRÍA EN FÍSICA",
    team_assoc_team: "EQUIPO ASOCIADO",
    team_romeo_area: "Sistemas de Gestión de Baterías y Automatización de Sistemas Solares",
    team_romeo_deg1: "INGENIERO ELECTRÓNICO Y DE COMUNICACIONES",
    team_romeo_deg2: "Doctor en Ingeniería Eléctrica",
    team_group_members: "MIEMBROS DE GRUPO",
    team_phd_chem: "Doctor en Química",
    team_phd_phys: "Doctor en Física",
    team_phd_min_proc: "Doctor en Ingeniería de Procesos de Minerales",
    team_sec_sub: "Conoce a Nuestro Equipo",
    team_sec_title: "Investigadores y Especialistas",
    team_inv_celimin: "Investigador CELIMIN",
    team_nicolas_area: "Procesos de Membrana para la recuperación de agua y compuestos valiosos a partir de salmueras de litio",
    team_luis_area: "Baterías de Ion Litio",
    team_luis_deg1: "INGENIERO CIVIL EN PROCESOS DE MINERALES",
    team_phd_c_min_proc: "Doctor (c) en Ing. de Procesos de Minerales",
    team_sergio_area: "Pilotaje en Sistemas de Almacenamiento de Energía Térmica y Extracción Directa de Litio (EDL)",
    team_phd_stu_min_proc: "Doctor (estudiante) en Ing. de Procesos de Minerales",
    team_evgeniya_area: "Síntesis de Materiales",
    team_evgeniya_deg1: "MAESTRÍA EN QUÍMICA",
    team_phd_chem_sci: "Doctor en Ciencias Químicas",
    team_inv_postdoc: "Investigador Postdoctoral",
    team_javier_area: "Evaluación de los cambios microestructurales en materiales catódicos de baterías Li-ion por microscopía electrónica avanzada",
    team_javier_deg1: "LICENCIADO EN FÍSICA APLICADA",
    team_phd_sci_phys: "Doctor en Ciencias, Mención Física",
    team_chem_ind: "QUÍMICO INDUSTRIAL",
    team_maura_area_fixed: "Sistemas de Almacenamiento de Energía Térmica",


    // Footer
        // Publications Section
    pub_isi_header: "Publicaciones ISI Indexadas:",
    pub_scopus_header: "SCOPUS:",
    pub_books_header: "Libros:",
    pub_isi_1: "Desarrollo y análisis de un proceso preliminar de electrodiálisis para la purificación de soluciones complejas de litio para la producción de Li₂CO₃ y LiOH. Gonzalez A., Choque G., Grágeda M., Ushak S. Membranes 2025",
    pub_isi_2: "Caracterización de la placa de yeso COMFORTBOARD para almacenamiento de energía térmica en edificaciones (2024). Paula E. Marín, Svetlana Ushak, Alvaro de Gracia, Luisa F. Cabeza. Journal of Energy Storage, 77 (2024), 109850",
    pub_isi_3: "Efecto de hoyuelos elípticos en el rendimiento de transferencia de calor en un intercambiador de calor de carcasa y tubos (2023). SAA Mehrjardi, A Khademi, Z Said, S Ushak, AJ Chamkha. Heat and Mass Transfer, 1-11, 2023",
    pub_isi_4: "Análisis de ciclo de vida de una síntesis solvotermal verde de nanoplacas de LFP para LIBs mejoradas en Chile (2023). P Cofré, ML Viton, S Ushak, M Grágeda. Nanomaterials 13 (9), 1486, 2023",
    pub_isi_5: "Estudio comparativo del comportamiento de fusión de material de cambio de fase con contacto directo con fluidos e inclinación del contenedor (2023). A Khademi, SAA Mehrjardi, Z Said, R Saidur, S Ushak, AJ Chamkha. Energy Nexus, 100196",
    pub_isi_6: "Modelamiento y validación de un proceso de producción de LiOH mediante electrodiálisis con membrana bipolar a partir de LiCl concentrado (2023). A González, M Grágeda, S Ushak. Membranes",
    pub_isi_7: "Evaluación del ciclo de vida de la inclusión de materiales de cambio de fase en construcciones ligeras (2022). Mariela Vega, Noelia Llantoy, Marta Chafer, Svetlana Ushak, Luisa F. Cabeza. Journal of Energy Storage",
    pub_isi_8: "Suspensiones de cambio de fase para refrigeración y almacenamiento: una visión general de tendencias y brechas de investigación (2022). Borri, E.; Hua, N.; Sciacovelli, A.; Wu, D.; Ding, Y.; Li, Y.; Brancato, V.; Zhang, Y.; Frazzica, A.; Li, W.; et al. Energies",
    pub_isi_9: "Aplicación de nanofluidos en la mejora del rendimiento de intercambiadores de calor de doble tubo: una revisión crítica (2022). Louis, S.P.; Ushak, S.; Milian, Y.; Nems, M.; Nems, A. Materials",
    pub_isi_10: "Breve revisión sobre diferentes métodos híbridos de mejora en sistemas de almacenamiento de calor latente (2022). Alireza Khademi, Kyle Shank, Seyed Ali Abtahi Mehrjardi, Saeed Tiari, Giancarlo Sorrentino, Zafar Saide, Ali J. Chamkha, Svetlana Ushak. Journal of Energy Storage",
    pub_isi_11: "Proceso de fusión de varios materiales de cambio de fase en presencia de fluido auxiliar con temperatura de pared sinusoidal (2022). S. Abtahi, A. Khademi, S. Ushak, S. Alotaibi. Journal of Energy Storage",
    pub_isi_12: "Uso potencial de residuos industriales de magnesio para la síntesis de nanopartículas de LiMn₂O₄ co-dopadas con Li y Mg como material catódico para baterías de ion-litio: efecto de la temperatura de sinterización (2022). Llusco A., Rojas L., Ushak S., Grageda M. Nano Research",
    pub_isi_13: "Caracterización de materiales de cambio de fase comerciales con potencial aplicación en placas de yeso para edificaciones (2022). Marin, P.E.; Ushak, S.; De Gracia, A.; Cabeza, L.F. International Journal of Energy Research",
    pub_isi_14: "Influencia de monómeros y solventes en la síntesis directa sol-gel de materiales de cambio de fase con forma estabilizada con LiNO₃ (2021). Milian Y., Ushak S. Materials Chemistry and Physics",
    pub_isi_15: "Compuestos de litio para almacenamiento termoquímico de energía: revisión del estado del arte y tendencias futuras (2021). P.E. Marín, Y. Milian, S. Ushak, L.F. Cabeza, M. Grágeda, G.S.F. Shire. Renewable and Sustainable Energy Reviews",
    pub_isi_16: "Aplicación y análisis de la electrodiálisis con membrana bipolar para la producción de LiOH a altas concentraciones de electrolito: alcance actual y desafíos (2021). Alonso González, Mario Grágeda, Adrián Quispe, Svetlana Ushak, Philippe Sistat, Marc Cretin. Membranes",
    pub_isi_17: "Aplicación de almacenamiento térmico en la refrigeración nocturna de un edificio institucional (2021). Batlles, F.J., Gil, B.; Grageda, M.; Kasperski, J.; Lujan, M.; Maldonado, D.; Nems, M.; Nems, A.; Puertas, A.M.; Romero-Cano, M.S.; Rosiek; Ushak, S. Solar Energy",
    pub_isi_18: "Desarrollo de materiales inorgánicos compuestos de cambio de fase para la gestión térmica pasiva de baterías de ion-litio: aplicación (2021). Yana Galazutdinova, Said Al‐Hallaj, Mohammed Farid, Mario Grágeda, Svetlana Ushak. Journal of Power Source",
    pub_isi_19: "Diseño de materiales de cambio de fase basados en sales hidratadas para almacenamiento de energía térmica en el rango de 4 a 40 °C (2020). Lovera-Copa, J.A.; Ushak, S.; Reinaga, N.; Villalobos, I.; Martinez, F.R. Journal of Thermal Analysis and Calorimetry",
    pub_isi_20: "Avances en el uso de nanopartículas en sales hidratadas como material de cambio de fase (2020). Wong-Pinto, L.S.; Milian, Y.; Ushak, S. Renewable & Sustainable Energy Reviews.",
    pub_isi_21: "Desarrollo de nuevos materiales inorgánicos de cambio de fase con forma estabilizada con sales de LiNO₃ y LiCl mediante método sol-gel (2020). Milian, Y.E.; Reinaga, N.; Grageda, M.; Ushak, S. Journal of Sol-Gel Science and Technology.",
    pub_isi_22: "Diseño de ruta de síntesis para materiales inorgánicos de cambio de fase con forma estabilizada: proceso directo sol-gel versus método de impregnación al vacío (2020). Milian, Y.E.; Ushak, S. Journal of Sol-Gel Science and Technology.",
    pub_isi_23: "Modelamiento termodinámico y verificación experimental de nuevas mezclas de sales eutécticas como materiales de almacenamiento de energía térmica (2020). Ushak, S.; Vega, M.; Lovera-Copa, J.A.; Pablo, S.; Lujan, M.; Grageda, M. Solar Energy Materials and Solar Cells",
    pub_isi_24: "Avances en el desarrollo de materiales de almacenamiento de calor latente basados en sales inorgánicas de litio (2020). Milian, Y.E.; Ushak, S.; Cabeza, L.F.; Grageda, M. Solar Energy Materials and Solar Cells.",
    pub_isi_25: "Desarrollo de materiales inorgánicos compuestos de cambio de fase para la gestión térmica pasiva de baterías de ion-litio: caracterización de materiales (2020). Galazutdinova, Y.; Al-Hallaj, S.; Grageda, M.; Ushak, S. International Journal of Energy Research",
    pub_isi_26: "Residuos industriales de carnalita para aplicación en almacenamiento termoquímico de energía (2020). Mamani, V.; Gutierrez, A.; Fernandez, A.I.; Ushak, S. Applied Energy.",
    pub_isi_27: "Análisis de un proceso de producción de hidróxido de litio grado batería mediante electrodiálisis de membrana (2020). Grageda, M.; Gonzalez, A.; Quispe, A.; Ushak, S. Membranes.",
    pub_isi_28: "Evaluación del comportamiento corrosivo de materiales de cambio de fase comerciales en el rango de temperatura de 21 a 25 °C (2020). Marin, P.E.; Ushak, S.; de Gracia, A.; Grageda, M.; Cabeza, L.F. Journal of Energy Storage.",
    pub_isi_29: "Desarrollo y resultados de la aplicación de estanques de almacenamiento basados en PCM en un sistema solar de confort térmico para un edificio institucional: estudio de caso (2020). Batlles, F.J.; Gil, B.; Ushak, S.; Kasperski, J.; Lujan, M.; Maldonado, D.; Nems, M.; Nems, A.; Puertas, A.M.; Romero-Cano, M.S.; Rosiek, S.; Grageda, M. Energies",
    pub_isi_30: "Estudios cinéticos y termodinámicos sobre la síntesis de nanopartículas de LiMn₂O₄ dopadas con Mg (2020). Llusco, A.; Grageda, M.; Ushak, S. Nanomaterials",
    pub_isi_31: "Desarrollo de nuevos materiales inorgánicos de cambio de fase con forma estabilizada con sales de LiNO₃ y LiCl mediante método sol-gel (2019). Yanio E. Milián, Nicole Reinaga, Mario Grágeda, Svetlana Ushak. Journal of Sol-Gel Science and Technology, doi.org/10.1007/s10971-019-05090-4",
    pub_isi_32: "Diseño de ruta de síntesis para materiales inorgánicos de cambio de fase con forma estabilizada: proceso directo sol–gel versus método de impregnación al vacío (2019). Yanio E. Milian, Svetlana Ushak. Journal of Sol-Gel Science and Technology, doi.org/10.1007/s10971-019-05119-8",
    pub_isi_33: "Diseño de materiales de cambio de fase basados en sales hidratadas para almacenamiento de energía térmica en un rango de 4 a 40 °C (2019). Jorge A. Lovera-Copa, Svetlana Ushak, Nicole Reinaga, Islaman Villalobos, Franklin R. Martínez. Journal of Thermal Analysis and Calorimetry, doi.org/10.1007/s10973-019-08655-1",
    pub_isi_34: "Propiedades de corrosión de recubrimientos de níquel obtenidos de electrolitos acuosos y no acuosos (2019). M. Judith Cruz, Irina V. Makarova, Dmitry S. Kharitonov, Illia Dobryden, Alexander A. Chernik, Mario Grageda, Svetlana Ushak. Surface and Interface Analysis, 1–11, DOI: 10.1002/sia.6683",
    pub_isi_35: "Aportes a la microbiología de las salmueras caotrópicas del Salar de Atacama, Chile (2019). Carolina F. Cubillos, Adrián Paredes, Carolina Yáñez, Jenifer Palma, Esteban Severino, Drina Vejar, Mario Grágeda and Cristina Dorador. Frontiers in Microbiology, doi: 10.3389/fmicb.2019.01611",
    pub_isi_36: "Buades, Ana; Arderiu, Victor; Maxwell, Lindley; Amoza, Martin; Aliaga, Nuria; and Ruiz, Eliseo. \"Relajación lenta de espín de un complejo de carborano de FeIII de bajo espín S= ½\". Chemical Communication, 2019",
    pub_isi_37: "Massoud, Salah; Henary, Maher; Maxwell, Lindley; Amoza, Martin; Ruiz, Eliseo. \"Complejos mononucleares de lantánidos con éter 18-corona-6: síntesis, caracterización, propiedades magnéticas y estudios teóricos\". Inorganic Chemistry, 2018, 42, 2627",
    pub_isi_38: "Carolina F. Cubillos, Pablo Aguilar, Mario Grágeda and Cristina Dorador. \"Comunidades microbianas de la mayor reserva de litio del mundo, Salar de Atacama, Chile: Vida a altas concentraciones de LiCl\" (2018). Journal of Geophysical Research – Biogeosciences. Accepted. Impact factor 3.48",
    pub_isi_39: "Determinación de los parámetros cinéticos de reacción para la cristalización de Li₂CO₃ a partir de soluciones de Li₂SO₄ y Na₂CO₃ mediante mediciones calorimétricas (2018). Aguilar, P.G.; Graber, T. Industrial & Engineering Chemistry Research, DOI: 10.1021/acs.iecr.8b00227",
    pub_isi_40: "Grágeda, Mario; González, Alonso; Grágeda, Mirko; Ushak, Svetlana. Purificación de salmueras mediante precipitación química y procesos de intercambio iónico para la obtención de compuestos de litio grado batería. (2018) International Journal of Energy Research, Volume 42, N 7, pp. 2386-2399. © John Wiley & Sons Ltd USA, ISSN: 1099-114X. Impact factor 3.009",
    pub_isi_41: "Galazutdinova, Y., Vega M., Grágeda, M., Cabeza, L.F., Ushak, S. Preparación y caracterización de un compuesto inorgánico de cloruro/nitrato de magnesio/grafito para almacenamiento de energía a baja temperatura. 2018, Solar Energy Materials and Solar Cells, vol. 175, pp. 60-70. Impact factor 5.018",
    pub_isi_42: "Gonzalez A., Grágeda M., Ushak S. Evaluación de un módulo de purificación de agua a escala piloto con tecnología de electrodiálisis y energía solar. Volume 206, pp. 1643-1652 Applied Energy, 2017. Elsevier Ltd. USA. ISSN: 0306-2619. Impact factor 7.182",
    pub_isi_43: "Gasia, J.; Gutiérrez, A.; Peiró, G.; Miró, L.; Grágeda, M.; Ushak, S.; Cabeza, L.F., 2015, Evaluación del rendimiento térmico de bischofita a escala de planta piloto, Applied Energy 155: 826-833. DOI: 10.1016/j.apenergy.2015.06.042",
    pub_isi_44: "Y.E. Milián, A. Gutiérrez, M. Grágeda, S. Ushak. Una revisión sobre técnicas de encapsulación para materiales inorgánicos de cambio de fase y la influencia en sus propiedades termofísicas. Renewable and Sustainable Energy Reviews, 2017, 73, pp. 983–999. ISSN: 1364-0321, 6.796 (5-year IF)",
    pub_isi_45: "S. Ushak, A. Gutierrez, C. Barreneche, A. I. Fernandez, M. Grágeda, L. F. Cabeza. Reducción del subenfriamiento de bischofita mediante el uso de agentes nucleantes. Solar Energy Materials and Solar Cells, 2016, 157, p. 1011-1018",
    pub_isi_46: "S. Ushak, P. Marín, Y. Galazutdinova, L.F. Cabeza, M.M. Farid, M. Grágeda. Compatibilidad de materiales para macroencapsulación de materiales inorgánicos de cambio de fase: estudio experimental de corrosión. Applied Thermal Engineering, 2016, 107, p. 410-419, ISSN 1359-4311, 3.043 (Impact Factor)",
    pub_isi_47: "S. Ushak, M. Suárez, S. Véliz, A.G. Fernández, E. Flores, H. Galleguillos. Caracterización del cloruro de calcio tetrahidratado como material de cambio de fase y análisis termodinámico de los resultados. Renewable Energy, 2016, 95, p. 213-224. ISSN 0960-1481, 3.404 (impact factor)",
    pub_isi_48: "S. Ushak, A. Gutierrez, Y. Galazutdinova, C. Barreneche, L. F. Cabeza, M. Grágeda. Influencia de cloruros alcalinos en las propiedades de almacenamiento de energía térmica de la bischofita. International Journal of Energy Research, 2016, 40, 11, p. 1556–1563, Online ISSN: 1099-114X, 2.529 (Impact Factor)",
    pub_isi_49: "Saffari M., De Gracia A., Ushak S., Cabeza L.F. Impacto económico de la integración de PCM como sistema pasivo en edificios utilizando el modelo de confort de Fanger. Energy and Buildings, 2016, 112, pp. 159-172, ISSN: 0378-7788, 2.884 (Impact Factor 2014)",
    pub_isi_50: "Marin, P.; Saffari, M.; de Gracia, A.; Zhu, X.B.Y.; Farid, M.; Cabeza, L.F.; Ushak, S. Ahorro de energía debido al uso de PCM para calefacción y refrigeración pasiva en edificios modulares ligeros bajo diferentes condiciones climáticas. Energy and Buildings, 2016, 129, 274-283. ISSN: 0378-7788, 2.884 (Impact Factor 2014).",
    pub_isi_51: "Svetlana Ushak, M. Judith Cruz, Luisa F. Cabeza, Mario Grágeda. Preparación y caracterización de microcápsulas inorgánicas de PCM mediante el método de lecho fluidizado. Materials 2016, 9(1), 24; doi: 10.3390/ma9010024. Basel, Switzerland. ISSN 1996-1944. Impact factor 2.651",
    pub_isi_52: "Gutierrez A., Miró L., Gil J., Rodríguez-Aseguinolaza J., Barreneche C., Calvet N., Py X., Fernández M.I., Grágeda M., Ushak S., Cabeza L.F. Avances en la valorización de residuos y subproductos como materiales de almacenamiento de energía térmica (TES). doi:10.1016/j.rser.2015.12.071. Renewable and Sustainable Energy Reviews, Volume 59, 2016, pp. 763-783. Elsevier Ltd. USA. ISSN: 1364-0321. Impact factor 5.901",
    pub_isi_53: "M. Grágeda, M. Escudero, W. Alavia, S. Ushak, V. Fthenakis. Revisión y evaluación multicriterio de proyectos de energía solar en Chile. doi:10.1016/j.rser.2015.12.149. Renewable and Sustainable Energy Reviews, Volume 59, 2016, pp. 583-596. Elsevier Ltd. USA. ISSN: 1364-0321. Impact factor 5.901",
    pub_isi_54: "M. Grágeda, A. González, W. Alavia, S. Ushak. Desarrollo y optimización de un proceso modificado para producir LiOH grado batería: optimización del consumo de energía y agua. Energy, Volume 89, 2015, pp. 667-677. Elsevier Ltd. USA. ISSN: 0360-5442. Impact factor 4.844",
    pub_isi_55: "Andrea Gutierrez, Svetlana Ushak, Hector Galleguillos, Angel Fernandez, Luisa F. Cabeza, Mario Grágeda. Uso de polietilenglicol para la mejora del comportamiento de ciclado de la bischofita como material de almacenamiento de energía térmica. Applied Energy, Volume 154, 15 September 2015, Pages 616–621. Elsevier Ltd. USA. ISSN: 0306-2619. Impact factor 5.613",
    pub_isi_56: "Luisa F. Cabeza, Andrea Gutierrez, Camila Barreneche, Svetlana Ushak, Angel Fernandez, A. Inés Fernández, Mario Grageda. El litio en el almacenamiento de energía térmica: revisión del estado del arte. Renewable & Sustainable Energy Reviews, Volume 42, pp. 1106–1112, 2015. Elsevier Ltd. USA. ISSN: 1364-0321. Impact factor 5.510",
    pub_isi_57: "Svetlana Ushak, Andrea Gutierrez, Hector Galleguillos, Angel Fernandez, Luisa F. Cabeza, Mario Grágeda. Caracterización termofísica de un subproducto de la industria no metálica como PCM inorgánico. Solar Energy Materials and Solar Cells, Volume 132, pp. 385–391, 2015. ISSN: 0927-0248. Impact factor 5.337",
    pub_isi_58: "Fernández, S. Ushak, H. Galleguillos, F. Pérez. Caracterización térmica de una innovadora mezcla cuaternaria de nitratos fundidos para almacenamiento de energía en plantas CSP. Solar Energy Materials and Solar Cells, Volume 132, January 2015, Pages 172-177",
    pub_isi_59: "A.G. Fernández, S. Ushak, H. Galleguillos, F.J. Pérez. Desarrollo de nuevas sales fundidas con LiNO₃ y Ca(NO₃)₂ para almacenamiento de energía en plantas CSP. Applied Energy, Volume 119, 15 April 2014, 131–140",
    pub_isi_60: "Jaime W. Morales, Héctor R. Galleguillos, Teófilo A. Graber, Felipe Hernández-Luis. Coeficientes de actividad de LiCl en (PEG 4000 + agua) a T = (288.15, 298.15 y 308.15) K. J. Chem. Thermodynamics 42, 1255–1260 (2010)",
    pub_isi_61: "Graber T.A., Morales J.W., Robles P.A., Galleguillos H.R., and Taboada M.E. Comportamiento de cristales de LiOH*H₂O obtenidos por evaporación y por drowning out. Crystal Research & Technology, Vol. 43, Nº 6, pp. 616-625 (2008)",
    pub_isi_62: "Hernandez-Luis F., Galleguillos, H.; Graber, T.; Taboada M.E. Coeficientes de actividad de LiCl en mezclas de etanol-agua a 298.15 K. Industrial and Engineering Chemistry Research, 47, pp. 2056-2062 (2008)",
    pub_isi_63: "Kwok K.S., Ng K.M., Taboada M.E., Cisternas L.A. Termodinámica del sistema de salares: representación, experimentos y visualización. AICHE Journal, 54 (3), 706-727 (2008)",
    pub_isi_64: "Taboada M.E., T.A. Graber and L.A. Cisternas. Diseño de procesos para cristalización por drowning-out de monohidrato de hidróxido de litio. Chemical Engineering Research and Design, 85, A9, pp. 1325-1330 (2007)",
    pub_isi_65: "Taboada M.E., Galleguillos H.R., Graber T.A. and Álvarez J. Densidad, viscosidad, índice de refracción y conductividad eléctrica de soluciones saturadas del sistema hidróxido de litio + etanol + agua a 298.15 K, y descripción termodinámica del equilibrio sólido-líquido. Fluid Phase Equilibria, vol. 235, pp. 104-111 (2005)",
    pub_scopus_1: "Fthenakis, V., Atia, A.A., Perez, M., Florenzano, A., Grageda, M., Lofat, M., Ushak, S., Palma, R. Perspectivas de la energía fotovoltaica en regiones soleadas y áridas: un gran plan solar para Chile - Parte I - Investigación sobre la penetración fotovoltaica. Actas: 2014 IEEE 40th Photovoltaic Specialist Conference, PVSC 2014, art. no. 6925184, pp. 1424-1429, ISBN: 978-147994398-2; SCOPUS",
    pub_scopus_2: "S. Ushak, A. Gutierrez, E. Flores, H. Galleguillos, M. Grageda. Desarrollo de materiales de almacenamiento de energía térmica a partir de sales residuales de procesos. Energy Procedia, vol. 57, pp. 627-632, 2014. ISSN: 1876-6102",
    pub_scopus_3: "S. Ushak, M. Grágeda, D. Pulido, E. Oró, L.F. Cabeza. Aplicación de calentamiento solar de electrolito para el proceso de electroobtención: rendimiento de planta termosolar. Energy Procedia, vol. 57, pp. 2930-2936, 2014. ISSN: 1876-6102",
    pub_scopus_4: "A.G. Fernández, M. Grágeda, H. Galleguillos. Influencia de impurezas en las propiedades fisicoquímicas y de corrosión de los nitratos solares chilenos. Energy Procedia, Volume 49, pp. 607-616, 2014. ISSN: 1876-6102",
    pub_book_1: "S. Ushak, A. Fernandez, M. Grageda. Capítulo “Avances en sistemas de almacenamiento en sales fundidas utilizando medios de almacenamiento sensible líquido para almacenamiento de calor”, en libro “Advances in thermal energy storage systems: Methods and applications”, Woodhead Publishing Ed., pp. 49-64, 2014",
    pub_book_2: "Mario Grágeda, Pedro Vargas y Svetlana Ushak. Capítulo “Modelo productivo del litio en Chile: antecedentes, procesos productivos, marco legal, avances y proyecciones y evaluación crítica“, en libro “ABC del Litio Sudamericano\" editado por la Universidad Nacional de Quilmes y el Centro Cultural de la Cooperación, pp. 353-380. ISBN 978-987-3920-14-1, 2015",
    pub_book_3: "L. Cabeza, M.I. Fernandez, C. Barrenche, S. Ushak. Capítulo “Almacenamiento PCM”, en libro “Handbook of Clean Energy Systems. John Wiley and Sons Ltd, V.5, pp. 2455-2477, 2015",
    // News Section
    news1_desc: "11ª Conferencia Internacional sobre Litio, Minerales Industriales y Energía<br>27 al 29 de noviembre. Antofagasta, Chile",
    news1_audio_title: "Audio: CELIMIN ESPAÑOL FRANCO",
    news1_audio_warning: "Tu navegador no soporta el reproductor de audio.",
    news2_title: "LITIO: EL DESAFÍO DE CREAR UNA NUEVA INDUSTRIA",
    news2_date: "Agosto 2017",
    news2_desc: "El impulso de las energías renovables y la electromovilidad está generando una creciente demanda de litio, pero si Chile no toma las medidas adecuadas podría perder la oportunidad de convertirse en el líder mundial en este campo. Los principales desafíos hacia esa meta incluyen avanzar desde la exportación de materias primas hacia productos más sofisticados, sin descuidar la producción y refinamiento del propio mineral, además de asegurar la incorporación de nuevas tecnologías y capital humano altamente calificado.",
    news2_read_more: "Leer más →",
    news3_title: "CELiMIN SE POSICIONA CON UNA NUEVA MARCA",
    news3_date: "Agosto 2013",
    news3_desc: "El Centro de Investigación Avanzada del Litio y Minerales Industriales lanza su nueva marca en la segunda mitad de este año.<br><br>Ahora con una nueva imagen, CELiMIN se posiciona como uno de los centros de investigación más destacados de la zona norte del país, impactando con nuevos proyectos, nuevas alianzas e innovaciones en el desarrollo investigativo del sector en el que opera a través de la creación de nuevas e innovadoras iniciativas y espacios.",
    news4_title: "1er WORKSHOP INTERNACIONAL \"IWLiME\"",
    news4_date: "Agosto 2013",
    news4_desc: "El Centro de Investigación Avanzada del Litio y Minerales Industriales, CELiMIN, organizó el primer Workshop Internacional bajo el nombre \"IWLiME\", dirigido a investigadores y profesionales de universidades, centros de investigación y estudiantes de posgrado.<br><br>Los temas principales tratados en el Workshop estuvieron relacionados con el desarrollo de baterías de litio, almacenamiento térmico, entre otros. El objetivo de esta actividad fue difundir los proyectos actuales generados en áreas de energía con énfasis en litio, además de promover la complementariedad científica lograda con universidades de todo Chile.",
    news5_title: "JAPÓN CREA MATERIAL PARA MULTIPLICAR POR 10 LA BATERÍA DE LOS TELÉFONOS MÓVILES",
    news5_date: "Agosto 2013",
    news5_desc: "La empresa japonesa Shin-Etsu ha desarrollado un material que podría aumentar hasta 10 veces la capacidad de las baterías de iones de litio utilizadas en teléfonos móviles.<br><br>La compañía nipona especializada en semiconductores ha utilizado su tecnología para producir láminas de silicona que retienen carga eléctrica en la batería, una alternativa frente a los materiales convencionales basados en carbono.<br><br>Shin-Etsu, que podría comenzar a producir masivamente este producto en 3 o 4 años, ha enviado prototipos a fabricantes de baterías dentro y fuera de Japón para evaluar aspectos como el costo y el desgaste temporal de los materiales empleados.",
    // Laboratory Equipment Section
    lab1_eq_1: "Rotavapor (Buchi, modelo R-210), este equipo permite estudiar efectos de evaporación y cristalización.",
    lab1_eq_2: "DSC - calorímetro diferencial de barrido (NETZSCH, modelo 204 F1 Phoenix).",
    lab1_eq_3: "Galvanostato-potenciostato (Metrohm, Autolab PGSTAT302N) con voltaje de cumplimiento de 30 V y ancho de banda de 1 MHz, especialmente diseñado para espectroscopía de impedancia electroquímica.",
    lab1_eq_4: "Mezclador al vacío (MTI, modelo MSK-SFM-7-220) utilizado para mezclado en la fabricación de electrodos.",
    lab1_eq_5: "Máquina de recubrimiento (MTI, modelo MSK-AFA-III), equipo utilizado para el recubrimiento de electrodos.",
    lab1_eq_6: "Laminadora en caliente (MTI, modelo MSK-HRP-01), equipo de compresión utilizado en la fabricación de electrodos.",
    lab1_eq_7: "Soldadora ultrasónica (SNLG, modelo SDA80X30), equipo utilizado para soldadura de terminales en el ensamblaje de celdas.",
    lab1_eq_8: "Selladora al vacío para celdas de litio (MTI, modelo MSK-115A-220), para empaquetado de equipos utilizados durante el ensamblaje de la celda.",
    lab1_eq_9: "Selladora térmica (MTI, modelo MSK-140), instrumento de carcasa reforzada utilizado para el empaque de la celda.",
    lab1_eq_10: "Engarzadora eléctrica (MTI, modelo MSK-160D), para fabricar celdas tipo botón tanto dentro como fuera de la caja de guantes.",
    lab1_eq_11: "Caja de guantes (MTI modelo VGB-3P), utilizada en el llenado, etapa final del ensamblaje de celdas.",
    lab1_eq_12: "Ciclador de baterías (MTI, modelo BST8-3A), equipo utilizado para la activación de las baterías.",
    lab2_eq_1: "Reactor calorimétrico, Mettler Toledo, modelo RC1.",
    lab2_eq_2: "Analizador de tamaño de partícula, Horiba, modelo CAPA-3000.",
    lab2_eq_3: "Unidad de Cristalización.",
    lab2_eq_4: "Equipo para medir presiones de vapor y actividad termodinámica del agua aw, Novasina, AW-CENTER.",
    lab2_eq_5: "Unidad de equilibrios de fase para estudios de equilibrio sólido-líquido.",
    lab2_eq_6: "Reómetro programable cono-placa, Brookfield, modelo DV-III, husillo CP-40.",
    lab2_eq_7: "Unidad de equilibrio de fase para estudios de equilibrio líquido-líquido y sólido-líquido.",
    lab2_eq_8: "Centrífuga refrigerada, universal, modelo 32R.",
    lab2_eq_9: "Densímetro, Mettler Toledo, modelo DE50. Rango de medición de 0.00001 a 3 g/cm³.",
    lab2_eq_10: "Refractómetro, Mettler Toledo, modelo RE40. Rango de medición de 1.3200 a 1.7000.",
    lab2_eq_11: "Conductivímetro, Orion, modelo 170.",
    lab2_eq_12: "Viscosímetro, Schott Gerate, modelo AVS-310.",
    lab2_eq_13: "Evaporador rotatorio, Buchi, modelo W2000.",
    lab2_eq_14: "Titulador, Mettler Toledo, modelo DL31, para análisis de agua.",
    lab2_eq_15: "Unidad para medir coeficientes de difusión líquido-líquido, Armfield.",
    lab2_eq_16: "Unidad de determinación de coeficientes de actividad de electrolitos, Keithley.",
    lab3_eq_1: "Espectrofotómetro de absorción atómica, Varian, modelo 220 FS.",
    lab3_eq_2: "Espectrofotómetro de absorción molecular, Unicam, modelo UV2.",
    lab3_eq_3: "Cromatógrafo de gases, Varian, modelo CP-3380.",
    lab4_eq_1: "Calorímetro, marca SETARAM, modelo C80.",
    lab4_eq_2: "Unidad de balance de fases de 120 litros.",
    lab4_eq_3: "Analizador de tamaño de partícula, Mastersizer, modelo 2000.",
    lab4_eq_4: "Sistema de análisis térmico, Mettler Toledo, modelo 1100 TGA/DSC1 LF.",
    // Additional Team Qualifications & Areas
    team_deg_master_stud: "Magíster (estudiante) Ing. de Procesos de Minerales",
    team_deg_mech_civ: "INGENIERO CIVIL MECÁNICO",
    team_deg_env_eng: "INGENIERO MEDIOAMBIENTAL",
    team_deg_chem_sci: "LICENCIADO EN CIENCIAS QUÍMICAS",
    team_deg_mining_eng: "INGENIERO EN MINAS",
    team_deg_elec_eng: "INGENIERO ELÉCTRICO",
    team_deg_met_eng: "INGENIERA EN METALURGIA",
    team_deg_met_mat_eng: "INGENIERA EN METALURGIA Y MATERIALES",
    team_deg_metal_civ: "INGENIERO CIVIL METALÚRGICO",
    team_deg_biotech: "BIOTECNÓLOGO",
    team_deg_thesis_stud: "TESISTA EN INGENIERÍA CIVIL DE PROCESOS DE MINERALES",
    team_area_recycling: "Reciclaje de Baterías de Ion Litio",
    team_area_synth_adv: "Síntesis de Materiales Avanzados para Baterías de Ion Litio",
    team_area_cathodic: "Síntesis y Materiales Catódicos",
    team_area_membranes: "Procesos y Membranas",
    team_area_edl: "Extracción Directa de Litio (EDL)",

    footer_text: "© 2026 Centro de Investigación Avanzada del Litio y Minerales Industriales (CELIMIN). Universidad de Antofagasta, Chile."
  },

  en: {
    // Header & Nav
    logo_subtitle: "CENTER FOR ADVANCED RESEARCH ON LITHIUM AND INDUSTRIAL MINERALS",
    nav_home: "HOME",
    nav_team: "SOMOS / ABOUT US",
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
    conf_posters_title: "Guidelines & Registration",
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
    sponsor_main_title: "Main Sponsor",
    sponsor_co_title: "Co-Sponsored by",
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
    project_item_1: "Project: Fondecyt Postdoctoral Grant ID 32969 Title: DEVELOPMENT OF Li₂TiO₃ SIEVES DOPED WITH VANADIUM AND/OR MAGNESIUM USING COMBINED DOPING STRATEGIES AND CONTROLLED NANOMETRIC PARTICLE SIZE DISTRIBUTION",
    project_item_2: "Prototype of an Electrochemical Reactor for the Purification of Lithium Brines through the Removal of Mg and Ca. UA INNOVATORS COMPETITION. 2024–2025",
    project_item_3: "Technological innovation for the sustainable recycling of lithium-ion batteries: recovery of critical materials for the security of the energy transition (RecLIBs). ATE240011. 2024–2027.",
    project_item_4: "Synthesis of a Novel Direct Lithium Extraction Material based on LADH doped with Titanium to Overcome Technical and Environmental Hurdles in Lithium Mining, Fondecyt Start-up Grant No. 11250700. 2025–2028",
    project_item_5: "Project: ‘Scaling up and optimisation of the production process for battery-grade LiOH using brines from the Salar de Atacama via electromembrane processes’, Fondef ID 24I10368, ANID DE No. 331, 24/5/2024. 2024–2026",
    project_item_6: "Development of new heat transfer fluids as phase change slurries enhanced with Janus nanoparticles for solar applications. Fondecyt Regular Project No. 1231721. 2023–2025",
    project_item_7: "Study and development of palladium-based electrodes for the electrocatalysis of green H₂ in an anion exchange membrane (AEM) electrolysis process and evaluation of their performance in an alkaline environment. ANID/FONDECYT POSTDOCTORAL 2023. 2023–2025",
    project_item_8: "Platform for the production of sustainable advanced materials and the manufacture of lithium batteries. CELiMIN-SQM. 2022–2026",
    project_item_9: "Scientific Exchange and Cooperation of 2022 between Guangzhou Institute of Energy Conversion (China) and CELiMIN (Chile). Project number G2022030062L.",
    project_item_10: "Collaborative development of renewable/thermally driven and storage-integrated cooling technologies. H2020-MSCA-RISE-2020 Nº101007976. 2021-2024.",
    project_item_11: "Air conditioning and domestic hot water for housing through the use of phase change materials technology and its introduction into the construction market. CORFO. 2021-2022",
    project_item_12: "Metal Organic Frameworks as electrode materials for rechargeable batteries. Fondecyt Postdoctoral No. 3180199, 2018-2020",
    project_item_13: "Development of new high performance nanostructured materials for lithium ion batteries doped with elements obtained from waste materials from the Salar de Atacama and other Industrial minerals. Fondecyt Regular No. 1191347, 2019-2022",
    project_item_14: "Low-cost materials for thermal energy storage systems (Fondecyt Regular No. 1170675, 2017-2020)",
    project_item_15: "International cooperation between CELiMIN and INSPIRES and developing of new applications for lithium and other industrial minerals from north of Chile as solar energy storage materials by means of straightening of human capital training, CONICYT/PCI/REDES 170131, 2018-2019",
    project_item_16: "Thermal Energy Storage with Phase Change Materials for Solar Cooling and Heating Applications: A technology viability analysis (PCMSOL) (ERANeT-LAC, ELAC2015/T06-0988, 2017-2019).",
    project_item_17: "Development of high energy density materials based on lithium for solar energy storage (Fondef ID16I10159, 2017-2018).",
    project_item_18: "Development of a commercial application of a lithium-air battery for autonomous and modular 1kW power generation. Technological Contract, CORFO 15COTE-46275. 2015-2016, awarded 2015. Applied research.",
    project_item_19: "Obtaining NCRE energy through new technology in the generation of Hydrogen using metallic lithium, Validation and Packaging of Innovations, Business Technological Innovation Program, CORFO. 15ITE-46323, awarded 2015. Applied research.",
    project_item_20: "Design and Building of an Energetic Module, Composed of Lithium Batteries and Photovoltaic Panels, for Storage and Use in Water Purification (FIC 2013-2015).",
    project_item_21: "Solar Energy Research Center – SERC Chile. (FONDAP 2011-2016, 2017-2021).",
    project_item_22: "Strengthening the University of Antofagasta as a Regional and National reference in Renewable Energies. (Performance Agreements 2012, MINEDUC 2013-2015).",
    project_item_23: "Lithium Brine Processing by Crystallization and Electrodialysis FONDECYT 1120192 (2012-2014).",
    project_item_24: "Chilean salts as phase change materials for thermal energy storage in housing. Fondecyt 1120422. (2012-2014).",
    project_item_25: "Using existing salts in northern Chile as an alternative non-conventional energy. FIC Regional Project Arica Parinacota 2011-2012.",
    publications_tab_title: "PUBLICATIONS",

    // Team Members
    team_our_team: "OUR TEAM",
    team_director: "Director of Celimin",
    team_inv_princ: "Principal Investigator",
    team_inv_asoc: "Associate Investigator",
    team_mario_area: "Lithium Processes and Advanced Materials for Lithium Batteries",
    team_mario_deg1: "Metallurgical Civil Engineer",
    team_mario_deg2: "PhD in Engineering Sciences<br>Mention in Materials Sciences",
    team_svetlana_area: "Thermal Energy Storage",
    team_svetlana_deg1: "METALLURGICAL CIVIL ENGINEER",
    team_paula_area: "Nanostructured Materials in Energy Storage and Direct Lithium Extraction (DLE)",
    team_paula_deg1: "EXTRACTIVE METALLURGY CHEMIST",
    team_alonso_area: "Processes and Electrodialysis",
    team_alonso_deg1: "CHEMICAL CIVIL ENGINEER",
    team_marcelo_area: "Cathodes and Manufacturing in Lithium-Ion Batteries",
    team_marcelo_deg1: "BACHELOR IN PHYSICS",
    team_adrian_area: "Processes and Electrolysis",
    team_adrian_deg1: "CHEMICAL ENGINEER",
    team_kumaresan_area: "Advanced and Sustainable Cathode Materials for Lithium-Ion Batteries",
    team_kumaresan_deg1: "BACHELOR IN CHEMISTRY",
    team_sagar_area: "Materials Synthesis from Lithium-Ion Battery Recycling",
    team_sagar_deg1: "MASTER IN PHYSICS",
    team_assoc_team: "ASSOCIATE TEAM",
    team_romeo_area: "Battery Management Systems and Automation of Solar Systems",
    team_romeo_deg1: "ELECTRONIC AND COMMUNICATIONS ENGINEER",
    team_romeo_deg2: "PhD in Electrical Engineering",
    team_group_members: "GROUP MEMBERS",
    team_phd_chem: "PhD in Chemistry",
    team_phd_phys: "PhD in Physics",
    team_phd_min_proc: "PhD in Mineral Processing Engineering",
    team_sec_sub: "Meet Our Team",
    team_sec_title: "Researchers and Specialists",
    team_inv_celimin: "CELIMIN Researcher",
    team_nicolas_area: "Membrane Processes for the recovery of water and valuable compounds from lithium brines",
    team_luis_area: "Lithium-Ion Batteries",
    team_luis_deg1: "CIVIL ENGINEER IN MINERAL PROCESSES",
    team_phd_c_min_proc: "PhD (c) in Mineral Processing Engineering",
    team_sergio_area: "Piloting in Thermal Energy Storage Systems and Direct Lithium Extraction (DLE)",
    team_phd_stu_min_proc: "PhD Student in Mineral Processing Engineering",
    team_evgeniya_area: "Materials Synthesis",
    team_evgeniya_deg1: "MASTER IN CHEMISTRY",
    team_phd_chem_sci: "PhD in Chemical Sciences",
    team_inv_postdoc: "Postdoctoral Researcher",
    team_javier_area: "Evaluation of microstructural changes in Li-ion battery cathode materials by advanced electron microscopy",
    team_javier_deg1: "BACHELOR IN APPLIED PHYSICS",
    team_phd_sci_phys: "PhD in Sciences, Mention Physics",
    team_chem_ind: "INDUSTRIAL CHEMIST",
    team_maura_area_fixed: "Thermal Energy Storage Systems",


    // Footer
        // Publications Section
    pub_isi_header: "Indexed ISI Publications:",
    pub_scopus_header: "SCOPUS:",
    pub_books_header: "Books:",
    pub_isi_1: "The development and analysis of a preliminary electrodialysis process for the purification of complex lithium solutions for the production of Li₂CO₃ and LiOH. Gonzalez A., Choque G., Grágeda M., Ushak S. Membranes 2025",
    pub_isi_2: "Characterisation of the COMFORTBOARD gypsum board for thermal energy storage in buildings (2024). Paula E. Marín, Svetlana Ushak, Alvaro de Gracia, Luisa F. Cabeza. Journal of Energy Storage, 77 (2024), 109850",
    pub_isi_3: "Effect of elliptical dimples on heat transfer performance in a shell and tube heat exchanger (2023). SAA Mehrjardi, A Khademi, Z Said, S Ushak, AJ Chamkha. Heat and Mass Transfer, 1-11, 2023",
    pub_isi_4: "Life Cycle Analysis of a Green Solvothermal Synthesis of LFP Nanoplates for Enhanced LIBs in Chile (2023). P Cofré, ML Viton, S Ushak, M Grágeda. Nanomaterials 13 (9), 1486, 2023",
    pub_isi_5: "A comparative study of melting behaviour of phase change material with direct fluid contact and container inclination (2023). A Khademi, SAA Mehrjardi, Z Said, R Saidur, S Ushak, AJ Chamkha. Energy Nexus, 100196",
    pub_isi_6: "Modelling and Validation of a LiOH Production Process by Bipolar Membrane Electrodialysis from Concentrated LiCl (2023). A González, M Grágeda, S Ushak. Membranes",
    pub_isi_7: "Life cycle assessment of the inclusion of phase change materials in lightweight buildings (2022). Mariela Vega, Noelia Llantoy, Marta Chafer, Svetlana Ushak, Luisa F. Cabeza. Journal of Energy Storage",
    pub_isi_8: "Phase Change Slurries for Cooling and Storage: An Overview of Research Trends and Gaps (2022). Borri, E.; Hua, N.; Sciacovelli, A.; Wu, D.; Ding, Y.; Li, Y.; Brancato, V.; Zhang, Y.; Frazzica, A.; Li, W.; et al. Energies",
    pub_isi_9: "Application of Nanofluids in Improving the Performance of Double-Pipe Heat Exchangers—A Critical Review (2022). Louis, S.P.; Ushak, S.; Milian, Y.; Nems, M.; Nems, A. Materials",
    pub_isi_10: "A brief review on different hybrid methods of enhancement within latent heat storage systems (2022). Alireza Khademi, Kyle Shank, Seyed Ali Abtahi Mehrjardi, Saeed Tiari, Giancarlo Sorrentino, Zafar Saide, Ali J. Chamkha, Svetlana Ushak. Journal of Energy Storage",
    pub_isi_11: "Melting process of various phase change materials in presence of auxiliary fluid with sinusoidal wall temperature (2022). S. Abtahi, A. Khademi, S. Ushak, S. Alotaibi. Journal of Energy Storage",
    pub_isi_12: "Potential use of magnesium industrial waste for synthesis of Li and Mg co-doped LiMn₂O₄ nanoparticles as cathode material for Li-ion batteries: Effect of sintering temperature (2022). Llusco A., Rojas L., Ushak S., Grageda M. Nano Research",
    pub_isi_13: "Characterisation of commercial phase change materials with potential application in gypsum boards for buildings (2022). Marin, P.E.; Ushak, S.; De Gracia, A.; Cabeza, L.F. International Journal of Energy Research",
    pub_isi_14: "Influence of monomers and solvents in the direct sol-gel synthesis of LiNO₃ shape stabilised phase change materials (2021). Milian Y., Ushak S. Materials Chemistry and Physics",
    pub_isi_15: "Lithium compounds for thermochemical energy storage: A state-of-the-art review and future trends (2021). P.E. Marín, Y. Milian, S. Ushak, L.F. Cabeza, M. Grágeda, G.S.F. Shire. Renewable and Sustainable Energy Reviews",
    pub_isi_16: "Application and Analysis of Bipolar Membrane Electrodialysis for LiOH Production at High Electrolyte Concentrations: Current Scope and Challenges (2021). Alonso González, Mario Grágeda, Adrián Quispe, Svetlana Ushak, Philippe Sistat, Marc Cretin. Membranes",
    pub_isi_17: "Application of thermal storage in overnight refrigeration of an institutional building (2021). Batlles, F.J., Gil, B.; Grageda, M.; Kasperski, J.; Lujan, M.; Maldonado, D.; Nems, M.; Nems, A.; Puertas, A.M.; Romero-Cano, M.S.; Rosiek; Ushak, S. Solar Energy",
    pub_isi_18: "Development of the inorganic composite phase change materials for passive thermal management of Li-ion batteries: Application (2021). Yana Galazutdinova, Said Al‐Hallaj, Mohammed Farid, Mario Grágeda, Svetlana Ushak. Journal of Power Source",
    pub_isi_19: "Design of phase change materials based on salt hydrates for thermal energy storage in a range of 4-40 degrees C (2020). Lovera-Copa, J.A.; Ushak, S.; Reinaga, N.; Villalobos, I.; Martinez, F.R. Journal of Thermal Analysis and Calorimetry",
    pub_isi_20: "Progress on use of nanoparticles in salt hydrates as phase change material (2020). Wong-Pinto, L.S.; Milian, Y.; Ushak, S. Renewable & Sustainable Energy Reviews.",
    pub_isi_21: "Development of new inorganic shape stabilised phase change materials with LiNO₃ and LiCl salts by sol-gel method (2020). Milian, Y.E.; Reinaga, N.; Grageda, M.; Ushak, S. Journal of Sol-Gel Science and Technology.",
    pub_isi_22: "Design of synthesis route for inorganic shape-stabilised phase change materials. Direct sol-gel process versus vacuum impregnation method (2020). Milian, Y.E.; Ushak, S. Journal of Sol-Gel Science and Technology.",
    pub_isi_23: "Thermodynamic modelling and experimental verification of new eutectic salt mixtures as thermal energy storage materials (2020). Ushak, S.; Vega, M.; Lovera-Copa, J.A.; Pablo, S.; Lujan, M.; Grageda, M. Solar Energy Materials and Solar Cells",
    pub_isi_24: "Advances in the development of latent heat storage materials based on inorganic lithium salts (2020). Milian, Y.E.; Ushak, S.; Cabeza, L.F.; Grageda, M. Solar Energy Materials and Solar Cells.",
    pub_isi_25: "Development of the inorganic composite phase change materials for passive thermal management of Li-ion batteries: material characterisation (2020). Galazutdinova, Y.; Al-Hallaj, S.; Grageda, M.; Ushak, S. International Journal of Energy Research",
    pub_isi_26: "Industrial carnallite-waste for thermochemical energy storage application (2020). Mamani, V.; Gutierrez, A.; Fernandez, A.I.; Ushak, S. Applied Energy.",
    pub_isi_27: "Analysis of a Process for Producing Battery Grade Lithium Hydroxide by Membrane Electrodialysis (2020). Grageda, M.; Gonzalez, A.; Quispe, A.; Ushak, S. Membranes.",
    pub_isi_28: "Assessing corrosive behaviour of commercial phase change materials in the 21 - 25 degrees C temperature range (2020). Marin, P.E.; Ushak, S.; de Gracia, A.; Grageda, M.; Cabeza, L.F. Journal of Energy Storage.",
    pub_isi_29: "Development and Results from Application of PCM-Based Storage Tanks in a Solar Thermal Comfort System of an Institutional Building - A Case Study (2020). Batlles, F.J.; Gil, B.; Ushak, S.; Kasperski, J.; Lujan, M.; Maldonado, D.; Nems, M.; Nems, A.; Puertas, A.M.; Romero-Cano, M.S.; Rosiek, S.; Grageda, M. Energies",
    pub_isi_30: "Kinetic and Thermodynamic Studies on Synthesis of Mg-Doped LiMn₂O₄ Nanoparticles (2020). Llusco, A.; Grageda, M.; Ushak, S. Nanomaterials",
    pub_isi_31: "Development of new inorganic shape stabilised phase change materials with LiNO₃ and LiCl salts by sol-gel method (2019). Yanio E. Milián, Nicole Reinaga, Mario Grágeda, Svetlana Ushak. Journal of Sol-Gel Science and Technology, doi.org/10.1007/s10971-019-05090-4",
    pub_isi_32: "Design of synthesis route for inorganic shape-stabilised phase change materials. Direct sol–gel process versus vacuum impregnation method (2019). Yanio E. Milian, Svetlana Ushak. Journal of Sol-Gel Science and Technology, doi.org/10.1007/s10971-019-05119-8",
    pub_isi_33: "Design of phase change materials based on salt hydrates for thermal energy storage in a range of 4–40 °C (2019). Jorge A. Lovera-Copa, Svetlana Ushak, Nicole Reinaga, Islaman Villalobos, Franklin R. Martínez. Journal of Thermal Analysis and Calorimetry, doi.org/10.1007/s10973-019-08655-1",
    pub_isi_34: "Corrosion properties of nickel coatings obtained from aqueous and non-aqueous electrolytes (2019). M. Judith Cruz, Irina V. Makarova, Dmitry S. Kharitonov, Illia Dobryden, Alexander A. Chernik, Mario Grageda, Svetlana Ushak. Surface and Interface Analysis, 1–11, DOI: 10.1002/sia.6683",
    pub_isi_35: "Insights Into the Microbiology of the Chaotropic Brines of Salar de Atacama, Chile (2019). Carolina F. Cubillos, Adrián Paredes, Carolina Yáñez, Jenifer Palma, Esteban Severino, Drina Vejar, Mario Grágeda and Cristina Dorador. Frontiers in Microbiology, doi: 10.3389/fmicb.2019.01611",
    pub_isi_36: "Buades, Ana; Arderiu, Victor; Maxwell, Lindley; Amoza, Martin; Aliaga, Nuria; and Ruiz, Eliseo. \"Slow Spin Relaxation of a low-spin S= ½ FeIII Carborane complex\". Chemical Communication, 2019",
    pub_isi_37: "Massoud, Salah; Henary, Maher; Maxwell, Lindley; Amoza, Martin; Ruiz, Eliseo. \"Mononuclear Lanthanide Complexes with 18-crown-6 Ether: Synthesis, Characterisation, Magnetic Properties and Theoretical Studies\". Inorganic Chemistry, 2018, 42, 2627",
    pub_isi_38: "Carolina F. Cubillos, Pablo Aguilar, Mario Grágeda and Cristina Dorador. \"Microbial communities from the world's largest lithium reserve, Salar de Atacama, Chile: Life at high LiCl concentrations\" (2018). Journal of Geophysical Research – Biogeosciences. Accepted. Impact factor 3.48",
    pub_isi_39: "Determination of the Reaction Kinetic Parameters for Li₂CO₃ Crystallisation from Li₂SO₄ and Na₂CO₃ Solutions Using Calorimetric Measurements (2018). Aguilar, P.G.; Graber, T. Industrial & Engineering Chemistry Research, DOI: 10.1021/acs.iecr.8b00227",
    pub_isi_40: "Grágeda, Mario; González, Alonso; Grágeda, Mirko; Ushak, Svetlana. Purification of brines by chemical precipitation and ion exchange processes for obtaining battery grade lithium compounds. (2018) International Journal of Energy Research, Volume 42, N 7, pp. 2386-2399. © John Wiley & Sons Ltd USA, ISSN: 1099-114X. Impact factor 3.009",
    pub_isi_41: "Galazutdinova, Y., Vega M., Grágeda, M., Cabeza, L.F., Ushak, S. Preparation and characterisation of an inorganic magnesium chloride/nitrate/graphite composite for low temperature energy storage. 2018, Solar Energy Materials and Solar Cells, vol. 175, pp. 60-70. Impact factor 5.018",
    pub_isi_42: "Gonzalez A., Grágeda M., Ushak S. Assessment of pilot-scale water purification module with electrodialysis technology and solar energy. Volume 206, pp. 1643-1652 Applied Energy, 2017. Elsevier Ltd. USA. ISSN: 0306-2619. Impact factor 7.182",
    pub_isi_43: "Gasia, J.; Gutiérrez, A.; Peiró, G.; Miró, L.; Grágeda, M.; Ushak, S.; Cabeza, L.F., 2015, Thermal performance evaluation of bischofite at pilot plant scale, Applied Energy 155: 826-833. DOI: 10.1016/j.apenergy.2015.06.042",
    pub_isi_44: "Y.E. Milián, A. Gutiérrez, M. Grágeda, S. Ushak. A review on encapsulation techniques for inorganic phase change materials and the influence on their thermophysical properties. Renewable and Sustainable Energy Reviews, 2017, 73, pp. 983–999. ISSN: 1364-0321, 6.796 (5-year IF)",
    pub_isi_45: "S. Ushak, A. Gutierrez, C. Barreneche, A. I. Fernandez, M. Grágeda, L. F. Cabeza. Reduction of the subcooling of bischofite with the use of nucleating agents. Solar Energy Materials and Solar Cells, 2016, 157, p. 1011-1018",
    pub_isi_46: "S. Ushak, P. Marín, Y. Galazutdinova, L.F. Cabeza, M.M. Farid, M. Grágeda. Compatibility of materials for macroencapsulation of inorganic phase change materials: Experimental corrosion study. Applied Thermal Engineering, 2016, 107, p. 410-419, ISSN 1359-4311, 3.043 (Impact Factor)",
    pub_isi_47: "S. Ushak, M. Suárez, S. Véliz, A.G. Fernández, E. Flores, H. Galleguillos. Characterisation of calcium chloride tetrahydrate as a phase change material and thermodynamic analysis of the results. Renewable Energy, 2016, 95, p. 213-224. ISSN 0960-1481, 3.404 (impact factor)",
    pub_isi_48: "S. Ushak, A. Gutierrez, Y. Galazutdinova, C. Barreneche, L. F. Cabeza, M. Grágeda. Influence of alkaline chlorines on thermal energy storage properties of bischofite. International Journal of Energy Research, 2016, 40, 11, p. 1556–1563, Online ISSN: 1099-114X, 2.529 (Impact Factor)",
    pub_isi_49: "Saffari M., De Gracia A., Ushak S., Cabeza L.F. Economic impact of integrating PCM as passive system in buildings using Fanger comfort model. Energy and Buildings, 2016, 112, pp. 159-172, ISSN: 0378-7788, 2.884 (Impact Factor 2014)",
    pub_isi_50: "Marin, P.; Saffari, M.; de Gracia, A.; Zhu, X.B.Y.; Farid, M.; Cabeza, L.F.; Ushak, S. Energy savings due to the use of PCM for relocatable lightweight buildings passive heating and cooling in different weather conditions. Energy and Buildings, 2016, 129, 274-283. ISSN: 0378-7788, 2.884 (Impact Factor 2014).",
    pub_isi_51: "Svetlana Ushak, M. Judith Cruz, Luisa F. Cabeza, Mario Grágeda. Preparation and Characterisation of Inorganic PCM Microcapsules by Fluidised Bed Method. Materials 2016, 9(1), 24; doi: 10.3390/ma9010024. Basel, Switzerland. ISSN 1996-1944. Impact factor 2.651",
    pub_isi_52: "Gutierrez A., Miró L., Gil J., Rodríguez-Aseguinolaza J., Barreneche C., Calvet N., Py X., Fernández M.I., Grágeda M., Ushak S., Cabeza L.F. Advances in the valorisation of waste and by-product materials as thermal energy storage (TES) materials. doi:10.1016/j.rser.2015.12.071. Renewable and Sustainable Energy Reviews, Volume 59, 2016, pp. 763-783. Elsevier Ltd. USA. ISSN: 1364-0321. Impact factor 5.901",
    pub_isi_53: "M. Grágeda, M. Escudero, W. Alavia, S. Ushak, V. Fthenakis. Review and multi-criteria assessment of solar energy projects in Chile. doi:10.1016/j.rser.2015.12.149. Renewable and Sustainable Energy Reviews, Volume 59, 2016, pp. 583-596. Elsevier Ltd. USA. ISSN: 1364-0321. Impact factor 5.901",
    pub_isi_54: "M. Grágeda, A. González, W. Alavia, S. Ushak. Development and Optimisation of a Modified Process for Producing the Battery Grade LiOH: Optimisation of Energy and Water Consumption. Energy, Volume 89, 2015, pp. 667-677. Elsevier Ltd. USA. ISSN: 0360-5442. Impact factor 4.844",
    pub_isi_55: "Andrea Gutierrez, Svetlana Ushak, Hector Galleguillos, Angel Fernandez, Luisa F. Cabeza, Mario Grágeda. Use of polyethylene glycol for the improvement of the cycling behaviour of bischofite as thermal energy storage material. Applied Energy, Volume 154, 15 September 2015, Pages 616–621. Elsevier Ltd. USA. ISSN: 0306-2619. Impact factor 5.613",
    pub_isi_56: "Luisa F. Cabeza, Andrea Gutierrez, Camila Barreneche, Svetlana Ushak, Angel Fernandez, A. Inés Fernández, Mario Grageda. Lithium in thermal energy storage: A state-of-the-art review. Renewable & Sustainable Energy Reviews, Volume 42, pp. 1106–1112, 2015. Elsevier Ltd. USA. ISSN: 1364-0321. Impact factor 5.510",
    pub_isi_57: "Svetlana Ushak, Andrea Gutierrez, Hector Galleguillos, Angel Fernandez, Luisa F. Cabeza, Mario Grágeda. Thermophysical characterisation of a by-product from the non-metallic industry as inorganic PCM. Solar Energy Materials and Solar Cells, Volume 132, pp. 385–391, 2015. ISSN: 0927-0248. Impact factor 5.337",
    pub_isi_58: "Fernández, S. Ushak, H. Galleguillos, F. Pérez. Thermal characterisation of an innovative quaternary molten nitrate mixture for energy storage in CSP plants. Solar Energy Materials and Solar Cells, Volume 132, January 2015, Pages 172-177",
    pub_isi_59: "A.G. Fernández, S. Ushak, H. Galleguillos, F.J. Pérez. Development of new molten salts with LiNO₃ and Ca(NO₃)₂ for energy storage in CSP plants. Applied Energy, Volume 119, 15 April 2014, 131–140",
    pub_isi_60: "Jaime W. Morales, Héctor R. Galleguillos, Teófilo A. Graber, Felipe Hernández-Luis. Activity coefficients of LiCl in (PEG 4000 + water) at T = (288.15, 298.15, and 308.15) K. J. Chem. Thermodynamics 42, 1255–1260 (2010)",
    pub_isi_61: "Graber T.A., Morales J.W., Robles P.A., Galleguillos H.R., and Taboada M.E. Behaviour of LiOH*H₂O crystals obtained by evaporation and by drowning out. Crystal Research & Technology, Vol. 43, Nº 6, pp. 616-625 (2008)",
    pub_isi_62: "Hernandez-Luis F., Galleguillos, H.; Graber, T.; Taboada M.E. Activity Coefficients of LiCl in Ethanol-Water Mixtures at 298.15 K. Industrial and Engineering Chemistry Research, 47, pp. 2056-2062 (2008)",
    pub_isi_63: "Kwok K.S., Ng K.M., Taboada M.E., Cisternas L.A. Thermodynamics of salt lake system: Representation, experiments, and visualisation. AICHE Journal, 54 (3), 706-727 (2008)",
    pub_isi_64: "Taboada M.E., T.A. Graber and L.A. Cisternas. Process Design for Drowning-out Crystallisation of Lithium Hydroxide Monohydrate. Chemical Engineering Research and Design, 85, A9, pp. 1325-1330 (2007)",
    pub_isi_65: "Taboada M.E., Galleguillos H.R., Graber T.A. and Álvarez J. Density, viscosity, refractive index and electrical conductivity of saturated solutions of the lithium hydroxide + ethanol + water system at 298.15 K, and thermodynamic description of the solid-liquid equilibrium. Fluid Phase Equilibria, vol. 235, pp. 104-111 (2005)",
    pub_scopus_1: "Fthenakis, V., Atia, A.A., Perez, M., Florenzano, A., Grageda, M., Lofat, M., Ushak, S., Palma, R. Prospects for photovoltaics in sunny and arid regions: A solar grand plan for Chile - Part I - Investigation of PV penetration. Proceeding: 2014 IEEE 40th Photovoltaic Specialist Conference, PVSC 2014, art. no. 6925184, pp. 1424-1429, ISBN: 978-147994398-2; SCOPUS",
    pub_scopus_2: "S. Ushak, A. Gutierrez, E. Flores, H. Galleguillos, M. Grageda. Development of Thermal Energy Storage Materials from Waste-Process Salts. Energy Procedia, vol. 57, pp. 627-632, 2014. ISSN: 1876-6102",
    pub_scopus_3: "S. Ushak, M. Grágeda, D. Pulido, E. Oró, L.F. Cabeza. Application of solar heating of electrolyte for electrowinning process: thermosolar plant performance. Energy Procedia, vol. 57, pp. 2930-2936, 2014. ISSN: 1876-6102",
    pub_scopus_4: "A.G. Fernández, M. Grágeda, H. Galleguillos. Impurity Influence in Physico-chemical and Corrosion Properties of Chilean Solar Nitrates. Energy Procedia, Volume 49, pp. 607-616, 2014. ISSN: 1876-6102",
    pub_book_1: "S. Ushak, A. Fernandez, M. Grageda. Chapter “Advances in molten salt storage systems using liquid sensible storage media for heat storage”, in book “Advances in thermal energy storage systems: Methods and applications”, Woodhead Publishing Ed., pp. 49-64, 2014",
    pub_book_2: "Mario Grágeda, Pedro Vargas and Svetlana Ushak. Chapter “Modelo productivo del litio en Chile: antecedentes, procesos productivos, marco legal, avances y proyecciones y evaluación crítica“, in book “ABC del Litio Sudamericano\" edited by the Universidad Nacional de Quilmes and the Centro Cultural de la Cooperación, pp. 353-380. ISBN 978-987-3920-14-1, 2015",
    pub_book_3: "L. Cabeza, M.I. Fernandez, C. Barrenche, S. Ushak. Chapter “PCM Storage”, in book “Handbook of Clean Energy Systems. John Wiley and Sons Ltd, V.5, pp. 2455-2477, 2015",
    // News Section
    news1_desc: "11th International Conference on Lithium, Industrial Minerals and Energy<br>November 27th to 29th. Antofagasta, Chile",
    news1_audio_title: "Audio: CELIMIN SPANISH FRANCO",
    news1_audio_warning: "Your browser does not support the audio player.",
    news2_title: "LITHIUM: THE CHALLENGE OF CREATING A NEW INDUSTRY",
    news2_date: "August 2017",
    news2_desc: "The impetus behind renewable energy and electro mobility is driving increasing demand for lithium, but if Chile fails to take the right steps it could miss the chance to become the global leader in the field. The main challenges towards that goal include progressing from the exportation of the raw material to that of more sophisticated products, while not overlooking the production and refinement of the mineral itself, as well as ensuring the incorporation of new technologies and well-trained human capital.",
    news2_read_more: "Read more →",
    news3_title: "CELiMIN POSITIONS WITH A NEW BRAND",
    news3_date: "August 2013",
    news3_desc: "The Center for Advanced Research in Lithium and Industrial Minerals, launches its new brand in the second half of this year.<br><br>Now with a new image, the CELiMIN is positioned as one of the powerful research centers in the area in the north of the country, impacting with new projects, new partnerships and innovations in the research development of the field in which they operate through creating exciting new projects and instances.",
    news4_title: "1st INTERNATIONAL WORKSHOP \"IWLiME\"",
    news4_date: "August 2013",
    news4_desc: "The Center for Advanced Research and Industrial Minerals Lithium, CELiMIN, organized the first International Workshop under the name \"IWLiME\", which is aimed at researchers and practitioners from universities, research centers and graduate students.<br><br>The main topics to be discussed at the Workshop, are related to the development of lithium batteries, thermal storage, among others. The objective of this activity is to provide current projects that are being generated in areas of energy with emphasis on lithium, in addition to promoting the complement that is generated by the researches conducted with universities throughout Chile.",
    news5_title: "JAPAN CREATES MATERIAL TO ENLARGE IN 10 TIMES THE MOBILE BATTERY",
    news5_date: "August 2013",
    news5_desc: "The Japanese company Shin-Etsu has developed a material that could increase up to 10 times the capacity of lithium-ion batteries used in mobile phones.<br><br>The Japanese company specializing in semiconductor has been using its technology to produce the sheets of silicone that retain electric charge in the battery, an alternative to carbon-based materials typically used.<br><br>Shin-Etsu, which could start producing massively this product in 3 or 4 years, has sent prototypes to battery manufacturers in and outside Japan to study aspects such as cost and wear over time of materials used.",
    // Laboratory Equipment Section
    lab1_eq_1: "Rotavapor (Buchi, R-210 model), this equipment allows to study effects of evaporation and crystallization.",
    lab1_eq_2: "DSC - differential scanning calorimeter (NETZSCH, model 204 F1 Phoenix).",
    lab1_eq_3: "Galvanostat-potentiostat (Metrohm, Autolab PGSTAT302N) with a compliance voltage of 30 V and a bandwidth of 1 MHz, is specially designed for electrochemical impedance spectroscopy.",
    lab1_eq_4: "Vacuum mixer (MTI, model MSK-SFM-7-220) used for mixing in the manufacture of electrodes.",
    lab1_eq_5: "Coating machine (MTI, MSK-AFA-III model), equipment used for coating electrodes.",
    lab1_eq_6: "Hot Rolling Machine (MTI, model MSK-HRP-01), compression equipment used in the manufacture of electrodes.",
    lab1_eq_7: "Ultrasonic Welder (SNLG, Model SDA80X30) equipment used for terminal soldier in the assembly of cells.",
    lab1_eq_8: "Vacuum sealer for lithium cell (MTI, model MSK-115A-220), for packaging equipment used during assembly of the cell.",
    lab1_eq_9: "Temperature sealant (MTI, MSK-140 model), reinforced carcass instrument used for packing the cell.",
    lab1_eq_10: "Electric crimper (MTI, model MSK-160D), to manufacture coin type cells both inside and outside of the glove box.",
    lab1_eq_11: "Glovebox (MTI model VGB-3P), used in the filling, final stage of the assembly cell.",
    lab1_eq_12: "Battery cycler (MTI, BST8-3A model) equipment used for the activation of the batteries.",
    lab2_eq_1: "Calorimetric reactor, Mettler Toledo, model RC1.",
    lab2_eq_2: "Particle siza analyzer, Horiba, model CAPA-3000",
    lab2_eq_3: "Crystallization Unit.",
    lab2_eq_4: "Equipment for measuring vapor pressures and thermodynamic activity of water aw, Novasina, AW-CENTER .",
    lab2_eq_5: "Phase equilibria unit for solid-liquid equilibrium studies",
    lab2_eq_6: "Programmable cone plate rheometer, Brookfield, model DV-III, spindle CP-40.",
    lab2_eq_7: "Phase equilibrium unit for liquid-liquid and solid-liquid equilibrium studies",
    lab2_eq_8: "Refrigerated centrifuge, universal, model 32R",
    lab2_eq_9: "Densimeter, Mettler Toledo, model DE50. Measurement ranges from 0.00001 to 3 g/cm3.",
    lab2_eq_10: "Refractometer, Mettler Toledo, model RE40. Measuring ranges from 1.3200 to 1.7000.",
    lab2_eq_11: "Conductivimeter, Orion, model 170.",
    lab2_eq_12: "Viscometer, Schott Gerate, model AVS-310.",
    lab2_eq_13: "Rotary Evaporator, Buchi, model W2000.",
    lab2_eq_14: "Titrator, Mettler Toledo, model DL31, for water analysis.",
    lab2_eq_15: "Unit for measuring diffusion coefficients liquid-liquid, Armfield.",
    lab2_eq_16: "Determination Unit for electrolyte activity coefficients, Keithley.",
    lab3_eq_1: "Atomic absorption spectrophotometer ,Varian, model 220 FS",
    lab3_eq_2: "Molecular absorption spectrophotometer, Unicam, model UV2",
    lab3_eq_3: "Gas chromatograph, Varian, model CP-3380.",
    lab4_eq_1: "Calorimeter, SETARAM brand, model C80.",
    lab4_eq_2: "Phase Balance Unit 120 liters.",
    lab4_eq_3: "Particle Size Analyzer, Mastersizer, model 2000.",
    lab4_eq_4: "Thermal Analysis System, Mettler Toledo, model 1100 TGA/DSC1 LF.",
    // Additional Team Qualifications & Areas
    team_deg_master_stud: "Master's Student in Mineral Process Engineering",
    team_deg_mech_civ: "MECHANICAL CIVIL ENGINEER",
    team_deg_env_eng: "ENVIRONMENTAL ENGINEER",
    team_deg_chem_sci: "BACHELOR OF CHEMICAL SCIENCES",
    team_deg_mining_eng: "MINING ENGINEER",
    team_deg_elec_eng: "ELECTRICAL ENGINEER",
    team_deg_met_eng: "METALLURGICAL ENGINEER",
    team_deg_met_mat_eng: "METALLURGICAL AND MATERIALS ENGINEER",
    team_deg_metal_civ: "METALLURGICAL CIVIL ENGINEER",
    team_deg_biotech: "BIOTECHNOLOGIST",
    team_deg_thesis_stud: "THESIS STUDENT IN MINERAL PROCESS CIVIL ENGINEERING",
    team_area_recycling: "Lithium-Ion Battery Recycling",
    team_area_synth_adv: "Synthesis of Advanced Materials for Lithium-Ion Batteries",
    team_area_cathodic: "Synthesis and Cathode Materials",
    team_area_membranes: "Processes and Membranes",
    team_area_edl: "Direct Lithium Extraction (DLE)",

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
