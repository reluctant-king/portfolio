function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }
function sentMessage(event){
  event.preventDefault();
    const message = document.getElementById("message").value;
    if (message.trim() === "") {
        alert("Please enter a message before sending.");
        return;
    }
    alert("Message sent: ");

}
const text = [ "Full Stack Developer", "Software Engineer","Web Developer", "Tech Enthusiast" , "MERN Stack Developer"];
let count = 0;
let index = 0;
let currentText = '';
let letter = '';
let typingSpeed = 150;

(function type() {
  if (count === text.length) count = 0;
  currentText = text[count];
  letter = currentText.slice(0, ++index);

  document.querySelector(".section__text__p2").textContent = letter;
  if (letter.length === currentText.length) {
    setTimeout(() => {
      index = 0;
      count++;
      setTimeout(type, 800);
    }, 1000); 
  } else {
    setTimeout(type, typingSpeed);
  }
})();