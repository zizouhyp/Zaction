const container = document.querySelector('.about-center');
for (let i = 0; i < 3; i++) {
  const circle = document.createElement('div');
  circle.classList.add('pulse-circle');
  circle.style.animationDelay = i * 0.3 + 's';
  container.appendChild(circle);
}