
$(function() {
  addLeafs();
});

function addLeafs() {
  var width = $(window).width();
  var density = 50;
  var count = parseInt(width / density) + 5;

  for(var i=0; i<count; i++) {
    var angle = parseInt(Math.random() * 40) - 20;
    var nr = parseInt(Math.random() * 2) + 1;

    var leaf = $('<img class="leaf" id="leaf' + i + '" src="img/leaf1.svg"/>');

    leaf.css({
      left: (i * density - 20),
      transform: "rotate(" + angle + "deg)",
      bottom: parseInt(Math.random() * 20)
    });

    leaf.on("mouseover", function() {
      var angle = parseInt(Math.random() * 40) - 20;

      $(this).css({
        "transform": 'rotate(' + angle + 'deg)'
      });
    });

    $("#leafs").append(leaf);
  }
}
