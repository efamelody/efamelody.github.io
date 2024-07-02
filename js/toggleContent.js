function toggleContent(id) {
  var dots = document.getElementById("dots-" + id);
  var moreText = document.getElementById("more-" + id);
  var btnText = document.getElementById("btn-" + id);

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}
