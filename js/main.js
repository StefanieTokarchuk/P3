$('#buttonStart').click( function (){
  $('#startScreen').fadeOut(1000);
});
var score = 0;

$('.choice').click( function(){
    $(this).closest('.question').find('ul').fadeOut(500);
    if($(this).hasClass('correct')) {
      $(this).closest('.question').find('.correct-answer').fadeIn(500);
      score = score + 25;
      $('#score').text(score);
    } else {
      $(this).closest('.question').find('.wrong-answer').fadeIn(500);
    }
});

$('.next').click(
  function(){
    $('.active').removeClass('active');
    $( $(this).attr('href') ).addClass('active');
  }
)

$('#restart').click( function(){
  score = 0;
  $('#q1').addClass('active');
  $('.question ul').show();
  $('.result').hide();
  $('.final-result').removeClass('active')
  $('#startScreen').show();
});
