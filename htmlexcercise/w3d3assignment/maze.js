
$(document).ready(function () {
    
    var gameStart = false;
    $("#maze").mouseleave(function () { loss() });

    $("#start").click(function () {
        $("#status").text('Move mouse to End Point E in order to win the Game');
        gameStart = true;
        if ($(".boundary").hasClass('youlose')) {
            $(".boundary").removeClass('youlose');
        }
        $(".boundary").mousemove(function () { loss(); })
    });

    $("#end").mousemove(function () {
        if (gameStart == true) won();
        else if (gameStart && $(".boundary").hasClass('youlose')) loss();

    });
    function won() {
        gameStart = false;
        $("#status").text("You win! :]");
    }

   function loss() {
        if (gameStart) {
            gameStart = false;
            $(".boundary").addClass('youlose');
            $("#status").text('Sorry, you lost. :[');
        }
    }
})


