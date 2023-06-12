document.querySelector("button.button-menu-toggle")
.addEventListener("click", function() {
  document.querySelector(".nav-links").
   classList.toggle("nav-links-responsive")})


function showAlert() { alert("!Hola, esta es una alerta desde JavaScript!")
 }

 const form = document.getElementById('myForm');

 if (form) {
 form.addEventListener('submit', function(evento) {
  evento.preventDefault();
  validateForm();
  })}


function validateEmail(email) {
    const regex =  /^[^\s@]+@[^\s@]+\.[^\s@]{2,7}$/
    return regex.test(email)
  }
  
  function validateForm() {
    const emailInput = document.getElementById('email');
    const email = emailInput.value;

    if (!validateEmail(email)) {
      alert('Por favor ingrese un correo electrónico válido.');
    } else {
      alert('Correo electrónico enviado correctamente.');
    }
  }


