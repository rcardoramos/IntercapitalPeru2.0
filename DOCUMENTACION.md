# Documentación Técnica — IntercapitalPeru 2.0

> Plataforma web institucional de **Intercapital Perú**, empresa especializada en préstamos hipotecarios e inversiones con garantía real inscrita en SUNARP.

---

## 1. Visión General del Proyecto

| Atributo | Detalle |
|---|---|
| **Nombre del proyecto** | IntercapitalPeru2.0 |
| **Framework** | React 19 + TypeScript 6 |
| **Bundler** | Vite 8 |
| **Estilos** | Tailwind CSS 4 |
| **Ruteo** | React Router DOM 7 |
| **Formularios** | React Hook Form + Zod |
| **Animaciones** | Framer Motion 12 |
| **Íconos** | Lucide React + React Icons |
| **Carousels** | Swiper 12 |
| **Integración de formularios** | Forminit SDK (CDN) |

### Comandos disponibles

```bash
npm run dev       # Servidor de desarrollo (Vite HMR)
npm run build     # Compilación TypeScript + bundle producción
npm run preview   # Preview del build de producción
npm run lint      # ESLint
```

---

## 2. Arquitectura de Directorios

```
IntercapitalPeru2.0/
├── public/
│   ├── img/                    # Imágenes estáticas (logos, artículos, clientes)
│   └── videos/                 # Videos de testimonios e inversionistas
│       ├── Testimonio1_Flavio.mp4
│       ├── Testimonio2_Cecilia.mp4
│       ├── Testimonio3_Maribel.mp4
│       ├── page-inversionista-video.mp4
│       └── videopresentacion-principal.mp4
├── src/
│   ├── App.tsx                 # Raíz de la app, rutas, modal global de cotización
│   ├── main.tsx                # Entry point de React
│   ├── index.css               # Tokens de diseño y estilos globales
│   ├── pages/                  # Páginas (vistas por ruta)
│   ├── components/
│   │   ├── layout/             # Navbar y Footer
│   │   ├── sections/           # Secciones de página (Hero, FormQuote, etc.)
│   │   ├── shared/             # Elementos reutilizables (Container, SectionTitle)
│   │   └── ui/                 # Componentes atómicos (Button, Input, Card, etc.)
│   ├── data/
│   │   └── mockData.ts         # Datos de contenido (beneficios, FAQs, blog, etc.)
│   └── utils/
│       └── cn.ts               # Utilidad para combinar clases Tailwind
├── index.html                  # HTML raíz (incluye SDK de Forminit)
└── vite.config.ts
```

---

## 3. Rutas de la Aplicación

| Ruta | Componente | Descripción |
|---|---|---|
| `/` | `Home` | Página principal con todas las secciones |
| `/invierte` | `InviertePage` | Simulador de inversión + formulario de inversionista |
| `/careers` | `CareersPage` | Ofertas de empleo y cultura organizacional |
| `/privacidad` | `PrivacidadPage` | Política de privacidad de datos |
| `/blog/:id` | `BlogDetailPage` | Artículo de blog individual |

### Comportamiento de navegación

- **`ScrollToTop`**: Componente auxiliar en `App.tsx` que hace scroll al top al cambiar de ruta. Si la URL contiene un hash (e.g., `/#cotiza`), hace scroll suave al elemento con ese `id`.
- Los links del Navbar marcados como `isHash: true` hacen scroll al elemento si estás en `/`, o redirigen a `/{hash}` desde otra ruta.

---

## 4. Páginas

### 4.1 Home (`/`)

Página principal compuesta por las siguientes secciones en orden:

| Orden | Componente | ID de ancla |
|---|---|---|
| 1 | `<Hero />` | — |
| 2 | `<Partners />` | — |
| 3 | `<Benefits />` | `#beneficios` |
| 4 | `<Process />` | `#proceso` |
| 5 | `<FormQuote />` | `#cotiza` |
| 6 | `<Testimonials />` | `#testimonios` |
| 7 | `<VideoTestimonials />` | — |
| 8 | `<Blog />` | `#blog` |
| 9 | `<FAQ />` | `#faq` |
| 10 | `<CTAFinal />` | — |

---

### 4.2 InviertePage (`/invierte`)

Página para inversionistas con 3 bloques principales:

