$('.card_item_1, .card_item_2').on('click', function(e){
  e.preventDefault();
  $(this).toggleClass('myClickState');
});

$(".buyme").on("click", (element) => {
  $('#card1').toggleClass('myClickState');
  $('#mass1').toggleClass('myClickState');
})