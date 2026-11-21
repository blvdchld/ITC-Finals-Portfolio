const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');


menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contact-form");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const params = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      subject: document.getElementById("subject").value,
      message: document.getElementById("message").value,
    };

    emailjs
      .send("service_0a9bky6", "template_qs7utb9", params)
      .then(() => {
        alert("Email has been sent!");
        form.reset();
      })
      .catch((err) => {
        console.error(err);
        alert("Something went wrong. Please try again.");
      });
  });
});