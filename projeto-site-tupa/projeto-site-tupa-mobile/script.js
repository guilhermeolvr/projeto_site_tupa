
const headerContainer = document.querySelector('.header_container');

window.addEventListener('scroll', () => {
  if (window.scrollY > 1) { 
    headerContainer.classList.add('scrolled');
  } else {
    headerContainer.classList.remove('scrolled');
  }
});

//----------funcao para escurtecer gemeas

window.addEventListener("scroll", function() {
    // Obtenha a altura total da página e a posição atual do scroll
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    let windowHeight = window.innerHeight;
    
    
    let maxScroll = document.body.scrollHeight - windowHeight;
    let scrollPercent = scrollTop / maxScroll; 
    
    // Defina o brilho mínimo e máximo
    let brightnessValue = Math.max(0.3, 1 - scrollPercent); 

    
    document.querySelector('.gemea_esquerda').style.filter = `brightness(${brightnessValue})`;
    document.querySelector('.gemea_direita').style.filter = `brightness(${brightnessValue})`;
  });


//----------expnadir girar seta mostrar conteudo

const menusAlinharPorLinha = document.querySelectorAll('.menus_alinhar_por_linha');

let currentActiveMenu = null;

menusAlinharPorLinha.forEach(function(menu) {
  menu.addEventListener('click', function() {
    // Fechar o menu se tiver aberto
    if (currentActiveMenu && currentActiveMenu !== menu) {
      const currentDropdown = currentActiveMenu.querySelector('.dropdown');
      currentDropdown.classList.remove('active');
      const currentSetaCima = currentDropdown.querySelector('.container_seta_cima');
      currentSetaCima.classList.remove('rotated');
      currentActiveMenu.classList.remove('expandir');
    }

   
    const dropdown = menu.querySelector('.dropdown');

    // Alternar para ativo abaixado ou levantadop
    dropdown.classList.toggle('active');

    
    const setaCima = dropdown.querySelector('.container_seta_cima');

   
    setaCima.classList.toggle('rotated');

    
    if (dropdown.classList.contains('active')) {
      currentActiveMenu = menu;
    } else {
      currentActiveMenu = null;
    }
  });
});



document.querySelectorAll('.dropdown_toggle').forEach(toggle => {
  toggle.addEventListener('click', function() {
    const menu = this.parentElement;
    menu.classList.toggle('expandir'); 

  });
});


const menus = document.querySelectorAll('.menus_alinhar_por_linha');

menus.forEach((menu) => {
  menu.addEventListener('click', () => {
    menu.classList.toggle('expandir');
  });
});

const dropdownMenuItems = document.querySelectorAll('.dropdown_menu');

dropdownMenuItems.forEach((menuItem) => {
  menuItem.addEventListener('click', (event) => {
    event.preventDefault();
    
  });
});




const botaoEnviar = document.querySelector('.botao_enviar');
const inputEmail = document.querySelector('.txt_box_email');
const obrigado = document.querySelector('.obrigado');

botaoEnviar.addEventListener('click', () => {

  if (inputEmail.value !== '') {
    obrigado.style.display = 'block'; 
    event.preventDefault();
  }
});




let timeout; 

function showButton() {
  const button = document.getElementById('link_topo');
  button.style.opacity = '1'; 
}

function hideButton() {
  const button = document.getElementById('link_topo');
  button.style.opacity = '0'; // Oculta o botao
}

window.addEventListener('scroll', () => {
  showButton(); // Mostra o botao


  if (timeout) {
    clearTimeout(timeout);
  }

  timeout = setTimeout(hideButton, 2000);
});


document.getElementById('link_topo').addEventListener('click', (e) => {
  e.preventDefault(); 
  
  window.scrollTo({
    top: 0,
    behavior: 'smooth' 
  });
});

// deix ao botao oculto
hideButton();



// Seleciona os elementos
const linkTresPontos = document.getElementById('link_tres_pontos');
const overlay = document.getElementById('overlay');
const fecharOverlay = document.getElementById('fechar_overlay');

// Função para abrir o overlay
linkTresPontos.addEventListener('click', (e) => {
  e.preventDefault(); // Evita o comportamento padrão do link
  overlay.style.display = 'flex'; // Mostra o overlay
});

// Função para fechar o overlay
fecharOverlay.addEventListener('click', () => {
  overlay.style.display = 'none'; // Esconde o overlay
});

// Fecha o overlay se clicar fora do conteúdo
overlay.addEventListener('click', (e) => {
  if (e.target === overlay) {
    overlay.style.display = 'none'; // Esconde o overlay
  }
});



document.getElementById("link_tres_pontos").addEventListener("click", function() {
  document.getElementById("overlay").style.display = "flex"; // Mostra o overlay
});

document.getElementById("fechar_overlay").addEventListener("click", function() {
  document.getElementById("overlay").style.display = "none"; // Esconde o overlay
});





function toggleOverlay(event) {
  event.preventDefault();
  const overlay = document.getElementById('overlay_burguer');
  if (overlay.classList.contains('show')) {
    overlay.classList.remove('show');
    overlay.style.display = 'none'; // Mantém oculto após a animação
  } else {
    overlay.style.display = 'flex'; // Torna o overlay visível
    overlay.classList.add('show');
  }
}

document.getElementById('link_menu').addEventListener('click', toggleOverlay);
document.getElementById('fechar_overlay_burguer').addEventListener('click', toggleOverlay);
