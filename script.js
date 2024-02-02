function checkPassword() {
    var password = document.getElementById("password-input").value;
    // Replace 'yourpassword' with the actual password
    if (password === "1234567890") {
        document.body.classList.remove("password-protected");
        document.getElementById("overlay").style.display = "none";
    } else {
        alert("Incorrect password. Please try again.");
    }
}

function toggleMenu() {
    var nav = document.querySelector('nav');
    nav.classList.toggle('show');
}
