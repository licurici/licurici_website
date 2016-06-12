
$(function() {
  $(".svg").each(function () {
    var path = $(this).attr("data-path");
    var element = this;

    loadSvg(element, path, function () {
    });
  });

  $(window).resize(function() {
    var size = $(".container").width() + ($(window).width() - $(".container").width()) / 2;

    $(".branch svg").css("max-width", size);
  }).resize();
});


//load the svg
function loadSvg(element, path, callback) {
    var self = this;
    var xmlhttp;

    xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4) {
            if (xmlhttp.status == 200) {

                $(element).html(xmlhttp.responseText);
                /*
                $(element).find("svg").attr({
                  align: "100%",
                  y: "0"
                });
                */
                $(window).resize();

                if (callback) callback();

            } else if (xmlhttp.status == 400) {
                alert('There was an error 400');
            }
        }
    }

    xmlhttp.open("GET", path, true);
    xmlhttp.send();
}


/*
function addLeafs() {
  var width = $(window).width();
  var density = 10;
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
*/
