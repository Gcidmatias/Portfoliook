document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("contactForm");
    const submitBtn = document.getElementById("submitBtn");
  
    form.addEventListener("submit", function(event) {
      event.preventDefault();
      if (validateForm()) {

        alert("Formulario válido. Enviando datos...");
        // Limpia el formulario después de enviar, si es necesario
        form.reset();
        submitBtn.disabled = true;
      }
    });
  
    function validateForm() {
      let isValid = true;
  
      // Resetear mensajes de error
      resetErrors();
  
      // Validar nombre
      const nombre = document.getElementById("nombre");
      if (!nombre.value.trim()) {
        isValid = false;
        displayError("errorNombre", "Por favor, ingresa tu nombre.");
      }
  
      // Validar email
      const email = document.getElementById("email");
      if (!email.value.trim()) {
        isValid = false;
        displayError("errorEmail", "Por favor, ingresa tu correo electrónico.");
      } else if (!isValidEmail(email.value.trim())) {
        isValid = false;
        displayError("errorEmail", "Por favor, ingresa un correo electrónico válido.");
      }
  
      // Validar teléfono
      const telefono = document.getElementById("telefono");
      if (!telefono.value.trim()) {
        isValid = false;
        displayError("errorTelefono", "Por favor, ingresa tu número de teléfono.");
      }
  
      // Validar mensaje
      const mensaje = document.getElementById("mensaje");
      if (!mensaje.value.trim()) {
        isValid = false;
        displayError("errorMensaje", "Por favor, ingresa tu mensaje.");
      }
  
      return isValid;
    }
  
    function isValidEmail(email) {
      // Expresión regular para validar email
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return regex.test(email);
    }
  
    function displayError(id, message) {
      const errorElement = document.getElementById(id);
      errorElement.innerText = message;
    }
  
    function resetErrors() {
      document.getElementById("errorNombre").innerText = "";
      document.getElementById("errorEmail").innerText = "";
      document.getElementById("errorTelefono").innerText = "";
      document.getElementById("errorMensaje").innerText = "";
    }
  
    // Habilitar botón enviar solo si el formulario es válido
    form.addEventListener("input", function() {
      submitBtn.disabled = !validateForm();
    });
  });