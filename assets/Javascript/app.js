$('#start').on("click", function(){
    game.start();
})

$(document).on("click","#end",function(){
    game.done();
    
})

var questions = [{
    question:"Who did Nelson Mandela credit as being one of his greatest heros?",
    answers:["Ghandhi","The Spice Girls","The Beatles","Justin Bieber"],
    correctAnswer:"The Spice Girls"
}, 
{
    question:"What animal kills more humans every year?",
    answers:["Elephants","Cobras","Mosquitos","Sharks"],
    correctAnswer:"Mosquitos"
},
{
    question:"What year did Harry Potter come out?",
    answers:["1999","2003","2001","1997"],
    correctAnswer:"1997"  
},
{
    question:"What 1998 classic declared that Gatorade was better than h20?",
    answers:["Rush Hour","The Waterboy","Scary Movie","The Lion King"],
    correctAnswer:"The Waterboy"
},
{
    question:"In what century was Bacon invented?",
    answers:["20th Century","15th century","10 B.C.","17th Century"],
    correctAnswer:"17th Century"
},
{
    question:"What is Mary's favorite color?",
    answers:["blue","red","orange","green"],
    correctAnswer:"blue"
},
{
    question:"Which superhero is not part of Marvel?",
    answers:["Superman","Thor","Captain America","Wolverine"],
    correctAnswer:"Superman"
}];

var game = {
    correct: 0,
    incorrect: 0,
    counter:20,
    countdown: function(){
        game.counter--;
        $('#counter').html(game.counter);
        if(game.counter<=0){
            console.log("Time is up!");
            game.done();
        }
    },
    start: function(){
        timer = setInterval(game.countdown,1000);
        $("#subwrapper").prepend('<h2>Time Remaining: <span id = "counter">20</span> Seconds</h2>');
            $('#start').remove();
            for (var i =0; i<questions.length; i++){
                $("#subwrapper").append("<h2>"+ questions[i].question + "<h2>");
                for (var j=0; j<questions[i].answers.length; j++){
                    $("#subwrapper").append("<input type = 'radio' name = question-" + i +" 'value'"+questions[i].answers[j]+">" + questions[i].answers[j])
             
                }

            }
             $("#subwrapper").append('<br><button id = "end">DONE</button>');
      },
    

       done: function(){
           console.log ("done")
         $.each($("input[name='question-0']:checked"), function() {
             if($(this).val() === questions[0].correctAnswer){
                game.correct++;
            } else {
                game.incorrect++;
                  
            }

             });
         
          $.each($("input[name='question-1'] :checked"), function (){
                     if($(this).val()===questions[1].correctAnswer){
                        game.correct++;
                     } else{
                         game.incorrect++;
                     }
        
                      });  
          $.each($("input[name='question-2']:checked"), function (){
                         if($(this).val()===questions[2].correctAnswer){
                             game.correct++;
                         } else{
                             game.incorrect++;
                      }
            
                     }); 
         $.each($("input[name='question-3']:checked"), function (){
                             if($(this).val()===questions[3].correctAnswer){
                                game.correct++;
                             } else{
                                 game.incorrect++;
                                                }
                

                       }); 
         $.each($("input[name='question-4']:checked"), function (){
                 if($(this).val()===questions[4].correctAnswer){
                     game.correct++;
                 } else{
                     game.incorrect++;
                      }
    
                     });
         $.each($("input[name='question-5']:checked"), function (){
                    if($(this).val()===questions[5].correctAnswer){
                        game.correct++;
                    } else{
                        game.incorrect++;
                     }
        
                    });
         $.each($("input[name='question-6']:checked"), function (){
                        if($(this).val()===questions[6].correctAnswer){
                            game.correct++;
                        } else{
                            game.incorrect++;
                     }
            
                     });
       
                
        this.result();
       },
        result: function(){
            clearInterval(timer);
            $('#subwrapper h2').remove();

            $("#subwrapper").html("<h2>All done!</h2>");
            $("#subwrapper").append("<h3>Correct Answers: "+this.correct+"</h3>");
            $("#subwrapper").append("<h3>Incorrect Answers: "+this.incorrect+"</h3>");
             $("#subwrapper").append("<h3>Unanswered: "+(questions.length-(this.incorrect+this.correct))+"</h3>");
        }
    }
