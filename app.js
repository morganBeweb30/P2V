$('.game-solo').hide();
$('.menu-theme').hide();
$('.solo-quiz').hide();

let quizTech = [{
    "ask": "Qui est le créateur de Paypal?",
    "choice": ["John Cena", "Elon Musk"],
    "correct": "Elon Musk"
  }, {
    "ask": "De quel langage dépend Node.JS?",
    "choice": ["PHP", "JavaScript"],
    "correct": "JavaScript"
}]


$('#solo').click(function() {
  $('.menu-mode').hide()
  $('.menu-theme').show()

  const element =  document.querySelector('.menu-theme')
  element.classList.add('animated', 'bounceInLeft')
})

$('#tech').click(function() {
  $('.menu').hide()
  $('.game-solo').show()
})