1. **Hero Header** — Título con gradiente sobre fondo `navy-deep`, propuesta de valor.
2. **Video del Inversionista** — Grid de 2 columnas: texto con estadísticas (TEA, LTV, SUNARP, plazo mínimo) + video `page-inversionista-video.mp4` con controles nativos del navegador.
3. **Simulador + Formulario** — Grid 12 columnas:
   - *Columna izquierda (7 cols)*: Simulador interactivo (sliders de monto y plazo, selector de moneda PEN/USD, resultados calculados en tiempo real) + explicación legal ("¿Cómo se resguarda tu dinero?").
   - *Columna derecha (5 cols)*: Formulario de registro de inversionista conectado a Forminit.

---

### 4.3 CareersPage (`/careers`)

Página de empleo con listado de posiciones abiertas (componente `<Careers />`).

### 4.4 PrivacidadPage (`/privacidad`)

Documento completo de política de privacidad y tratamiento de datos personales.

### 4.5 BlogDetailPage (`/blog/:id`)

Renderiza el artículo completo según el `id` extraído de la URL, consultando `blogArticles` de `mockData.ts`. Contiene un CTA para abrir el modal de cotización global.

---

## 5. Componentes de Layout

### 5.1 Navbar

**Archivo:** `src/components/layout/Navbar.tsx`

- **Header adaptativo**: Transparente en el Hero (`/`), sólido blanco (`bg-white/95`) cuando se hace scroll o en cualquier otra ruta.
- **Logo dual**: Blanco (`Logo ICP Blanco.png`) en header transparente, azul (`Logo ICP azul.png`) en header sólido.
- **Links de navegación:**

| Nombre | Destino | Tipo |
|---|---|---|
| Beneficios | `#beneficios` | Hash anchor |
| Proceso | `#proceso` | Hash anchor |
| Invierte con Nosotros | `/invierte` | Ruta |
| Blog | `#blog` | Hash anchor |
| Careers | `/careers` | Ruta |
| Preguntas Frecuentes | `#faq` | Hash anchor |

- **CTA "Cotizar préstamo"**: Hace scroll a `#cotiza` si estás en `/`, o navega a `/#cotiza` desde otra ruta.
- **Menú móvil**: Drawer animado con Framer Motion, activa al hacer click en el botón hamburguesa.

### 5.2 Footer

**Archivo:** `src/components/layout/Footer.tsx`

Contiene enlaces de redes sociales, información legal, links a páginas internas y créditos.

---

## 6. Secciones de la Home

### 6.1 Hero
- Imagen de fondo (`/img/careers.jpg`) con overlay oscuro.
- Título principal con gradiente cyan.
- 2 CTAs: "Solicitar Ahora" (scroll a `#cotiza`) y "Conoce Más" (scroll a `#beneficios`).
- 3 trust factors: Evaluación < 48h, Legalidad notarial, Aprobación con Infocorp.
- 2 `StatCard` flotantes: "+1,600 préstamos otorgados" y "+5 años de experiencia".

### 6.2 Partners
Carrusel de logos de socios: **CAENE, DPI 1080, ELE, NOBILITY, NOTARIA LEYTON, SENTINEL**.

### 6.3 Benefits
4 tarjetas de beneficios clave: Tasas Competitivas, Desembolso Rápido, Aprobación con Infocorp, Seguridad Garantizada.

### 6.4 Process
4 pasos del proceso: Solicitud → Avalúo → Aprobación → Desembolso.

### 6.5 FormQuote (Simulador de Crédito)
- Sliders interactivos: monto del préstamo y plazo en meses.
- Formulario de solicitud con validación Zod.
- Conectado a **Forminit** con ID `q0v0rfl5gr7`.

### 6.6 Testimonials
Carrusel Swiper con 4 testimoniales de clientes (texto + avatar).

### 6.7 VideoTestimonials
- 3 tarjetas verticales (aspect 9:14) con video muted en preview.
- Al hacer click se abre un **lightbox modal** con:
  - Reproductor con controles (play/pause, mute/unmute).
  - Navegación entre videos (anterior/siguiente + dots).

**Videos incluidos:**
| Nombre | Archivo |
|---|---|
| Flavio | `Testimonio1_Flavio.mp4` |
| Cecilia | `Testimonio2_Cecilia.mp4` |
| Maribel | `Testimonio3_Maribel.mp4` |

### 6.8 Blog
3 artículos de blog con tarjetas (imagen, categoría, título, resumen, fecha, tiempo de lectura).

### 6.9 FAQ
7 preguntas frecuentes en acordeón desplegable.

### 6.10 CTAFinal
Sección de cierre con llamada a la acción para cotizar.

