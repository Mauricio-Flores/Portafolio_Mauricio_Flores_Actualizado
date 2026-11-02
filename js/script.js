/* JavaScript sin dependencias: funciona también al abrir index.html. */
(() => {
  "use strict";
  document.documentElement.classList.add("js");
  const config = window.PORTFOLIO;
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  const email = config.email;

  document.querySelectorAll("[data-email-link]").forEach(link => {
    link.href = `mailto:${email}`;
  });
  document.querySelectorAll("[data-email-text]").forEach(element => {
    element.textContent = email;
  });
  document.querySelectorAll("[data-repo-link]").forEach(link => {
    link.href = config.repositories[link.dataset.repoLink] || config.courseRepository;
  });
  document.querySelectorAll("[data-github-profile]").forEach(link => {
    link.href = config.githubProfile;
  });

  // Se acepta únicamente un perfil real de LinkedIn, nunca un enlace genérico.
  if (/^https:\/\/(www\.)?linkedin\.com\/in\/[^\s/?#]+\/?(?:[?#].*)?$/i.test(config.linkedin)) {
    const linkedinLink = document.getElementById("linkedin-link");
    linkedinLink.href = config.linkedin;
    linkedinLink.hidden = false;
    document.getElementById("linkedin-pending").hidden = true;
  }

  // Tema persistente. El sitio sigue funcionando si el navegador bloquea storage.
  const themeButton = document.getElementById("theme-toggle");
  function setTheme(theme) {
    const dark = theme === "dark";
    document.documentElement.dataset.theme = dark ? "dark" : "light";
    themeButton.setAttribute("aria-pressed", String(dark));
    themeButton.setAttribute("aria-label", dark ? "Activar tema claro" : "Activar tema oscuro");
    document.querySelector('meta[name="theme-color"]').content = dark ? "#20221f" : "#f7f6f2";
  }
  try { setTheme(localStorage.getItem("mf-theme") || "light"); } catch { setTheme("light"); }
  themeButton.addEventListener("click", () => {
    const next = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    setTheme(next);
    try { localStorage.setItem("mf-theme", next); } catch { /* La preferencia es opcional. */ }
  });

  // El menú se cierra al elegir una sección, pulsar Escape o volver a escritorio.
  const menuButton = document.getElementById("menu-toggle");
  const navigation = document.getElementById("navegacion");
  function setMenu(open) {
    menuButton.setAttribute("aria-expanded", String(open));
    menuButton.setAttribute("aria-label", open ? "Cerrar menú" : "Abrir menú");
    navigation.classList.toggle("is-open", open);
    if (open) navigation.querySelectorAll("a")[0]?.focus();
  }
  menuButton.addEventListener("click", () => setMenu(menuButton.getAttribute("aria-expanded") !== "true"));
  navigation.querySelectorAll("a").forEach(link => link.addEventListener("click", () => setMenu(false)));
  document.addEventListener("keydown", event => {
    if (event.key === "Escape" && menuButton.getAttribute("aria-expanded") === "true") {
      setMenu(false);
      menuButton.focus();
    }
  });
  document.addEventListener("click", event => {
    if (!navigation.contains(event.target) && !menuButton.contains(event.target)) setMenu(false);
  });
  const desktop = window.matchMedia("(min-width: 761px)");
  desktop.addEventListener("change", event => { if (event.matches) setMenu(false); });

  // Filtros: actualizan el DOM, el estado accesible y el recuento anunciado.
  const filters = [...document.querySelectorAll("[data-filter]")];
  const projects = [...document.querySelectorAll("[data-category]")];
  filters.forEach(button => button.addEventListener("click", () => {
    const selected = button.dataset.filter;
    filters.forEach(filter => {
      const active = filter === button;
      filter.classList.toggle("is-active", active);
      filter.setAttribute("aria-pressed", String(active));
    });
    let count = 0;
    projects.forEach(project => {
      const visible = selected === "all" || project.dataset.category === selected;
      project.hidden = !visible;
      if (visible) { count += 1; project.classList.add("is-visible"); }
    });
    document.getElementById("project-count").textContent = `${String(count).padStart(2, "0")} ${count === 1 ? "trabajo para explorar" : "trabajos para explorar"}`;
  }));

  const projectDetails = {
    tasktrack: {
      name: "TaskTrack", category: "FULL STACK / GESTIÓN DE TAREAS",
      description: "Aplicación académica para administrar tareas personales y organizarlas mediante categorías, prioridades y estados.",
      features: ["Registro, inicio y cierre de sesión con contraseñas cifradas con Bcrypt.", "Creación, consulta, edición y eliminación de tareas y categorías.", "Búsqueda por título, filtros por estado y resumen de tareas.", "Comentarios y permisos que restringen el acceso a los datos de cada usuario.", "Validaciones de formularios y mensajes de respuesta en la página."],
      learning: "Conectar rutas de Flask, modelos con consultas SQL y plantillas Jinja2. También practiqué validaciones, sesiones y la comprobación de permisos por propietario.",
      technologies: ["Python", "Flask", "MySQL", "Jinja2", "HTML", "CSS"]
    },
    bookhub: {
      name: "BookHub", category: "FULL STACK / GESTIÓN DE LIBROS",
      description: "Proyecto académico de gestión de libros con operaciones CRUD, autenticación de usuarios y una base de datos relacional.",
      features: ["Creación, consulta, edición y eliminación de libros.", "Autenticación de usuarios.", "Integración con una base de datos MySQL.", "Presentación de información mediante plantillas dinámicas."],
      learning: "Relacionar la información almacenada en MySQL con los formularios y las vistas de una aplicación Flask, utilizando Jinja2 y Bootstrap para presentar el contenido.",
      technologies: ["Python", "Flask", "MySQL", "Jinja2", "Bootstrap"]
    }
  };
  const dialog = document.getElementById("project-dialog");
  const closeDialog = document.getElementById("dialog-close");
  let trigger = null;
  document.querySelectorAll("[data-project]").forEach(button => button.addEventListener("click", () => {
    const project = projectDetails[button.dataset.project];
    if (!project) return;
    trigger = button;
    document.getElementById("dialog-category").textContent = project.category;
    document.getElementById("dialog-title").textContent = project.name;
    document.getElementById("dialog-description").textContent = project.description;
    document.getElementById("dialog-learning").textContent = project.learning;
    const features = document.getElementById("dialog-features");
    features.replaceChildren(...project.features.map(feature => {
      const item = document.createElement("li"); item.textContent = feature; return item;
    }));
    const tags = document.getElementById("dialog-tags");
    tags.replaceChildren(...project.technologies.map(technology => {
      const tag = document.createElement("li"); tag.textContent = technology; return tag;
    }));
    document.getElementById("dialog-repo").href = config.repositories[button.dataset.project] || config.courseRepository;
    dialog.showModal();
    document.body.classList.add("dialog-open");
    closeDialog.focus();
  }));
  closeDialog.addEventListener("click", () => dialog.close());
  dialog.addEventListener("click", event => {
    if (event.target !== dialog) return;
    const bounds = dialog.getBoundingClientRect();
    if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) dialog.close();
  });
  dialog.addEventListener("close", () => {
    document.body.classList.remove("dialog-open");
    trigger?.focus();
  });

  // Copiar correo con alternativa para navegadores sin Clipboard API.
  const toast = document.getElementById("toast");
  let toastTimer;
  function notify(message) {
    clearTimeout(toastTimer);
    toast.textContent = message;
    toast.classList.add("is-visible");
    toastTimer = setTimeout(() => toast.classList.remove("is-visible"), 4000);
  }
  function legacyCopy() {
    const field = document.createElement("textarea");
    field.value = email;
    field.setAttribute("aria-label", "Correo de contacto");
    field.style.cssText = "position:fixed;left:-9999px;top:0";
    document.body.append(field);
    field.select();
    try {
      return typeof document.execCommand === "function" && document.execCommand("copy");
    } finally {
      field.remove();
    }
  }
  document.getElementById("copy-email").addEventListener("click", async () => {
    try {
      if (navigator.clipboard && window.isSecureContext) await navigator.clipboard.writeText(email);
      else if (!legacyCopy()) throw new Error("copy-unavailable");
      notify("Correo copiado. ¡Conversemos!");
    } catch {
      notify(`Puedes copiar el correo directamente: ${email}`);
    }
  });

  // La animación es una mejora visual: nunca bloquea el contenido.
  const revealElements = document.querySelectorAll("[data-reveal]");
  if ("IntersectionObserver" in window && !reducedMotion.matches) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.06 });
    revealElements.forEach(element => { element.classList.add("will-reveal"); observer.observe(element); });
  }
})();
