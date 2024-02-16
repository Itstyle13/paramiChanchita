document.addEventListener('DOMContentLoaded', function() {
    const contenedor = document.body; // O selecciona un contenedor específico si prefieres
    const numeroDeRosas = 20; // Total de rosas, incluyendo la del centro
    const radio = 250; // Radio del círculo en px
    const rosaOriginal = document.querySelector('.rosa');

    rosaOriginal.remove(); // Elimina la rosa original para evitar duplicados en el centro


    for (let i = 0; i < numeroDeRosas; i++) {
        const clon = rosaOriginal.cloneNode(true);

        if (i < numeroDeRosas - 1) { // Para todas las rosas, excepto la última (la del centro)
            // Calcula la posición x e y para cada rosa en el círculo
            let angulo = (i / (numeroDeRosas - 1)) * 2 * Math.PI; // Ajusta para no incluir la rosa del centro en el cálculo del ángulo
            let x = radio * Math.cos(angulo) + contenedor.offsetWidth / 2 - rosaOriginal.offsetWidth / 2; // Ajusta al centro
            let y = radio * Math.sin(angulo) + contenedor.offsetHeight / 2 - rosaOriginal.offsetHeight / 2; // Ajusta al centro
            
            clon.style.position = 'absolute';
            clon.style.left = `${x}px`;
            clon.style.top = `${y}px`;

            // Crea y añade el número a la rosa
            const numero = document.createElement('span');
            numero.textContent = i + 1; // Número de la rosa
            numero.style.position = 'absolute';
            numero.style.color = 'white';
            numero.style.left = '50%';
            numero.style.top = '50%';
            numero.style.transform = 'translate(-50%, -50%)';
            numero.style.fontSize = '20px'; // Ajusta el tamaño de la fuente según necesites
            clon.appendChild(numero);
        } else {
            // Posiciona la rosa del centro sin número
            clon.style.position = 'absolute';
            clon.style.left = `${contenedor.offsetWidth / 2 - rosaOriginal.offsetWidth / 2}px`;
            clon.style.top = `${contenedor.offsetHeight / 2 - rosaOriginal.offsetHeight / 2}px`;
            // Dentro del bucle for, en la parte del 'else' donde configuras la rosa del centro
            clon.classList.add('rosa-centro'); // Añade esta línea

        }

        contenedor.appendChild(clon);
    }

    // Añade el evento de clic a todas las rosas para reiniciar la animación
    document.querySelectorAll('.rosa').forEach(rosa => {
        rosa.addEventListener('click', function() {
            this.style.animation = 'none';
            this.offsetHeight; // Forzar reflujo
            this.style.animation = 'florecer 2s forwards';
        });
    });

    // Identifica la rosa del centro después de que todas han sido creadas
    const rosaDelCentro = document.querySelector('.rosa-centro');

    rosaDelCentro.addEventListener('click', function() {
        // Verifica si el corazón ya existe
        let corazon = document.querySelector('.corazon');
        if (!corazon) {
            corazon = document.createElement('div');
            corazon.className = 'corazon';
            document.body.appendChild(corazon);
    
            const imagen = document.createElement('img');
            imagen.src = 'Imagenes/IMG-20240122-WA0010.jpg'; // Cambia esto por la ruta de tu imagen
            imagen.className = 'imagen-rosa';
            corazon.appendChild(imagen);
    
            // Hace que la imagen sea visible
            imagen.style.visibility = 'visible';
        }
    
        // Hace que la imagen (y el corazón) desaparezca después de 4 segundos
        setTimeout(function() {
            if (corazon) {
                corazon.remove(); // Elimina el corazón y la imagen del DOM
            }
        }, 3000); // 4000 milisegundos = 4 segundos
    });
    
});

