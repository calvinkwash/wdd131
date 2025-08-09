// Live preview functionality
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("reviewForm");

  // Update product name
  form.productName.addEventListener("change", () => {
    const selected = form.productName.options[form.productName.selectedIndex];
    document.getElementById("previewProduct").textContent = selected.textContent;
  });

  // Update rating
  const ratingInputs = form.querySelectorAll("input[name='rating']");
  ratingInputs.forEach(input => {
    input.addEventListener("change", () => {
      const stars = "★".repeat(parseInt(input.value));
      document.getElementById("previewRating").textContent = stars;
    });
  });

  // Update date
  form.installDate.addEventListener("input", () => {
    document.getElementById("previewDate").textContent = form.installDate.value;
  });

  // Update review text
  form.review.addEventListener("input", () => {
    document.getElementById("previewText").textContent = form.review.value || "—";
  });

  // Update name
  form.username.addEventListener("input", () => {
    document.getElementById("previewName").textContent = form.username.value || "—";
  });
});
