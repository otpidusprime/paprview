/*var colors = new Array(
  [0, 114, 255],
  [0, 198, 255],
  [12, 235, 235],
  [32, 277, 178],
  [255, 130, 53],
  [25, 22, 84]
);

var step = 0;
//color table indices for:
// current color left
// next color left
// current color right
// next color right
var colorIndices = [0, 1, 2, 3];

//transition speed
var gradientSpeed = 0.002;

function updateGradient() {
  if ($ === undefined) return;

  var c0_0 = colors[colorIndices[0]];
  var c0_1 = colors[colorIndices[1]];
  var c1_0 = colors[colorIndices[2]];
  var c1_1 = colors[colorIndices[3]];

  var istep = 1 - step;
  var r1 = Math.round(istep * c0_0[0] + step * c0_1[0]);
  var g1 = Math.round(istep * c0_0[1] + step * c0_1[1]);
  var b1 = Math.round(istep * c0_0[2] + step * c0_1[2]);
  var color1 = "rgb(" + r1 + "," + g1 + "," + b1 + ")";

  var r2 = Math.round(istep * c1_0[0] + step * c1_1[0]);
  var g2 = Math.round(istep * c1_0[1] + step * c1_1[1]);
  var b2 = Math.round(istep * c1_0[2] + step * c1_1[2]);
  var color2 = "rgb(" + r2 + "," + g2 + "," + b2 + ")";

  $(".about-window-over")
    .css({
      background: "-webkit-linear-gradient(to right, "+color1+", "+color2+")",
    })
    .css({
      background: "linear-gradient(to right, "+color1+", "+color2+")",
    })

  step += gradientSpeed;
  if (step >= 1) {
    step %= 1;
    colorIndices[0] = colorIndices[1];
    colorIndices[2] = colorIndices[3];

    //pick two new target color indices
    //do not pick the same as the current one
    colorIndices[1] =
      (colorIndices[1] + Math.floor(1 + Math.random() * (colors.length - 1))) %
      colors.length;
    colorIndices[3] =
      (colorIndices[3] + Math.floor(1 + Math.random() * (colors.length - 1))) %
      colors.length;
  }
}
setInterval(updateGradient, 10);*/

//INITIATE CONTRAST FUNCTION
var colorboxtextcontrastInterval = setInterval(colorboxtextcontrast, 0);

$(document).ready(function() {
    setTimeout(function() {
        clearInterval(colorboxtextcontrastInterval);
    }, 1000);
});

//MATERIAL COLORBOX BG-TEXT CONTRAST function
function colorboxtextcontrast() {
    $('.color').each(function() {
        var color = $(this).css('backgroundColor');
        var regExp = /\(([^)]+)\)/;
        var matches = regExp.exec(color);
        var rgb = matches[1].split(',');
        var c = 'rgb(' + rgb[0] + ',' + rgb[1] + ',' + rgb[2] + ')';
        var o = Math.round(((parseInt(rgb[0]) * 299) + (parseInt(rgb[1]) * 587) + (parseInt(rgb[2]) * 114)) / 1000);
        if (o > 125) {
            $(this).find('.color-name').css('color', 'rgba(0,0,0,0.3)');
            $(this).find('.color-spec').css('color', 'rgba(0,0,0,0.3)');
        } else {
            $(this).find('.color-name').css('color', 'rgba(255,255,255,0.3)');
            $(this).find('.color-spec').css('color', 'rgba(255,255,255,0.3)');
        }
    });
}


function addcolorbuttoncontrast() {
    var color = $(".add_color_submit").css('backgroundColor');
    var regExp = /\(([^)]+)\)/;
    var matches = regExp.exec(color);
    var rgb = matches[1].split(',');
    var c = 'rgb(' + rgb[0] + ',' + rgb[1] + ',' + rgb[2] + ')';
    var o = Math.round(((parseInt(rgb[0]) * 299) + (parseInt(rgb[1]) * 587) + (parseInt(rgb[2]) * 114)) / 1000);
    if (o > 125) {
        $(".add_color_submit").css({ "color": "rgba(0,0,0,0.45)" });
    } else {
        $(".add_color_submit").css('color', 'rgb(255,255,255)');
    }
}

