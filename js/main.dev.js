// Importamos el elemento canvas
const element = document.querySelector('#canvas');

// Creamos el pincel
const ctx = element.getContext('2d');

// Creamos las constantes con el width y el heigth de la pantalla
const w = document.body.clientWidth;
const h = document.body.clientHeight;

console.log(w , h)

// Asignamos al canvas el width y el height de la pantalla
element.width = w;
element.height = h;

// Creamos un array donde se van a ir agregando los caracteres
const position = Array(300).join(0).split('');

// Creamos la logica de la matrix
const initMatrix = () => {
    // Pintamos un rectangulo con un color de fondo
    ctx.fillStyle = 'rgba(0, 10, 2, 0.20)';
    ctx.fillRect(0, 0, w, h);    

    // Pintamos los caracteres con un color y un tamaño
    ctx.fillStyle = 'rgba(0, 150, 0, 0.9)';
    ctx.font = '11px';

    // Rellenamos el array con caracteres generados aleatoriamente
    position.map((y, index) => {
        const text = String.fromCharCode(1e3 + Math.random() * 30);
        const x = index * 15 + 15

        canvas.getContext('2d').fillText(text, x, y);

        if(y > 100 + Math.random() * 1e5){
            position[index] = 0;
        } else {
            position[index] = y + 15
        }
    });
}

// Llamamos al metodo con la lógica de la matrix cada 70 milisegundos
setInterval(initMatrix,70);
