document.addEventListener("DOMContentLoaded", () => {
  const submitBtn = document.getElementById("submitBtn");
  const waBtn = document.getElementById("waBtn");
  const modalOkayBtn = document.getElementById("modalOkayBtn");
  const modalOverlay = document.getElementById("successModal");

  const nameInput = document.getElementById("name");
  const messageInput = document.getElementById("message");
  const emailInput = document.getElementById("email");

  // Regex for validating email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Form Submit Logic
  submitBtn.addEventListener("click", () => {
    let isValid = true;

    // Reset existing errors
    document
      .querySelectorAll(".error-msg")
      .forEach((el) => el.classList.remove("show"));

    // Validate Name
    if (nameInput.value.trim() === "") {
      document.getElementById("nameError").classList.add("show");
      isValid = false;
    }

    // Validate Message
    if (messageInput.value.trim() === "") {
      document.getElementById("messageError").classList.add("show");
      isValid = false;
    }

    // Validate Email
    if (!emailRegex.test(emailInput.value.trim())) {
      document.getElementById("emailError").classList.add("show");
      isValid = false;
    }

    // If all fields valid
    if (isValid) {
      const userName = encodeURIComponent(nameInput.value.trim());
      const userMessage = encodeURIComponent(messageInput.value.trim());

      // Create mailto link to send data to specified email
      const mailtoLink = `mailto:sammy44141@gmail.com?subject=New Contact Message from ${userName}&body=${userMessage}`;

      // Trigger email client in the background
      window.location.href = mailtoLink;

      // Clear fields
      nameInput.value = "";
      messageInput.value = "";
      emailInput.value = "";

      // Show success modal (slight delay ensures mailto action triggers first)
      setTimeout(() => {
        modalOverlay.classList.add("active");
      }, 500);
    }
  });

  // Modal Okay Button Redirect
  modalOkayBtn.addEventListener("click", () => {
    modalOverlay.classList.remove("active");
    window.location.href = "index.html";
  });

  // WhatsApp Redirect
  waBtn.addEventListener("click", () => {
    window.open("https://wa.me/07061953192", "_blank");
  });

  // Real-time clear error on typing
  [nameInput, messageInput, emailInput].forEach((input) => {
    input.addEventListener("input", function () {
      const errorEl = this.nextElementSibling;
      if (errorEl && errorEl.classList.contains("error-msg")) {
        errorEl.classList.remove("show");
      }
    });
  });
});