//MOBILE ICON CLICK
$(".mobile_menu_ctrl").on("click touchend", function(e) {
    $(".web_app_ctrls").toggleClass("pull-menu");
    $(this).find(".material-icons").html(
        $(this).text() == "apps" ?
        "close" :
        "apps"
    );
    e.preventDefault();
});

//MOBILE MENU CLOSE CLICK
$(".mob_menu_close").on("click touchend", function(e) {
    $(".web_app_ctrls").removeClass("pull-menu");
    e.preventDefault();
});

//APP LAYOUT 1 CLICK
$(".app-1").on("click touchend", function() {
    $(".app_toolbar").removeClass("toolbar_ext");
    $(".app_toolbar").removeClass("toolbar_fullpage");
    $(".app_toolbar").addClass("toolbar_normal");

    $(".app_fab").removeClass("fab_pos_btm_ext");
    $(".app_fab").removeClass("fab_pos_ext");
    $(".app_fab").addClass("fab_pos_btm");

    $(".app-1").addClass("active_selection");
    $(".app-2").removeClass("active_selection");
    $(".app-3").removeClass("active_selection");
});

//APP LAYOUT 2 CLICK
$(".app-2").on("click touchend", function() {
    $(".app_toolbar").removeClass("toolbar_normal");
    $(".app_toolbar").removeClass("toolbar_fullpage");
    $(".app_toolbar").addClass("toolbar_ext");

    $(".app_fab").removeClass("fab_pos_btm_ext");
    $(".app_fab").removeClass("fab_pos_btm");
    $(".app_fab").addClass("fab_pos_ext");

    $(".app-2").addClass("active_selection");
    $(".app-1").removeClass("active_selection");
    $(".app-3").removeClass("active_selection");
});

//APP LAYOUT 3 CLICK
$(".app-3").on("click touchend", function() {
    $(".app_toolbar").removeClass("toolbar_normal");
    $(".app_toolbar").removeClass("toolbar_ext");
    $(".app_toolbar").addClass("toolbar_fullpage");

    $(".app_fab").removeClass("fab_pos_ext");
    $(".app_fab").removeClass("fab_pos_btm");
    $(".app_fab").addClass("fab_pos_btm_ext");

    $(".app-3").addClass("active_selection");
    $(".app-1").removeClass("active_selection");
    $(".app-2").removeClass("active_selection");
});

//LIGHT CLICK
$(".circle_1").on("click touchend", function() {
    $(".app_layout").removeClass("app_layout_dark");
    $(".app_layout").removeClass("app_layout_amoled");

    $(".circle_1").addClass("active_selection");
    $(".circle_2").removeClass("active_selection");
    $(".circle_3").removeClass("active_selection");
    $(".circle_3").removeClass("active_selection_onblack");

    e.preventDefault();
    e.stopPropagation();
});

//DARK CLICK
$(".circle_2").on("click touchend", function() {
    $(".app_layout").addClass("app_layout_dark");
    $(".app_layout").removeClass("app_layout_amoled");

    $(".circle_1").removeClass("active_selection");
    $(".circle_2").addClass("active_selection");
    $(".circle_3").removeClass("active_selection");
    $(".circle_3").removeClass("active_selection_onblack");

    e.preventDefault();
    e.stopPropagation();
});

//AMOLED CLICK
$(".circle_3").on("click touchend", function() {
    $(".app_layout").removeClass("app_layout_dark");
    $(".app_layout").addClass("app_layout_amoled");

    $(".circle_1").removeClass("active_selection");
    $(".circle_2").removeClass("active_selection");
    $(".circle_3").removeClass("active_selection");
    $(".circle_3").addClass("active_selection_onblack");

    e.preventDefault();
    e.stopPropagation();
});

//MOBILE MENU CLICK
$(".mob_sidebar_puller").on("click touchend", function() {
    $(".sidebar_wrapper").toggleClass("pull_sidebar");
    $(".mob_puller_ctrl > i").toggleClass("rotate_pull_icon");
    $(".app_fab").toggleClass("fab_push_colorbox");
    e.preventDefault();
});

