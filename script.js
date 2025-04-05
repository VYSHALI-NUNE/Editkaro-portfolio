const filterButtons = document.querySelectorAll(".filters button");
const videoCards = document.querySelectorAll(".video-card");

filterButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    // Remove active from all buttons
    filterButtons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    const category = btn.getAttribute("data-category");

    videoCards.forEach(card => {
      if (category === "all" || card.dataset.category === category) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });
});
