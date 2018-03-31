$(document).ready(function() {
  
    
    
    var start = new Date().getTime();
    var tilt = 0;
    var bottom = 14;
    var top = 86;
    var rotate = 0;
    var coffee_bottom = 85; //until 86
    var stopped = 1;
    var work = setInterval(countdown, 1000);
    var pause = setInterval(countdownPause, 1000);
    var min_wor = 25;
    var sec_wor = 0;
    var min_br = 5;
    var sec_br = 30;
    var time_wor = 0;
    var time_br = 0;
    var min_wor_set = 0;
    var sec_wor_set = 0;
    var min_br_set = 0;
    var sec_br_set = 0;
    var br = 0;
    var grains = 0;
    var beans = 0;
    var wav = 'https://s3-ap-southeast-1.amazonaws.com/mottlmedia/Hand-bell-sound.mp3';
    var audio = new Audio(wav);

    clearInterval(work);
    clearInterval(pause);

    
    var countdownPause = function(){
        time_br -= 1;

        min_br = Math.floor(time_br / 60);
        sec_br = time_br - min_br*60;
        $("#min_br").html(min_br);
        $("#sec_br").html(sec_br);
        
        
        var time_remaining = min_br + " minutes "+sec_br+" seconds ";

        
        //CLOCK 

       tilt += 6;

       var turn = "rotate("+tilt+"deg)";
       $(".pointer").css("transform", turn);
        
        
        //COFFEE CUP 

        coffee_bottom -= beans;

        var level = "linear-gradient(to top, #292716 "+coffee_bottom+"%,  white 1%)";
        $(".fa-coffee").css("background-image", level); 

        
        if(time_br <= 4){
            audio.play();
            $(".motto__break").css("opacity", "0");
            
        } 
        
        if (time_br <= 0){
            $("#min_br").html(0);
            $("#sec_br").html(0);
            $(".start").trigger("click");
            startWork();
        }

    };

    var startWork = function(){
            br = 0;
            $(".motto__work").css("opacity", "1");
            $(".fa-hourglass").trigger("click"); 
            $(".minutes").css("color", "#5B5129");
            $(".seconds").css("color", "#5B5129");
            $("body").css("background-image", "url('https://s3-ap-southeast-1.amazonaws.com/mottlmedia/jeshoots-com-219386-unsplash.jpg')");
            $(".coffee").css("border", "none");
            $(".hourglass").css("border", "12px solid white");
            $(".fa-step-backward").trigger("click");
            $(".start").trigger("click");
    };

    var startBreak = function(){
            br = 1;
            $(".motto__break").css("opacity", "1");
            $(".fa-step-backward").trigger("click");
            $(".fa-coffee").trigger("click");
            $(".minutes").css("color", "white");
            $(".seconds").css("color", "white");
            $("body").css("background-image", "url('https://s3-ap-southeast-1.amazonaws.com/mottlmedia/daria-nepriakhina-6035-unsplash.jpg')");
            $(".coffee").css("border", "12px solid white");
            $(".hourglass").css("border", "none");
            $(".start").trigger("click");
    }
       
    var countdown = function(){

        time_wor -= 1;

        min_wor = Math.floor(time_wor / 60);
        sec_wor = time_wor - min_wor*60;
        $("#min_wor").html(min_wor);
        $("#sec_wor").html(sec_wor);
        
        if(time_wor <= 5){
            audio.play();
            $(".motto__work").css("opacity", "0");
        }
        
        
        if (time_wor <= 0){
            $("#min_wor").html(0);
            $("#sec_wor").html(0);
            $(".start").trigger("click");
            
            startBreak();

        }

        //CLOCK

       tilt += 6;
       var turn = "rotate("+tilt+"deg)";
        $(".pointer").css("transform", turn);

        
        //HOURGLASS
        
        bottom += grains;
        top -= grains;

        var sand = "linear-gradient(to top, #3A2713 12%, #3A2713 "+bottom+"%, white 13%, white 50%, #3A2713 50%, #3A2713 "+top+"%, white 50%)";
        $(".fa-hourglass").css("background-image", sand); 

    };

    
   $("#pmw").click(function(){
        min_wor += 1;
        $("#min_wor").html(min_wor);

   });
   
   $("#mmw").click(function(){
        min_wor -= 1;
        if(min_wor < 0){
            min_wor = 0;
        }
        $("#min_wor").html(min_wor);

   }); 

   $("#psw").click(function(){
        sec_wor += 1;
        if(sec_wor > 59){
            sec_wor = 0;
            min_wor += 1;
            $("#min_wor").html(min_wor);
        }
        $("#sec_wor").html(sec_wor);
   }); 

   $("#msw").click(function(){
       
    if ((sec_wor <= 0) && (min_wor > 0)){
        sec_wor = 59;
        min_wor -= 1;
        $("#min_wor").html(min_wor);
        $("#sec_wor").html(sec_wor);
    } else if((sec_wor <= 0)&&(min_wor <= 0)){
        sec_wor = 0;
        min_wor = 0;
        $("#sec_wor").html(sec_wor);
    } else {
        sec_wor -= 1;
        $("#sec_wor").html(sec_wor);
    }

   }); 

   $("#pmb").click(function(){
        min_br += 1;
        $("#min_br").html(min_br);
   }); 

   $("#mmb").click(function(){
        min_br -= 1;
        if(min_br < 0){
            min_br = 0;
        }
        $("#min_br").html(min_br);

   }); 

   $("#psb").click(function(){
       sec_br += 1;

       if(sec_br > 59){
        sec_br = 0;
        min_br += 1;
        $("#min_br").html(min_br);
    }

       $("#sec_br").html(sec_br);

   }); 

   $("#msb").click(function(){
       
       if ((sec_br <= 0) && (min_br > 0)){
           sec_br = 59;
           min_br -= 1;
           $("#min_br").html(min_br);
           $("#sec_br").html(sec_br);
       } else if((sec_br <= 0)&&(min_br <= 0)){
           sec_br = 0;
           min_br = 0;
           $("#sec_br").html(sec_br);
       } else {
           sec_br -= 1;
           $("#sec_br").html(sec_br);
       }
       
   }); 

    
   $(".fa-cog").click(function(){
        $(".plus_min").css("opacity", "1"); 
        $(".minus_min").css("opacity", "1"); 
        $(".plus_sec").css("opacity", "1"); 
        $(".minus_sec").css("opacity", "1"); 
    
   });

   
   
   $(".fa-step-backward").click(function(){
       min_wor = min_wor_set;
       sec_wor = sec_wor_set;
       min_br = min_br_set;
       sec_br = sec_br_set;

       $("#min_wor").html(min_wor);
       $("#sec_wor").html(sec_wor);
       $("#min_br").html(min_br);
       $("#sec_br").html(sec_br);

   });

   $(".fa-undo").click(function(){
    location.reload();
    tilt = 0;
       var turn = "rotate("+tilt+"deg)";
       $(".pointer").css("transform", turn);
    }); 


$(".fa-pause").click(function(){
    $(".fa-play").css("margin-top", "130%");
    $(".start").css("background-image", "linear-gradient(to bottom right, #60F291, #33CC66)"); //green gradient
   });



$(".fa-play").click(function(){

        $(".plus_min").css("opacity", "0"); 
        $(".minus_min").css("opacity", "0"); 
        $(".plus_sec").css("opacity", "0"); 
        $(".minus_sec").css("opacity", "0"); 

    
    $(".fa-play").css("margin-top", "-130%");
    $(".start").css("background-image", "linear-gradient(to bottom right, #FF4C70, #FF0032)"); //red gradient
   });   
   
   
$(".start").click(function(){

    if (br == 1){
        
        time_br = min_br * 60 + sec_br;
        if (stopped == 1){
        beans = 58/time_br;
        min_br_set = min_br;
        sec_br_set = sec_br;
        min_wor_set = min_wor;
        sec_wor_set = sec_wor;
        pause = setInterval(countdownPause, 1000);
        stopped = 0;
        } else {
        clearInterval(pause);
        stopped = 1;}

    } else {
        
        if (stopped == 1){
        $(".motto__work").css("opacity", "1");
        time_wor = min_wor * 60 + sec_wor;
        grains = 36/time_wor;
        min_wor_set = min_wor;
        sec_wor_set = sec_wor;
        min_br_set = min_br;
        sec_br_set = sec_br;
        work = setInterval(countdown, 1000);
        stopped = 0;
        
        } else {
        clearInterval(work);
        stopped = 1;}
    
    }

   });
   
   $(".fa-step-backward").click(function(){
    $(".motto__work").css("opacity", "0");
       tilt = 0;
       var turn = "rotate("+tilt+"deg)";
       $(".pointer").css("transform", turn);

   });
   
   
   $(".fa-coffee").click(function(){
        rotate += 360;
        var rotation = "rotate("+rotate+"deg)";
        $(".fa-coffee").css("transform", rotation);
        coffee_bottom = 85; 
        
        var level = "linear-gradient(to top, #292716 "+coffee_bottom+"%,  white 1%)";
        $(".fa-coffee").css("background-image", level); 

   });
    
   $(".fa-hourglass").click(function(){
        rotate += 360;
        var rotation = "rotate("+rotate+"deg)";
        $(".fa-hourglass").css("transform", rotation);
        bottom = 14;
        top = 86;
        var sand = "linear-gradient(to top, #3A2713 12%, #3A2713 "+bottom+"%, white 13%, white 50%, #3A2713 50%, #3A2713 "+top+"%, white 50%)";
        $(".fa-hourglass").css("background-image", sand);
        
    });
    
  });