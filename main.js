(function ($, sr) {
    var debounce = function (func, threshold, execAsap) {
        var timeout;
        return function debounced() {
            var obj = this,
                args = arguments;

            function delayed() {
                if (!execAsap) func.apply(obj, args);
                timeout = null
            }
            if (timeout) clearTimeout(timeout);
            else if (execAsap) func.apply(obj, args);
            timeout = setTimeout(delayed, threshold || 100)
        }
    };
    jQuery.fn[sr] = function (fn) {
        return fn ? this.bind("resize", debounce(fn)) : this.trigger(sr)
    }
})(jQuery, "smartresize");

$('img[usemap]').rwdImageMaps();

// zoom to element ====================  
  $("#one").click(function(evt) {
    $("#one .hotspotCircle").zoomTo({
      targetsize: 0.15,
      duration: 600
    });
    evt.stopPropagation();
  });

  $("#two").click(function(evt) {
    $("#two .hotspotCircle").zoomTo({
      targetsize: 0.15,
      duration: 600
    });
    evt.stopPropagation();
  });

  $("#three").click(function(evt) {
    $("#three .hotspotCircle").zoomTo({
      targetsize: 0.15,
      duration: 600
    });
    evt.stopPropagation();
  });

  $("#four").click(function(evt) {
    $("#four .hotspotCircle").zoomTo({
      targetsize: 0.15,
      duration: 600
    });
    evt.stopPropagation();
  });

  $("#five").click(function(evt) {
    $("#five .hotspotCircle").zoomTo({
      targetsize: 0.15,
      duration: 600
    });
    evt.stopPropagation();
  });

  $("#six").click(function(evt) {
    $("#six .hotspotCircle").zoomTo({
      targetsize: 0.15,
      duration: 600
    });
    evt.stopPropagation();
  });

  $("#seven").click(function(evt) {
    $("#seven .hotspotCircle").zoomTo({
      targetsize: 0.15,
      duration: 600
    });
    evt.stopPropagation();
  });

  $("#eight").click(function(evt) {
    $("#eight .hotspotCircle").zoomTo({
      targetsize: 0.15,
      duration: 600
    });
    evt.stopPropagation();
  });

  $("#night").click(function(evt) {
    $("#night .hotspotCircle").zoomTo({
      targetsize: 0.15,
      duration: 600
    });
    evt.stopPropagation();
  });

  $("#ten").click(function(evt) {
    $("#ten .hotspotCircle").zoomTo({
      targetsize: 0.15,
      duration: 600
    });
    evt.stopPropagation();
  });

  $("#tenone").click(function(evt) {
    $("#tenone .hotspotCircle").zoomTo({
      targetsize: 0.15,
      duration: 600
    });
    evt.stopPropagation();
  });

  $("#tentwo").click(function(evt) {
    $("#tentwo .hotspotCircle").zoomTo({
      targetsize: 0.15,
      duration: 600
    });
    evt.stopPropagation();
  });

  $("#tenthree").click(function(evt) {
    $("#tenthree .hotspotCircle").zoomTo({
      targetsize: 0.15,
      duration: 600
    });
    evt.stopPropagation();
  });

  $("#tenfour").click(function(evt) {
    $("#tenfour .hotspotCircle").zoomTo({
      targetsize: 0.15,
      duration: 600
    });
    evt.stopPropagation();
  });

  $("#tenfive").click(function(evt) {
    $("#tenfive .hotspotCircle").zoomTo({
      targetsize: 0.15,
      duration: 600
    });
    evt.stopPropagation();
  });

  $("#tensix").click(function(evt) {
    $("#tensix .hotspotCircle").zoomTo({
      targetsize: 0.15,
      duration: 600
    });
    evt.stopPropagation();
  });

  $("#tenseven").click(function(evt) {
    $("#tenseven .hotspotCircle").zoomTo({
      targetsize: 0.15,
      duration: 600
    });
    evt.stopPropagation();
  });

  $("#teneight").click(function(evt) {
    $("#teneight .hotspotCircle").zoomTo({
      targetsize: 0.15,
      duration: 600
    });
    evt.stopPropagation();
  });

  $("#tennight").click(function(evt) {
    $("#tennight .hotspotCircle").zoomTo({
      targetsize: 0.15,
      duration: 600
    });
    evt.stopPropagation();
  });

  $("#tenten").click(function(evt) {
    $("#tenten .hotspotCircle").zoomTo({
      targetsize: 0.15,
      duration: 600
    });
    evt.stopPropagation();
  });

  $("#tentenone").click(function(evt) {
    $("#tentenone .hotspotCircle").zoomTo({
      targetsize: 0.15,
      duration: 600
    });
    evt.stopPropagation();
  });

  $("#tententwo").click(function(evt) {
    $("#tententwo .hotspotCircle").zoomTo({
      targetsize: 0.15,
      duration: 600
    });
    evt.stopPropagation();
  });

  $("#tententhree").click(function(evt) {
    $("#tententhree .hotspotCircle").zoomTo({
      targetsize: 0.15,
      duration: 600
    });
    evt.stopPropagation();
  });

  $("#tentenfour").click(function(evt) {
    $("#tentenfour .hotspotCircle").zoomTo({
      targetsize: 0.15,
      duration: 600
    });
    evt.stopPropagation();
  });

  $("#tentenfive").click(function(evt) {
    $("#tentenfive .hotspotCircle").zoomTo({
      targetsize: 0.15,
      duration: 600
    });
    evt.stopPropagation();
  });

  $("#tentensix").click(function(evt) {
    $("#tentensix .hotspotCircle").zoomTo({
      targetsize: 0.15,
      duration: 600
    });
    evt.stopPropagation();
  });

  $("#tentenseven").click(function(evt) {
    $("#tentenseven .hotspotCircle").zoomTo({
      targetsize: 0.15,
      duration: 600
    });
    evt.stopPropagation();
  });

