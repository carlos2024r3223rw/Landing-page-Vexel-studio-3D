/* VEXEL Studio — bilingual portfolio concept */
document.addEventListener('DOMContentLoaded', () => {
  const english = {
  "Proyectos": "Projects",
  "Tecnología": "Process",
  "Servicios": "Services",
  "Explorar cotización": "Explore the brief",
  "Estudio conceptual de visualización 3D": "3D visualization concept studio",
  "Damos vida a tus ideas antes de que existan.": "See your ideas before they exist.",
  "Renderizado fotorrealista y modelado 3D de alta gama para arquitectura, interiorismo y diseño de producto. Precisión milimétrica, impacto visual absoluto.": "Photorealistic rendering and 3D modeling for architecture, interiors and product design. Careful detail, compelling imagery.",
  "Ver Portafolio": "View portfolio",
  "Explorar una cotización": "Explore a project brief",
  "Del concepto a la realidad": "From concept to vision",
  "Mueve el control para comparar un efecto de malla conceptual con la imagen final.": "Move the control to compare a conceptual wireframe effect with the final image.",
  "Render Final": "Final render",
  "Efecto de malla": "Wireframe effect",
  "Nuestra Especialidad": "Our expertise",
  "Infoarquitectura": "Architectural visualization",
  "Renders exteriores e interiores, planimetría 3D y recorridos virtuales para real estate y despachos de arquitectura.": "Exterior and interior renders, 3D floor plans and virtual tours for real estate and architecture.",
  "Diseño de Producto": "Product design",
  "Imágenes de estudio, prototipado visual y vistas explosionadas para campañas de marketing y presentaciones.": "Studio imagery, visual prototypes and exploded views for campaigns and presentations.",
  "Modelado optimizado (low-poly / high-poly), retopología y texturizado PBR para motores como Unreal Engine o Unity.": "Optimized low-poly and high-poly modeling, retopology and PBR texturing for engines such as Unreal Engine and Unity.",
  "Portafolio Destacado": "Selected work",
  "Explora tres piezas visuales de este portafolio conceptual.": "Explore three visual pieces from this concept portfolio.",
  "Exterior · Iluminación Twilight": "Exterior · twilight lighting",
  "Interior · Luz Natural": "Interior · natural light",
  "Producto · Studio Setup": "Product · studio setup",
  "Inicia tu proyecto": "Shape your project",
  "Configura un brief de ejemplo y revisa el resumen al instante. Esta demo no envía datos.": "Build a sample brief and review it instantly. This demo does not send data.",
  "Tipo de proyecto": "Project type",
  "Detalles técnicos": "Project details",
  "Resumen": "Summary",
  "¿Qué necesitas renderizar?": "What would you like to render?",
  "Arquitectura": "Architecture",
  "Interiorismo": "Interiors",
  "Producto": "Product",
  "Otro": "Other",
  "Continuar": "Continue",
  "Detalles del proyecto": "Project details",
  "Cantidad aproximada de imágenes": "Approximate number of images",
  "1 a 3 renders": "1 to 3 renders",
  "4 a 10 renders": "4 to 10 renders",
  "Más de 10 renders": "More than 10 renders",
  "Animación / Recorrido": "Animation / walkthrough",
  "¿Cuentas con el modelo 3D base?": "Do you already have a 3D model?",
  "Sí (Solo requiero materiales y luz)": "Yes (materials and lighting only)",
  "No (Requiero modelado desde planos/bocetos)": "No (modeling from plans or sketches)",
  "Descripción breve (opcional)": "Short description (optional)",
  "Atrás": "Back",
  "Revisa tu proyecto": "Review your project",
  "Este resumen es una vista previa local. No crea una solicitud ni envía información.": "This is a local preview. It does not create a request or send information.",
  "Crear resumen demo": "Create demo summary",
  "Vista previa creada": "Preview created",
  "Este brief de ejemplo se generó solo en tu navegador. No se envió ninguna solicitud ni se guardaron datos.": "This sample brief was generated in your browser. No request was sent and no data was stored.",
  "Crear otro brief": "Create another brief",
  "Concepto de portafolio para un estudio de visualización 3D. No representa una empresa activa.": "A portfolio concept for a 3D visualization studio. This is not an active business.",
  "Brief demo": "Demo brief",
  "© 2026 VEXEL Studio. Todos los derechos reservados.": "© 2026 VEXEL Studio. All rights reserved.",
  "Diseñado con precisión.": "Designed with precision."
};
  const textNodes = new Map();
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  while (walker.nextNode()) {
    const node = walker.currentNode;
    const key = node.nodeValue.trim().replace(/\s+/g, ' ');
    if (Object.prototype.hasOwnProperty.call(english, key)) textNodes.set(node, { key, original: node.nodeValue });
  }

  const meta = document.querySelector('meta[name="description"]');
  const originalTitle = document.title;
  const originalDescription = meta.content;
  const attributes = [
    [document.getElementById('menuToggle'), 'aria-label', 'Open menu'],
    [document.getElementById('comparisonRange'), 'aria-label', 'Compare wireframe effect and final render'],
    [document.querySelector('.hero-img'), 'alt', 'Architectural interior render'],
    [document.querySelector('.slider-img-after img'), 'alt', 'Final architectural render'],
    [document.querySelector('.slider-img-before img'), 'alt', 'Conceptual wireframe effect over the render'],
    [document.querySelector('.gallery-item:nth-child(1) img'), 'alt', 'Architectural concept project'],
    [document.querySelector('.gallery-item:nth-child(2) img'), 'alt', 'Interior concept project'],
    [document.querySelector('.gallery-item:nth-child(3) img'), 'alt', 'Product concept project'],
    [document.getElementById('projectDescription'), 'placeholder', 'E.g. Three interior renders for a sample apartment...']
  ].map(([element, name, englishValue]) => ({ element, name, englishValue, spanishValue: element.getAttribute(name) }));

  const form = document.getElementById('quoteForm');
  const languageButtons = document.querySelectorAll('[data-language]');
  let language = 'es';
  let step = 1;

  const labels = {
    arquitectura: { es: 'Arquitectura', en: 'Architecture' },
    interiorismo: { es: 'Interiorismo', en: 'Interiors' },
    producto: { es: 'Producto', en: 'Product' },
    otro: { es: 'Otro', en: 'Other' },
    '1-3': { es: '1 a 3 renders', en: '1 to 3 renders' },
    '4-10': { es: '4 a 10 renders', en: '4 to 10 renders' },
    '10+': { es: 'Más de 10 renders', en: 'More than 10 renders' },
    animacion: { es: 'Animación / Recorrido', en: 'Animation / walkthrough' }
  };

  function addSummaryRow(target, title, value) {
    const row = document.createElement('div');
    const label = document.createElement('span');
    const detail = document.createElement('strong');
    label.textContent = title;
    detail.textContent = value;
    row.append(label, detail);
    target.appendChild(row);
  }
  function renderSummary(target) {
    target.replaceChildren();
    const project = form.elements.projectType.value;
    const count = form.elements.imageCount.value;
    const hasModel = form.elements.hasModel.value === 'si';
    const description = form.elements.description.value.trim();
    addSummaryRow(target, language === 'en' ? 'Project' : 'Proyecto', labels[project][language]);
    addSummaryRow(target, language === 'en' ? 'Deliverables' : 'Entregables', labels[count][language]);
    addSummaryRow(target, language === 'en' ? 'Base model' : 'Modelo base', language === 'en' ? (hasModel ? 'Available' : 'Needed') : (hasModel ? 'Disponible' : 'Necesario'));
    if (description) addSummaryRow(target, language === 'en' ? 'Notes' : 'Notas', description);
  }

  function setLanguage(next) {
    language = next;
    document.documentElement.lang = next;
    textNodes.forEach(({ key, original }, node) => {
      node.nodeValue = next === 'en' ? original.replace(/\S[\s\S]*\S/, english[key]) : original;
    });
    attributes.forEach(({ element, name, englishValue, spanishValue }) => {
      element.setAttribute(name, next === 'en' ? englishValue : spanishValue);
    });
    document.title = next === 'en' ? 'VEXEL Studio | 3D Visualization Concept' : originalTitle;
    meta.content = next === 'en' ? 'A 3D visualization portfolio concept for architecture, interiors and product design.' : originalDescription;
    languageButtons.forEach(button => button.setAttribute('aria-pressed', String(button.dataset.language === next)));
    if (step === 3) renderSummary(document.getElementById('quotePreview'));
    if (document.getElementById('step-success').classList.contains('active')) renderSummary(document.getElementById('quoteResult'));
    try { localStorage.setItem('vexel-language', next); } catch (_) {}
  }
  languageButtons.forEach(button => button.addEventListener('click', () => setLanguage(button.dataset.language)));
  let initial = 'es';
  try { initial = localStorage.getItem('vexel-language') === 'en' ? 'en' : 'es'; } catch (_) {}
  setLanguage(initial);

  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => navbar.classList.toggle('nav-scrolled', window.scrollY > 50), { passive: true });
  const menuToggle = document.getElementById('menuToggle');
  const navLinks = document.getElementById('navLinks');
  menuToggle.addEventListener('click', () => {
    const open = navLinks.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(open));
  });
  navLinks.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
  }));

  const comparison = document.getElementById('beforeAfterSlider');
  const range = document.getElementById('comparisonRange');
  const before = document.getElementById('sliderBefore');
  const handle = document.getElementById('sliderHandle');
  const beforeImage = before.querySelector('img');
  const updateComparison = () => {
    before.style.width = range.value + '%';
    handle.style.left = range.value + '%';
    beforeImage.style.width = comparison.clientWidth + 'px';
  };
  range.addEventListener('input', updateComparison);
  window.addEventListener('resize', updateComparison);
  updateComparison();

  function showStep(next) {
    document.getElementById('step-' + step).classList.remove('active');
    step = next;
    document.getElementById('step-' + step).classList.add('active');
    for (let i = 1; i <= 3; i++) {
      const indicator = document.getElementById('indicator-' + i);
      indicator.classList.toggle('active', i === step);
      indicator.classList.toggle('completed', i < step);
    }
    if (step === 3) renderSummary(document.getElementById('quotePreview'));
  }
  form.querySelectorAll('[data-next]').forEach(button => button.addEventListener('click', () => showStep(Number(button.dataset.next))));
  form.querySelectorAll('[data-prev]').forEach(button => button.addEventListener('click', () => showStep(Number(button.dataset.prev))));
  form.addEventListener('submit', event => {
    event.preventDefault();
    if (step !== 3) return;
    renderSummary(document.getElementById('quoteResult'));
    document.getElementById('step-3').classList.remove('active');
    document.getElementById('indicator-3').classList.remove('active');
    document.getElementById('indicator-3').classList.add('completed');
    document.getElementById('step-success').classList.add('active');
  });
  document.getElementById('resetQuote').addEventListener('click', () => {
    form.reset();
    document.getElementById('step-success').classList.remove('active');
    step = 3;
    showStep(1);
  });
});
