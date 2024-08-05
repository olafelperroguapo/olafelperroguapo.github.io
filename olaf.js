<script>
// Función para desplegar y contraer secciones de contenido
document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section');

    sections.forEach(section => {
        const heading = section.querySelector('h2');
        heading.style.cursor = 'pointer';
        heading.addEventListener('click', () => {
            section.classList.toggle('collapsed');
            if (section.classList.contains('collapsed')) {
                section.querySelector('ul, p').style.display = 'none';
            } else {
                section.querySelector('ul, p').style.display = 'block';
            }
        });
    });

    // Asegurarse de que las secciones estén colapsadas por defecto
    sections.forEach(section => {
        section.classList.add('collapsed');
        section.querySelector('ul, p').style.display = 'none';
    });
});

// Función para mostrar una ventana emergente
function showAlert() {
    alert('¡Gracias por visitar la página de Olaf! Si tienes alguna pregunta, no dudes en contactarnos.');
}

// Agregar un efecto de desplazamiento suave para enlaces de anclaje
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
</script>