//SYSTEM RESET CLICK
$(".sys_reset").on("click touchend", function() {
    $(".app_statusbar, .app_toolbar, .app_fab, .app_navbar").removeAttr("style");
    $(".app_layout").removeClass("app_layout_amoled");
    $(".app_layout").removeClass("app_layout_dark");

    $(".app_toolbar").removeClass("toolbar_ext");
    $(".app_toolbar").removeClass("toolbar_fullpage");
    $(".app_toolbar").addClass("toolbar_normal");

    $(".app_fab").removeClass("fab_pos_btm_ext");
    $(".app_fab").removeClass("fab_pos_ext");
    $(".app_fab").addClass("fab_pos_btm");

    $(".app-1").addClass("active_selection");
    $(".app-2").removeClass("active_selection");
    $(".app-3").removeClass("active_selection");

    $(".circle_1").addClass("active_selection");
    $(".circle_2").removeClass("active_selection");
    $(".circle_3").removeClass("active_selection");
    $(".circle_3").removeClass("active_selection_onblack");

    e.preventDefault();
    $(this).addClass("sys_ctrl_active_touch").delay(250).queue(function() {
        $(this).removeClass("sys_ctrl_active_touch").dequeue();
    });
});

$("#about_menu").on("click touchend", function() {
    $(".window-overlay").removeClass("hidethis");
    $("#app-info").removeClass("hidethis");
    $(".web_app_ctrls").removeClass("pull-menu")
});

$(".close-window").on("click touchend", function() {
    $(".window-overlay").addClass("hidethis");
    $(".window").removeClass("hidethis");
});

//CLICKS/TOUCHS AREA DETECT
$(document).ready(function(e) {
    e(this).mouseup(function(t) {
        var container = e(".web_app_sub_ctrls_area");

        if (!container.is(t.target) && container.has(t.target).length === 0) {
            container.removeClass("web_app_sub_ctrls_active");
            e(".has_sub_ctrls").removeClass("web_app_ctrls_active");
            e(".has_sub_ctrls").removeClass("disable_active_effect");
        }

        e(".has_sub_ctrls").on("click touchend", function() {
            e(this)
                .find(".web_app_sub_ctrls_area")
                .addClass("web_app_sub_ctrls_active");
            e(this).siblings().find(".web_app_sub_ctrls_area").hide();
            e(this).addClass("web_app_ctrls_active");
            e(this).addClass("disable_active_effect");
        });

        e(".web_app_sub_ctrls_area").on("click touchend", function(t) {
            t.stopPropagation();
        });
    });

    e(this).mouseup(function(t2) {
        var container = e(".web_app_sub_ctrls_area_mobile, .web_app_ctrls");

        if (!container.is(t2.target) && container.has(t2.target).length === 0) {
            container.removeClass("pull_sub_ctrl_up");
            container.removeClass("pull-menu");
        }

        e("#sys_pref").on("click touchend", function() {
            e("#sys_mobile_pref").addClass("pull_sub_ctrl_up");
            //e(".web_app_ctrls").removeClass("pull-menu");
            e(".web_app_sub_ctrls_area_mobile:not(#sys_mobile_pref)").removeClass("pull_sub_ctrl_up");
        });

        e("#sys_add_color").on("click touchend", function() {
            e("#sys_mobile_add_color").addClass("pull_sub_ctrl_up");
            //e(".web_app_ctrls").removeClass("pull-menu");
            e(".web_app_sub_ctrls_area_mobile:not(#sys_mobile_add_color)").removeClass("pull_sub_ctrl_up");
            e(".add_color_input").focus();
        });
    });

    e(this).keyup(function(e1) {
        if (e1.keyCode == 27) {
            e(".web_app_sub_ctrls_area").removeClass("web_app_sub_ctrls_active");
            e(".has_sub_ctrls").removeClass("web_app_ctrls_active");
            e(".has_sub_ctrls").removeClass("disable_active_effect");
            e(".web_app_sub_ctrls_area_mobile").removeClass("pull_sub_ctrl_up");
            $(".window-overlay").addClass("hidethis");
            $(".window").removeClass("hidethis");
        }
    });

    e(".has_sub_ctrls").on("click touchend", function() {
        e(this)
            .find(".web_app_sub_ctrls_area")
            .addClass("web_app_sub_ctrls_active");
        e(this).siblings().find(".web_app_sub_ctrls_area").hide();
        e(this).addClass("web_app_ctrls_active");
    });

    e(".web_app_sub_ctrls_area").on("click touchend", function(t) {
        t.stopPropagation();
    });

});

