let valueDisplays = document.querySelectorAll(".num");
let interval = 4000;



const section = document.querySelector('.wrapper');
const observer = new IntersectionObserver(entries => {
  // verificamos si la sección está en la pantalla
  if (entries[0].isIntersecting) {
    // iniciamos el contador para cada elemento
    valueDisplays.forEach((valueDisplay) => {
      let startValue = 0;
      let endValue = parseInt(valueDisplay.getAttribute("data-val"));
      let duration = Math.floor(interval / endValue);
      let counter = setInterval(function () {
        startValue += 1;
        valueDisplay.textContent = startValue;
        if (startValue == endValue) {
          clearInterval(counter);
        }
      }, duration);
    });
    
    // desconectamos el observador para que no se siga ejecutando
    observer.disconnect();
  }
});

// observamos la sección
observer.observe(section);