$(document).ready(function() {
  let active = false;
  let clickedOnce = false;

  function closeMenu() {
    active = false;
    $('.infos-bar').css('transform', 'translateX(-100%)');
    $('.hamburger').css('transform', 'translateX(0%)');
    $('.content').css('opacity', '1');
    $('.hamburger').removeClass("is-active");
  }

  function openMenu() {
    active = true;
    $('.infos-bar').css('transform', 'translateX(0)');
    $('.hamburger').css('transform', 'translateX(365%)');
    $('.content').css('opacity', '0.2');
    $('.hamburger').addClass("is-active");
  }

  $(".hamburger").click(function() {
    clickedOnce = true;
    if (active) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  $(window).on("orientationchange resize", function() {
    if (clickedOnce) {
      if ($(window).width() >= 1210 && !active) {
        $('.infos-bar').css('transform', 'translateX(0%)');
        $('.hamburger').css('transform', 'translateX(365%)');
      } else if ($(window).width() < 1210 && active) {
        $('.hamburger').css('transform', 'translateX(365%)');
        $('.content').css('opacity', '0.2');
      } else if ($(window).width() >= 1210 && active) {
        $('.infos-bar').css('transform', 'translateX(0)');
        $('.content').css('opacity', '1');
      }
    }
  });
});

const projetos = {
    Oficina: {
      img: 'oficina.png',
      icon: 'fa-solid fa-calculator',
      video: 'watch?v=ri3Oj1JZBFg',
      title: 'Gestão de Oficina',
      descricao: 'Aplicação feita para um parente, para ajudá-lo na gestão de sua oficina mecânica, esse programa cadastra clientes, peças, serviços, contas e emite ordem de serviço.',
      tecnologias: {
        html: true,
        css: true,
        js: true,
        php: true,
        mysql: true
      },
      buttonDemo: 'http://techauto.rmtechsolutions.com/',
      buttonRepositorio: ''
    },

      Projeto: {
      img: 'projeto.jpeg',
      icon: 'fa-solid fa-calculator',
      title: 'Sistema Acorde',
      descricao: 'Sistema Acorde - Sistema para acompanhamento de desempenho de alunos com TDAH, Projeto Integrador, realizado em grupo pela Univesp.',
      tecnologias: {
        html: true,
        css: true,
        js: true,
        php: true,
        mysql: true
      },
      buttonDemo: 'http://projetodemo.com/projetointegrador2/',
      buttonRepositorio: 'https://github.com/mfelipedias/projetointegrador2'
    },

    Pizzaria: {
      img: 'pizzaria.png',
      icon: 'fa-solid fa-calculator',
      title: 'Pedidos pizzaria',
      descricao: 'Sistema para pizzaria e lanchonetes, com página inicial, com um layout de apresentação da empresa, pagina de pedidos dos clientes, que quando realizado, vai para uma página que é só acessada, atráves de login e senha do administrador e também páginas com cardápio e contatos.',
      tecnologias: {
        html: true,
        css: true,
        php: true,
        mysql: true
      },
      buttonDemo: 'http://rodrigo-dev.rmtechsolutions.com/pedidos/index.php',
      buttonRepositorio: 'https://github.com/roohlm92/pizzaria'
    },
  
    Jogo: {
      img: 'peppa.jpeg',
      icon: 'fa-solid fa-calculator',
      title: 'Jogo da memória - Peppa',
      descricao: 'Jogo da memória feito em JavaScript, com o tema da Peppa Pig.',
      tecnologias: {
        html: true,
        css: true,
        js: true,
      },
      buttonDemo: 'http://rodrigo-dev.rmtechsolutions.com/jogo-da-memoria',
      buttonRepositorio: 'https://github.com/roohlm92/jogo-da-memoria'
    },
    
    
}

for (let projeto in projetos) {
  if (projetos.hasOwnProperty(projeto)) {
      criarEstrutura(projetos[projeto]);
  }
}

async function criarEstrutura(projeto) {
    const cardWrapper = document.querySelector('.card-wrapper');
    const slideContainer = document.querySelector('.slide-container');
    const card = document.createElement('div');
    const imageContent = document.createElement('div');
    const mudarImgDiv = document.createElement('div');
    const iconPlay = document.createElement('i');
    const overlay = document.createElement('span');
    const cardImage = document.createElement('div');
    const img = document.createElement('img');
    const iconGitHub = document.createElement('i');

    const cardContent = document.createElement('div');
    const nameProjeto = document.createElement('h2');
    const descricao = document.createElement('p');
    const projetosTec = document.createElement('ul');
    const buttons = document.createElement('div');
    const buttonDemo = document.createElement('a');
    const buttonRepos = document.createElement('a');
    const spanButton = document.createElement('span');
    const spanButton2 = document.createElement('span');

    cardWrapper.classList.add('card-wrapper', 'swiper-wrapper');
    card.classList.add('card', 'swiper-slide');
    imageContent.classList.add('image-content');
    mudarImgDiv.classList.add('mudar-img-div');
    overlay.classList.add('overlay');
    cardImage.classList.add('card-image');
    img.classList.add('card-img');
    iconPlay.classList.add('fa-solid', 'fa-circle-play');
    iconGitHub.classList.add('fa-brands', 'fa-github');

    cardContent.classList.add('card-content');
    nameProjeto.classList.add('name');
    descricao.classList.add('description');
    projetosTec.classList.add('projetos-tec');
    buttons.classList.add('buttons');
    buttonDemo.classList.add('button');
    buttonRepos.classList.add('button', 'border');
    buttonDemo.target = '__blank';
    buttonRepos.target = '__blank';

    cardWrapper.appendChild(card);
    card.appendChild(imageContent);
    imageContent.appendChild(overlay);
    imageContent.appendChild(cardImage);
    cardImage.appendChild(img);
    cardImage.appendChild(mudarImgDiv);
    mudarImgDiv.appendChild(iconPlay);    

    card.appendChild(cardContent);
    cardContent.appendChild(nameProjeto);
    cardContent.appendChild(descricao);
    cardContent.appendChild(projetosTec);
    cardContent.appendChild(buttons);
    buttons.appendChild(buttonDemo);
    buttons.appendChild(buttonRepos);
    buttonDemo.appendChild(spanButton);
    buttonRepos.appendChild(spanButton2);
    buttonRepos.appendChild(iconGitHub);

    img.src = 'assets/img/' + projeto.img;
    nameProjeto.innerText = projeto.title;
    descricao.innerText = projeto.descricao;
    if (!projeto.buttonDemo) {
      buttonDemo.addEventListener('click', () => {
        console.log('teste');
        alert('Desculpe, demo indisponivel!');
      })
    } else {
      buttonDemo.href = projeto.buttonDemo;
    }
    if (!projeto.buttonRepositorio) {
      buttonRepos.addEventListener('click', () => {
        alert('Desculpe, repositório indisponivel!');
      })
    } else {
      buttonRepos.href = projeto.buttonRepositorio;
    }
    spanButton.innerText = 'Visitar o Site';
    spanButton2.innerText = 'repositório';
    
    let tecnologias = projeto.tecnologias;
    for (let tecnologia in tecnologias) {
      if (tecnologias.hasOwnProperty(tecnologia)) {
        if (tecnologias[tecnologia] === true) {
          if (tecnologia === 'html') {
            const html = document.createElement('i');
            html.classList.add('fa-brands', 'fa-html5');
            projetosTec.appendChild(html);
          } 
          if (tecnologia === 'css') {
            const css = document.createElement('i');
            css.classList.add('fa-brands', 'fa-css3-alt');
            projetosTec.appendChild(css);
          } 
          if (tecnologia === 'js') {
            const js = document.createElement('i');
            js.classList.add('fa-brands', 'fa-square-js');
            projetosTec.appendChild(js);
          }
          if (tecnologia === 'php') {
            const php = document.createElement('i');
            php.classList.add('fa-brands', 'fa-php');
            projetosTec.appendChild(php);
          }
          if (tecnologia === 'mysql') {
            const mysql = document.createElement('img');
            mysql.src = 'assets/img/MySql-icon.png';
            mysql.style.width = '40px';
            projetosTec.appendChild(mysql);
          }
          if (tecnologia === 'laravel') {
            const laravel = document.createElement('i');
            laravel.classList.add('fa-brands', 'fa-laravel');
            projetosTec.appendChild(laravel);
          }
        }
      }
    }

    if (projeto.video) {
      cardImage.addEventListener('click', () => {
          playVideo(projeto.video)
      })
    } else {
      cardImage.addEventListener('click', () => {
        alert('Desculpe, video indisponivel!');
      })
    }
}

function playVideo(videoProjeto) {
  const overlay = document.createElement('div');
  overlay.classList.add('overlay-opacity');

  const iframe = document.createElement('iframe');
  iframe.src = `https://www.youtube.com/embed/${videoProjeto}`
  iframe.classList.add('projects-video');
  iframe.allowFullscreen = true;

  const body = document.getElementsByTagName('body')[0];
  body.appendChild(overlay);
  overlay.appendChild(iframe);

  overlay.addEventListener('click', () => {
    overlay.remove();
  })
}

var swiper = new Swiper(".slide-content", {
    slidesPerView: 1,
    spaceBetween: 100,
    loop: true,
    centerSlide: true,
    fade: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: "#right-arrow",
      prevEl: "#left-arrow",
    },
});
