function checkPassword(event) {
  // with a function on submit we have to prevent default behavior = auto page reloading, so users can enter the section for logged-in persons
  event.preventDefault();
// changed var to const to prevent unexpected behavior
  const password = document.getElementById("password-input").value;
  if (password === "1234567890") {
    document.body.classList.remove("password-protected");
    document.getElementById("overlay").style.display = "none";
  } else {
    alert("Incorrect password. Please try again.");
  }
}

function toggleMenu() {
  const nav = document.querySelector("nav");
  nav.classList.toggle("show");
}
