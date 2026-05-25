document.addEventListener("DOMContentLoaded", function() {
  const experienceItems = document.querySelectorAll(".experience-item");

  experienceItems.forEach(item => {
    item.addEventListener("click", function() {
      const details = item.querySelector(".experience-details");
      if (details.style.display === "block") {
        details.style.display = "none";
      } else {
        details.style.display = "block";
      }
    });
  });
});
