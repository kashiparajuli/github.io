$(document).ready(function () {

    let grow = 10;
    let initTime = 250;
    let circleWidth = 50;
    let numberCircles=5;
    let initGrow=0;

    function increaseGrow() {
        grow += initGrow;
        $('div').css({
            "height": grow + "px", "width": grow + "px", "border-radius": "50%"
        })
    }

    $('#start').click(function () {
        initGrow = parseInt($("#growth").val());
        initTime = parseInt($("#interval").val());
        circleWidth = parseInt($('#width').val());
        numberCircles = parseInt($('#count').val());

        for (let i = 0; i < numberCircles; i++) {
            let elem = $("<div>");
            elem.css({
                "height": circleWidth, "widht": circleWidth, "border-raidus": "50px",
                "position": "absolute", "top": getRandomInt(80) + "vh",
                "left": getRandomInt(100) + "%", "background-color": getRandomColor()
            })
            $('body').append(elem);
            setInterval(increaseGrow, initTime);
        }

        $('div').click(function () {
            $(this).remove();
        })
    });
    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }

    function getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
});