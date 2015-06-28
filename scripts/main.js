
// This is a product of shadownet incoporation
$(document).ready(function() {
    // set date
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1;
    var yyyy = today.getFullYear();
    if(dd < 10) {
        dd = '0'+ dd
    }
    if(mm < 10) {
        mm='0' + mm
    }
    today = mm+'/'+dd+'/'+yyyy;

    $("#date").text(today)
    $('.welcome').hide();

    $('.close').click( function () {
        $('.window').slideUp();
        $('.show').fadeIn();
        $('.welcome').slideDown();
    });

    $('.show').click( function () {
        $('.window').slideDown();
        $('.show').fadeOut();
        $('.welcome').hide();
    });

    var maxer = 0 ;
    $('.maxer').click( function () {
        if(maxer%2 === 0) {
            $('.window').animate({width:"100%", height:"800px"});
            $('#Tbd').animate({width:"99%", height:"800px"});
        }
        else {
            $('#Tbd').animate({width:"980px", height:"300px"});
            $('.window').animate({width:"1000px", height:"300px"});
        }
        maxer++;
    });

    $("#command").focus();

    $('.min').click( function () {
        $('pre').slideUp();
    });

    $('.max').click( function () {
        $('pre').slideDown();
    });
    var commandor = '#command';
    onEnter(commandor)

});

$(function(){
    $(".element").typed({
        strings: ["Enter your command below....ask codementor --help for help"],
        typeSpeed: 20,
        showCursor: false,
    });
});

function typeo(ele, message, speed, command, run) {
    $(ele).typed({
        strings: [message],
        typeSpeed: 0,
        showCursor: false,
        callback: function() {
            $(".response").append("<div class='fore' style='margin-left:-10px; margin-top:10px'>CMD</span>:<span class='accent'>~</div>: <input style='color:#18bc51;background-color: #222220; width: 35%; border: none; line-height: 1.9em; font-size: 1em; outline: none;' id=" + "'" + command + run + "'" + "type='text' maxlength='50'></input>")
            var commandor = "#" + command + run
            $(commandor).focus();
            onEnter(commandor)
        },
    });
}

var run = 0;
var cmd = null;

function onEnter(commandor) {
    $(commandor).on('keypress', function (e) {
        if(e.which == 13) {
            var command = $(commandor).val().toString().toLowerCase();
            var cla = "attach-" + run;
            var element = $("<div class=" + cla + ">" + "</div>")
            $(".response").append(element)
            if(command === "codedoctor -h" || command === "codedoctor --help") {
                message = "These are the commands available<br> codedoctor who >>> Tells you who is codedoctor<br> codedoctor schedule >>> Shows codedoctor schedule<br> codedoctor hacks >>> Magics performed by codedoctor<br> codedoctor academics >>> academic qualification of codedoctor\n"
                typeo("." + cla, message, 0, 'command-', run)
            }
            else if(command === "codedoctor -w" || command === "codedoctor who") {
                message = "Oladayo is a Software Engineer\n"
                typeo("." + cla, message, 0, 'command-', run)
            }
            else if(command === "codedoctor -s" || command === "codedoctor schedule") {
                message = "My schedule ......................................\n"
                typeo("." + cla, message, 0, 'command-', run)
            }
            else if(command === "codedoctor -h" || command === "codedoctor hacks"){
                message = "unhacked a website for a travel tour company\n"
                typeo("." + cla, message, 0, 'command-', run)
            }
            else if(command === "codedoctor -a" || command === "codedoctor academics"){
                message = "Attended Ladoke Akintola University of Technology...\n"
                typeo("." + cla, message, 0, 'command-', run)
            }
            else {
                message = "Unknown command/option " + command.replace("codedoctor", "") + " .Try again"
                typeo("." + cla, message, 0, 'command-', run)
            }
            run = run + 1
        }
    });
}
