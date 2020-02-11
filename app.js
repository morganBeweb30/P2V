$('.game-solo').hide();
$('.menu-theme').hide();
$('.solo-quiz').hide();

let quizTech = [{
    "ask": "Qui est le créateur de Paypal?",
    "choice": ["John Cena", "Elon Musk"],
    "correct": "Elon Musk"
  }, {
    "ask": "Quel langage permet de rendre des pages web dynamique?",
    "choice": ["PHP", "JavaScript"],
    "correct": "JavaScript"
  }, {
    "ask": "Quel vallée des états-unis est réputé pour ses innovations?",
    "choice": ["Sillicon Valley", "Death Valley"],
    "correct": "Sillicon Valley"
  }, {
    "ask": "Quel pays a accorder la citoyenneté à un robot?",
    "choice": ["La Corée du Nord", "L'Arabie Saoudite"],
    "correct": "L'Arabie Saoudite"
  }, {
    "ask": "Le quel de ces deux site est le plus vieux?",
    "choice": ["Twitter", "Facebook"],
    "correct": "Facebook"
  }, {
    "ask": "A quel année le premier iPhone est apparu?",
    "choice": ["2001", "2007"],
    "correct": "2007"
  }, {
    "ask": "Quand Internet a été ouvert au public?",
    "choice": ["1972", "1986"],
    "correct": "1972"
  }, {
    "ask": "1024mo est égale à combien de Go?",
    "choice": ["1Go", "1To"],
    "correct": "1Go"
  }, {
    "ask": "Que veux dire IP?",
    "choice": ["Identification Permise", "Internet Protocol"],
    "correct": "Internet Protocol"
  }, {
    "ask": "Qu'est-ce que Linux & Windows?",
    "choice": ["Système d'exploitation", "Des marques"],
    "correct": "Système d'exploitation"
  }, {
    "ask": "Qu'est-ce que le Bitcoin?",
    "choice": ["Unité de mesure", "Cryptomonnaie"],
    "correct": "Cryptomonnaie"
  }, {
    "ask": "Quel est l'utilité d'une dynamo?",
    "choice": ["Créer de l'énergie", "Créer de l'exploisif"],
    "correct": "Créer de l'énergie"
  }, {
    "ask": "Qui est l'inventeur de l'imprimante 3D?",
    "choice": ["Albert Einstein", "Charles Hull"],
    "correct": "Charles Hull"
  }, {
    "ask": "C'est quoi le service VoIP?",
    "choice": ["Voix via Internet", "Voix via Téléphone"],
    "correct": "Voix via Internet"
  }, {
    "ask": "Qui signifie le Cloud?",
    "choice": ["Un Nuage", "Le stockage distant"],
    "correct": "Le stockage distant"
  }, {
    "ask": "Qui a déchiffré le code Enigma ?",
    "choice": ["Arthur Scherbius", "Alan Turing"],
    "correct": "Alan Turing"
  }, {
    "ask": "A quel date remonte la conception de l'HDMI?",
    "choice": ["2002", "2006"],
    "correct": "2002"
  }, {
    "ask": "Qui est le fondateur de wikileaks?",
    "choice": ["Steve Jobs", "Julian Assange"],
    "correct": "Julian Assange"
  }, {
    "ask": "Quel est le type de la dernière génération de processeurs?",
    "choice": ["LGA", "PGA"],
    "correct": "LGA"
  }, {
    "ask": "Quel est l'utilité d'un serveur NAS?",
    "choice": ["Stocker des données", "Créer des micro-ondes"],
    "correct": "Stocker des données"
  }, {
    "ask": "Quel est le plus rapide?",
    "choice": ["SSD", "HDD"],
    "correct": "SSD"
  }, {
    "ask": "Qu'est-ce qu'un modem?",
    "choice": ["Service de communication", "Décodeur TV"],
    "correct": "Service de communication"
  }, {
    "ask": "Quel vitesse vitesse internet est plus rapide?",
    "choice": ["400M/s", "1Gb/s"],
    "correct": "1Gb/s"
  }, {
    "ask": "Quel extension définie un fichier de compressions?",
    "choice": [".pdf", ".zip"],
    "correct": ".zip"
  }, {
    "ask": "Quel est l'entreprise créatrice de la XBOX?",
    "choice": ["Microsoft", "Apple"],
    "correct": "Microsoft"
  }, {
    "ask": "Que signifie VR?",
    "choice": ["Vitesse de Réalité", "Virtual Reality"],
    "correct": "Virtual Reality"
  }, {
    "ask": "Qui est donc CaptainCrunch?",
    "choice": ["Un opticien", "Un Hacker"],
    "correct": "Un Hacker"
  }, {
    "ask": "Cisco et Arbor son quel type de société?",
    "choice": ["Cyber-sécurité", "Hébergement"],
    "correct": "Cyber-sécurité"
  }, {
    "ask": "Que signifie l'acronyme HP?",
    "choice": ["Hardware-Power", "Hewlett-Packard"],
    "correct": "Hewlett-Packard"
  }, {
    "ask": "Qu'est-ce que le CES?",
    "choice": ["Un évenement technologique", "Une chaine d'information"],
    "correct": "Un évenement technologique"
  }, {
    "ask": "Que signifie l'acronyme MIT?",
    "choice": ["Mad Industry of Technology", "Massachusetts Institute of Technology"],
    "correct": "Massachusetts Institute of Technology"
  }, {
    "ask": "Discord propose quel service?",
    "choice": ["Service VoIP", "Création de Site Web"],
    "correct": "Service VoIP"
  }, {
    "ask": "Le quel de ces deux sites a été créer par Kim Dot Com?",
    "choice": ["The Pirate Bay", "Megaupload"],
    "correct": "Megaupload"
  }, {
    "ask": "Quel société à créer Photoshop?",
    "choice": ["Adobe", "Google"],
    "correct": "Adobe"
  }, {
    "ask": "Quelle unitée de mesure utilise t'on pour mesuré la puissance d'un processeur?",
    "choice": ["GHz", "Gb/s"],
    "correct": "GHz"
  }, {
    "ask": "Que signifie infosec?",
    "choice": ["Securité Informatique", "Information de sécurité"],
    "correct": "Securité Informatique"
  }, {
    "ask": "Un Black-Hat est considérer comme?",
    "choice": ["Mauvais Hacker", "Bon Hacker"],
    "correct": "Mauvais Hacker"
  }, {
    "ask": "La fsociety est une réelle organisation?",
    "choice": ["Vrai", "Faux"],
    "correct": "Faux"
  }, {
    "ask": "YouTube est une plate-forme de?",
    "choice": ["Vidéaste", "Film & Série"],
    "correct": "Vidéaste"
  }, {
    "ask": "Certain smarthphone on t'il une reconnaissance digital?",
    "choice": ["Oui, certain", "Impossible"],
    "correct": "Oui, certain"
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
  $('.menu-theme').hide()
  $('.game-solo').show()
  $('.score').hide()
  $('.solo-end').hide()
  let player_get_s = Lockr.get('solo');
  if (player_get_s == null) {
    pseudo = $('#player-id').val()
    Lockr.set('solo', [{pseudo:pseudo, score:score}]);
  } else {
    $('.pseudo-input').hide();
  }
})

