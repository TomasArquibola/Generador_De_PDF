document.addEventListener('DOMContentLoaded', () => {
  const formulario = document.getElementById("formulario");
  const previewPDF = document.getElementById("previewPDF");
  const toggleDarkModeButton = document.getElementById('toggleDarkMode');
  const body = document.body;
  const container = document.querySelector('.container');
  const labels = document.querySelectorAll('label');
  const hr = document.querySelector('hr');
  const h1 = document.querySelector('h1');
  const formControls = document.querySelectorAll('.form-control');
  const buttons = document.querySelectorAll('.btn');

  formulario.addEventListener("submit", async function (e) {
      e.preventDefault();
      const { jsPDF } = window.jspdf;
      const doc = new jsPDF();

      const evento = document.getElementById("evento").value;
      const fechaLugar = document.getElementById("fechaLugar").value;
      const nombre = document.getElementById("nombre").value;
      const rol = document.getElementById("rol").value;
      const duracion = document.getElementById("duracion").value;

      const numero = Date.now();

      doc.setFontSize(18);
      doc.text("Certificado de Asistencia", 20, 20);
      doc.setFontSize(12);
      doc.text(`Nombre del evento: ${evento}`, 20, 40);
      doc.text(`Participante: ${nombre}`, 20, 50);
      doc.text(`Rol: ${rol}`, 20, 60);
      doc.text(`Fecha y lugar: ${fechaLugar}`, 20, 70);
      doc.text(`Duración: ${duracion}`, 20, 80);
      doc.text(`Certificado N.º ${numero}`, 20, 90);
      doc.text(`Emitido el: ${new Date().toLocaleDateString()}`, 20, 100);

      // Descargar PDF
      doc.save(`certificado_${nombre}.pdf`);

      // Guardar en localStorage (simple ejemplo)
      const historial = JSON.parse(localStorage.getItem("historialCertificados")) || [];
      historial.push({ nombre, evento, fecha: new Date().toLocaleDateString(), rol });
      localStorage.setItem("historialCertificados", JSON.stringify(historial));
      mostrarHistorial();
  });

  function mostrarHistorial() {
      const historial = JSON.parse(localStorage.getItem("historialCertificados")) || [];
      previewPDF.innerHTML = "<h3>Historial de certificados:</h3>";
      historial.forEach((cert, index) => {
          previewPDF.innerHTML += `<p>${index + 1}. ${cert.nombre} - ${cert.evento} (${cert.fecha})</p>`;
      });
  }

  mostrarHistorial(); // Llamar al cargar la página

  toggleDarkModeButton.addEventListener('click', () => {
      body.classList.toggle('dark-mode');
      container.classList.toggle('dark-mode');
      formulario.classList.toggle('dark-mode');
      previewPDF.classList.toggle('dark-mode');
      h1.classList.toggle('dark-mode-text');
      hr.classList.toggle('dark-mode-border');
      labels.forEach(label => label.classList.toggle('dark-mode-text'));
      formControls.forEach(control => control.classList.toggle('dark-mode-input'));
      buttons.forEach(button => button.classList.toggle('dark-mode-button'));

      // Cambiar el texto del botón
      if (body.classList.contains('dark-mode')) {
          toggleDarkModeButton.textContent = 'Modo Claro';
      } else {
          toggleDarkModeButton.textContent = 'Modo Oscuro';
      }
  });
});