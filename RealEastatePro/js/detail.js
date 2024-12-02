document.addEventListener("DOMContentLoaded", () => {
  const mainImage = document.getElementById("current-image");
  const thumbnails = document.querySelectorAll(".thumbnail");

  thumbnails.forEach((thumbnail) => {
    thumbnail.addEventListener("click", (e) => {
      // Change the main image source to the clicked thumbnail's source
      mainImage.src = e.target.src;

      // Remove the 'active' class from all thumbnails
      thumbnails.forEach((thumb) => thumb.classList.remove("active"));

      // Add the 'active' class to the clicked thumbnail
      e.target.classList.add("active");
    });
  });
});
