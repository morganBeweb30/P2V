$('#play').hide();


$('#player-btn').click(function() {
const score = 0
const player = $('#player-id').val()

let ref = Date.now();
  let test = {
    player,
    score
  }
  $.jStorage.set('ref:'+ref+'', test);

  let playerList = ''
    playerList += '<p style="font-size:14px">'+test.player+'</p>'

  $('.list').append(playerList)
        // for (var i = 0; i < playerName; i++) {
        //   $.jStorage.set("player" + i, players_DB[i]);
        // }

})
