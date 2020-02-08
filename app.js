$('.game-solo').hide();
$('.solo-quiz').hide();

let quiz = [{
    "ask": "Qui est le créateur de Paypal?",
    "choice": ["John Cena", "Elon Musk"],
    "correct": "Elon Musk"
  }, {
    "ask": "De quel langage dépend Node.JS?",
    "choice": ["PHP", "JavaScript"],
    "correct": "JavaScript"
}]


$('#solo').click(function() {
  $('.menu').hide()
  $('.game-solo').show()

  const element =  document.querySelector('.game-solo')
  element.classList.add('animated', 'bounceInDown')

})