let randomQuizTech;
const newSoloAsking = function() {
  randomQuizTech = quizTech[Math.floor(Math.random() * quizTech.length)];
}

const next_askTech = function() {
  newSoloAsking()
  refreshSoloQuiz()
  inSoloParty()
  console.log(randomQuizTech)
}
const solo_choice_1 = function() {
  if (randomQuizTech.choice[0] === randomQuizTech.correct) {
    alert('win')
    score = score + 1;
    $('#score-in-party').text(score)
    next_askTech()
  } else {
    alert('lose')
    next_askTech()
  }
}
const solo_choice_2 = function() {
  if (randomQuizTech.choice[1] === randomQuizTech.correct) {
    alert('win')
    score = score + 1
    $('#score-in-party').text(score)
    next_askTech()
  } else {
    alert('lose')
    next_askTech()
  }
}

$('#play_solo').click(function() {
  $('.game-start-solo').hide()
  $('.score').show()
  $('.solo-quiz').show()
  newSoloAsking()
  $('#quiz').text(randomQuizTech.ask)
  $('#choice_1').text(randomQuizTech.choice[0])
  $('#choice_2').text(randomQuizTech.choice[1])
})

const refreshSoloQuiz = function() {
  $('.game-start-solo').hide()
  $('.solo-quiz').show()
  $('#quiz').text(randomQuizTech.ask)
  $('#choice_1').text(randomQuizTech.choice[0])
  $('#choice_2').text(randomQuizTech.choice[1])
}

let countSolo = 0;
let countSolo_Max = 15;
const inSoloParty = function() {
    countSolo = countSolo + 1;
    console.log(countSolo);
    if (countSolo >= countSolo_Max) {
        $('.solo-quiz').hide()
        $('.solo-end').show()

    }

}
