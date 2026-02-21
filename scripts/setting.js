document.querySelectorAll('.option').forEach(opt => {
  opt.onclick = () => alert(opt.innerText + ' clicked (beta)');
});
//plz teacher help me
document.querySelector('.switch').onclick = function (e) {
  e.stopPropagation();
  this.classList.toggle('active');
};