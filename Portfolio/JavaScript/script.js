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
      paraIndex = 0;  
      setTimeout(typeWriter, 3000);
    } else {
      setTimeout(typeWriter, 3000); 
    }
  }
}

typeWriter();

const toggleBtn = document.getElementById('theme-toggle');
const body = document.body;

toggleBtn.addEventListener('click', () => {
  if (body.classList.contains('light-mode')) {
    body.classList.remove('light-mode');
    body.classList.add('dark-mode');
    toggleBtn.textContent = '🌙';
    localStorage.setItem('theme', 'dark');
  } else {
    body.classList.remove('dark-mode');
    body.classList.add('light-mode');
    toggleBtn.textContent = '☀️';
    localStorage.setItem('theme', 'light');
  }
});

window.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'light') {
    body.classList.add('light-mode');
    toggleBtn.textContent = '☀️';
  } else {
    body.classList.add('dark-mode');
    toggleBtn.textContent = '🌙';
  }
});