---

## 7. Formularios e Integración con Forminit

### Forminit SDK

El SDK se carga desde el CDN en `index.html`:

```html
<script src="https://forminit.com/sdk/v1/forminit.js"></script>
```

El patrón de uso en todos los formularios es:

```typescript
const forminit = new (window as any).Forminit();
const formData = new FormData();
formData.append("fi-sender-fullName", data.name);
// ... otros campos
const { error } = await forminit.submit('FORM_ID', formData);
```

---

### 7.1 Formulario de Cotización — Sección Hero (`FormQuote`)

**Archivo:** `src/components/sections/FormQuote.tsx`  
**Forminit Form ID:** `q0v0rfl5gr7`

| Campo | Key Forminit | Tipo | Validación |
|---|---|---|---|
| Nombre Completo | `fi-sender-fullName` | text | Min. 3 caracteres |
| Teléfono | `fi-sender-phone` | tel | 9 dígitos, empieza con 9 |
| Email | `fi-sender-email` | email | Formato válido |
| ¿Tiene propiedad? | `fi-select-propertyOwner` | select | `si` / `no` |
| Política de privacidad | `fi-checkbox-privacyPolicy` | checkbox | Requerido |

**Estados:** `idle` → `loading` → `success` / `error`

---

### 7.2 Modal Global de Cotización

**Archivo:** `src/App.tsx`  
**Forminit Form ID:** `q0v0rfl5gr7`

Mismo esquema de validación y campos que `FormQuote`. Se abre desde múltiples puntos de la aplicación (ej. CTAs en artículos del blog). Se accede mediante la prop `onOpenQuoteModal`.

---

### 7.3 Formulario de Inversionistas

**Archivo:** `src/pages/InviertePage.tsx`  
**Forminit Form ID:** `nntcaf7hmws`

| Campo | Key Forminit | Tipo | Validación |
|---|---|---|---|
| Nombre Completo | `fi-sender-fullName` | text | Min. 3 caracteres |
| Teléfono | `fi-sender-phone` | tel | 9 dígitos, empieza con 9 |
| Email | `fi-sender-email` | email | Formato válido |
| Monto a invertir | `fi-select-investmentRange` | select | `range1`–`range4` |
| Experiencia previa | `fi-select-hasInvestedBefore` | select | `si` / `no` |

**Rangos de inversión:**

| Valor | Descripción |
|---|---|
| `range1` | S/. 50,000 – S/. 100,000 (o eq. en $) |
| `range2` | S/. 100,000 – S/. 250,000 (o eq. en $) |
| `range3` | S/. 250,000 – S/. 500,000 (o eq. en $) |
| `range4` | S/. 500,000 a más |

---

## 8. Simulador de Inversión

**Ubicación:** `InviertePage.tsx`, columna izquierda.

| Parámetro | Soles (PEN) | Dólares (USD) |
|---|---|---|
| Monto mínimo | S/. 50,000 | $ 15,000 |
| Monto máximo | S/. 1,000,000 | $ 300,000 |
| Paso del slider | S/. 10,000 | $ 5,000 |
| Plazo | 6 – 36 meses (paso: 6) | — |
| TEA | 18% anual | 10% anual |

**Fórmulas:**
```
totalEarnings  = amount × annualYield × (term / 12)
monthlyEarnings = totalEarnings / term
```

---

## 9. Modelos de Datos (`mockData.ts`)

### Benefit
```typescript
{ id, icon, title, description }
// icon: nombre de ícono Lucide (e.g., "Percent", "Zap")
```

### ProcessStep
```typescript
{ stepNumber, title, description }
```

### Testimonial
```typescript
{ id, name, role, rating, comment, image }
```

### Partner
```typescript
{ name, logo }
// logo: path a /img/
```

### BlogArticle
```typescript
{ id, category, title, excerpt, image, date, readTime, content }
// content: HTML string
```

### FAQItemData
```typescript
{ id, question, answer }
```

---

## 10. Componentes UI Reutilizables

