# Mauricio Flores · Portafolio web

Primera versión de mi portafolio profesional, desarrollada para integrar HTML, CSS, JavaScript, Git y GitHub durante mi formación en Skillnest. Presenta mi perfil como estudiante técnico en programación, mis conocimientos y mis proyectos académicos.

**Autor:** Mauricio Flores  
**Contacto:** mauricioflores1806@gmail.com  
**Ubicación:** Santiago, Chile  
**Entrega indicada en el enunciado:** 30 de octubre de 2026.

## Abrir el proyecto

1. Descomprime el archivo descargado.
2. Abre `index.html` en un navegador actualizado.
3. Para comprobar también los subtítulos con un servidor local, abre la carpeta con Visual Studio Code y utiliza Live Server, si ya lo tienes instalado. Otra opción, si tienes Python, es ejecutar `python -m http.server 8000` y visitar `http://localhost:8000`.

No necesitas instalar paquetes, configurar una base de datos ni ejecutar Flask para abrir **el portafolio**. TaskTrack y BookHub son aplicaciones distintas y requieren su propio entorno Python/MySQL.

## Estructura de la carpeta descargada

| Archivo o carpeta | Función |
| --- | --- |
| `index.html` | Contenido, navegación, secciones, video y ventana de proyectos. |
| `css/styles.css` | Colores, tipografía, Grid, Flexbox, temas y adaptación a pantallas. |
| `js/config.js` | Correo, GitHub, LinkedIn y enlaces de los proyectos. |
| `js/script.js` | Eventos, filtros, menú, modal, tema y botón para copiar el correo. |
| `assets/tasktrack.png` | Captura real de TaskTrack. |
| `assets/mi-proceso.mp4` | Video explicativo de 36 segundos, sin audio. |
| `assets/mi-proceso.vtt` | Subtítulos en español. |
| `assets/video-poster.svg` | Portada del reproductor de video. |
| `assets/favicon.svg` | Icono del sitio. |
| `downloads/` | Cinco proyectos en ZIP con sus recursos y una guía de inicio. |
| `assets/CREDITOS.txt` | Origen de los recursos visuales. |
| `.nojekyll` | Permite servir los archivos directamente en GitHub Pages. |
| `README.md` | Descripción del proyecto y guía de publicación. |

La versión de trabajo para el alojamiento de la vista previa conserva el sitio dentro de `dist/`. El ZIP de entrega coloca su contenido en la raíz para facilitar la publicación en GitHub Pages.

## Tecnologías y utilidades

| Tecnología | Uso en este portafolio |
| --- | --- |
| HTML5 | Estructura semántica con `header`, `nav`, `main`, `section`, `article` y `footer`. |
| CSS3 | Diseño visual, variables de color, Flexbox, Grid, transiciones y media queries. |
| JavaScript | Manipulación del DOM y respuestas a eventos. |
| LocalStorage | Conserva la preferencia de tema en el mismo navegador. |
| SVG | Favicon y portada vectorial, sin servicios externos. |
| MP4 y WebVTT | Video local con controles, subtítulos y transcripción textual. |
| Git y GitHub Pages | Control de versiones y publicación de la entrega. |

El portafolio utiliza JavaScript del navegador y CSS propios, sin frameworks ni dependencias externas.

## Contenido

- Presentación de Mauricio Flores como estudiante y desarrollador Full Stack en formación.
- Información de formación y búsqueda de práctica desde diciembre de 2026.
- Tecnologías y habilidades organizadas por área, sin porcentajes inventados.
- TaskTrack: gestión de tareas, categorías, autenticación, validaciones y filtros.
- BookHub: gestión de libros con CRUD, autenticación y MySQL.
- Prácticas Full Stack Python y vínculo con el repositorio de formación.
- Apartado independiente para descargar Login y registro con Flask, Pokédex, Juego del destino, BookHub y TaskTrack.
- Enlaces directos a la carpeta de GitHub de cada proyecto, también desde las tarjetas destacadas.
- Tarjetas de proyectos sin fechas de publicación.
- Video sobre la relación entre interfaz, Flask, MySQL y Jinja2 en TaskTrack.
- Correo de contacto y enlaces profesionales.