// end zoom element

$('.reset').click(function () {
    $(".reset").removeClass("resetAbsolute");
    $(this).closest('.description').fadeOut();
    $("#wrapper").zoomTo({
        targetsize: 0.5
    });
});


// $('#wrapper img').click(function () {
//     $(".reset").closest('.description').fadeOut();
//     $(this).closest('.description').fadeOut();
//     $("#wrapper").zoomTo({
//         targetsize: 0.5
//     });
// })



/* Set height of content in pop-up. Header is 150px long and the rest is content */
var setHeight = function () {
    var descriptionHeight = $('.description').height() - 150;
    $('.description section').css('height', descriptionHeight);
};

/* Show arrow to demonstrate zoom feature */
var setHelp = function () {
    var spot = $("#careWorkersHotspot .hotspotTitle");
    $("#help").css({
        top: parseInt(spot.css("top")) - 40 + "px",
        left: parseInt(spot.css("left")) + 40 + "px"
    })
}

var setupWindow = function () {
    $.each($('area'), function () {
        var object = $(this),
            position = object.attr('coords').split(','),
            hotspotName = object.data('hotspot'),
            hotspotType = object.data('type'),
            hotspotColor = object.data('color');

        if (hotspotType == "circle") {
            if (hotspotColor == "purple") {
                x = +position[0];
                y = +position[1];
                $('#' + hotspotName + ' .hotspotCircle').css('left', x).css('top', y).addClass("purple").fadeIn();
            } else {
                x = +position[0];
                y = +position[1];
                $('#' + hotspotName + ' .hotspotCircle').css('left', x).css('top', y).addClass("green").fadeIn();
            }
        } else {
            x1 = +position[0];
            y1 = +position[1];
            x2 = +position[2];
            y2 = +position[3];
            width = x2 - x1;
            height = y2 - y1;
            $('#' + hotspotName + ' .hotspotTitle').css('left', x1).css('top', y1).css('height', height).css('width', width).fadeIn();
        }
    });

    setHeight();
    setHelp();
}

window.onload = function () {
    setupWindow();
}

$(window).smartresize(function () {
    setupWindow();
});


