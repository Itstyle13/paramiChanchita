document.addEventListener('DOMContentLoaded', function () {

    let rosasClickeadas = 0;

    const mensajes = [
        "Feliz primer mes de amor, mi chanchita querida. Cada día a tu lado es un dulce postre que saboreo con el corazón.",
        "En la senda de enero a febrero, el amor halló su refugio, en el palpitar de un corazón sincero, Talia, en ti, mi destino seguro.",
        "Dulce como el postre al final del día, así es el amor que Talia me envía, con cada gesto, endulza mi vida, en un mes de amor, nuestra eterna poesía.",
        "Vallejo suspiraría, ante tal dulzura encontrada, en los brazos de Talia, mi alma está anclada.",
        "Admiro la fortaleza que reside dentro de ti, esa capacidad de enfrentarte a los desafíos con una sonrisa, mostrándome lo que realmente significa ser resiliente.",
        "Como Vargas Llosa narra un cuento, nuestra historia escribe el viento, en páginas de amor y contento, Talia, eres mi más bello pensamiento.",
        "Bajo la luna de febrero, celebramos un mes, pero querida, en cada beso te confieso, mi amor por ti siempre empieza.",
        "En tus ojos, un universo, en tu sonrisa, mi verso, Talia, en ti descubro el reverso, del amor, en su forma más pura y diverso.",
        "Apoyo en mis días, luz en mis noches, Talia, en ti, todas mis búsquedas concluyen, en un amor que por siempre florece.",
        "En el dulce sabor de tu presencia, encuentro mi esencia, Talia, contigo, toda resistencia, se disuelve en pura querencia.",
        "Desde aquel 19 de enero, el amor tomó su vuelo, Talia, mi corazón es sincero, en este viaje, tú eres mi cielo.",
        "Cada día a tu lado, un regalo, Talia, mi amor, en este mes, te lo recalco, eres mi todo, en este amor que no callo.",
        "Amo cómo te dedicas a nuestro amor, buscando siempre formas de hacerme sentir especial y amado.",
        "Tu risa, melodía que al viento lanzo, en ella, mi corazón danzo, con cada carcajada, avanzo, en este amor, nuestro romance.",
        "En el lienzo del cielo, tu nombre pinto, Talia, en cada estrella, un destello, un suspiro, amor que en el universo infinito, halla su camino.",
        "De enero a febrero, el tiempo vuela, pero en tus brazos, el reloj congela, cada momento, una estrella, que en nuestro cielo destella.",
        "Eres el sueño de un poeta, en versos te dibujo, musa completa, en tu amor, mi alma inquieta, halla su refugio, su meta.",
        "Cierro estos versos, pero no mi sentir, Talia, en ti, un eterno porvenir, en cada palabra, un deseo de decir, mi amor por ti, imposible de medir.",
        "Por último, pero no menos importante, amo cómo Talia me inspira a ser la mejor versión de mí mismo, su amor me motiva a crecer, a amar y a soñar sin límites."
        
    ];

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
            // Asignar un mensaje a cada rosa
            clon.setAttribute('data-mensaje', mensajes[i % mensajes.length]); // Asegura que los mensajes se repiten si hay más rosas que mensajes

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
    document.querySelectorAll('.rosa:not(.rosa-centro)').forEach((rosa, index) => {
        rosa.addEventListener('click', function () {
            mostrarCarta(this, this.getAttribute('data-mensaje'));
            this.style.animation = 'none';
            this.offsetHeight; // Forzar reflujo
            this.style.animation = 'florecer 2s forwards';
        });
    });

    // Identifica la rosa del centro después de que todas han sido creadas
    const rosaDelCentro = document.querySelector('.rosa-centro');

    rosaDelCentro.addEventListener('click', function () {
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

        // Hace que la imagen (y el corazón) desaparezca después de 3 segundos
        setTimeout(function () {
            if (corazon) {
                corazon.remove(); // Elimina el corazón y la imagen del DOM
            }
        }, 3000); // 3000 milisegundos = 3 segundos
    });

    // Añade el evento de clic a todas las rosas para reiniciar la animación
    document.querySelectorAll('.rosa').forEach(rosa => {
        rosa.addEventListener('click', function () {
            if (!this.classList.contains('rosa-no-activa')) {
                this.classList.add('rosa-no-activa'); // Marca la rosa como no activa
                rosasClickeadas++; // Incrementa el contador de rosas clickeadas

                // Si todas las rosas han sido clickeadas, reinicia la animación de todas
                if (rosasClickeadas === document.querySelectorAll('.rosa').length) {
                    document.querySelectorAll('.rosa').forEach(rosa => {
                        rosa.classList.remove('rosa-no-activa'); // Quita la marca de no activa
                        rosa.style.animation = ''; // Reinicia la animación quitando el estilo inline
                    });
                    rosasClickeadas = 0; // Reinicia el contador
                }
            }
        });
    });


    function mostrarCarta(elementoRosa, mensaje) {
        let carta = elementoRosa.querySelector('.carta');
        if (!carta) {
            carta = document.createElement('div');
            carta.className = 'carta';
            const contenido = document.createElement('p');
            contenido.textContent = mensaje;
            const botonCerrar = document.createElement('button');
            botonCerrar.textContent = 'Cerrar';
            carta.appendChild(contenido);
            carta.appendChild(botonCerrar);
            document.body.appendChild(carta); // Cambio aquí: se añade al body para posicionar globalmente

            botonCerrar.addEventListener('click', function (e) {
                e.stopPropagation(); // Evita que el evento de clic se propague
                carta.style.display = 'none'; // Oculta la carta
            });
        }

        // Ajusta el estilo para posicionar en el lado derecho
        carta.style.position = 'absolute';
        carta.style.right = '20px'; // Ajusta según necesites para el margen derecho
        carta.style.top = '50%'; // Ajusta si necesitas cambiar la posición vertical
        carta.style.transform = 'translateY(-50%)'; // Centra verticalmente respecto a su posición
        carta.style.display = 'flex'; // Muestra la carta
        carta.style.flexDirection = 'column'; // Asegura que el contenido fluye verticalmente
        carta.style.alignItems = 'center'; // Centra los elementos horizontalmente
        carta.style.zIndex = 1000; // Asegura que la carta se muestre por encima de otros elementos
    }

    // Añadir la frase al cuerpo del documento con cada palabra en una nueva línea
    const fraseDiv = document.createElement('div');
    fraseDiv.className = 'frase-animada';
    const palabras = ['"FELIZ PRIMER', 'MES', 'MI CHANCHITA"'];
    palabras.forEach((palabra, index) => {
        const linea = document.createElement('div');
        if (palabra === 'MES') {
            linea.className = 'centrado'; // Clase adicional para centrar específicamente esta línea
        }
        linea.textContent = palabra;
        fraseDiv.appendChild(linea);
    });
    document.body.appendChild(fraseDiv);

});

