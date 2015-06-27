

// var greeting = "Searching The Programme .... <br>", 
//     cursor2 = '<span class="fore"> CMD</span>:<span class="accent">~</span> : "',
//     cursor =  '<span id="cmd"> </span>',
//     cmd = $('#Cmd:last-child');

// function type(el,text,pos,no){
//     ctext = text.substring(0,pos)+(pos%2?cursor:cursor);
//     $(el).html(ctext);
//     if(pos==text.length){
//         $(el).html(text+cursor);
//     }else{
//         window.setTimeout('type("'+el+'","'+text+'",'+(pos+1)+','+1+');',70);
//     }
// }
// var rt = 0 ,rtj = 0 ;
// function robot () {
//   if(rtj>5){rtj=0;}
//  var greeting = "executing  The Programme .... <br>", 
//     cursor2 = '<span class="fore"> CMD</span>:<span class="accent">~</span> : "',
//     cursor =  '<span id="cmd'+rt+'"> </span>',
//     cmd = $('#Cmd'); 
//   var greeting2 = ["executing  The Programme .... <br>",
//                   "Matching result .... <br>",
//                   "Calculing variables  .... <br>",
//                   "System calling  .... <br>",
//                   "Saving The feedback ... <br>",
//                   "Reloading the programme ... <br><br>",
//                   ] ;
//   cmd.append(cursor2);
//   cmd.append(cursor);
//   type('#cmd'+rt,greeting2[rtj],0);
//   rt++;rtj++;
  
//   var elem = document.getElementById('Tbd');
//   elem.scrollTop = elem.scrollHeight;
  
// }


$(document).ready(function(){
  // setInterval(robot,3000);
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

    $('#command').on('keypress', function (e) {
        if(e.which == 13) {
            var command = $("#command").val().toString();
            console.log(command)
            if(command === "codedoctor -h" || command === "codedoctor --help") {
                console.log("Enter")
                $(".response").typed({
                    strings: ["These are the commands available<br> codedoctor who >>> Tells you who is codedoctor<br> codedoctor schedule >>> Shows codedoctor schedule<br> codedoctor hacks >>> Magics performed by codedoctor<br> codedoctor academics >>> academic qualification of codedoctor"],
                    typeSpeed: 0,
                    showCursor: false,
                });
            }  
        }
    });
 
});

$(function(){
    $(".element").typed({
        strings: ["Enter your command below....ask codementor --help for help"],
        typeSpeed: 20,
        showCursor: false,
    });
});

function typeo() {
    $(".response").typed({
        strings: [],
        typeSpeed: 0,
        showCursor: false,
    });
}
