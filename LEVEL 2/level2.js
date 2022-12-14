window.onload = function(){

    function checkAnswer2() {
        var answer = document.getElementById("answer2");
        document.getElementById('answer2').hidden = false;
    
    
    }

var L2C1Q1 = document.getElementById("6Q1");

L2C1Q1.onclick = function (){
    checkAnswer2();

    function unhides() {
        document.getElementById('6Q1').hidden = true; 
        document.getElementById('ruelq').hidden = false;  
        document.getElementById('ruel1').hidden = false;
        document.getElementById('ruel2').hidden = false;
        document.getElementById('ruel3').hidden = false;
        document.getElementById('ruel4').hidden = false;
    }
    
    unhides();

    function hide() {
        document.getElementById('ruelq').hidden = true;
        document.getElementById('ruel1').hidden = true;
        document.getElementById('ruel2').hidden = true;
        document.getElementById('ruel3').hidden = true;
        document.getElementById('ruel4').hidden = true;
        document.getElementById('answer2').hidden = true;

    }

    function disabledb() {
        document.getElementById('ruel1').disabled = true;
        document.getElementById('ruel2').disabled = true;
        document.getElementById('ruel3').disabled = true;
        document.getElementById('ruel4').disabled = true;
    
    }

    ruel3.onclick = function () {
        disabledb();
        playerstotal = playerstotal + 100;
    
        answer2.onclick = function () 
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

    ruel2.onclick = function () {
        disabledb();
        playerstotal = playerstotal - 100;
    
        answer2.onclick = function () 
        {
            
            playertotalmessage();
            hide();
            getwrongg();
            Answeredd();
            percentagee();
            detection();
            findPercentageScore(); 
            
        }
    
    }

    ruel1.onclick = function () {
        disabledb();
        playerstotal = playerstotal - 100;
    
        answer2.onclick = function () 
        {
            
            playertotalmessage();
            hide();
            getwrongg();
            Answeredd();
            percentagee();
            detection();
            findPercentageScore(); 
            
        }
    
    }

    ruel4.onclick = function () {
        disabledb();
        playerstotal = playerstotal - 100;
    
        answer2.onclick = function () 
        {
            
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