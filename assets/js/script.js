document.addEventListener("DOMContentLoaded", function () {
    // Obtenemos los elementos del DOM
    const input = document.getElementById("user-input");
    const checkBtn = document.getElementById("check-btn");
    const clearBtn = document.getElementById("clear-btn");
    const resultsDiv = document.getElementById("results-div");
  
    // Función para validar el número telefónico
    function validatePhoneNumber(phoneNumber) {
      const regex = /^(1\s?)?(\(\d{3}\)|\d{3})([\s-]?)\d{3}([\s-]?)\d{4}$/;
      return regex.test(phoneNumber);
    }
  
    // Función para mostrar el resultado
    function showResult(isValid, phoneNumber) {
      if (isValid) {
        resultsDiv.textContent = `Valid US number: ${phoneNumber}`;
        resultsDiv.style.color = "green";
      } else {
        resultsDiv.textContent = `Invalid US number: ${phoneNumber}`;
        resultsDiv.style.color = "red";
      }
    }
  
    // Manejador para el botón "Check"
    checkBtn.addEventListener("click", function () {
      const phoneNumber = input.value.trim();

      if (phoneNumber === "") {
        alert("Please provide a phone number");
        return;
      }

      const isValid = validatePhoneNumber(phoneNumber);
      showResult(isValid, phoneNumber);
    });
  
    // Manejador para el botón "Clear"
    clearBtn.addEventListener("click", function () {
      input.value = "";
      resultsDiv.textContent = "";
    });
  });
  
  