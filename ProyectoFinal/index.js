const frases = [
  "La comida estaba deliciosa y el servicio fue excelente.",
  "Me encantó la decoración del restaurante, muy acogedora.",
  "El personal fue muy amable y atento durante toda la cena.",
  "Las porciones son generosas y la relación calidad-precio es inmejorable.",
  "¡Definitivamente volvería a este lugar! Recomendado.",
  "El ambiente del restaurante es perfecto para una cena romántica.",
  "La música en vivo creó una atmósfera maravillosa en el lugar.",
  "La comida es muy fresca y sabrosa, con ingredientes de alta calidad.",
  "El menú ofrece una variedad de platos que satisfacen a todo tipo de comensales.",
  "El postre fue el broche de oro de una cena espectacular. ¡Increíble!"
];


let contador = 0;
const fraseCambio = document.getElementById('frase-cambio');

const mostrarLetras = (frase, index, interval) => {
  if (index < frase.length) {
    fraseCambio.textContent += frase.charAt(index);
    setTimeout(() => mostrarLetras(frase, index + 1, interval), interval);
  }
}

const cambiarFrase = () => {
  fraseCambio.textContent = '';
  mostrarLetras(frases[contador], 0, 100);
  contador++;
  if (contador === frases.length) {
    contador = 0;
  }
};

setInterval(cambiarFrase, 20000); //Cambia la frase cada 10 segundos











