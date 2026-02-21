
document.getElementById("return").addEventListener("click", () => {
  window.location.href = "home-page.html";
});


document.querySelectorAll(".friend").forEach(friend => {
  friend.addEventListener("click", () => {
    const user = friend.dataset.user;
    window.location.href = `chat-page.html?user=${user}`;
  });
});