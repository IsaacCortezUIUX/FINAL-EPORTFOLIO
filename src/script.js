const label = [
    "WEB DESIGNER",
    "UI/UX DESIGNER",
    "FRONT-END DEVELOPER",
    "WEB DEVELOPER"
  ];
  const animatedLabelElement = document.getElementById("animated-label");
  
  let index = 0;
  let charIndex = 0;
  let isDeleting = false;
  
  function type() {
    const currentLabel = label[index];
    if (!isDeleting && charIndex < currentLabel.length) {
      animatedLabelElement.textContent += currentLabel[charIndex];
      charIndex++;
      setTimeout(type, 100);
    } else if (isDeleting && charIndex > 0) {
      animatedLabelElement.textContent = currentLabel.slice(0, charIndex - 1);
      charIndex--;
      setTimeout(type, 50);
    } else {
      isDeleting = !isDeleting;
      if (!isDeleting) {
        index = (index + 1) % label.length;
      }
      setTimeout(type, 2000);
    }
  }
  
  document.addEventListener("DOMContentLoaded", type);