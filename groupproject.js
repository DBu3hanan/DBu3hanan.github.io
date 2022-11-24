

const PlayersData= [];
PlayersData2= [];
PlayersData3= [];
const  allPlayersdata = [];


function register(){
    //validateForm();
     
        event.preventDefault(); //Prevents form from refreshing on submiting   

    Fname = document.getElementById("fname").value;
    Lname = document.getElementById("lname").value;
    DOfB = document.getElementById("DOB").value;
    Gender = document.getElementById("gender").value;

   
    const PlayersData= [Fname + " "+ Lname+ " "+ DOfB+ " "+ Gender]; //passes data into array
    PlayersData2= [Fname + " "+ Lname]; //passes data from array into textarea
    

    // document.getElementById("demo").innerHTML = PlayersData; //Prints data from array
    
    document.getElementById("playername").innerHTML = PlayersData2;
   
   

    
    buttoncontrols();
   
    
    
} 

 


function buttoncontrols(){ 
    //controls buttons and inputs on the form
    document.getElementById("submitbutton").disabled = true;
    document.getElementById("play").disabled = false;
    document.getElementById("endgame").disabled = false;
    document.getElementById("Instructions").disabled = false;

    //controls inputs on the form
    document.getElementById("fname").disabled = true;
    document.getElementById("lname").disabled = true;
  
    document.getElementById("DOB").disabled = true;
    document.getElementById( "gender").disabled = true;
    document.getElementById( "gender2").disabled = true;


    
}

function playGame(){
    document.getElementById("jeopardy").hidden = false;
    document.getElementById("form").hidden = true;
    document.getElementById("instructions").hidden = true;
    
 }

 function playGametest(){
    document.getElementById("jeopardy").hidden = true;
    document.getElementById("form").hidden = false;
    document.getElementById("instructions").hidden = true;
    
 }


 function instructions(){
    
    document.getElementById("form").hidden = true;
    document.getElementById("instructions").hidden = false;
    
 }

 function instructions2(){
    
    document.getElementById("jeopardy").hidden = true;
    document.getElementById("instructions").hidden = false;
    
 }



 function endgamee(){
    window.open("index.html", "_self");
    
}

function alert(){
    alert("hello");
}





