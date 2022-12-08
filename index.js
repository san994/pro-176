let words=[
    {
        "input":5,
        "category":"sports",
        "word":"chess"
    },
    {
        "input":6,
        "category":"europeon country name",
        "word":"france"
    }
]

$(document).ready(function(){
    guessing()
})

function guessing(){
    var randomNumber = parseInt(Math.random()*words.length);
    const randomWords = words[randomNumber];
    var gameOver = false;

    $("#hint").html(randomWords.category);

    for(var i=0;i<randomWords.length;i++){
        let input_html = `<input type="text" class="input_field" id="input_${i}" placeholder="Input ${i+1}"/>`;
        $("#blanks").append(input_html);
    }

    $(".clickable").click(function(){
        var correctGuess = false;

        let id = $(this).attr("id");

        let life = parseInt($("life").text())

        for(var i=1; i<randomWords.word.length;i++){

            if(randomWords.word.charAt(i).toLowerCase() == id){
                if(life > 0 && ($(".fill_blanks").eq(1).html() == "_" || $(".fill_blanks").eq(1).html() == id)){

                    $(".fill_blanks").eq(1).html(id);
                    correctGuess = true;

                    if($("#blanks").text() === randomWords.word.toLowerCase()){
                        $("#result").text("YOU WIN!");
                        correctGuess = false;
                        gameOver = true;
                    }
                }
            }
        }
    })
}