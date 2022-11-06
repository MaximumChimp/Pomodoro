
$(document).ready(function(){
    $("#pomodoro").click(function(){
        $("body").css("background-color","coral");
       $("#start").css("color","coral");
       $('input[id=minutes]').val('25');
    });

    $("#shortBr").click(function(){
        $("body").css("background-color","cadetblue");
        $("#start").css("color","cadetblue");
        $('input[id=minutes]').val('05');
    });

    $("#longBr").click(function(){
        $("body").css("background-color","burlywood");
        $("#start").css("color","burlywood");
        $('input[id=minutes]').val('15');
    });
 
    const minVal =  $('input[name="min"]').val()
    const secVal = $('input[name="sec"]').val()
    console.log(secVal)

    $('#start').click(function(){

        

        //Play Audio on Click
        var audio = new Audio('audio/buttonClick.mp3');
        audio.play();
        

        //Initialize Variables
        var minutes =  $('input[name="min"]').val()
        var seconds = $('input[name="sec"]').val()
        
        var end = parseInt(minutes) * 60 + parseInt(seconds)
        var ststp = $('#start').text();
        var start = 0
        
       

        //Create A function and Set interval to 1000ms
        var counter = setInterval(function() {
            start++;
            sec = Math.floor((end-start)%60);
            min = Math.floor((end -start)/60);

           var minLength = String(min).length;
           var secLength = String(sec).length;
            if(minLength > 2 || secLength < 10){
                minutes = min.toString().length == 2 ? min:`${min}`;
                seconds = sec.toString().length == 2 ? sec:`0${sec}`;
           };
           if(min < 10){
            minutes = min.toString().length == 2 ? min:`0${min}`;
           }
           
           var audio = new Audio('/audio/IphoneRingtone.mp3');
            
           $('#start').text(function(_,text){
   
                if(text === 'Start'){
                   
                    clearInterval(counter)
                    $('title').text('Jammer');
                    $('input[name="min"]').prop('readonly',false)
                    $('input[name="sec"]').prop('readonly',false)
                
                }
                else{
                        var time = `${minutes}:${seconds}`;
                        $('title').text(`${time} Jammer`);
                        if(minutes <=0 && seconds <= 0 ){
                            audio.play()
                            clearInterval(counter)
                        
                         };
                              
              
                    $('input[name="min"]').prop('readonly',true)
                    $('input[name="sec"]').prop('readonly',true)

                
                        
                };
              
          
            });
        
            //display minutes and Secondss
            $('input[name="min"]').val(minutes)
            $('input[name="sec"]').val(seconds)

    
        
                
        }, 1000);
     
 
        $('#start').text(function (_, text) {
            if(text === 'Start'){
                $('#start').css('box-shadow','0px 2px rgb(211, 210, 210)')
                $('.timer-container').css({'border-radius':'50%',
                'width':'400px',
                'height':'400px',
                'position':'absolute',
                'transition-duration':'1s',
                'top':'50%',
                'left':'50%',
                'transform':'translate(-50%,-50%)'});
                $('#pomodoro, #shortBr, #longBr').css('visibility','hidden');
                
                $('#pomodoro,#shortBr,#longBr').click(function(){
                    if(this.id == 'pomodoro'){
                        $('input[name="min"]').val(minVal);
                        $('input[name="sec"]').val(secVal);
                        console.log(minVal,secVal)
                        confirm('Are you sure you want to stop time?');
                      
                        
                    }
                    else if(this.id == 'shortBr'){
                        confirm('Are you sure you want to stop time?')
                    }
                    else if(this.id == 'longBr'){
                        confirm('Are you sure you want to stop time?')
                    }
                });
            }

            else if(text !== 'Start'){
                $('#start').css('box-shadow','0px 5px rgb(211, 210, 210)')
                $('.timer-container').css({'border-radius':'5px',
                'position':'absolute',
                'height':'320px',
                'top':'30%','left':'50%',
                'transform':'translate(-50%,-50%)',
                'transition-duration':'1s'});
                
                contentWidth = $('.timer-container').css({'width':'500px'})
                if(contentWidth){
                    $('#pomodoro, #shortBr, #longBr').css({'visibility':'visible'});
                }
                
                    $('#pomodoro,#shortBr,#longBr').click(function(){
                        if(this.id == 'pomodoro'){
                            $('input[name="min"]').val(minVal);
                            $('input[name="sec"]').val(secVal);
                            
                        }
                        else if(this.id == 'shortBr'){
                            $('input[name="min"]').val(minVal);
                            $('input[name="sec"]').val(secVal);
                            
                        }
                        else if(this.id == 'longBr'){
                            $('input[name="min"]').val(minVal);
                            $('input[name="sec"]').val(secVal);
                        }
                    });
            
              
            }
            return text === 'Stop' ? 'Start' : 'Stop';
          
        }).toggleClass('stop');

   
    
    });


});