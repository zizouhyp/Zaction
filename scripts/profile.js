
const avatarInput = document.getElementById('avatar-input');
const avatarImg = document.getElementById('avatar-img');
const changeAvatarLabel = document.querySelector('.change-avatar');

changeAvatarLabel.addEventListener('click', () => {
  avatarInput.click();
});

avatarInput.addEventListener('change', () => {
  const file = avatarInput.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = () => {
      avatarImg.src = reader.result;
    };
    reader.readAsDataURL(file);
  }
});


const icons = document.querySelectorAll('.main-tools .icons');

icons.forEach(icon => {
  icon.addEventListener('click', () => {
    icons.forEach(i => i.classList.remove('active'));
    icon.classList.add('active');

    switch(icon.id) {
      case 'home-page':
        window.location.href = 'home-page.html';
        break;
      case 'setting':
        window.location.href = 'setting.html';
        break;
      case 'support-ing':
        window.location.href = 'support.html';
        break;
    }
  });
});

const followBtn = document.getElementById('follow-btn');
followBtn.addEventListener('click', () => {
  if (followBtn.textContent === 'Follow') {
    followBtn.textContent = 'Following';
  } else {
    followBtn.textContent = 'Follow';
  }
});