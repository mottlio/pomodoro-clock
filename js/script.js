$(document).ready(function() {
  
    
    
    var start = new Date().getTime();
    
    
    setInterval(function(){
        var now = new Date().getTime();
        var diff = now - start;
        var hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((diff % (1000 * 60)) / 1000);

        var time = "Time elapsed: " + hours + ":" + minutes + ":" + seconds; 
        $(".time").text(time);
        console.log(time);

    }, 1000);
    
    
  });