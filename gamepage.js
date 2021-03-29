player_name_1 = localStorage.getItem("player_1_value")
player_name_2 = localStorage.getItem("player_2_value")

player_1_score = 0;
player_2_score = 0;


document.getElementById("player_1_name").innerHTML = player_name_1 + " : "
document.getElementById("player_2_name").innerHTML = player_name_2 + " : "


document.getElementById("player_1_score").innerHTML = 0;
document.getElementById("player_2_score").innerHTML = 0; 

document.getElementById("player_question").innerHTML = "Question turn -" + player_name_1;
document.getElementById("player_answer").innerHTML = "Answer turn -" + player_name_2;



