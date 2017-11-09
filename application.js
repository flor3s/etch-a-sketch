let containerArea = 16 * 16;

function appendDivs() {
  for (i = 1; i <= containerArea; i++ ) {
    $(".container").append("<div class='boxes'><div class='box'></div></div>");
  };
};

function enableMouseOver() {
  $('.box').on('mouseover', (event) => {
    $(event.currentTarget).addClass("hover");
  });
};

appendDivs();
enableMouseOver();

$('.reset').click(function() {
  let container = +(window.prompt("Please enter a number.", "0"));
  containerArea = container * container;
  $(".boxes").remove();
  $('.container').css('grid-template', 'repeat(' + container + ', 1fr) / repeat(' + container + ', 1fr)');
  appendDivs();
  enableMouseOver();
});