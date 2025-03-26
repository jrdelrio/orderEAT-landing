document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector(".contact-form form");
  
    form.addEventListener("submit", async (e) => {
      e.preventDefault();
  
      const formData = {
        name: document.getElementById("name").value,
        school: document.getElementById("school").value,
        position: document.getElementById("position").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        message: document.getElementById("message").value,
      };
  
      try {
        const response = await fetch("https://tu-api.com/api/contact", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });
  
        if (response.ok) {
          alert("Mensaje enviado con éxito ✅");
          form.reset();
        } else {
          alert("Hubo un error al enviar el mensaje ❌");
        }
      } catch (error) {
        console.error("Error al enviar el formulario:", error);
        alert("Error de red o del servidor ❌");
      }
    });
  console.log("script corriendo")
  });