Los datos personales y BookHub se basan en el CV actual. Las características de TaskTrack también se contrastaron con su código. La imagen de BookHub es una **ilustración conceptual**, identificada en la tarjeta; no se presenta como una captura de su interfaz.

## Interacciones con JavaScript

1. **Menú móvil:** abre y cierra la navegación y actualiza `aria-expanded`. Se cierra al elegir una sección o pulsar Escape.
2. **Cambio de tema:** alterna colores claros y oscuros mediante `data-theme`. Guarda la selección con LocalStorage cuando está disponible.
3. **Filtros:** muestran todos los trabajos, las aplicaciones Full Stack o las prácticas usando la propiedad `hidden`.
4. **Ventanas de proyectos:** un `dialog` muestra características, aprendizajes y tecnologías. Admite cierre con botón, Escape y clic fuera de la ventana.
5. **Copiar correo:** utiliza Clipboard API con una alternativa para navegadores que no la ofrecen. Informa el resultado con una notificación accesible.
6. **Aparición al desplazarse:** IntersectionObserver activa transiciones suaves. Respeta la preferencia de reducir movimiento.

El contenido principal, los enlaces y el video siguen disponibles si JavaScript está desactivado.

## Qué personalizar antes de entregar

Edita `js/config.js`:

```js
linkedin: "https://www.linkedin.com/in/TU-PERFIL-REAL/",
```

Reemplaza el ejemplo completo por tu URL real. Mientras el valor esté vacío, el sitio muestra «LinkedIn · En preparación». **Ese estado pendiente todavía no cumple el requisito de un perfil vinculado.** No se inventó un perfil con tu nombre.

El correo utilizado es `mauricioflores1806@gmail.com`, tomado del CV actual. Puedes cambiarlo en `email`. Si quieres que el sitio sin JavaScript muestre también el nuevo correo, actualiza los valores visibles de contacto en `index.html`.

GitHub se configuró con la cuenta y el repositorio que proporcionaste en esta solicitud:

- Perfil: https://github.com/Mauricio-Flores
- Formación: https://github.com/Mauricio-Flores/Skillnest_fullStack_Python

Los enlaces de cada trabajo se configuraron con las URL exactas proporcionadas por Mauricio. `repositories` contiene una entrada para cada proyecto. Los botones «Ver en GitHub» de las tarjetas, el apartado de descargas y los modales utilizan la carpeta correspondiente.

## Descargas de proyectos

Los ZIP se encuentran en `downloads/` y funcionan como archivos estáticos tanto en el sitio publicado como en una copia local. Hay un apartado independiente para los cinco archivos y accesos de descarga adicionales en las tarjetas destacadas de BookHub y TaskTrack.

