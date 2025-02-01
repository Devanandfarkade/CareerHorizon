document.addEventListener("DOMContentLoaded", function () {
  const text = "#Best job portal you will ever find!";
  let index = 0;
  const speed = 100;
  const bioText = document.getElementById("bio-text");

  //bioText.style.backgroundColor = "#90EE90";
  bioText.style.padding = "5px";
  bioText.style.borderRadius = "15px";
  //bioText.style.color = "#FFFFFF";

  function typeWriter() {
    if (index < text.length) {
      bioText.innerHTML += text.charAt(index);
      index++;
      setTimeout(typeWriter, speed);
    }
  }

  typeWriter();
});
// Function to update the scroll progress
window.onscroll = function () {
  var scrollPosition =
    document.documentElement.scrollTop || document.body.scrollTop;
  var pageHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  var scrollPercentage = (scrollPosition / pageHeight) * 100;

  // Set the progress bar width according to the scroll percentage
  document.getElementById("scroll-progress-bar").style.width =
    scrollPercentage + "%";
};
document.querySelector(".navbar-logo-img").addEventListener("animationiteration", function() {
  this.style.animation = "none"; // Stops the animation after the first iteration
});
