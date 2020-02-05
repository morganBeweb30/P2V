$('#play').hide();

let id = Date.now();

$('#player-btn').click(function() {
  let playerName = $('#player-id').val();
    let playerList = '';


      playerList +=
        '<p id='+id+' style="font-size:14px;">'+playerName+'</p>';
          $('.list').append(playerList);

})