//JASON
$.getJSON("js/material.json", function(data) {

    $.each(data.materialcolors, function(index, value) {

        $(".colorbox").append("<li id=\"" + value.name + "-" + value.spec + "\" class=\"color\" style=\"background: #" + value.hex + "; color: #" + value.hex + ";\"><span class=\"color-name\">" + value.name + "</span><span class=\"color-spec\">" + value.spec + "</span><i data-color=\"#" + value.hex + "\" class=\"wi wi-raindrop color-icon color-pad\"></i></li>");

    });

});

//TOUCH HANDLER function
function touchHandler(event) {
    var touch = event.changedTouches[0];

    var simulatedEvent = document.createEvent("MouseEvent");
    simulatedEvent.initMouseEvent({
            touchstart: "mousedown",
            touchmove: "mousemove",
            touchend: "mouseup"
        }[event.type],
        true,
        true,
        window,
        1,
        touch.screenX,
        touch.screenY,
        touch.clientX,
        touch.clientY,
        false,
        false,
        false,
        false,
        0,
        null
    );

    touch.target.dispatchEvent(simulatedEvent);
    event.preventDefault();
}

//INITIATE function
function init() {
    document.addEventListener("touchstart", touchHandler, true);
    document.addEventListener("touchmove", touchHandler, true);
    document.addEventListener("touchend", touchHandler, true);
    document.addEventListener("touchcancel", touchHandler, true);
}

//INITIATE TOUCH
$(document).ready(function() {
    init();
});

//INITIATE DROP
setTimeout(function() {

    $(".color-icon").draggable({
        opacity: 1,
        revert: true,
        revertDuration: 0
    });

    $(".color_area, .color_area_greedy").droppable({
        hoverClass: "drop_area_fb",
        greedy: true,
        drop: function(e, ui) {
            console.log(ui.draggable);
            $(this)
                .animate({
                        "background-color": ui.draggable.attr("data-color")
                    },
                    250
                )
                .removeClass("drop_area_fb");
        }
    });

    $("#color_holder > .color").each(function() {
        $(this).children("i").each(function() {
            $(this).css("color", $(this).attr("data-color"));
        });
    });


}, 500);


$("#system_lights").click(function() {
    $(this).html(
        $(this).text() == "brightness_2" ?
        "wb_sunny" :
        "brightness_2"
    );
});

