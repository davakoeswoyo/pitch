const pageFiles = {
  home: "./index.html",
  about: "./about.html",
  programs: "./programs.html",
  articles: "./articles.html",
  research: "./research.html",
  contact: "./contact.html"
};

function go(page) {
  const target = pageFiles[page];
  if (target) {
    window.location.href = new URL(target, document.baseURI).href;
  }
}

document.querySelectorAll(".cat-pill").forEach((button) => {
  button.addEventListener("click", function () {
    const parent = this.closest(".cat-pills");
    if (!parent) {
      return;
    }

    parent.querySelectorAll(".cat-pill").forEach((pill) => pill.classList.remove("active"));
    this.classList.add("active");
  });
});

function initScrollTextReveal() {
  const pageRoot = document.querySelector(".page.active");
  if (!pageRoot) {
    return;
  }

  const revealGroups = Array.from(pageRoot.children).filter((el) => el.nodeType === 1);
  if (!revealGroups.length) {
    return;
  }

  function applyRevealOrder(parent) {
    const children = Array.from(parent.children).filter((el) => el.nodeType === 1);
    children.forEach((child, index) => {
      child.classList.add("reveal-item");
      child.style.setProperty("--reveal-order", String(index));
      applyRevealOrder(child);
    });
  }

  document.documentElement.classList.add("js-reveal");
  revealGroups.forEach((group) => {
    group.classList.add("reveal-group");
    applyRevealOrder(group);
  });

  if (!("IntersectionObserver" in window)) {
    revealGroups.forEach((group) => group.classList.add("is-inview"));
    return;
  }

  // The first section is already in view on load.
  revealGroups[0].classList.add("is-inview");

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        entry.target.classList.add("is-inview");
        obs.unobserve(entry.target);
      });
    },
    {
      threshold: 0.16,
      rootMargin: "0px 0px -10% 0px"
    }
  );

  revealGroups.slice(1).forEach((group) => observer.observe(group));
}

function initMobileMenu() {
  const nav = document.querySelector("nav");
  if (!nav) {
    return;
  }

  const links = Array.from(nav.querySelectorAll(".nav-links a"));
  if (!links.length) {
    return;
  }

  const toggle = document.createElement("button");
  toggle.type = "button";
  toggle.className = "menu-toggle";
  toggle.setAttribute("aria-label", "Open menu");
  toggle.setAttribute("aria-expanded", "false");
  toggle.setAttribute("aria-controls", "mobile-menu");
  toggle.innerHTML = "<span></span><span></span><span></span>";
  nav.appendChild(toggle);

  const backdrop = document.createElement("button");
  backdrop.type = "button";
  backdrop.className = "mobile-menu-backdrop";
  backdrop.setAttribute("aria-label", "Sluit menu");

  const panel = document.createElement("aside");
  panel.className = "mobile-menu-panel";
  panel.id = "mobile-menu";
  panel.setAttribute("aria-hidden", "true");
  panel.innerHTML =
    "<div class=\"mobile-menu-head\"><p>Menu</p><button type=\"button\" class=\"mobile-menu-close\" aria-label=\"Sluit menu\">Sluiten</button></div><div class=\"mobile-menu-links\"></div>";

  const linkContainer = panel.querySelector(".mobile-menu-links");
  links.forEach((link) => {
    const menuLink = document.createElement("a");
    menuLink.className = "mobile-menu-link";
    menuLink.href = link.getAttribute("href") || "#";
    menuLink.textContent = (link.textContent || "").trim();
    if (link.classList.contains("active")) {
      menuLink.classList.add("active");
    }
    linkContainer.appendChild(menuLink);
  });

  const ctaLink = document.createElement("a");
  ctaLink.className = "mobile-menu-cta";
  ctaLink.href = pageFiles.contact || "./contact.html";
  ctaLink.textContent = "Afspraak boeken";
  linkContainer.appendChild(ctaLink);

  document.body.append(backdrop, panel);

  const closeBtn = panel.querySelector(".mobile-menu-close");

  function closeMenu() {
    document.body.classList.remove("menu-open");
    toggle.setAttribute("aria-expanded", "false");
    panel.setAttribute("aria-hidden", "true");
  }

  function openMenu() {
    document.body.classList.add("menu-open");
    toggle.setAttribute("aria-expanded", "true");
    panel.setAttribute("aria-hidden", "false");
  }

  toggle.addEventListener("click", () => {
    if (document.body.classList.contains("menu-open")) {
      closeMenu();
      return;
    }
    openMenu();
  });

  backdrop.addEventListener("click", closeMenu);
  closeBtn.addEventListener("click", closeMenu);
  panel.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeMenu));
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeMenu();
    }
  });
}

initScrollTextReveal();
initMobileMenu();
