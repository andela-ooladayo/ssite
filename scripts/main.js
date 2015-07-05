
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

    $('.close').click( function () { 
        $('.window').slideUp();
        $('.show').fadeIn();
    });

    $('.show').click( function () { 
        $('.window').slideDown();
        $('.show').fadeOut();
    });

    var maxer = 0 ;
    $('.maxer').click( function () { 
        if(maxer%2 === 0) {  
            $('.window').animate({width:"60%", height:"400px"});
            $('#Tbd').animate({width:"97.6%", height:"400px"});
        }
        else {
            $('#Tbd').animate({width:"98.5%", height:"900px"});
            $('.window').animate({width:"100%", height:"900px"});
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
        strings: ["Enter your command below....ask 'codedoctor --help' for help"],
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
            $(".response").append("<div class='fore clear' style='margin-top:10px;margin-left:10px;'>CMD</span>:<span class='accent'>~</div>: <input class='clear' style='color:#18bc51;background-color: #222220; width: 35%; border: none; line-height: 1.6em; font-size: .8em; -webkit-box-shadow: none;-moz-box-shadow: none; box-shadow: none;outline: none;' id=" + "'" + command + run + "'" + "type='text' maxlength='50'></input>")
            var commandor = "#" + command + run
            $(commandor).focus();
            onEnter(commandor)
        },
    });
}

var run = 0;
var cmd = null;
var commandList = [];

function onEnter(commandor) {
    $(commandor).on('keypress', function (e) {
        if(e.which == 13) {
            var command = $(commandor).val().toString().toLowerCase();
            commandList.push(command)
            var cla = "attach-" + run;
            var element = $("<div class=" + cla + ">" + "</div>")
            $(".response").append(element)
            if(command === " codedoctor -h" || command === "codedoctor --help") {
                message = "Usage: codedoctor [OPTIONS] COMMAND [ARGS]... <br><br> Shadownet command line tool <br> Options: <br>   --help  Show this message and exit. <br> Commands:<br> who              Tells you who is codedoctor <br> schedule         Shows codedoctor schedule <br> hacks            Magics performed by codedoctor <br> academics        Academic qualification of codedoctor<br> clear/clc          Clear Screen";
                typeo("." + cla, message, 0, 'command-', run);
            }
            else if(command === "codedoctor -w" || command === "codedoctor who") {
                message = " I'M SAURABH.<br> I am presently engaged in working Full-Time as a Tech-Lead for SchoolCom(Data Analytic's Startup), alongwith my full-time engagement I am also a Technical and Business advisor for Conferensco.<br> Other than this, there are other small roles that I have been in which are - <br>- Mentor at Codementor<br>entor. <br>- Python expert at Hackhands. <br>-Online instructor at Udemy handling Html5 and JavaScript animation. <br>- Advisor for university students from BITS, IIT and other acing colleges in India on programming techniques.<br>- Independent python expert keen to help students and engineers from all over the world.<br>- Rank in top 1200 programmers on Hackerrank in the world.<br>- I would like to bring your attention to the fact that I am also a Hiring Ninja and have taken up Tech interviews (more than a hundred)";
                typeo("." + cla, message, 0, 'command-', run);
            }
            else if(command === "codedoctor -s" || command === "codedoctor schedule") {
                message = " My schedule ......................................<br>"
                typeo("." + cla, message, 0, 'command-', run)
            }
            else if(command === "codedoctor -ha" || command === "codedoctor hacks") {
                message = " **UDACITY** <br> Build a Search Engine <br> Certification of Accomplishment with High Distinction for the online course CS101 by Udacity. The course was taught by David Evans who is a Professor of Computer Science at the University of Virginia and in this course I learn key concepts in computer science and learn how to write own computer programs  in the context of building a web crawler.<br><br>Others Project are <br>**Gotmychange**     Aided in the development of a cross-platform petty cash transaction application prototype, which aimed at solving the 'change' problem involved our everyday routines<br>**KEYWORD BASED SPELL CORRECTOR**     Made a Keyword based Spell Corrector which using N-gram approach hosted as appspot application on advancedspellcheck.appspot.com.";
                typeo("." + cla, message, 0, 'command-', run);
            }
            else if(command === "codedoctor -a" || command === "codedoctor academics") {
                message = " B-Tech in Computer Science(2009-2013). <br>May 2013 I have done my graduation from vellore institute of technology with CGPA of 8.68 in Computer Science.<br>";
                typeo("." + cla, message, 0, 'command-', run);
            }
            else if(command === "clear" || command === "clc") {
                $(".fore").remove();
                $("#command").remove();
                $(".response").remove();
                $(".break").remove();
                $("#Tbd").append("<div class='response'></div>")
                $(".response").append("<div class='fore clear' style='margin-top:10px;margin-left:10px;'>CMD</span>:<span class='accent'>~</div>: <input class='clear' style='color:#18bc51;background-color: #222220; width: 35%; border: none; line-height: 1.6em; font-size: .8em; -webkit-box-shadow: none;-moz-box-shadow: none; box-shadow: none;outline: none;' id='command' type='text' maxlength='50'></input>")
                $("#command").focus();
                onEnter("#command")
            }
            else {
                message = " Unknown command/option " + command.replace("codedoctor", "") + " .Try again";
                typeo("." + cla, message, 0, 'command-', run);
            }

            run = run + 1
            $(commandor).prop('disabled', true);
        }

    });
}

document.onkeydown = showPreviousCommand;
var i = 0
var j = 1
function showPreviousCommand(e) {
    var r = commandList.length - j
    var v = r + 1 
    e = window.event || e;

    if (e.keyCode == '38') {
        e.preventDefault()
        if(r < 0) {
          r = 0
        }
        $("#" + e.srcElement.id).val(commandList[r])
        j = j + 1
    }
    if (e.keyCode == '13') {
        j = 1
    }
    else if (e.keyCode == '40') {
        e.preventDefault()
        if(v > (commandList.length - 1)) {
          v = commandList.length - 1
        }
        $("#" + e.srcElement.id).val(commandList[v])
       j  = j - 1
    }
}