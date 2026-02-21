//localStorage.clear();
//location.reload();
document.getElementById("back").onclick = () => {
  window.location.href = "inbox.html";
};



const params = new URLSearchParams(window.location.search);
const user = params.get("user") || "user";

document.getElementById("chat-name").textContent = user;


const STORAGE_KEY = `chat_${user}`;


const input = document.getElementById("msg-input");
const messages = document.getElementById("messages");
const sendBtn = document.getElementById("send-btn");

let chatData = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];

chatData.forEach(msg => addMessage(msg.text, msg.side));

sendBtn.onclick = sendMessage;
input.addEventListener("keydown", e => {
  if (e.key === "Enter") sendMessage();
});

function sendMessage() {
  const text = input.value.trim();
  if (!text) return;

  const msg = { text, side: "right" };
  chatData.push(msg);

  saveChat();
  addMessage(text, "right");

  input.value = "";
  
  fakeReply(text);
}

function addMessage(text, side) {
  const div = document.createElement("div");
  div.className = `msg ${side}`;
  div.innerHTML = `<span>${text}</span>`;
  messages.appendChild(div);
  messages.scrollTop = messages.scrollHeight;
}

function saveChat() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(chatData));
}

function fakeReply(userText) {
  setTimeout(() => {
    const text = userText.toLowerCase();
    let reply = "Okay 👍";

    if (text.includes("hi") || text.includes("hello")) {
      reply = "Heyyy 👋";
    }
    else if (text.includes("how are you")) {
      reply = "I’m good 😄 you?";
    }
    else if (text.includes("?")) {
      reply = "Hmm… good question 🤔";
    }
    else if (text.includes("thanks") || text.includes("thank you")) {
      reply = "Anytime! 😄";
    }
    else if (text.includes("lol") || text.includes("haha")) {
      reply = "😂😂";
    }
    else if (text.includes("bye")) {
      reply = "See you later 👋";
    }
    else if (text.includes("i love you")) {
      reply = "i love tooo <3";
    }

    addMessage(reply, "left");
  }, 800);
}