
const navIcons = document.querySelectorAll('.main-tools .icons');

navIcons.forEach(icon => {
  icon.addEventListener('click', () => {
    switch (icon.id) {
      case 'home-page':
        window.location.href = 'home-page.html';
        break;
      case 'explore-page':
        window.location.href = 'explore.html';
        break;
      case 'share-idea-page':
        window.location.href = 'share-idea.html';
        break;
      case 'inbox-page':
        window.location.href = 'inbox.html';
        break;
      case 'my-page':
        window.location.href = 'profile.html';
        break;
    }
  });
});

document.getElementById('donate-btn').addEventListener('click', () => {
  alert('Thank you! This would open a donation link.');
});

document.getElementById('tip-btn').addEventListener('click', () => {
  alert('Thank you! This would open a tip link.');
});

document.getElementById('feedback-btn').addEventListener('click', () => {
  alert('Please send your feedback.');
});
