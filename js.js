
// -------------------- PRODUCT POPUP --------------------
const popup = document.getElementById('product-popup');
const popupContent = {};

popupContent['Utensilios Biodegradables'] = `
  <div class="popup-inner">
    <span class="popup-close">&times;</span>
    <h2>Utensilios Biodegradables</h2>
    <p>Resistentes, elegantes y 100% compostables.</p>
    <p><strong>Materiales:</strong> Bambú, madera natural.</p>
    <p><strong>Precio:</strong> $12.99</p>
    <button class="btn-buy">Comprar</button>
  </div>
`;

popupContent['Esponjas Vegetales'] = `
  <div class="popup-inner">
    <span class="popup-close">&times;</span>
    <h2>Esponjas Vegetales</h2>
    <p>Suaves con tu piel y completamente biodegradables.</p>
    <p><strong>Materiales:</strong> Fibra vegetal natural.</p>
    <p><strong>Precio:</strong> $6.99</p>
    <button class="btn-buy">Comprar</button>
  </div>
`;

popupContent['Jabones Naturales'] = `
  <div class="popup-inner">
    <span class="popup-close">&times;</span>
    <h2>Jabones Naturales</h2>
    <p>Elaborados con miel, avena y aloe vera.</p>
    <p><strong>Materiales:</strong> Ingredientes naturales y aceites esenciales.</p>
    <p><strong>Precio:</strong> $8.50</p>
    <button class="btn-buy">Comprar</button>
  </div>
`;

popupContent['Vasos Reciclables'] = `
  <div class="popup-inner">
    <span class="popup-close">&times;</span>
    <h2>Vasos Reciclables</h2>
    <p>Papel reciclado con recubrimiento vegetal compostable.</p>
    <p><strong>Precio:</strong> $4.99</p>
    <button class="btn-buy">Comprar</button>
  </div>
`;

popupContent['Pajillas Ecológicas'] = `
  <div class="popup-inner">
    <span class="popup-close">&times;</span>
    <h2>Pajillas Ecológicas</h2>
    <p>100% biodegradables y reutilizables.</p>
    <p><strong>Materiales:</strong> Bambú y bioplástico compostable.</p>
    <p><strong>Precio:</strong> $3.50</p>
    <button class="btn-buy">Comprar</button>
  </div>
`;

popupContent['Cucharas de Bambú'] = `
  <div class="popup-inner">
    <span class="popup-close">&times;</span>
    <h2>Cucharas de Bambú</h2>
    <p>Elegantes, resistentes y completamente ecológicas.</p>
    <p><strong>Materiales:</strong> Bambú natural.</p>
    <p><strong>Precio:</strong> $5.99</p>
    <button class="btn-buy">Comprar</button>
  </div>
`;

// Abrir popup
document.querySelectorAll('.btn-popup').forEach(btn => {
  btn.addEventListener('click', e => {
    const card = e.target.closest('.card');
    const producto = card.getAttribute('data-producto');
    popup.innerHTML = popupContent[producto];
    popup.style.display = 'flex';

    // Cerrar popup
    popup.querySelector('.popup-close').addEventListener('click', () => {
      popup.style.display = 'none';
    });

    // Comprar -> redirigir a página de compra
    popup.querySelector('.btn-buy').addEventListener('click', () => {
      window.location.href = 'index3.html';
    });
  });
});
// Cerrar al hacer click fuera
popup.addEventListener('click', e => {
  if (e.target === popup) popup.style.display = 'none';
});

const chatbot = document.getElementById('chatbot');
const chatbotBox = document.getElementById('chatbot-box');
const chatbotSend = document.getElementById('chatbot-send');
const chatbotInput = document.getElementById('chatbot-input-text');
const chatbotMessages = document.getElementById('chatbot-messages');

if(chatbot){
  // Abrir/cerrar el chatbot solo al hacer click
  chatbot.addEventListener('click', () => {
    chatbotBox.style.display = chatbotBox.style.display === 'flex' ? 'none' : 'flex';
  });

  // Preguntas y respuestas predefinidas
  const responses = {
    "hola": "¡Hola! 🌱 ¿Quieres saber más sobre nuestros productos ecológicos?",
    "productos": "Tenemos utensilios biodegradables, esponjas vegetales, jabones naturales, vasos reciclables y más.",
    "utensilios": "Nuestros utensilios son 100% biodegradables y libres de plástico.",
    "esponjas": "Las esponjas vegetales están hechas con fibras naturales, suaves para la piel y compostables.",
    "jabones": "Nuestros jabones son artesanales, con miel, avena y aloe vera, libres de químicos.",
    "vasos": "Los vasos están hechos de papel reciclado y recubrimiento vegetal compostable.",
    "ecologico": "Todos nuestros productos están diseñados para cuidar el planeta 🌍.",
    "adios": "¡Hasta luego! Gracias por visitar EcoSolution 🌿"
  };

  function addMessage(msg, type){
    const div = document.createElement('div');
    div.textContent = msg;
    div.classList.add(type);
    chatbotMessages.appendChild(div);
    chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
  }

  function botResponse(userMsg){
    const msg = userMsg.toLowerCase();
    let response = "Lo siento, no entendí eso. 🌿 Intenta con palabras como 'productos', 'utensilios', 'jabones', 'vasos', 'esponjas'.";
    for(const key in responses){
      if(msg.includes(key)){
        response = responses[key];
        break;
      }
    }
    addMessage(response, 'bot-msg');
  }

  chatbotSend.addEventListener('click', () => {
    const msg = chatbotInput.value.trim();
    if(msg === "") return;
    addMessage(msg, 'user-msg');
    botResponse(msg);
    chatbotInput.value = "";
  });

  chatbotInput.addEventListener('keypress', (e) => {
    if(e.key === "Enter"){
      chatbotSend.click();
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  const counters = document.querySelectorAll('.counter');

  counters.forEach(counter => {
    const target = parseInt(counter.getAttribute('data-target'));
    let count = 0;
    
    const duration = 2000; // Duración total del contador en ms
    const stepTime = Math.floor(duration / target); // Intervalo de incremento

    const timer = setInterval(() => {
      count++;
      counter.innerText = count.toLocaleString();

      if(count >= target){
        clearInterval(timer); // Detener el contador al llegar al objetivo
      }
    }, stepTime);
  });
});
// Carrusel tipo fade para cada card
document.querySelectorAll('.product-carousel').forEach(carousel => {
  const images = carousel.querySelectorAll('img');
  let current = 0;

  // Crear botones de navegación
  const prevBtn = document.createElement('button');
  prevBtn.classList.add('prev');
  prevBtn.innerHTML = '&#10094;'; // flecha izquierda
  const nextBtn = document.createElement('button');
  nextBtn.classList.add('next');
  nextBtn.innerHTML = '&#10095;'; // flecha derecha
  carousel.appendChild(prevBtn);
  carousel.appendChild(nextBtn);

  function showImage(index){
    images.forEach((img, i) => {
      img.classList.remove('active');
      if(i === index) img.classList.add('active');
    });
  }

  prevBtn.addEventListener('click', () => {
    current = (current - 1 + images.length) % images.length;
    showImage(current);
  });

  nextBtn.addEventListener('click', () => {
    current = (current + 1) % images.length;
    showImage(current);
  });

  showImage(current);

  // Autoplay cada 4 segundos
  setInterval(() => {
    current = (current + 1) % images.length;
    showImage(current);
  }, 4000);
});




