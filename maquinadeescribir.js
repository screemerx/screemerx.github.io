// MAQUINADEESCRIBIR

const maquina = document.getElementById("maquinaEscribir") 


const maquinaEscribir = (textos = [], tiempo = 200, etiqueta = "") => {
  let i = 0;
  let j = 0;
  let k = 0;
  let escribir = setInterval(() => {
    let texto = textos[k % textos.length];
    let arrayCaracteres = texto.split("");
    if (i === arrayCaracteres.length) {
      etiqueta.innerHTML = texto.substring(0, j);
      j--;
      if (j < 0) {
        i = 0;
        j = texto.length;
        k++;
      }
    } else {
      etiqueta.innerHTML += arrayCaracteres[i];
      i++;
    }
  }, tiempo);
};

maquinaEscribir( [ "profesional","optimizada","moderna" ],150,maquina)