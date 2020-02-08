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
console.log(quizTech);
let pseudo;
let score = 0;

Lockr.prefix = 'data_';

$('#solo').click(function() {
  $('.menu-mode').hide()
  $('.menu-theme').show()

  // Test anime
  const element =  document.querySelector('.menu-theme')
  element.classList.add('animated', 'bounceInLeft')
})

$('#tech').click(function() {
  $('.menu').hide()
  $('.game-solo').show()

  let player_get_s = Lockr.get('solo');
  if (player_get_s == null) {
    pseudo = $('#player-id').val()
    Lockr.set('solo', [{pseudo:pseudo, score:score}]);
  } else {
    $('.pseudo-input').hide();
  }
})

$('#play_solo').click(function() {
  $('.game-start-solo').hide()
  $('.solo-quiz').show()

  const randomQuizTech = quizTech[Math.floor(Math.random() * quizTech.length)];
  console.log(randomQuizTech);

  $('#quiz').text(randomQuizTech.ask)
  $('#choice_1').text(randomQuizTech.choice[0])
  $('#choice_2').text(randomQuizTech.choice[1])

})
