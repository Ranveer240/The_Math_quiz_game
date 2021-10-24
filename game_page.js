player1_name=localStorage.getItem("player1");
player2_name=localStorage.getItem("player2");
player1_score=0;
player2_score=0;

document.getElementById("player1_name").innerHTML = player1_name + ":";
document.getElementById("player2_name").innerHTML = player2_name + ":";

document.getElementById("player1_score").innerHTML = player1_score ;
document.getElementById("player2_score").innerHTML = player2_score ;

document.getElementById("player_question").innerHTML = "Question Turn - "  + player1_name;
document.getElementById("player_answer").innerHTML = "Answer Turn - " + player2_name;

function send(){
    number1 = document.getElementById("first_word").value;
    number2 = document.getElementById("second_word").value;
    actual_ans = parseInt(number1) * parseInt(number2);
question_word="<h4 id='word_display'>"+number1+"X"+number2+"</h4>";
input_box= "<br>Answer : <input type='text' id='input_check' >";
check_button="<br><br> <button onclick='check()' class='btn btn-info'>Check</button>";
row = question_word+input_box+check_button;
document.getElementById("output").innerHTML = row;
document.getElementById("first_word").value ="" ;
document.getElementById("second_word").value ="" ;
}

question_turn="player1";
answer_turn="player2";

function check(){
 get_ans=document.getElementById("input_check").value;
 if(get_ans == actual_ans ){

if(answer_turn=="player1"){
 player1_score=player1_score + 1;
 document.getElementById('player1_score').innerHTML = player1_score;
}
else{
    player2_score=player2_score + 1;
    document.getElementById('player2_score').innerHTML = player2_score;
}
 }
    if(question_turn=="player1"){
       question_turn="player2"
        document.getElementById('player_question').innerHTML="Question Turn: "+player2_name;
      
    }
 else{
question_turn="player1";
document.getElementById("player_question").innerHTML="Question Turn: "+player1_name;
 }

 if(answer_turn=="player1"){
     answer_turn="player2";
     document.getElementById('player_answer').innerHTML="Answer Turn:"+player2_name;
 }
 else{
     answer_turn="player1";
     document.getElementById('player_answer').innerHTML="Answer Turn:"+player1_name;
 }
 document.getElementById("output").innerHTML="";
}