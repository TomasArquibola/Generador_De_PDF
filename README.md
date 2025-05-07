# Generador de Certificados Web Personalizable con Modo Oscuro

**Crea y descarga certificados de asistencia personalizados directamente desde tu navegador web. Ideal para eventos, cursos y talleres.**

Este proyecto ofrece una solución sencilla y visualmente atractiva para generar certificados de participación o asistencia. Los usuarios pueden ingresar los detalles del evento, la información del participante y descargar un PDF listo para imprimir o compartir. Además, cuenta con un modo oscuro integrado para una experiencia de visualización cómoda en cualquier momento del día.

## ¿De qué se trata este proyecto?

Este generador de certificados web está diseñado para simplificar el proceso de creación de reconocimientos digitales. Ya no necesitas complicados programas de diseño. Simplemente completa un formulario con los datos relevantes, y la aplicación se encarga de generar un certificado profesional en formato PDF.

**Imagina poder:**

* Emitir certificados personalizados para los asistentes a tus eventos con solo unos clics.
* Ofrecer un reconocimiento a los participantes de tus cursos o talleres de forma rápida y eficiente.
* Tener un registro básico de los certificados emitidos directamente en tu navegador.
* Adaptar la apariencia del sitio a tus preferencias visuales con el modo claro y oscuro.

## Funcionalidades Clave

* **Formulario de Ingreso Intuitivo:** Una interfaz limpia y fácil de entender guía al usuario a través de los campos necesarios para generar el certificado (nombre del evento, fecha, participante, rol, duración).
* **Generación Instantánea de PDF:** Utiliza la potente librería jsPDF para crear un archivo PDF con el certificado basado en la información proporcionada.
* **Personalización de Contenido:** Permite especificar detalles cruciales como el nombre del evento, la identidad del participante y su rol, así como la fecha y duración del mismo.
* **Descarga Directa:** Una vez generado, el certificado PDF se descarga automáticamente al dispositivo del usuario.
* **Historial Básico en el Navegador:** Los datos de los certificados generados se almacenan localmente en el navegador (localStorage), proporcionando un historial simple de las emisiones.
* **Experiencia Visual Optimizada con Modo Oscuro:** Incluye un botón para alternar entre un tema claro y un tema oscuro (con una paleta de colores inspirada en Discord) para adaptarse a las preferencias del usuario y reducir la fatiga visual en entornos oscuros.
* **Diseño Adaptable (Responsive):** Gracias a la integración de Bootstrap, la interfaz se visualiza correctamente en diferentes tamaños de pantalla, desde computadoras de escritorio hasta dispositivos móviles.
* **Estilos Personalizados para el PDF:** El certificado PDF generado cuenta con estilos definidos para una presentación profesional, incluyendo títulos centrados, texto en negrita para etiquetas y una disposición clara de la información.

## ¿Para quién es útil este proyecto?

Este generador de certificados puede ser útil para:

* **Organizadores de eventos:** Para proporcionar un reconocimiento a los asistentes, ponentes u organizadores.
* **Educadores y capacitadores:** Para emitir certificados de participación o finalización de cursos y talleres.
* **Comunidades y grupos:** Para reconocer la participación de sus miembros en actividades específicas.
* **Cualquier persona que necesite generar certificados simples de forma rápida y sin complicaciones.**

## Cómo funciona por dentro (Resumen Técnico)

El proyecto combina las siguientes tecnologías para ofrecer su funcionalidad:

* **HTML:** Define la estructura del formulario y los elementos de la página web.
* **CSS (con Bootstrap):** Proporciona estilos visuales consistentes y un diseño adaptable. Los estilos personalizados (`style.css`) refinan la apariencia y definen los colores del modo oscuro.
* **JavaScript:** Es el motor de la aplicación. Captura los datos del formulario, utiliza la librería `jsPDF` para generar el archivo PDF con los estilos definidos, y gestiona el almacenamiento del historial en el navegador. También implementa la lógica para el modo oscuro, modificando las clases CSS del cuerpo y otros elementos.

## ¡Pruébalo y adáptalo!

Este proyecto es un excelente punto de partida si necesitas una solución sencilla para generar certificados web. Puedes clonar el repositorio y personalizarlo aún más para adaptarlo a tus necesidades específicas, modificando los estilos del PDF, añadiendo más campos al formulario o integrándolo con otras funcionalidades.