//   ==============
$("#one").on('click', function () {
    $("#one-content").fadeIn();
    $(".reset").addClass("resetAbsolute");
});

$("#two").on('click', function () {
    $("#two-content").fadeIn();
    $(".reset").addClass("resetAbsolute");
});

$("#three").on('click', function () {
    $("#three-content").fadeIn();
    $(".reset").addClass("resetAbsolute");
});

$("#four").on('click', function () {
    $("#four-content").fadeIn();
    $(".reset").addClass("resetAbsolute");
});

$("#five").on('click', function () {
    $("#five-content").fadeIn();
    $(".reset").addClass("resetAbsolute");
});

$("#six").on('click', function () {
    $("#six-content").fadeIn();
    $(".reset").addClass("resetAbsolute");
});

$("#seven").on('click', function () {
    $("#seven-content").fadeIn();
    $(".reset").addClass("resetAbsolute");
});

$("#eight").on('click', function () {
    $("#eight-content").fadeIn();
    $(".reset").addClass("resetAbsolute");
});

$("#night").on('click', function () {
    $("#night-content").fadeIn();
    $(".reset").addClass("resetAbsolute");
});

$("#ten").on('click', function () {
    $("#ten-content").fadeIn();
    $(".reset").addClass("resetAbsolute");
});

$("#tenone").on('click', function () {
    $("#tenone-content").fadeIn();
    $(".reset").addClass("resetAbsolute");
});

$("#tentwo").on('click', function () {
    $("#tentwo-content").fadeIn();
    $(".reset").addClass("resetAbsolute");
});

$("#tenthree").on('click', function () {
    $("#tenthree-content").fadeIn();
    $(".reset").addClass("resetAbsolute");
});

$("#tenfour").on('click', function () {
    $("#tenfour-content").fadeIn();
    $(".reset").addClass("resetAbsolute");
});

$("#tenfive").on('click', function () {
    $("#tenfive-content").fadeIn();
    $(".reset").addClass("resetAbsolute");
});

$("#tensix").on('click', function () {
    $("#tensix-content").fadeIn();
    $(".reset").addClass("resetAbsolute");
});

$("#tenseven").on('click', function () {
    $("#tenseven-content").fadeIn();
    $(".reset").addClass("resetAbsolute");
});

$("#teneight").on('click', function () {
    $("#teneight-content").fadeIn();
    $(".reset").addClass("resetAbsolute");
});

$("#tennight").on('click', function () {
    $("#tennight-content").fadeIn();
    $(".reset").addClass("resetAbsolute");
});

$("#tenten").on('click', function () {
    $("#tenten-content").fadeIn();
    $(".reset").addClass("resetAbsolute");
});

$("#tentenone").on('click', function () {
    $("#tentenone-content").fadeIn();
    $(".reset").addClass("resetAbsolute");
});

$("#tententwo").on('click', function () {
    $("#tententwo-content").fadeIn();
    $(".reset").addClass("resetAbsolute");
});

$("#tententhree").on('click', function () {
    $("#tententhree-content").fadeIn();
    $(".reset").addClass("resetAbsolute");
});

$("#tentenfour").on('click', function () {
    $("#tentenfour-content").fadeIn();
    $(".reset").addClass("resetAbsolute");
});

$("#tentenfive").on('click', function () {
    $("#tentenfive-content").fadeIn();
    $(".reset").addClass("resetAbsolute");
});

$("#tentensix").on('click', function () {
    $("#tentensix-content").fadeIn();
    $(".reset").addClass("resetAbsolute");
});

$("#tentenseven").on('click', function () {
    $("#tentenseven-content").fadeIn();
    $(".reset").addClass("resetAbsolute");
});
//   ==============

var fullOpacity = true;
setInterval(function () {
    if (fullOpacity) {
        $(".hotspotCircle").animate({
            opacity: 0.50
        }, 500);
        fullOpacity = false;
    } else {
        $(".hotspotCircle").animate({
            opacity: 1
        }, 500);
        fullOpacity = true;
    }
}, 1000);