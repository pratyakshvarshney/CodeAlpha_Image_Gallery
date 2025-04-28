const modal = document.getElementById("modal");
const modalImg = document.getElementById("modalImage");
const closeBtn = document.getElementById("closeBtn");
const images = document.querySelectorAll(".gallery img");

// Open Modal on Image Click
images.forEach((img) => {
  img.addEventListener("click", function() {
    modal.style.display = "block";
    modalImg.src = this.src;
  });
});

// Close Modal on Close Button Click
closeBtn.onclick = function() {
  modal.style.display = "none";
};

// Close Modal if Clicking Outside Image
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