| Proyecto | Archivo | Código en GitHub |
| --- | --- | --- |
| Login y registro con Flask | [Descargar ZIP](downloads/login-registro-flask.zip) | [Ver carpeta](https://github.com/Mauricio-Flores/Skillnest_fullStack_Python/tree/main/python/core/LOGIN_REGISTRO_FLASK_mauricio_flores_30092026) |
| Pokédex | [Descargar ZIP](downloads/pokedex.zip) | [Ver carpeta](https://github.com/Mauricio-Flores/Skillnest_fullStack_Python/tree/main/python/core/pokedex_app_mauricio_flores_2026-07-22) |
| Juego del destino | [Descargar ZIP](downloads/juego-destino.zip) | [Ver carpeta](https://github.com/Mauricio-Flores/Skillnest_fullStack_Python/tree/main/python/core/juego_destino_flores_mauricio) |
| BookHub | [Descargar ZIP](downloads/bookhub.zip) | [Ver carpeta](https://github.com/Mauricio-Flores/Skillnest_fullStack_Python/tree/main/python/flask/Simulaciones/BookHub_mauricio_flores) |
| TaskTrack | [Descargar ZIP](downloads/tasktrack.zip) | [Ver carpeta](https://github.com/Mauricio-Flores/Skillnest_fullStack_Python/tree/main/python/flask/Simulaciones/TaskTrack_mauricio_flores_06-10-2026) |

Cada descarga conserva el código, las plantillas, los estilos, las imágenes, los archivos SQL y las dependencias declaradas que contiene el original. Se excluyen entornos virtuales, cachés y la configuración local `.env`. Se incluye `LEEME_DESCARGA.txt` con los pasos para preparar el entorno; cuando existe `.env.example`, se conserva para crear la configuración propia. Los archivos originales subidos por Mauricio no se modificaron.

Para cambiar el video, sustituye `assets/mi-proceso.mp4` y actualiza su portada, duración, subtítulos y transcripción. El video incluido explica el proceso con gráficos y una captura del proyecto; no es una grabación de una sesión interactiva de la aplicación.

## Publicar en un repositorio exclusivo de GitHub

1. Entra a https://github.com/new con tu cuenta.
2. Crea un repositorio nuevo, por ejemplo `portafolio-mauricio-flores`. No uses el repositorio del curso.
3. Sube **los archivos y carpetas del ZIP descomprimido**, con `index.html` en la raíz del repositorio. No subas solamente el ZIP ni una carpeta adicional que oculte el `index.html`.
4. Guarda los cambios con un commit, por ejemplo `Crear primera versión del portafolio`.
5. Abre **Settings → Pages**.
6. En **Build and deployment → Source**, elige **Deploy from a branch**.
7. Selecciona la rama **main** y la carpeta **/(root)**; pulsa **Save**.
8. Espera a que GitHub termine y copia la URL que aparece en Pages. Comprueba esa URL antes de entregar.

La ubicación del sitio de proyecto utiliza el usuario propietario y el nombre del repositorio que realmente hayas creado. No se ha creado ni publicado un repositorio de GitHub desde esta sesión.

Documentación oficial consultada: https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

## Lista de revisión de la entrega

- [x] Presentación personal y tecnologías.
- [x] Proyectos académicos y prácticas adicionales.
- [x] Enlaces directos a los cinco proyectos proporcionados y descargas ZIP.
- [x] Correo visible con enlace y función para copiar.
- [x] Video local con controles, subtítulos y transcripción.
- [x] Interacciones con JavaScript y animaciones.
- [x] Media queries para computador, tablet y móvil.
- [ ] Agregar el perfil real de LinkedIn.
- [ ] Crear el repositorio exclusivo en tu cuenta y subir los archivos.
- [ ] Activar GitHub Pages y comprobar la URL pública.
- [x] Configurar los enlaces directos enviados para cada proyecto.
- [ ] Revisar visualmente la página en computador, tablet y teléfono y probar los controles con teclado.

Verificaciones realizadas: sintaxis de JavaScript, existencia de recursos locales, destinos de navegación, identificadores accesibles y comportamiento de filtros, tema, menú, modales y copia de correo mediante un entorno DOM de prueba. Se comprobó también el MP4 H.264 de 1280 × 720 y 36 segundos. El apartado de descargas se revisó visualmente en navegador de escritorio y se contrastaron sus cinco enlaces. La automatización del navegador no confirmó los eventos de descarga de la vista previa; los cinco ZIP sí pasaron la comprobación de integridad local. Conviene completar la revisión en tablet y teléfono antes de entregar.

## Para explicar tu código

HTML define qué contiene la página. CSS controla cómo se presenta ese contenido y reorganiza las columnas cuando cambia el ancho de pantalla. JavaScript escucha eventos, como un clic, y cambia elementos del DOM: por ejemplo, un filtro establece `hidden` en las tarjetas que no corresponden a la categoría seleccionada.

En el cambio de tema, JavaScript actualiza `data-theme` en el elemento `html` y CSS utiliza las variables del tema correspondiente. En el modal, JavaScript carga los datos del proyecto seleccionado y llama a `showModal()`. El correo utiliza `mailto:` para abrir el programa de correo del visitante; la página no afirma enviar mensajes por sí sola.

Esta primera versión puede crecer con nuevos proyectos, un video propio, el perfil de LinkedIn y los conocimientos que vaya incorporando.
