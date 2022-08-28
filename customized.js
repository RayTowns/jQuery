$(document).ready(function (){
  $(".owl-carousel").owlCarousel();
});

$("button").click(function(){
alert('Em breve mais informações!')
})

$("#home").click(function(){
  $("#home").css("color", "white")
});

$("#joias").click(function(){
  $("#joias").css("color", "white")
});

$("#sm").click(function(){
  $("#sm").css("color", "white")
});

$(".nav-link").mouseover(function(){
  $("li") 
  .animate({fontSize:"18px"}, 1000)
});

$(".nav-link").mouseleave(function(){ 
  $("li").css({
  fontSize:"" 
  });
});

$("h1").mouseenter(function(){
  $("h1").css("color", "crimson");
});

$("h1").mouseleave(function(){
  $("h1").css("color", "purple");
});

$("#botao-1").click(function(){
  $("#botao-1").css("background-color", "purple")
});

$("#botao-2").click(function(){
  $("#botao-2").css("background-color", "purple")
});

$("#botao-3").click(function(){
  $("#botao-3").css("background-color", "purple")
});

$("#botao-4").click(function(){
  $("#botao-4").css("background-color", "purple")
});

$("#botao-5").click(function(){
  $("#botao-5").css("background-color", "purple")
});