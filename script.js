function countDown(){
    // Set the date we're counting down to
   var d=new Date();
   var year=d.getFullYear();
   var date="Dec,24,"+year+",24:00:00";
   document.title="Χριστούγεννα";
   document.getElementById("h1").textContent="Χριστούγεννα Σε:";
   var countDownDate = new Date(date).getTime();
   // Update the count down every 1 second
   var x = setInterval(function() {

  // Get today's date and time
   var now = new Date().getTime();
    if(now>countDownDate){
        date="Dec 31,"+year+" 14:20:00";
		countDownDate = new Date(date).getTime();
        document.title="Πρωτοχρονιά";
        document.getElementById("h1").textContent="Πρωτοχρονιά Σε:";
    }
  // Find the distance between now and the count down date
  var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the element with id="demo"
	document.getElementById("demo").innerHTML = days + " Μέρες " + hours + " Ώρες "+ minutes + " Λεπτά "+ seconds + " Δεύτερα ";
    // If the count down is finished, write some text
    if (distance <= 0) {
        clearInterval(x);
        if(date=="Dec,24,"+year+",24:00:00"){
            document.getElementById("demo").innerHTML = "Χρόνια Πολλά";
        }else{
            document.getElementById("demo").innerHTML = "Καλή Χρονιά "+year;
        }
        setInterval(function(){XroniaPolla()},700);setInterval(function(){XroniaPolla2()},1000);setInterval(function(){XroniaPolla3()},2900);setInterval(function(){XroniaPolla4()},2900);	
    }

    }, 1000);
}
function XroniaPolla(){
	var a=document.getElementById("demo");
	a.style.color='yellow';
	var b=document.getElementById("h1");
	b.style.color='red';
}
function XroniaPolla2(){
	var a=document.getElementById("demo");
		a.style.color='red';
	var b=document.getElementById("h1");
	b.style.color='gold';
	}
	function XroniaPolla3(){
	var a=document.getElementById("demo");
		a.style.color='green';
	var b=document.getElementById("h1");
	b.style.color='blue';
	}
	function XroniaPolla4(){
	var a=document.getElementById("demo");
		a.style.color='orange';
	var b=document.getElementById("h1");
	b.style.color='cyan';
	}

    countDown();