$(".add_color_input").on("keyup", function() {
    var color_in_area = $(this);
    var color_val = color_in_area.val();

    if (/^#(?:[A-Fa-f0-9]{3}){1,2}$/.test(color_val) || /^rgb[(](?:\s*0*(?:\d\d?(?:\.\d+)?(?:\s*%)?|\.\d+\s*%|100(?:\.0*)?\s*%|(?:1\d\d|2[0-4]\d|25[0-5])(?:\.\d+)?)\s*(?:,(?![)])|(?=[)]))){3}[)]$/.test(color_val) || /^hsl[(]\s*0*(?:[12]?\d{1,2}|3(?:[0-5]\d|60))\s*(?:\s*,\s*0*(?:\d\d?(?:\.\d+)?\s*%|\.\d+\s*%|100(?:\.0*)?\s*%)){2}\s*[)]$/.test(color_val)) {

        if (/#(f){3,6}|hsl\((?:\s*0*(360{1,3})),(?:\s*0*(100{1,3}))%,(?:\s*0*(100{1,3}))%\)|rgb\((?:\s*0*(255{1,3})),(?:\s*0*(255{1,3})),(?:\s*0*(255{1,3}))\)/.test(color_val)) {
            $(".add_color_submit").css({ "background": "#555c67", "color": "#ffffff" });
            $(".add_color_submit").get(0).style.setProperty("--box-shadow-color", "#484f58");
            $(".add_color_submit").get(1).style.setProperty("--box-shadow-color", "#484f58");
            $(this).css({ "border-color": "#484f58" });
            $(".add_color_submit").removeClass("disabled_submit");
            $(".add_color_submit").prop('disabled', false);
        } else {

            var addcolorbuttoncontrastInterval = setInterval(addcolorbuttoncontrast, 0);

            $(document).ready(function() {
                setTimeout(function() {
                    clearInterval(addcolorbuttoncontrastInterval);
                }, 1000);
            });

            $(".add_color_submit").css({ "background": color_val });
            $(".add_color_submit").get(0).style.setProperty("--box-shadow-color", color_val);
            $(".add_color_submit").get(1).style.setProperty("--box-shadow-color", color_val);
        }

    } else if (/^^rgba[(](?:\s*0*(?:\d\d?(?:\.\d+)?(?:\s*%)?|\.\d+\s*%|100(?:\.0*)?\s*%|(?:1\d\d|2[0-4]\d|25[0-5])(?:\.\d+)?)\s*,){3}\s*0*(?:\.\d+|1(?:\.0*)?)\s*[)]$/.test(color_val) || /^hsla[(]\s*0*(?:[12]?\d{1,2}|3(?:[0-5]\d|60))\s*(?:\s*,\s*0*(?:\d\d?(?:\.\d+)?\s*%|\.\d+\s*%|100(?:\.0*)?\s*%)){2}\s*,\s*0*(?:\.\d+|1(?:\.0*)?)\s*[)]$/.test(color_val)) {
        $(".add_color_submit").prop('disabled', true);
        $(".add_color_submit").addClass("disabled_submit");
    } else {
        $(".add_color_submit").css({ "background": "#555c67", "color": "#ffffff" });
        $(".add_color_submit").get(0).style.setProperty("--box-shadow-color", "#484f58");
        $(".add_color_submit").get(1).style.setProperty("--box-shadow-color", "#484f58");
        $(this).css({ "border-color": "#484f58" });
        $(".add_color_submit").removeClass("disabled_submit");
        $(".add_color_submit").prop('disabled', false);
    }

});


$(".add_color_submit").click(function() {
    var color_val = $(".add_color_input").val();
    if (/^#(?:[A-Fa-f0-9]{3}){1,2}$/.test(color_val) === false && /^rgb[(](?:\s*0*(?:\d\d?(?:\.\d+)?(?:\s*%)?|\.\d+\s*%|100(?:\.0*)?\s*%|(?:1\d\d|2[0-4]\d|25[0-5])(?:\.\d+)?)\s*(?:,(?![)])|(?=[)]))){3}[)]$/.test(color_val) === false && /^hsl[(]\s*0*(?:[12]?\d{1,2}|3(?:[0-5]\d|60))\s*(?:\s*,\s*0*(?:\d\d?(?:\.\d+)?\s*%|\.\d+\s*%|100(?:\.0*)?\s*%)){2}\s*[)]$/.test(color_val) === false) {

        if (color_val == "") {
            $(".sub_menu_area_err_msg span").html("BRO! Where's the color?");

            $(".sub_menu_area_err_msg").slideDown("2000", "easeInOutQuint", function() {
                // Animation complete.
            });
            setTimeout(hidepanel, 2000);


            function hidepanel() {
                if ($(".sub_menu_area_err_msg").is(":hover") === false) {
                    $(".sub_menu_area_err_msg").slideUp("2000", "easeInOutQuint", function() {
                        // Animation complete.
                    });
                }
            }

            $(".sub_menu_area_err_msg").mouseleave(function() { setTimeout(hidepanel, 500); });
        } else {
            $(".sub_menu_area_err_msg span").html("WOAH! What color is that?<br/>Please enter a valid color value. Eg: #2080ff");

            $(".sub_menu_area_err_msg").slideDown("2000", "easeInOutQuint", function() {
                // Animation complete.
            });
            setTimeout(hidepanel, 4000);


            function hidepanel() {
                if ($(".sub_menu_area_err_msg").is(":hover") === false) {
                    $(".sub_menu_area_err_msg").slideUp("2000", "easeInOutQuint", function() {
                        // Animation complete.
                    });
                }
            }

            $(".sub_menu_area_err_msg").mouseleave(function() { setTimeout(hidepanel, 1000); });
        }
    }
});