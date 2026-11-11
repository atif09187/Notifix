/**
 * Notifox - Core Application Logic
 * Hydrates UI from config.js, manages dynamic download handlers, and maintains SEO attributes.
 */

document.addEventListener("DOMContentLoaded", () => {
  const config = window.NOTIFOX_CONFIG;
  if (!config) {
    console.warn("NOTIFOX_CONFIG not loaded.");
    return;
  }

  // 1. Populate text bindings [data-config="propertyKey"]
  document.querySelectorAll("[data-config]").forEach(el => {
    const key = el.getAttribute("data-config");
    if (config[key] !== undefined) {
      el.textContent = config[key];
    }
  });

  // 2. Populate meta content bindings [data-config-content="propertyKey"]
  document.querySelectorAll("[data-config-content]").forEach(el => {
    const key = el.getAttribute("data-config-content");
    if (config[key] !== undefined) {
      el.setAttribute("content", config[key]);
    }
  });

  // 3. Populate image source bindings [data-config-src="propertyKey"]
  document.querySelectorAll("[data-config-src]").forEach(img => {
    const key = img.getAttribute("data-config-src");
    if (config[key]) {
      const isSubpage = window.location.pathname.includes("/pages/");
      const path = isSubpage ? `../${config[key]}` : config[key];
      img.setAttribute("src", path);
    }
  });

  // 4. Populate dynamic mailto links [data-config-email="contactEmail"]
  document.querySelectorAll("[data-config-email]").forEach(a => {
    const key = a.getAttribute("data-config-email");
    const email = config[key] || config.contactEmail;
    if (email) {
      a.setAttribute("href", `mailto:${email}?subject=Notifox%20Inquiry`);
    }
  });

  // 5. Centralized Download Buttons Management
  const downloadButtons = document.querySelectorAll("[data-download-btn]");
  downloadButtons.forEach(btn => {
    btn.setAttribute("href", config.downloadUrl);
    btn.setAttribute("target", "_blank");
    btn.setAttribute("rel", "noopener noreferrer");

    btn.addEventListener("click", (e) => {
      if (!config.downloadUrl || config.downloadUrl.includes("YOUR_FILE_ID_HERE")) {
        e.preventDefault();
        alert("The APK download link is currently being finalized. Please update downloadUrl in config.js.");
      }
    });
  });

  // 6. Current Year in Footer
  const yearEls = document.querySelectorAll("#currentYear");
  const year = new Date().getFullYear();
  yearEls.forEach(el => { el.textContent = year; });

  // 7. Desktop Gallery Scroll Controls
  const trackContainer = document.getElementById("galleryContainer");
  const scrollPrevBtn = document.getElementById("scrollGalleryPrev");
  const scrollNextBtn = document.getElementById("scrollGalleryNext");

  if (trackContainer && scrollPrevBtn && scrollNextBtn) {
    scrollPrevBtn.addEventListener("click", () => {
      trackContainer.scrollBy({ left: -320, behavior: "smooth" });
    });
    scrollNextBtn.addEventListener("click", () => {
      trackContainer.scrollBy({ left: 320, behavior: "smooth" });
    });
  }
});