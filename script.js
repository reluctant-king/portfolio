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