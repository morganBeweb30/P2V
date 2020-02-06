$('#play').hide();




let uid = 0;
function generateID() {
  uid += 1
}

$('#player-btn').click(function() {
  generateID()
const score = 0
const player = $('#player-id').val()
let test = $.jStorage.index()

  let data = {
    player,
    score
  }
  $.jStorage.set('data-'+uid, data);
  $.jStorage.reInit()

  let playerList = ''
    playerList += '<p style="font-size:14px">'+data.player+'</p>'

  $('.list').append(playerList)

      console.log(test.length)

      if (test.length > 0 ) {
        $('#play').toggle();
      }

})
