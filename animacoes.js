var imagem = document.querySelector("#imagem");
var card1 = document.querySelector("#card1")
var card2 = document.querySelector("#card2")
var card3 = document.querySelector("#card3")


card1.addEventListener('mouseover', function(){
    document.getElementById("imagem1").src="../imagens/Logo-pp-roxo.png"
  
});

card1.addEventListener('mouseout', function(){
    document.getElementById("imagem1").src="../imagens/logo-pp.png"
});



card2.addEventListener('mouseover', function(){
    document.getElementById("imagem2").src="../imagens/Logo-pp-roxo.png"
});

card2.addEventListener('mouseout', function(){
    document.getElementById("imagem2").src="../imagens/logo-pp.png"
});



card3.addEventListener('mouseover', function(){
    document.getElementById("imagem3").src="../imagens/Logo-pp-roxo.png"
});

card3.addEventListener('mouseout', function(){
    document.getElementById("imagem3").src="../imagens/logo-pp.png"
});

let ul = document.querySelector('nav .ul');

function openMenu(){
    ul.classList.add('open');
}

function closeMenu(){
    ul.classList.remove('open')
}