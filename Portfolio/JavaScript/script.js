const typewriterElement = document.getElementById("typewriter");
const paragraphs = [
  "I am a Full-Stack Developer",
  "I am a Computer Science Major.",
  "An Enthusiastic Learner!"
];

let paraIndex = 0;
let charIndex = 0;
let typingSpeed = 50;

function typeWriter() {
  const currentPara = paragraphs[paraIndex];
  const currentText = currentPara.substring(0, charIndex);
  typewriterElement.innerHTML = `<p>${currentText}</p>`;

  if (charIndex < currentPara.length) {
    charIndex++;
    setTimeout(typeWriter, typingSpeed);
  } else {
    charIndex = 0;
    paraIndex++;

    if (paraIndex >= paragraphs.length) {
      paraIndex = 0;  // Reset to loop again
      setTimeout(typeWriter, 3000);
    } else {
      setTimeout(typeWriter, 3000); // Pause before next para
    }
  }
}

typeWriter();