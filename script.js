$(document).ready(function(){
  
  var magic8Ball = {};

  magic8Ball.listofanswers = [
      "As vezes me assusto com minha propria ignorancia", 
      "Noooossaa mano",
      "Fuck my life", 
      "Não surta hard", 
      "Caaara, isso é mto errado", 
      "Sai daqui ow", 
      "Tem que ver se a tia vai querer, neh?", 
      "#sóvai", 
      "Genial", 
      "tah bala issai", 
      "whatever makes you happy"
    ];
 
  magic8Ball.getAnswer = function(question)
  {
    var randomNumber = Math.random();
    var randomAnswer = Math.floor(randomNumber * this.listofanswers.length);
    var answer = this.listofanswers[randomAnswer];
    
    $("#8ball").effect( "shake" );
    $("#answer").text( answer );
    $("#answer").fadeIn(3000);
    $("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/answerside.png");

    console.log(question);
    console.log(answer);
  };
  $("#answer").hide();

  var onClick = function()
  {
    $("#answer").hide();
    $("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/magic8ballQuestion.png");
    var question = prompt("What do you want to know?");
    if (question) {
      magic8Ball.getAnswer(question);
    }
  };
  
  $("#questionButton").click( onClick );
});