window.onload = function () {


// function endgame() {
//     var end = document.getElementById("end");
//     document.getElementById('end').hidden = false;

//     end.onclick = function () {
//         document.getElementById("jeopardy").hidden = true;
//         document.getElementById("form").hidden = false;
//         document.getElementById("instructions").hidden = true;
//     }
// }
// endgame();

function checkAnswer() {
    var answer = document.getElementById("answer");
    document.getElementById('answer').hidden = false;


}


var tableb = document.getElementsByClassName("tableb"); //element controls all elements with the class name test







function showAll() {


const fname = document.getElementById("fname");
const lname = document.getElementById("lname");
//const username = 
// document.getElementById("showallplayers").textContent = username;


var userinput = document.getElementById("DOB").value;
console.log(userinput);
var dob = new Date(userinput);
var month_diff = Date.now() - dob.getTime();
//convert the calculated difference in date format  
var age_dt = new Date(month_diff);
//extract year from date      
var year = age_dt.getUTCFullYear();
//now calculate the age of the user  
var age = Math.abs(year - 1970);


allPlayersdata.push(document.getElementById("fname").value);
allPlayersdata.push(document.getElementById("lname").value);
allPlayersdata.push(userinput.innerHTML = age + " years old")

var textarea = document.getElementById("showallplayers");
textarea.value = data.join(",");

}



var element = document.getElementsByClassName("test"); //element controls all elements with the class name test


function timer() {
var timeleft = 5;
var downloadTimer = setInterval(function () {
    if (timeleft <= 0) {

        clearInterval(downloadTimer);
        document.getElementById('countdown').innerHTML = 0;

        // for (var x = 0; x < element.length; x++) {
        //     element[x].hidden = true;
        // }

    } else {
        document.getElementById('countdown').innerHTML = timeleft;
    }
    timeleft -= 1;
}, 1000);

}




var getright = 0;
var getwrong = 0;
var answered = 0;
var percentage = 0;

document.getElementById("questionsamount").innerHTML = getright;
document.getElementById("answered").innerHTML = answered;
document.getElementById("wrong").innerHTML = getwrong;
document.getElementById("Percentage").innerHTML = percentage;


var playerstotal = 100;
document.getElementById("playertotal").innerHTML = playerstotal;



function detection() { //Used to terminate game when all options are selected

if (answered == 25){
    alert("Game is Finishd");
    document.getElementById("jeopardy").hidden = true;
    document.getElementById("form").hidden = false;
    
}

}



var C1Q1 = document.getElementById("1Q1");
var C1Q2 = document.getElementById("1Q2");
var C1Q3 = document.getElementById("1Q3");
var C1Q4 = document.getElementById("1Q4");
var C1Q5 = document.getElementById("1Q5");

var C2Q1 = document.getElementById("2Q1");
var C2Q2 = document.getElementById("2Q2");
var C2Q3 = document.getElementById("2Q3");
var C2Q4 = document.getElementById("2Q4");
var C2Q5 = document.getElementById("2Q5");

var C3Q1 = document.getElementById("3Q1");
var C3Q2 = document.getElementById("3Q2");
var C3Q3 = document.getElementById("3Q3");
var C3Q4 = document.getElementById("3Q4");
var C3Q5 = document.getElementById("3Q5");

var C4Q1 = document.getElementById("4Q1");
var C4Q2 = document.getElementById("4Q2");
var C4Q3 = document.getElementById("4Q3");
var C4Q4 = document.getElementById("4Q4");
var C4Q5 = document.getElementById("4Q5");

var C5Q1 = document.getElementById("5Q1");
var C5Q2 = document.getElementById("5Q2");
var C5Q3 = document.getElementById("5Q3");
var C5Q4 = document.getElementById("5Q4");
var C5Q5 = document.getElementById("5Q5");


//these functions display to the users the status of the game
function getrightt() { //Increments when player gets question right
getright++;
document.getElementById("questionsamount").innerHTML = getright;
}
function getwrongg() { //Increments when player gets question wrong
getwrong++;
document.getElementById("wrong").innerHTML = getwrong;
}

function Answeredd() { //Increments when player answers any questions at all
answered++;
document.getElementById("answered").innerHTML = answered;
}

function percentagee() { 

document.getElementById("questionsamount").innerHTML = getright;
document.getElementById("answered").innerHTML = answered;

percentage = Math.round(getright / answered * 100);
document.getElementById("Percentage").innerHTML = percentage;


}




function playertotalmessage() { //displays to user how much points they have
document.getElementById("playertotal").innerHTML = playerstotal;
}



function playertotalmessage() { //displays to user how much points they have
document.getElementById("playertotal").innerHTML = playerstotal;
}





function findPercentageScore(){///displays  user name and percentage on form 

    PlayersData3 = ["FirstName:" + Fname + "\n"+ "LastName:" + Lname
     +"\n"+ "Right Answers:"+ getright + "\n"+
     "Wrong Answers:"+ getwrong + "\n" + 
     "Percentage:" + percentage + "%" + "\n" +
     "Points:" + playerstotal + "\n" +
    "Date Played:" + Date()];
    document.getElementById("showpercentage").innerHTML = PlayersData3;
}

function restart() {
    //getright--;
    
    var playagain = document.getElementById("playagain");
    document.getElementById('playagain').hidden = false;

    playagain.onclick = function () {
        for (var x = 0; x < tableb.length; x++) {
            tableb[x].hidden = false;

            getright = 0;
            getwrong = 0;
            answered = 0;
            percentage = 0;
            playerstotal = 100;

            document.getElementById("questionsamount").innerHTML = getright;
            document.getElementById("wrong").innerHTML = getwrong;
            document.getElementById("answered").innerHTML = answered;
            document.getElementById("Percentage").innerHTML = percentage;
            document.getElementById("playertotal").innerHTML = playerstotal;
        }


    }

}

function controls(){
        hide();
        playertotalmessage();
        getrightt();
        Answeredd();
        percentagee();
        detection();
        findPercentageScore();
}




//CATEGORY JAMAICAN HISTORY QUESTION 100
C1Q1.onclick = function () //category 1 question 1
{
restart(); //shows the play again button
checkAnswer(); //shows answer button
//timer(); //brings up timer



function unhides() {
    document.getElementById('1Q1').hidden = true; //hides question button
    document.getElementById('parishq').hidden = false;  //hides the questions and answers are covered
    document.getElementById('parish1').hidden = false;
    document.getElementById('parish2').hidden = false;
    document.getElementById('parish3').hidden = false;
    document.getElementById('parish4').hidden = false;
}

unhides();


function hide() {
    document.getElementById('parishq').hidden = true;
    document.getElementById('parish1').hidden = true;
    document.getElementById('parish2').hidden = true;
    document.getElementById('parish3').hidden = true;
    document.getElementById('parish4').hidden = true;
    document.getElementById('answer').hidden = true;

}

function disabledb() {
    document.getElementById('parish1').disabled = true;
    document.getElementById('parish2').disabled = true;
    document.getElementById('parish3').disabled = true;
    document.getElementById('parish4').disabled = true;

}

parish1.onclick = function () {
    disabledb();
    playerstotal = playerstotal + 100;

    answer.onclick = function () //answer
    {
        
        playertotalmessage();
        hide();
        getrightt();
        Answeredd();
        percentagee();
        detection();
        findPercentageScore(); 
        
    }

}

parish2.onclick = function () {
    disabledb();

    playerstotal = playerstotal - 100;
    answer.onclick = function () {
        playertotalmessage();
        hide();
        getwrongg();
        Answeredd();
        percentagee();
        detection();
        findPercentageScore();
    }
}

parish3.onclick = function () {
    disabledb();


    playerstotal = playerstotal - 100;
    answer.onclick = function () {
        playertotalmessage();
        hide();
        getwrongg();
        Answeredd();
        percentagee();
        detection();
        findPercentageScore();
    }
}

parish4.onclick = function () {
    disabledb();
    getwrong++;
    playerstotal = playerstotal - 100;
    answer.onclick = function () {
        playertotalmessage();
        hide();
        getwrongg();
        Answeredd();
        percentagee();
        detection();
        findPercentageScore();
    }
}




        
}

//CATEGORY JAMAICAN HISTORY QUESTION 200
C1Q2.onclick = function () {
restart();
checkAnswer();
//timer();


function playertotalmessage() { //displays to user how much points they have
    document.getElementById("playertotal").innerHTML = playerstotal;
}


document.getElementById('1Q2').hidden = true;
document.getElementById('indeq').hidden = false;
document.getElementById('indeq1').hidden = false;
document.getElementById('indeq2').hidden = false;

function hide() {
    document.getElementById('indeq').hidden = true;
    document.getElementById('indeq1').hidden = true;
    document.getElementById('indeq2').hidden = true;
    document.getElementById('answer').hidden = true;
    document.getElementById('countdown').hidden = true;
}

function disabledb() {
    document.getElementById('indeq2').disabled = true;
    document.getElementById('indeq1').disabled = true;
}

indeq2.onclick = function () { //answer
    playerstotal = playerstotal + 200;
    disabledb();
    answer.onclick = function () {
        hide();
        playertotalmessage();
        getrightt();
        Answeredd();
        percentagee();
        detection();
        findPercentageScore();

    }
}
indeq1.onclick = function () {
    playerstotal = playerstotal - 200;
    disabledb();
    answer.onclick = function () {
        hide();
        playertotalmessage();
        getwrongg();
        Answeredd();
        percentagee();
        detection();
        findPercentageScore();
    }
}

}

//CATEGORY JAMAICAN HISTORY QUESTION 300
C1Q3.onclick = function () {
restart();
checkAnswer();
//timer();

function playertotalmessage() { //displays to user how much points they have
    document.getElementById("playertotal").innerHTML = playerstotal;
}



document.getElementById('1Q3').hidden = true;
document.getElementById('columbusq').hidden = false;
document.getElementById('columbus1').hidden = false;
document.getElementById('columbus2').hidden = false;

function hide() {
    document.getElementById('columbusq').hidden = true;
    document.getElementById('columbus1').hidden = true;
    document.getElementById('columbus2').hidden = true;
    document.getElementById('answer').hidden = true;
    document.getElementById('countdown').hidden = true;
}

function disabledb() {
    document.getElementById('columbus1').disabled = true;
    document.getElementById('columbus2').disabled = true;

}

columbus1.onclick = function () {
    playerstotal = playerstotal + 300;
    document.getElementById('columbus1').disabled = true;
    disabledb();
    answer.onclick = function () {
        hide();
        playertotalmessage();
        getrightt();
        Answeredd();
        percentagee();
        findPercentageScore();
    }

}

columbus2.onclick = function () {
    document.getElementById('columbus2').disabled = true;
    disabledb();
    playerstotal = playerstotal - 300;
    answer.onclick = function () {
        playertotalmessage();
        hide();
        getwrongg();
        Answeredd();
        percentagee();
        findPercentageScore();
    }
}
}

//CATEGORY JAMAICAN HISTORY QUESTION 400
C1Q4.onclick = function () {
restart();
checkAnswer();
//timer();

function playertotalmessage() { //displays to user how much points they have
    document.getElementById("playertotal").innerHTML = playerstotal;
}

document.getElementById('1Q4').hidden = true;
document.getElementById('garveyq').hidden = false;
document.getElementById('garvey1').hidden = false;
document.getElementById('garvey2').hidden = false;
document.getElementById('garvey3').hidden = false;

function hide() {
    document.getElementById('garveyq').hidden = true;
    document.getElementById('garvey1').hidden = true;
    document.getElementById('garvey2').hidden = true;
    document.getElementById('garvey3').hidden = true;
    document.getElementById('answer').hidden = true;
    document.getElementById('countdown').hidden = true;

}

function disabledb() {
    document.getElementById('garvey1').disabled = true;
    document.getElementById('garvey2').disabled = true;
    document.getElementById('garvey3').disabled = true;
}


garvey2.onclick = function () {
    playerstotal = playerstotal + 400;
    document.getElementById('garvey2').disabled = true;
    disabledb();

    answer.onclick = function () {
        playerstotal = playerstotal - 400;
        playertotalmessage();
        hide();
        getrightt();
        Answeredd();
        percentagee();
        findPercentageScore();
    }
}
garvey1.onclick = function () {
    document.getElementById('garvey1').disabled = true;
    disabledb();
    playerstotal = playerstotal - 400;
    answer.onclick = function () {
        playertotalmessage();
        hide();
        getwrongg();
        Answeredd();
        percentagee();
        findPercentageScore();
    }

}
garvey3.onclick = function () {
    document.getElementById('garvey3').disabled = true;
    disabledb();
    playerstotal = playerstotal - 400;
    answer.onclick = function () {
        playertotalmessage();
        hide();
        getwrongg();
        Answeredd();
        percentagee();
        findPercentageScore();
    }
}

}

//CATEGORY JAMAICAN HISTORY QUESTION 500
C1Q5.onclick = function () {
restart();
checkAnswer();
//timer();

function playertotalmessage() { //displays to user how much points they have
    document.getElementById("playertotal").innerHTML = playerstotal;
}


document.getElementById('1Q5').hidden = true;
document.getElementById('beachq').hidden = false;
document.getElementById('beach1').hidden = false;
document.getElementById('beach2').hidden = false;
document.getElementById('beach3').hidden = false;

function hide() {
    document.getElementById('beachq').hidden = true;
    document.getElementById('beach1').hidden = true;
    document.getElementById('beach2').hidden = true;
    document.getElementById('beach3').hidden = true;
    document.getElementById('answer').hidden = true;
    document.getElementById('countdown').hidden = true;
}

function disabledb() {
    document.getElementById('beach1').disabled = true;
    document.getElementById('beach2').disabled = true;
    document.getElementById('beach3').disabled = true;

}

beach3.onclick = function () {
    playerstotal = playerstotal + 500;
    document.getElementById('beach3').disabled = true;
    disabledb();
    answer.onclick = function () {
        playertotalmessage();
        hide();
        getrightt();
        Answeredd();
        percentagee();
        findPercentageScore();

    }
}
beach1.onclick = function () {
    document.getElementById('beach1').disabled = true;
    disabledb();
    playerstotal = playerstotal - 500;
    answer.onclick = function () {
        playertotalmessage();
        hide();
        getwrongg();
        Answeredd();
        percentagee();
        findPercentageScore();
    }
}
beach2.onclick = function () {
    document.getElementById('beach2').disabled = true;
    disabledb();
    playerstotal = playerstotal - 500;
    answer.onclick = function () {
        playertotalmessage();
        hide();
        getwrongg();
        Answeredd();
        percentagee();
        findPercentageScore();
    }
}

}





//CATEGORY 2 JAMAICAN Food QUESTION 100
C2Q1.onclick = function () //category 2 question 1
{
   
restart(); //shows the play again button
checkAnswer(); //shows answer button

var foodq = document.getElementById('foodq'); //Ackee can be classified as a?
var food1 = document.getElementById('food1'); //Vegetable
var food2 = document.getElementById('food2');//Fruit

document.getElementById('2Q1').hidden = true; //hides question button
document.getElementById('foodq').hidden = false;  //hides the questions and answers are covered
document.getElementById('food1').hidden = false;
document.getElementById('food2').hidden = false;

function hide() {
    document.getElementById('foodq').hidden = true;
    document.getElementById('food1').hidden = true;
    document.getElementById('food2').hidden = true;
    document.getElementById('answer').hidden = true;


}

function disabledb() {
    document.getElementById('food1').disabled = true;
    document.getElementById('food2').disabled = true;

}

food1.onclick = function () {
    disabledb();
    document.getElementById('food1').disabled = true;
    playerstotal = playerstotal - 100;
    answer.onclick = function () {

        hide();
        playertotalmessage();
        getwrongg();
        Answeredd();
        percentagee();
        detection();
        findPercentageScore();

    }

}

food2.onclick = function () { //FIXME
    disabledb();
    document.getElementById('food2').disabled = true;
    playerstotal = playerstotal + 100;
    answer.onclick = function () {
        playertotalmessage();
        hide();
        getrightt();
        Answeredd();
        percentagee();
        detection();
        findPercentageScore();
    }
}


}



C2Q2.onclick = function () //category 2 question 2
{
restart(); //shows the play again button
checkAnswer(); //shows answer button

var soupq = document.getElementById('soupq');
var soup1 = document.getElementById('soup1');
var soup2 = document.getElementById('soup2');

document.getElementById('2Q2').hidden = true; //hides question button
document.getElementById('soupq').hidden = false;  //hides the questions and answers are covered
document.getElementById('soup1').hidden = false;
document.getElementById('soup2').hidden = false;

function hide() {
    document.getElementById('soupq').hidden = true;
    document.getElementById('soup1').hidden = true;
    document.getElementById('soup2').hidden = true;
    document.getElementById('answer').hidden = true;

}

function disabledb() {
    document.getElementById('soup1').disabled = true;
    document.getElementById('soup2').disabled = true;

}

soup1.onclick = function () {
    disabledb();
    document.getElementById('soup1').disabled = true;
    playerstotal = playerstotal + 200;
    answer.onclick = function () {
        hide();
        playertotalmessage();
        getrightt();
        Answeredd();
        percentagee();
        detection();
        findPercentageScore();

    }

}

soup2.onclick = function () { //FIXME
    disabledb();
    playerstotal = playerstotal - 200;
    document.getElementById('soup2').disabled = true;
    answer.onclick = function () {
        playertotalmessage();
        hide();
        getwrongg();
        Answeredd();
        percentagee();
        detection();
        findPercentageScore();
    }
}


}


C2Q3.onclick = function () //category 2 question 3
{
restart(); //shows the play again button
checkAnswer(); //shows answer button

var dipq = document.getElementById('dipq');
var dip1 = document.getElementById('dip1');
var dip2 = document.getElementById('dip2');

document.getElementById('2Q3').hidden = true; //hides question button
document.getElementById('dipq').hidden = false;  //hides the questions and answers are covered
document.getElementById('dip1').hidden = false;
document.getElementById('dip2').hidden = false;

function hide() {
    document.getElementById('dipq').hidden = true;
    document.getElementById('dip1').hidden = true;
    document.getElementById('dip2').hidden = true;
    document.getElementById('answer').hidden = true;

}

function disabledb() {
    document.getElementById('dip1').disabled = true;
    document.getElementById('dip2').disabled = true;

}

dip1.onclick = function () {
    disabledb();
    document.getElementById('dip1').disabled = true;
    playerstotal = playerstotal + 300;
    answer.onclick = function () {

        hide();
        playertotalmessage();
        getrightt();
        Answeredd();
        percentagee();
        detection();
        findPercentageScore();
        

    }

}

dip2.onclick = function () { //FIXME
    disabledb();
    document.getElementById('dip2').disabled = true;
    playerstotal = playerstotal - 300;
    answer.onclick = function () {
        playertotalmessage();
        hide();
        getwrongg();
        Answeredd();
        percentagee();
        detection();
        findPercentageScore();
    }
}


}


C2Q4.onclick = function () //category 2 question 4
{
restart(); //shows the play again button
checkAnswer(); //shows answer button

var duckq = document.getElementById('duckq');
var duck1 = document.getElementById('duck1');
var duck2 = document.getElementById('duck2');

document.getElementById('2Q4').hidden = true; //hides question button
document.getElementById('duckq').hidden = false;  //hides the questions and answers are covered
document.getElementById('duck1').hidden = false;
document.getElementById('duck2').hidden = false;

function hide() {
    document.getElementById('duckq').hidden = true;
    document.getElementById('duck1').hidden = true;
    document.getElementById('duck2').hidden = true;
    document.getElementById('answer').hidden = true;

}

function disabledb() {
    document.getElementById('duck1').disabled = true;
    document.getElementById('duck2').disabled = true;

}

duck1.onclick = function () {
    disabledb();
    document.getElementById('duck1').disabled = true;
    playerstotal = playerstotal + 400;
    answer.onclick = function () {

        hide();
        playertotalmessage();
        getrightt();
        Answeredd();
        percentagee();
        detection();
        findPercentageScore();

    }

}

duck2.onclick = function () { //FIXME
    disabledb();
    document.getElementById('duck2').disabled = true;
    playerstotal = playerstotal - 400;
    answer.onclick = function () {
        playertotalmessage();
        hide();
        getwrongg();
        Answeredd();
        percentagee();
        detection();
        findPercentageScore();
    }
}


}

C2Q5.onclick = function () //category 2 question 5
{
restart(); //shows the play again button
checkAnswer(); //shows answer button

var stampq = document.getElementById('stampq');
var stamp1 = document.getElementById('stamp1');
var stamp2 = document.getElementById('stamp2');

document.getElementById('2Q5').hidden = true; //hides question button
document.getElementById('stampq').hidden = false;  //hides the questions and answers are covered
document.getElementById('stamp1').hidden = false;
document.getElementById('stamp2').hidden = false;

function hide() {
    document.getElementById('stampq').hidden = true;
    document.getElementById('stamp1').hidden = true;
    document.getElementById('stamp2').hidden = true;
    document.getElementById('answer').hidden = true;

}

function disabledb() {
    document.getElementById('stamp1').disabled = true;
    document.getElementById('stamp2').disabled = true;

}

stamp1.onclick = function () {
    disabledb();
    document.getElementById('stamp1').disabled = true;
    playerstotal = playerstotal + 500;
    answer.onclick = function () {

        hide();
        playertotalmessage();
        getrightt();
        Answeredd();
        percentagee();
        detection();
        findPercentageScore();

    }

}

stamp2.onclick = function () { //FIXME
    disabledb();
    document.getElementById('stamp2').disabled = true;
    playerstotal = playerstotal - 500;
    answer.onclick = function () {
        hide();
        playertotalmessage();
        getrightt();
        Answeredd();
        percentagee();
        detection();
        findPercentageScore();
    }
}


}







//CATEGORY JAMAICAN SPORTS QUESTION 100
C3Q1.onclick = function () //category 3 question 1
{
restart(); //shows the play again button
checkAnswer(); //shows answer button




var winner = document.getElementById('winner'); //Who has wpn the UEFA CHAMPIONS LEAGUE the most
var winner1 = document.getElementById('winner1'); //AC Milan
var winner2 = document.getElementById('winner2');//Barcelona
var winner3 = document.getElementById('winner3'); //REAL Madrid


document.getElementById('3Q1').hidden = true; //hides question button
document.getElementById('winner').hidden = false;  //hides the questions and answers are covered
document.getElementById('winner1').hidden = false;
document.getElementById('winner2').hidden = false;
document.getElementById('winner3').hidden = false;


function hide() {
    document.getElementById('winner').hidden = true;
    document.getElementById('winner1').hidden = true;
    document.getElementById('winner2').hidden = true;
    document.getElementById('winner3').hidden = true;
    document.getElementById('answer').hidden = true;
}

function disabledb() {
    document.getElementById('winner1').disabled = true;
    document.getElementById('winner2').disabled = true;
    document.getElementById('winner3').disabled = true;
}

winner3.onclick = function () {
    disabledb();
    document.getElementById('winner3').disabled = true;
    playerstotal = playerstotal + 100;
    answer.onclick = function () {

        hide();
        playertotalmessage();
        getrightt();
        Answeredd();
        percentagee();
        detection();
        findPercentageScore();
    }

}

winner2.onclick = function () { //FIXME
    disabledb();
    document.getElementById('winner2').disabled = true;
    playerstotal = playerstotal - 100;
    answer.onclick = function () {
        playertotalmessage();
        hide();
        getwrongg();
        Answeredd();
        percentagee();
        detection();
        findPercentageScore();
    }


}

winner1.onclick = function () { //FIXME
    disabledb();
    document.getElementById('winner1').disabled = true;
    playerstotal = playerstotal - 100;
    answer.onclick = function () {
        hide();
        getwrongg();
        Answeredd();
        percentagee();
        playertotalmessage();
        findPercentageScore();

    }
}
}



//CATEGORY JAMAICAN HISTORY QUESTION 200
C3Q2.onclick = function () {
restart();
checkAnswer();

var schoolboy = document.getElementById('schoolboy'); //Who has won the ISSA Manning Cup the most?//
var schoolboy1 = document.getElementById('schoolboy1');
var schoolboy2 = document.getElementById('schoolboy2');
var schoolboy3 = document.getElementById('schoolboy3');

document.getElementById('3Q2').hidden = true;
document.getElementById('schoolboy').hidden = false;
document.getElementById('schoolboy1').hidden = false;
document.getElementById('schoolboy2').hidden = false;
document.getElementById('schoolboy3').hidden = false;


function disabledb() {
    document.getElementById('schoolboy1').disabled = true;
    document.getElementById('schoolboy2').disabled = true;
    document.getElementById('schoolboy3').disabled = true;

}

function hide() {
    document.getElementById('schoolboy').hidden = true;
    document.getElementById('schoolboy1').hidden = true;
    document.getElementById('schoolboy2').hidden = true;
    document.getElementById('schoolboy3').hidden = true;
    document.getElementById('answer').hidden = true;
}

schoolboy1.onclick = function () {
    playerstotal = playerstotal + 200;
    document.getElementById('schoolboy1').disabled = true;
    disabledb();
    answer.onclick = function () {
        hide();
        playertotalmessage();
        getrightt();
        Answeredd();
        percentagee();
        detection();
        findPercentageScore();
    }
}
schoolboy2.onclick = function () {
    playerstotal = playerstotal - 200;
    document.getElementById('schoolboy2').disabled = true;
    disabledb();
    answer.onclick = function () {
        playertotalmessage();
        hide();
        getwrongg();
        Answeredd();
        percentagee();
        detection();
        findPercentageScore();
    }
}

schoolboy3.onclick = function () {
    playerstotal = playerstotal - 200;
    disabledb();
    document.getElementById('schoolboy3').disabled = true;
    answer.onclick = function () {
        playertotalmessage();
        hide();
        getwrongg();
        Answeredd();
        percentagee();
        detection();
        findPercentageScore();
    }
}

}

//CATEGORY JAMAICAN HISTORY QUESTION 300
C3Q3.onclick = function () {
restart();
checkAnswer();
var fastest = document.getElementById('fastest');
var fastest1 = document.getElementById('fastest1');
var fastest2 = document.getElementById('fastest2');
var fastest3 = document.getElementById('fastest3');


document.getElementById('3Q3').hidden = true;
document.getElementById('fastest').hidden = false;
document.getElementById('fastest1').hidden = false;
document.getElementById('fastest2').hidden = false;
document.getElementById('fastest3').hidden = false;

function disabledb() {
    document.getElementById('fastest1').disabled = true;
    document.getElementById('fastest2').disabled = true;
    document.getElementById('fastest3').disabled = true;

}



function hide() {
    document.getElementById('fastest').hidden = true;
    document.getElementById('fastest1').hidden = true;
    document.getElementById('fastest2').hidden = true;
    document.getElementById('fastest3').hidden = true;
    document.getElementById('answer').hidden = true;
}

fastest2.onclick = function () {
    playerstotal = playerstotal + 300;
    document.getElementById('fastest2').disabled = true;
    disabledb();
    answer.onclick = function () {
        hide();
        document.getElementById("playertotal").innerHTML = playerstotal;
        getrightt();
        Answeredd();
        percentagee();
        playertotalmessage();
        findPercentageScore();
    }

}

fastest1.onclick = function () {
    document.getElementById('fastest1').disabled = true;
    disabledb();
    playerstotal = playerstotal - 300;
    answer.onclick = function () {
        hide();
        getwrongg();
        Answeredd();
        percentagee();
        playertotalmessage();
        findPercentageScore();
    }
}

fastest3.onclick = function () {
    document.getElementById('fastest3').disabled = true;
    disabledb();
    playerstotal = playerstotal - 300;
    answer.onclick = function () {
        hide();
        getwrongg();
        Answeredd();
        percentagee();
        playertotalmessage();
        findPercentageScore();
    }
}
}

//CATEGORY JAMAICAN HISTORY QUESTION 400
C3Q4.onclick = function () {
restart();
checkAnswer();

var cricket = document.getElementById('cricket');
var cricket1 = document.getElementById('cricket1');
var cricket2 = document.getElementById('cricket2');
var cricket3 = document.getElementById('cricket3');

document.getElementById('3Q4').hidden = true;
document.getElementById('cricket').hidden = false;
document.getElementById('cricket1').hidden = false;
document.getElementById('cricket2').hidden = false;
document.getElementById('cricket3').hidden = false;

function disabledb() {
    document.getElementById('cricket1').disabled = true;
    document.getElementById('cricket2').disabled = true;
    document.getElementById('cricket3').disabled = true;

}


function hide() {
    document.getElementById('cricket').hidden = true;
    document.getElementById('cricket1').hidden = true;
    document.getElementById('cricket2').hidden = true;
    document.getElementById('cricket3').hidden = true;
    document.getElementById('answer').hidden = true;
}
cricket1.onclick = function () {
    playerstotal = playerstotal + 400;
    disabledb();
    answer.onclick = function () {
        document.getElementById("playertotal").innerHTML = playerstotal;
        hide();
        getrightt();
        Answeredd();
        percentagee();
        playertotalmessage();
        findPercentageScore();
    }
}
cricket2.onclick = function () {
    document.getElementById('cricket2').disabled = true;
    disabledb();
    playerstotal = playerstotal - 400;
    answer.onclick = function () {
        hide();
        getwrongg();
        Answeredd();
        percentagee();
        playertotalmessage();
        findPercentageScore();
    }

}
cricket3.onclick = function () {
    document.getElementById('cricket3').disabled = true;
    disabledb();
    playerstotal = playerstotal - 400;
    answer.onclick = function () {
        hide();
        getwrongg();
        Answeredd();
        percentagee();
        playertotalmessage();
        findPercentageScore();
    }
}

}
//CATEGORY JAMAICAN HISTORY QUESTION 500
C3Q5.onclick = function () {
restart();
checkAnswer();

var worldcup = document.getElementById('worldcup');
var worldcup1 = document.getElementById('worldcup1');
var worldcup2 = document.getElementById('worldcup2');
var worldcup3 = document.getElementById('worldcup3');

document.getElementById('3Q5').hidden = true;
document.getElementById('worldcup').hidden = false;
document.getElementById('worldcup1').hidden = false;
document.getElementById('worldcup2').hidden = false;
document.getElementById('worldcup3').hidden = false;

function disabledb() {
    document.getElementById('worldcup1').disabled = true;
    document.getElementById('worldcup2').disabled = true;
    document.getElementById('worldcup3').disabled = true;

}


function hide() {
    document.getElementById('worldcup').hidden = true;
    document.getElementById('worldcup1').hidden = true;
    document.getElementById('worldcup2').hidden = true;
    document.getElementById('worldcup3').hidden = true;
    document.getElementById('answer').hidden = true;
}

worldcup2.onclick = function () {
    playerstotal = playerstotal + 500;
    document.getElementById('worldcup2').disabled = true;
    disabledb();
    answer.onclick = function () {
        hide();
        playertotalmessage();
        getrightt();
        Answeredd();
        percentagee();
        detection();
        findPercentageScore();
    }
}
worldcup1.onclick = function () {
    document.getElementById('worldcup1').disabled = true;
    disabledb();
    playerstotal = playerstotal - 500;
    answer.onclick = function () {
        playertotalmessage();
        hide();
        getwrongg();
        Answeredd();
        percentagee();
        detection();
        findPercentageScore();
    }
}
worldcup3.onclick = function () {
    document.getElementById('worldcup3').disabled = true;
    disabledb();
    playerstotal = playerstotal - 500;
    answer.onclick = function () {
        playertotalmessage();
        hide();
        getwrongg();
        Answeredd();
        percentagee();
        detection();
        findPercentageScore();
    }
}

}







C4Q1.onclick = function () {
restart();
checkAnswer();

function playertotalmessage() { //displays to user how much points they have
    document.getElementById("playertotal").innerHTML = playerstotal;
}

var musicq = document.getElementById('musicq');
var music1 = document.getElementById('music1');
var music2 = document.getElementById('music2');
var music3 = document.getElementById('music3');
var music4 = document.getElementById('music4');

document.getElementById('4Q1').hidden = true;
document.getElementById('musicq').hidden = false;
document.getElementById('music1').hidden = false;
document.getElementById('music2').hidden = false;
document.getElementById('music3').hidden = false;
document.getElementById('music4').hidden = false;

function hide() { //Ensures that the question comess off the board
    document.getElementById('musicq').hidden = true;
    document.getElementById('music1').hidden = true;
    document.getElementById('music2').hidden = true;
    document.getElementById('music3').hidden = true;
    document.getElementById('music4').hidden = true;
    document.getElementById('answer').hidden = true;
}

function disabledb() {
    document.getElementById('music1').disabled = true;
    document.getElementById('music2').disabled = true;
    document.getElementById('music3').disabled = true;
    document.getElementById('music4').disabled = true;
}

music1.onclick = function () {
    document.getElementById('music1').disabled = true;
    playerstotal = playerstotal - 100;
    disabledb();
    answer.onclick = function () {
        hide();
        playertotalmessage();
        getwrongg();
        Answeredd();
        percentagee();
        detection();
        findPercentageScore();


    }
}
music2.onclick = function () {
    playerstotal = playerstotal + 100;
    document.getElementById('music2').disabled = true;
    disabledb();
    answer.onclick = function () {
        hide();
        playertotalmessage();
        getrightt();
        Answeredd();
        percentagee();
        findPercentageScore();
    }
}
music3.onclick = function () {
    document.getElementById('music3').disabled = true;
    playerstotal = playerstotal - 100;
    disabledb();
    answer.onclick = function () {
        hide();
        playertotalmessage();
        getwrongg();
        Answeredd();
        percentagee();
        detection();
        findPercentageScore();

    }
}
music4.onclick = function () {
    document.getElementById('music4').disabled = true;
    playerstotal = playerstotal - 100;
    disabledb();
    answer.onclick = function () {
        hide();
        playertotalmessage();
        getwrongg();
        Answeredd();
        percentagee();
        detection();
        findPercentageScore();

    }
}

}


C4Q2.onclick = function () {
restart();
checkAnswer();

function playertotalmessage() { //displays to user how much points they have
    document.getElementById("playertotal").innerHTML = playerstotal;
}
var marleyq = document.getElementById('marleyq');
var marley1 = document.getElementById('marley1');
var marley2 = document.getElementById('marley2');
var marley3 = document.getElementById('marley3');
var marley4 = document.getElementById('marley4');

document.getElementById('4Q2').hidden = true;
document.getElementById('marleyq').hidden = false;
document.getElementById('marley1').hidden = false;
document.getElementById('marley2').hidden = false;
document.getElementById('marley3').hidden = false;
document.getElementById('marley4').hidden = false;

function hide() { //Ensures that the question comess off the board
    document.getElementById('marleyq').hidden = true;
    document.getElementById('marley1').hidden = true;
    document.getElementById('marley2').hidden = true;
    document.getElementById('marley3').hidden = true;
    document.getElementById('marley4').hidden = true;
    document.getElementById('answer').hidden = true;
}

function disabledb() {
    document.getElementById('marley1').disabled = true;
    document.getElementById('marley2').disabled = true;
    document.getElementById('marley3').disabled = true;
    document.getElementById('marley4').disabled = true;

}


marley1.onclick = function () {
    document.getElementById('marley1').disabled = true;
    playerstotal = playerstotal + 100;
    disabledb();
    answer.onclick = function () {
        hide();
        playertotalmessage();
        getwrongg();
        Answeredd();
        percentagee();
        detection();
        findPercentageScore();
    }
}
marley2.onclick = function () {
    playerstotal = playerstotal + 200;
    document.getElementById('marley2').disabled = true;
    disabledb();
    answer.onclick = function () {
        hide();
        playertotalmessage();
        getrightt();
        Answeredd();
        percentagee();
        detection();
        findPercentageScore();
    }
}
marley3.onclick = function () {
    document.getElementById('marley3').disabled = true;
    playerstotal = playerstotal - 200;
    disabledb();
    answer.onclick = function () {
        hide();
        playertotalmessage();
        getwrongg();
        Answeredd();
        percentagee();
        detection();
        findPercentageScore();
    }
}
marley4.onclick = function () {
    document.getElementById('marley4').disabled = true;
    playerstotal = playerstotal - 200;

    answer.onclick = function () {
        hide();
        playertotalmessage();
        getwrongg();
        Answeredd();
        percentagee();
        detection();
        findPercentageScore();
    }
}

}


C4Q3.onclick = function () {
restart();
checkAnswer();


function playertotalmessage() { //displays to user how much points they have
    document.getElementById("playertotal").innerHTML = playerstotal;
}
var reggaeq = document.getElementById('reggaeq');
var reggae1 = document.getElementById('reggae1');
var reggae2 = document.getElementById('reggae2');
var reggae3 = document.getElementById('reggae3');
var reggae4 = document.getElementById('reggae4');

document.getElementById('4Q3').hidden = true;
document.getElementById('reggaeq').hidden = false;
document.getElementById('reggae1').hidden = false;
document.getElementById('reggae2').hidden = false;
document.getElementById('reggae3').hidden = false;
document.getElementById('reggae4').hidden = false;

function hide() {
    document.getElementById('reggaeq').hidden = true;
    document.getElementById('reggae1').hidden = true;
    document.getElementById('reggae2').hidden = true;
    document.getElementById('reggae3').hidden = true;
    document.getElementById('reggae4').hidden = true;
    document.getElementById('answer').hidden = true;
}
function disabledb() {
    document.getElementById('reggae1').disabled = true;
    document.getElementById('reggae2').disabled = true;
    document.getElementById('reggae3').disabled = true;
    document.getElementById('reggae4').disabled = true;

}
reggae1.onclick = function () {
    playerstotal = playerstotal + 300;
    document.getElementById('reggae1').disabled = true;
    disabledb();
    answer.onclick = function () {
        hide();
        playertotalmessage();
        getrightt();
        Answeredd();
        percentagee();
        detection();
        findPercentageScore();
    }
}
reggae2.onclick = function () {
    document.getElementById('reggae2').disabled = true;
    playerstotal = playerstotal - 300;
    disabledb();
    answer.onclick = function () {
        hide();
        playertotalmessage();
        getwrongg();
        Answeredd();
        percentagee();
        detection();
        findPercentageScore();
    }
}
reggae3.onclick = function () {
    document.getElementById('reggae3').disabled = true;
    playerstotal = playerstotal - 300;
    answer.onclick = function () {
        hide();
        playertotalmessage();
        getwrongg();
        Answeredd();
        percentagee();
        detection();
        findPercentageScore();
    }
}
reggae4.onclick = function () {
    document.getElementById('reggae4').disabled = true;
    playerstotal = playerstotal - 300;
    disabledb();
    answer.onclick = function () {
        hide();
        playertotalmessage();
        getwrongg();
        Answeredd();
        percentagee();
        detection();
        findPercentageScore();
    }
}
}


C4Q4.onclick = function () {
restart();
checkAnswer();

function playertotalmessage() { //displays to user how much points they have
    document.getElementById("playertotal").innerHTML = playerstotal;
}
var electricq = document.getElementById('electricq');
var electric1 = document.getElementById('electric1');
var electric2 = document.getElementById('electric2');
var electric3 = document.getElementById('electric3');
var electric4 = document.getElementById('electric4');

document.getElementById('4Q4').hidden = true;
document.getElementById('electricq').hidden = false;
document.getElementById('electric1').hidden = false;
document.getElementById('electric2').hidden = false;
document.getElementById('electric3').hidden = false;
document.getElementById('electric4').hidden = false;

function hide() {
    document.getElementById('electricq').hidden = true;
    document.getElementById('electric1').hidden = true;
    document.getElementById('electric2').hidden = true;
    document.getElementById('electric3').hidden = true;
    document.getElementById('electric4').hidden = true;
    document.getElementById('answer').hidden = true;
}

function disabledb() {
    document.getElementById('electric1').disabled = true;
    document.getElementById('electric2').disabled = true;
    document.getElementById('electric3').disabled = true;
    document.getElementById('electric4').disabled = true;

}

electric1.onclick = function () {
    document.getElementById('electric1').disabled = true;
    playerstotal = playerstotal - 400;
    disabledb();
    answer.onclick = function () {
        hide();
        playertotalmessage();
        getwrongg();
        Answeredd();
        percentagee();
        detection();
        findPercentageScore();
    }
}
electric2.onclick = function () {
    document.getElementById('electric2').disabled = true;
    playerstotal = playerstotal - 400;
    disabledb();
    answer.onclick = function () {
        hide();
        playertotalmessage();
        getwrongg();
        Answeredd();
        percentagee();
        detection();
        findPercentageScore();
    }
}
electric3.onclick = function () {
    document.getElementById('electric3').disabled = true;
    playerstotal = playerstotal - 400;
    disabledb();
    answer.onclick = function () {
        hide();
        playertotalmessage();
        getwrongg();
        Answeredd();
        percentagee();
        detection();
        findPercentageScore();
    }
}
electric4.onclick = function () {
    playerstotal = playerstotal + 400;
    disabledb();
    document.getElementById('electric4').disabled = true;
    answer.onclick = function () {
        hide();
        playertotalmessage();
        getrightt();
        Answeredd();
        percentagee();
        detection();
        findPercentageScore();
    }
}

}

C4Q5.onclick = function () {
restart();
checkAnswer();



var barbieq = document.getElementById('barbieq');
var barbie1 = document.getElementById('barbie1');
var barbie2 = document.getElementById('barbie2');


document.getElementById('4Q5').hidden = true;
document.getElementById('barbieq').hidden = false;
document.getElementById('barbie1').hidden = false;
document.getElementById('barbie2').hidden = false;

function disabled() {
    document.getElementById('barbieq').disabled = true;
    document.getElementById('barbie1').disabled = true;
    document.getElementById('barbie2').disabled = true;
}

function hide() {
    document.getElementById('barbieq').hidden = true;
    document.getElementById('barbie1').hidden = true;
    document.getElementById('barbie2').hidden = true;
    document.getElementById('answer').hidden = true;
}

barbie1.onclick = function () {
    document.getElementById('barbie1').disabled = true;
    playerstotal = playerstotal + 500;
    disabled();
    answer.onclick = function () {
        hide();
        playertotalmessage();
        getrightt();
        Answeredd();
        percentagee();
        detection();
        findPercentageScore();
    }
}
barbie2.onclick = function () {
    playerstotal = playerstotal - 500;
    document.getElementById('barbie2').disabled = true;
    disabled();
    answer.onclick = function () {
        hide();
        playertotalmessage();
        getwrongg();
        Answeredd();
        percentagee();
        detection();
        findPercentageScore();
    }
}

} 

C5Q1.onclick = function () {
    restart();
    checkAnswer();
    // clearAll();
    // showAll();



    function unhides() {
        document.getElementById('5Q1').hidden = true; //hides question button
        document.getElementById('spotifyq').hidden = false;  //hides the questions and answers are covered
        document.getElementById('spotify1').hidden = false;
        document.getElementById('spotify2').hidden = false;
        document.getElementById('spotify3').hidden = false;
    }

    unhides();

    function hide() {
        document.getElementById('spotifyq').hidden = true;
        document.getElementById('spotify1').hidden = true;
        document.getElementById('spotify2').hidden = true;
        document.getElementById('spotify3').hidden = true;
        document.getElementById('answer').hidden = true;

    }

    function disabledb() {

        document.getElementById('spotify1').disabled = true;
        document.getElementById('spotify2').disabled = true;
        document.getElementById('spotify3').disabled = true;

    }
    spotify1.onclick = function () {
        disabledb();
        playerstotal = playerstotal - 100;

        answer.onclick = function () //answer
        {
            hide();
            playertotalmessage();
            getwrongg();
            Answeredd();
            percentagee();
            detection();
            findPercentageScore();


        }

    }

    spotify2.onclick = function () {
        disabledb();

        playerstotal = playerstotal + 100;
        answer.onclick = function () {
            playertotalmessage();
            hide();
         
            getrightt();
            Answeredd();
            percentagee();
            detection();
            findPercentageScore();
        }
    }

    spotify3.onclick = function () {
        disabledb();


        playerstotal = playerstotal - 100;
        answer.onclick = function () {
            playertotalmessage();
            hide();
            getwrongg();
            Answeredd();
            percentagee();
            detection();
            findPercentageScore();
        }
    }

} 

C5Q2.onclick = function () {
    restart();
    checkAnswer();
    // clearAll();
    // showAll();

    function unhides() {
        document.getElementById('5Q2').hidden = true; //hides question button
        document.getElementById('greekq').hidden = false;  //hides the questions and answers are covered
        document.getElementById('greek1').hidden = false;
        document.getElementById('greek2').hidden = false;
        document.getElementById('greek3').hidden = false;
    }

    unhides();

    function hide() {
        document.getElementById('greekq').hidden = true;
        document.getElementById('greek1').hidden = true;
        document.getElementById('greek2').hidden = true;
        document.getElementById('greek3').hidden = true;
        document.getElementById('answer').hidden = true;

    }

    function disabledb() {

        document.getElementById('greek1').disabled = true;
        document.getElementById('greek2').disabled = true;
        document.getElementById('greek3').disabled = true;

    }
    greek2.onclick = function () {
        disabledb();
        playerstotal = playerstotal - 200;

        answer.onclick = function () //answer
        {
            hide();
            playertotalmessage();
            getwrongg();
            Answeredd();
            percentagee();
            detection();
            findPercentageScore();


        }

    }

    greek3.onclick = function () {
        disabledb();

        playerstotal = playerstotal - 200;
        answer.onclick = function () {
            playertotalmessage();
            hide();
            getwrongg();
            Answeredd();
            percentagee();
            detection();
            findPercentageScore();
        }
    }

    greek1.onclick = function () {
        disabledb();


        playerstotal = playerstotal + 200;
        answer.onclick = function () {
            playertotalmessage();
            hide();
            getrightt();
            Answeredd();
            percentagee();
            detection();
            findPercentageScore();
        }
    }
}

C5Q3.onclick = function () 
{
restart(); //shows the play again button
checkAnswer(); //shows answer button
//timer(); //brings up timer



function unhides() {
    document.getElementById('5Q3').hidden = true; //hides question button
    document.getElementById('titanicq').hidden = false;  //hides the questions and answers are covered
    document.getElementById('titanic1').hidden = false;
    document.getElementById('titanic2').hidden = false;
    document.getElementById('titanic3').hidden = false;
}

unhides();


function hide() {
    document.getElementById('titanicq').hidden = true;  
    document.getElementById('titanic1').hidden = true;
    document.getElementById('titanic2').hidden = true;
    document.getElementById('titanic3').hidden = true;
    document.getElementById('answer').hidden = true;

}

function disabledb() {

    document.getElementById('titanic1').disabled = true;
    document.getElementById('titanic2').disabled = true;
    document.getElementById('titanic3').disabled = true;

}

titanic1.onclick = function () {
    disabledb();
    playerstotal = playerstotal - 300;

    answer.onclick = function () //answer
    {
        hide();
        playertotalmessage();
        getwrongg();
        Answeredd();
        percentagee();
        detection();
        findPercentageScore();
        
        
    }

}

titanic2.onclick = function () {
    disabledb();

    playerstotal = playerstotal - 300;
    answer.onclick = function () {
        playertotalmessage();
        hide();
        getwrongg();
        Answeredd();
        percentagee();
        detection();
        findPercentageScore();
    }
}

titanic3.onclick = function () {
    disabledb();


    playerstotal = playerstotal + 300;
    answer.onclick = function () {
        playertotalmessage();
        hide();
        getrightt();
        Answeredd();
        percentagee();
        detection();
        findPercentageScore();
        }
    }
       
}

C5Q4.onclick = function () //category 1 question 1
{
restart(); //shows the play again button
checkAnswer(); //shows answer button
//timer(); //brings up timer



function unhides() {
    document.getElementById('5Q4').hidden = true; //hides question button
    document.getElementById('paperq').hidden = false;  //hides the questions and answers are covered
    document.getElementById('paper1').hidden = false;
    document.getElementById('paper2').hidden = false;
    document.getElementById('paper3').hidden = false;
    document.getElementById('paper4').hidden = false;
}

unhides();


function hide() {
    document.getElementById('paperq').hidden = true;
    document.getElementById('paper1').hidden = true;
    document.getElementById('paper2').hidden = true;
    document.getElementById('paper3').hidden = true;
    document.getElementById('paper4').hidden = true;
    document.getElementById('answer').hidden = true;

}

function disabledb() {
    document.getElementById('paper1').disabled = true;
    document.getElementById('paper2').disabled = true;
    document.getElementById('paper3').disabled = true;
    document.getElementById('paper4').disabled = true;

}

paper2.onclick = function () {
    disabledb();
    playerstotal = playerstotal - 400;

    answer.onclick = function () //answer
    {
        hide();
        playertotalmessage();
        getwrongg();
        Answeredd();
        percentagee();
        detection();
        findPercentageScore();
        
        
    }

}

paper1.onclick = function () {
    disabledb();

    playerstotal = playerstotal + 400;
    answer.onclick = function () {
        playertotalmessage();
        hide();
        getrightt();
        Answeredd();
        percentagee();
        detection();
        findPercentageScore();
    }
}

paper3.onclick = function () {
    disabledb();
    playerstotal = playerstotal - 400;
    answer.onclick = function () {
        playertotalmessage();
        hide();
        getwrongg();
        Answeredd();
        percentagee();
        detection();
        findPercentageScore();
    }
}

paper4.onclick = function () {
    disabledb();
    playerstotal = playerstotal - 400;
    answer.onclick = function () {
        playertotalmessage();
        hide();
        getwrongg();
        Answeredd();
        percentagee();
        detection();
        findPercentageScore();
    }
}




        
}

C5Q5.onclick = function () //category 1 question 1
{
restart(); //shows the play again button
checkAnswer(); //shows answer button
//timer(); //brings up timer



function unhides() {
    document.getElementById('5Q5').hidden = true; //hides question button
    document.getElementById('buildingq').hidden = false;  //hides the questions and answers are covered
    document.getElementById('building1').hidden = false;
    document.getElementById('building2').hidden = false;
    document.getElementById('building3').hidden = false;
    document.getElementById('building4').hidden = false;
}

unhides();


function hide() {
    document.getElementById('buildingq').hidden = true;
    document.getElementById('building1').hidden = true;
    document.getElementById('building2').hidden = true;
    document.getElementById('building3').hidden = true;
    document.getElementById('building4').hidden = true;
    document.getElementById('answer').hidden = true;

}

function disabledb() {
    document.getElementById('building1').disabled = true;
    document.getElementById('building2').disabled = true;
    document.getElementById('building3').disabled = true;
    document.getElementById('building4').disabled = true;

}

building1.onclick = function () {
    disabledb();
    playerstotal = playerstotal - 500;

    answer.onclick = function () //answer
    {
        hide();
        playertotalmessage();
        getwrongg();
        Answeredd();
        percentagee();
        detection();
        findPercentageScore();
        
        
    }

}

building2.onclick = function () {
    disabledb();

    playerstotal = playerstotal + 500;
    answer.onclick = function () {
        playertotalmessage();
        hide();
        getrightt();
        Answeredd();
        percentagee();
        detection();
        findPercentageScore();
    }
}

building3.onclick = function () {
    disabledb();
    playerstotal = playerstotal - 500;
    answer.onclick = function () {
        playertotalmessage();
        hide();
        getwrongg();
        Answeredd();
        percentagee();
        detection();
        findPercentageScore();
    }
}

building4.onclick = function () {
    disabledb();
    playerstotal = playerstotal - 500;
    answer.onclick = function () {
        playertotalmessage();
        hide();
        getwrongg();
        Answeredd();
        percentagee();
        detection();
        findPercentageScore();
    }
}




        
}




}
