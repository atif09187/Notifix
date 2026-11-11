/**
 * Notifox - Screenshot Lightbox Modal
 * Provides full-screen previews, touch swipe support, and keyboard navigation.
 */

document.addEventListener("DOMContentLoaded", () => {
  const config = window.NOTIFOX_CONFIG;
  const modal = document.getElementById("screenshotModal");
  if (!modal || !config || !Array.isArray(config.screenshots)) return;

  const modalImg = document.getElementById("lightboxActiveImg");
  const modalCaption = document.getElementById("lightboxCaption");
  const modalCounter = document.getElementById("modalCounter");
  const closeBtn = document.getElementById("modalCloseBtn");
  const backdrop = document.getElementById("modalBackdrop");
  const prevBtn = document.getElementById("modalPrevBtn");
  const nextBtn = document.getElementById("modalNextBtn");
  const screenshotCards = document.querySelectorAll(".screenshot-card");

  let currentIndex = 0;
  const totalScreenshots = config.screenshots.length;

  function updateModal(index) {
    currentIndex = (index + totalScreenshots) % totalScreenshots;
    const item = config.screenshots[currentIndex];
    
    // Determine path prefix based on directory depth
    const isSubpage = window.location.pathname.includes("/pages/");
    const src = isSubpage ? `../${item.src}` : item.src;

    modalImg.src = src;
    modalImg.alt = item.alt || `Screenshot ${currentIndex + 1}`;
    modalCaption.textContent = item.caption || item.alt || "";
    modalCounter.textContent = `${currentIndex + 1} / ${totalScreenshots}`;
  }

  function openModal(index) {
    updateModal(index);
    modal.removeAttribute("hidden");
    document.body.style.overflow = "hidden";
  }

  function closeModal() {
    modal.setAttribute("hidden", "true");
    document.body.style.overflow = "";
    modalImg.src = "";
  }

  // Attach click to screenshot cards
  screenshotCards.forEach((card, index) => {
    card.addEventListener("click", () => openModal(index));
  });

  // Modal Controls
  closeBtn.addEventListener("click", closeModal);
  backdrop.addEventListener("click", closeModal);

  prevBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    updateModal(currentIndex - 1);
  });

  nextBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    updateModal(currentIndex + 1);
  });

  // Keyboard navigation
  window.addEventListener("keydown", (e) => {
    if (modal.hasAttribute("hidden")) return;
    if (e.key === "Escape") closeModal();
    if (e.key === "ArrowLeft") updateModal(currentIndex - 1);
    if (e.key === "ArrowRight") updateModal(currentIndex + 1);
  });
});