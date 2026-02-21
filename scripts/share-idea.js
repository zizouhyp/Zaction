
const ideaModeBtn = document.getElementById('idea-mode');
const codeModeBtn = document.getElementById('code-mode');

const ideaInput = document.getElementById('idea-input');
const codeInput = document.getElementById('code-input');

const clearBtn = document.getElementById('clear-btn');
const shareBtn = document.getElementById('share-btn');

const navIcons = document.querySelectorAll('.main-tools .icons');

ideaInput.style.display = 'block';
codeInput.style.display = 'none';


ideaModeBtn.addEventListener('click', () => {
  ideaModeBtn.classList.add('active');
  codeModeBtn.classList.remove('active');

  ideaInput.style.display = 'block';
  codeInput.style.display = 'none';
});

codeModeBtn.addEventListener('click', () => {
  codeModeBtn.classList.add('active');
  ideaModeBtn.classList.remove('active');

  codeInput.style.display = 'block';
  ideaInput.style.display = 'none';
});


clearBtn.addEventListener('click', () => {
  ideaInput.value = '';
  codeInput.value = '';
});



shareBtn.addEventListener('click', () => {
  const isIdeaMode = ideaModeBtn.classList.contains('active');
  const content = isIdeaMode ? ideaInput.value.trim() : codeInput.value.trim();

  if (!content) return;

  const post = {
    id: Date.now(),
    author: 'Zouhir benessalah',
    type: isIdeaMode ? 'idea' : 'code',
    text: content,
    likes: 78,
    liked: false,
    time: Date.now()
  };

  const posts = JSON.parse(localStorage.getItem('posts')) || [];
  posts.unshift(post);
  localStorage.setItem('posts', JSON.stringify(posts));

  shareBtn.textContent = 'Shared';

  setTimeout(() => {
    shareBtn.textContent = 'Share';
    ideaInput.value = '';
    codeInput.value = '';
  }, 600);
});

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