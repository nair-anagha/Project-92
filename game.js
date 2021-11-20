player1_name=localStorage.getItem("player1");
player2_name=localStorage.getItem("player2");
player1_score=0;
player2_score=0;
document.getElementById("player1").innerHTML=player1_name+ " : ";
document.getElementById("player2").innerHTML=player2_name+ " : ";


document.getElementById("player1score").innerHTML=player1_score;
document.getElementById("player2score").innerHTML=player2_score;

document.getElementById("playerquestion").innerHTML="question turn - "+player1_name;
document.getElementById("playeranswer").innerHTML="answer turn - "+player2_name;

function send(){
    number1=document.getElementById("Number1").value;
    number2=document.getElementById("Number2").value;
    actualanswer=parseInt(number1)*parseInt(number2);
    questionnumber="<h4>"+number1+"X"+number2+ "</h4>";
    input_box="<br>Answer :<input type='text' id='input_check_box'>";
    check_button="<br><br><button class='btn btn-info' onclick='check()'>check</button>";
    row=questionnumber+input_box+check_button;
    document.getElementById("output").innerHTML=row;
    document.getElementById("Number1").value="";
    document.getElementById("Number2").value="";
}

question_turn="player1";
answer_turn="player2";

function check(){
    get_answer=document.getElementById("input_check_box").value;
    if(get_answer==actualanswer){
        if(answer_turn=="player1"){
            player1_score=player1_score+1;
            document.getElementById("player1score").innerHTML=player1_score;
        }
        else{
            player2_score=player2_score+1;
            document.getElementById("player2score").innerHTML=player2_score;
        }
    }
    if(question_turn=="player1"){
        question_turn="player2";
        document.getElementById("playerquestion").innerHTML="question turn - "+player2_name;
    }
    else{
        question_turn="player1";
        document.getElementById("playerquestion").innerHTML="question turn - "+player2_name;
    }
    if(answer_turn=="player1"){
        answer_turn="player2";
        document.getElementById("playeranswer").innerHTML="answer turn - "+player2_name;
    }
    else{
        answer_turn="player1";
        document.getElementById("playeranswer").innerHTML="answer turn - "+player2_name;
    }
    document.getElementById("output").innerHTML="";
}