| Componente | Descripción |
|---|---|
| `Button` | Variantes: `glow`, `outline`, `ghost`. Props: `size`, `isLoading`, `leftIcon`, `rightIcon` |
| `Input` | Campo de texto con label, error y soporte para temas `light`/`dark` |
| `Select` | Dropdown estilizado con label y manejo de errores |
| `Card` | Contenedor con soporte para `theme` (light/dark) y `hoverEffect` |
| `Modal` | Overlay de pantalla completa con AnimatePresence. Props: `isOpen`, `onClose`, `theme` |
| `Badge` | Etiqueta de categoría con colores |
| `FAQItem` | Acordeón individual con icono de expansión animado |
| `BlogCard` | Tarjeta de artículo con imagen, categoría, título, resumen y metadata |
| `TestimonialCard` | Tarjeta de testimonio con avatar, nombre, rol, rating y comentario |
| `StatCard` | Contador animado con prefijo/sufijo, ideal para métricas flotantes |
| `FeatureCard` | Tarjeta de característica con ícono, título y descripción |
| `PartnerLogo` | Contenedor de logo de socio con filtro de brillo |
| `Loader` | Spinner de carga para estados de loading |

---

## 11. Sistema de Diseño

### Paleta de colores (tokens Tailwind personalizados)

| Token | Uso |
|---|---|
| `navy-deep` | Fondo principal oscuro (Hero, footers, secciones oscuras) |
| `navy-secondary` | Títulos en fondo claro |
| `navy-primary` | Variante intermedia de navy |
| `cyan-primary` | Acentos, CTAs, bordes activos |
| `cyan-light` | Textos secundarios en fondos oscuros |
| `blue-medium` | Gradientes decorativos |
| `gray-light` | Textos de soporte en fondos oscuros |

### Tipografía
- Fuente base: **Inter** (Google Fonts, cargada en `index.html`)
- Escala: `text-xs` hasta `text-6xl`, con `font-extrabold` para headings principales

### Animaciones
- **Framer Motion**: `whileInView`, `initial/animate` para entradas al viewport
- **`animate-pulse-glow`**: Animación de pulso para blobs decorativos
- Transiciones de hover en botones, cards y links con `transition-all duration-300`

---

## 12. Flujos de Usuario Clave

### Solicitar un Préstamo
```
Landing Hero → CTA "Solicitar Ahora" → Scroll a #cotiza (FormQuote) 
→ Llenar formulario (nombre, teléfono, email, propiedad, privacidad) 
→ Submit a Forminit (ID: q0v0rfl5gr7) → Mensaje de éxito
```

### Registrarse como Inversionista
```
Navbar → "Invierte con Nosotros" → /invierte 
→ Ver video explicativo → Usar simulador (monto, plazo, moneda) 
→ Llenar formulario (nombre, teléfono, email, rango, experiencia) 
→ Submit a Forminit (ID: nntcaf7hmws) → Mensaje de éxito
```

### Ver Testimonios en Video
```
Home → Sección VideoTestimonials → Click en tarjeta de cliente 
→ Lightbox con reproductor → Navegar con flechas o dots → Cerrar con X o fondo
```

### Leer un Artículo de Blog
```
Home → Sección Blog → Click en tarjeta → /blog/:id 
→ Leer artículo completo → CTA "Precalificar" → Modal de cotización
```

---

## 13. SEO y Metadata

- Cada página usa `<title>` y `<meta name="description">` descriptivos.
- Estructura semántica HTML5: `<header>`, `<main>`, `<section>`, `<footer>`.
- Un único `<h1>` por página.
- Atributos `alt` en todas las imágenes.
- IDs únicos en elementos interactivos clave (`cotiza`, `beneficios`, `proceso`, `blog`, `faq`, `testimonios`).

---

## 14. Consideraciones de Mantenimiento

> [!TIP]
> Para agregar un nuevo artículo de blog, añade un objeto al array `blogArticles` en `src/data/mockData.ts` con un `id` único. La ruta `/blog/:id` lo renderizará automáticamente.

> [!TIP]
> Para agregar una nueva sección a la Home, crea el componente en `src/components/sections/`, impórtalo en `src/pages/Home.tsx` y agrégalo en el orden deseado.

> [!IMPORTANT]
> Todos los formularios usan el **SDK de Forminit** (`window.Forminit`). Si el SDK no se carga (fallo de red), los formularios mostrarán el estado de error. El script se carga en `index.html`.

> [!WARNING]
> Los campos del formulario deben usar los prefijos correctos de Forminit:
> - `fi-sender-*` para campos de remitente (nombre, email, teléfono)
> - `fi-select-*` para selects
> - `fi-checkbox-*` para checkboxes

> [!NOTE]
> Los videos en `public/videos/` son archivos estáticos servidos directamente por Vite. Para producción, considera alojar los videos en un CDN para mejorar el rendimiento de carga.
