document.addEventListener("DOMContentLoaded", function () {
  const text = "#Best job portal you will ever find!";
  let index = 0;
  const speed = 100; // Typing speed in milliseconds
  const bioText = document.getElementById("bio-text");

  function typeWriter() {
    if (index < text.length) {
      bioText.innerHTML += text.charAt(index);
      index++;
      setTimeout(typeWriter, speed);
    }
  }

  typeWriter();
});
