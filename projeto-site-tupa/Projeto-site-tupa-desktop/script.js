

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
    let brightnessValue = Math.max(0, 1 - scrollPercent); 

    
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


