const modal = document.getElementById("modal");
const modalImg = document.getElementById("modalImage");
const closeBtn = document.getElementById("closeBtn");
const images = document.querySelectorAll(".gallery img");

// Open modal when an image is clicked
images.forEach(img => {
  img.addEventListener("click", () => {
    modal.style.display = "flex";
    modal.setAttribute("aria-hidden", "false");
    modalImg.src = img.src;
    modalImg.alt = img.alt || "Expanded image";
    // prevent page scroll while modal open
    document.body.style.overflow = "hidden";
  });
});

// Close modal via close button
closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
  modalImg.src = "";
});

// Close modal by clicking outside the image
modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    closeBtn.click();
  }
});

// Close modal on Escape key
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && modal.style.display === "flex") {
    closeBtn.click();
  }
});
