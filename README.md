<div align="center">

# 🎨 VEXEL Studio — Landing Page

### Estudio de Renderizado 3D e Infoarquitectura

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

Landing page moderna y profesional para **VEXEL Studio**, un estudio especializado en modelado 3D, renderizado fotorrealista e infoarquitectura. Diseñada para captar clientes del sector arquitectónico, inmobiliario y de diseño de producto.

[🌐 Demo en Vivo](#) · [📂 Estructura](#-estructura-del-proyecto) · [🚀 Instalación](#-instalación-y-uso)

</div>

---

## 📸 Vista Previa

> Landing page con diseño minimalista, tipografía premium y animaciones sutiles orientada a la conversión de clientes potenciales.

---

## ✨ Características Principales

### 🖥️ Interfaz & Diseño
- **Diseño responsive** — Adaptable a móvil, tablet y escritorio
- **Tipografía premium** — Fuente [Inter](https://fonts.google.com/specimen/Inter) de Google Fonts (pesos 200–600)
- **Paleta minimalista** — Tonos neutros con acentos oscuros, ideal para portafolios creativos
- **Navbar con efecto scroll** — Fondo y borde cambian dinámicamente al hacer scroll
- **Menú hamburguesa** — Navegación adaptada para dispositivos móviles

### 🔄 Slider Before / After (Comparador Interactivo)
- Slider arrastrabl que compara un **wireframe** con el **render fotorrealista final**
- Soporte completo para **mouse y touch** (dispositivos táctiles)
- Overlay de wireframe con efecto visual sobre la imagen base
- Etiquetas "Wireframe" y "Render Final" integradas

### 🏗️ Sección de Servicios
Tres tarjetas con las especialidades del estudio:

| # | Servicio | Descripción |
|---|----------|-------------|
| 01 | **Infoarquitectura** | Renders exteriores/interiores, planimetría 3D y recorridos virtuales para real estate |
| 02 | **Diseño de Producto** | Imágenes de estudio, prototipado visual y vistas explosionadas para marketing |
| 03 | **Game Assets** | Modelado low-poly/high-poly, retopología y texturizado PBR para Unreal Engine y Unity |

### 🖼️ Galería / Portafolio
- Grid de proyectos destacados con **overlay hover animado**
- Cada proyecto muestra título, categoría y tipo de iluminación
- Proyectos de ejemplo: *Residencia Silva*, *Penthouse M5*, *Aura Audio*

### 📝 Formulario de Cotización (Multi-Step)
Formulario de **3 pasos** con indicador de progreso visual:

1. **Paso 1 — Tipo de proyecto:** Selección con tarjetas visuales (Arquitectura, Interiorismo, Producto, Otro)
2. **Paso 2 — Detalles técnicos:** Cantidad de renders, disponibilidad de modelo 3D base, descripción del proyecto
3. **Paso 3 — Datos de contacto:** Nombre, correo electrónico y empresa/estudio
4. **Pantalla de éxito:** Confirmación visual con ícono ✓ y mensaje de seguimiento

### 🔍 SEO
- Meta tags optimizados (`title`, `description`)
- HTML semántico con estructura de headings correcta
- Atributos `alt` en todas las imágenes
- Carga diferida (`loading="lazy"`) en imágenes de galería

---

## 📂 Estructura del Proyecto

```
Landing-page-Vexel-studio-3D/
│
├── index.html        # Estructura HTML principal (277 líneas)
├── style.css         # Estilos CSS completos — diseño, responsive, animaciones
├── script.js         # Lógica JS — navbar, slider before/after, formulario multi-step
├── hero.png          # Imagen principal del hero y comparador
├── arch.png          # Imagen de proyecto de arquitectura (galería)
├── product.png       # Imagen de proyecto de producto (galería)
└── README.md         # Este archivo
```

---

## 🚀 Instalación y Uso

### Opción 1 — Abrir directamente
No requiere instalación ni dependencias. Simplemente abre `index.html` en tu navegador:

```bash
# Clonar el repositorio
git clone https://github.com/carlos2024r3223rw/Landing-page-Vexel-studio-3D.git

# Abrir en el navegador
start index.html          # Windows
open index.html           # macOS
xdg-open index.html       # Linux
```

### Opción 2 — Servidor local (recomendado)
Para evitar restricciones de CORS con las fuentes de Google:

```bash
# Con Python 3
python -m http.server 8000

# Con Node.js (si tienes npx)
npx serve .

# Con VS Code
# Instala la extensión "Live Server" y haz clic en "Go Live"
```

Luego visita `http://localhost:8000` en tu navegador.

---

## 🛠️ Tecnologías Utilizadas

| Tecnología | Uso |
|---|---|
| **HTML5** | Estructura semántica de la página |
| **CSS3** | Estilos, responsive design, animaciones, glassmorphism |
| **Vanilla JavaScript** | Interactividad (slider, formulario, navbar) — sin frameworks ni librerías |
| **Google Fonts (Inter)** | Tipografía moderna y legible |
| **SVG inline** | Íconos del slider de comparación |

---

## 📐 Detalles Técnicos

### Responsive Design
La landing se adapta a todos los tamaños de pantalla:
- **Desktop:** Layout completo con grid de servicios y galería a 3 columnas
- **Tablet (≤ 768px):** Menú hamburguesa, grids a 2 columnas
- **Móvil (≤ 480px):** Layout de 1 columna, formulario apilado

### JavaScript — Módulos Funcionales

```
script.js
├── initNavbar()      → Efecto de scroll en navbar + menú móvil toggle
├── initSlider()      → Slider before/after con eventos mouse + touch
├── initForm()        → Formulario multi-step (no utilizado directamente, lógica en funciones globales)
├── nextStep(step)    → Avanza al siguiente paso del formulario
├── prevStep(step)    → Retrocede al paso anterior
└── submitForm()      → Valida campos y muestra pantalla de éxito
```

### CSS — Organización
- Variables CSS para colores y espaciado consistente
- Sistema de grid con `display: grid` y `display: flex`
- Transiciones suaves en hover y estados activos
- Overlay de galería con `opacity` y `transform`

---

## 📄 Licencia

Este proyecto es de uso libre para fines educativos y de portafolio.

---

<div align="center">

**Diseñado con precisión. ✦**

© 2026 VEXEL Studio

</div>
