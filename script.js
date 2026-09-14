// =========================
// HAPPY GIRLFRIEND DAY
// script.js
// =========================

// Floating Hearts
const heartsContainer = document.getElementById("hearts-container");

function createHeart() {
  const heart = document.createElement("div");

  heart.className = "heart";

  const hearts = ["❤️", "💖", "💕", "💗"];

  heart.innerHTML = hearts[Math.floor(Math.random() * hearts.length)];

  heart.style.left = Math.random() * 100 + "vw";

  heart.style.fontSize = 15 + Math.random() * 25 + "px";

  heart.style.animationDuration = 5 + Math.random() * 5 + "s";

  heart.style.opacity = Math.random();

  heartsContainer.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 10000);
}

setInterval(createHeart, 300);

// =========================
// Typing Effect
// =========================

const message = `

Happy Girlfriend's Bachaa❤️I love you a lot cutieeee❤️❤️❤️❤️😘😘😘😘😘

You are the best thing that has ever happened to me.

Every moment spent with you becomes a beautiful memory.

Thank you for filling my life with happiness,
love and countless smiles.

Happy Girlfriend Day ❤️

I Love You Forever ❤️

`;

const typingText = document.getElementById("typingText");

let index = 0;

function typeWriter() {
  if (index < message.length) {
    typingText.innerHTML += message.charAt(index);

    index++;

    setTimeout(typeWriter, 35);
  }
}

window.addEventListener("load", typeWriter);

// =========================
// Popup
// =========================

const popup = document.getElementById("popup");

const surpriseBtn = document.getElementById("surpriseBtn");

const close = document.querySelector(".close");

surpriseBtn.onclick = function () {
  popup.style.display = "flex";
};

close.onclick = function () {
  popup.style.display = "none";
};

window.onclick = function (e) {
  if (e.target == popup) {
    popup.style.display = "none";
  }
};

// =========================
// Scroll Animation
// =========================

const revealElements = document.querySelectorAll(
  ".photo,.reason-card,.timeline-box,.card,.glass",
);

function reveal() {
  const windowHeight = window.innerHeight;

  revealElements.forEach((el) => {
    const top = el.getBoundingClientRect().top;

    if (top < windowHeight - 100) {
      el.style.opacity = "1";

      el.style.transform = "translateY(0)";
    }
  });
}

reveal();

window.addEventListener("scroll", reveal);

// =========================
// Button Ripple
// =========================

const button = document.querySelector("button");

button.addEventListener("click", function (e) {
  const circle = document.createElement("span");

  const diameter = Math.max(button.clientWidth, button.clientHeight);

  circle.style.width = diameter + "px";

  circle.style.height = diameter + "px";

  circle.style.position = "absolute";

  circle.style.borderRadius = "50%";

  circle.style.background = "rgba(255,255,255,.4)";

  circle.style.left = e.offsetX - diameter / 2 + "px";

  circle.style.top = e.offsetY - diameter / 2 + "px";

  circle.style.transform = "scale(0)";

  circle.style.animation = "ripple .6s linear";

  button.appendChild(circle);

  setTimeout(() => {
    circle.remove();
  }, 600);
});

// =========================
// Ripple Animation CSS
// =========================

const style = document.createElement("style");

style.innerHTML = `

button{

overflow:hidden;

position:relative;

}

@keyframes ripple{

to{

transform:scale(4);

opacity:0;

}

}

`;

document.head.appendChild(style);
