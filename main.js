
function mostrarCaixa() {
    let caixaMensagem = document.getElementById("caixa-mensagem");
    if (caixaMensagem.style.display === "block") {
        caixaMensagem.style.display = "none";
    } else {
        caixaMensagem.style.display = "block";
        document.querySelector('.cabecalho__menu').style.width = "0";
    }
}



let slideIndex = 1;
mostrarThumbs(slideIndex);

function thumbAtual(n) {
  mostrarThumbs(slideIndex = n);
}

function mostrarThumbs() {
  let index;
  let imagens = document.getElementsByClassName("imagem");
  let thumbs = document.getElementsByClassName("thumb");
  
  for (index = 0; index < imagens.length; index++) {
    imagens[index].style.display = "none";
  }
  for (index = 0; index < thumbs.length; index++) {
    thumbs[index].className = thumbs[index].className.replace(" active", "");
  }
  imagens[slideIndex-1].style.display = "block";
  thumbs[slideIndex-1].className += " active";
}



function openModal() {
  document.getElementById("myModal").style.display = "block";
}


function closeModal() {
  document.getElementById("myModal").style.display = "none";
}

var slidesIndex = 1;
showSlides(slidesIndex);


function plusSlide(n) {
  showSlides(slidesIndex += n);
}


function currentSlide(n) {
  showSlides(slidesIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  if (n > slides.length) {slidesIndex = 1}
  if (n < 1) {slidesIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" ativo", "");
  }
  slides[slidesIndex-1].style.display = "block";
  dots[slidesIndex-1].className += " ativo";
}

// Função para aumentar e diminuir itens no carrinho
let quantidade = document.querySelector(".botoes__quantidade-itens")
let contador = 0;
function mais() {
  contador++;
  quantidade.innerText = contador;
}

function menos() {
  while(quantidade.innerText > 0) {
    contador--;
    quantidade.innerText = contador;
    break;
  }
}


function addCart() {
 
  let itensCarrinho = document.getElementById('itens-carrinho')
  itensCarrinho.innerText = quantidade.innerText
  itensCarrinho.style.visibility = "visible" 
  if (itensCarrinho.innerText == 0) {
    itensCarrinho.style.visibility = "hidden" 
  }


  let carrinhoMensagem = document.getElementById('carrinho-vazio')
  let caixaItens = document.getElementById('caixa__itens')
  if(itensCarrinho.innerHTML == 0) {
    carrinhoMensagem.classList.remove('esconder')
    caixaItens.classList.add('esconder')
  } else {
    caixaItens.classList.remove('esconder')
    carrinhoMensagem.classList.add('esconder')
  }


  let itensAdicionados = document.querySelector('#quantidade')
  itensAdicionados.innerText = quantidade.innerText
  let calculoPreco = 125 * itensAdicionados.innerText
  let valorTotal = document.querySelector('.valor-total')
  valorTotal.innerText = `$${calculoPreco.toFixed(2)}`
} 

function removeItem() {
  let carrinhoMensagem = document.getElementById('carrinho-vazio')
  carrinhoMensagem.classList.remove("esconder")
  let caixaItens = document.getElementById('caixa__itens')
  caixaItens.classList.add("esconder")
  let itensCarrinho = document.getElementById('itens-carrinho')
  itensCarrinho.style.visibility = "hidden"
}


// Slideshow mobile
let slideindex = 1;
mostrarImagem(slideindex);

function imagemAtual(n) {
  mostrarImagem(slideindex += n);
}

function mostrarImagem(n) {
  let index;
  let imagem = document.getElementsByClassName('imagem');
  if(n > imagem.length) {slideindex = 1}
  if(n < 1) {slideindex = imagem.length}
  for(index = 0; index < imagem.length; index++) {
    imagem[index].style.display = "none";
  }
  imagem[slideindex-1].style.display = "block";
}

function openMenu() {
  document.querySelector('.cabecalho__menu').style.width = "200px";
  let caixaMensagem = document.getElementById("caixa-mensagem");
  caixaMensagem.style.display = 'none'
}

function closeMenu() {
  document.querySelector('.cabecalho__menu').style.width = "0";
}

