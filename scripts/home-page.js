const icons = document.querySelectorAll('.main-tools .icons');

icons.forEach(icon => {
  icon.addEventListener('click', () => {
    // Remove active from all icons
    icons.forEach(i => i.classList.remove('active'));

    // Add active to clicked icon
    icon.classList.add('active');

    // Optional: pulse animation
    icon.classList.add('clicked');
    setTimeout(() => icon.classList.remove('clicked'), 300);

    // Navigate to respective page
    switch(icon.id) {
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
        window.location.href = 'my-page.html';
        break;
    }
  });
});
const feed = document.getElementById('feed');

function loadPosts() {
  feed.innerHTML = '';
  const posts = JSON.parse(localStorage.getItem('posts')) || [];

  posts.forEach(post => {
    const card = document.createElement('div');
    card.className = 'post-card';

    const author = document.createElement('div');
    author.className = 'post-author';
    author.textContent = post.author;

    const content = document.createElement('pre');
    content.textContent = post.text;

    const actions = document.createElement('div');
    actions.className = 'post-actions';

    // HEART
    const heart = document.createElement('img');
    heart.src = 'icons/heart.png';
    heart.className = 'action-icon';
    heart.style.opacity = post.liked ? '1' : '0.5';

    heart.onclick = () => {
      post.liked = !post.liked;
      post.likes += post.liked ? 1 : -1;
      saveAndReload(posts);
    };

    // LIKE COUNT
    const likeCount = document.createElement('span');
    likeCount.textContent = post.likes;

    // SHARE
    const share = document.createElement('img');
    share.src = 'icons/share.png';
    share.className = 'action-icon';

    share.onclick = () => {
      navigator.clipboard.writeText(post.text);
    };

    // DELETE
    const del = document.createElement('img');
    del.src = 'icons/delete.png';
    del.className = 'action-icon';

    del.onclick = () => {
      const updated = posts.filter(p => p.id !== post.id);
      saveAndReload(updated);
    };

    actions.append(heart, likeCount, share, del);
    card.append(author, content, actions);
    feed.appendChild(card);
  });
}

function saveAndReload(posts) {
  localStorage.setItem('posts', JSON.stringify(posts));
  loadPosts();
}

loadPosts();