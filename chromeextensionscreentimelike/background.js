class converter{
    minutesToSec(min){
        return 60*min
    }

    convertTime(dur){
        var mins = parseInt(dur/60,10);
        var secs = parseInt(dur%60,10);

      
       if(mins<10){
        var format_mins = "0" + mins;
     
       }else{
        format_mins = mins;
       }

       if(secs<10){
        var format_secs = "0" + secs;
     
       }else{
        format_secs = secs;
       }


       return format_mins + ":" + format_secs;

    }
}

class Timer{
    constructor(){
        this.converter = new converter;

        this.duration = 0;
        this.current_duration = 0;

        this.sound = new Audio("audio/bingbong.mp3");
        this.sound1 = new Audio("audio/LETSGO.mp3");


     this.display_time = "00:00";


    }

    setStartTime(duration){
        if(duration>0){
            this.duration = duration;
            this.current_duration = duration;

        }else{
            this.duration= 0;
            this.current_duration = 0;
        }
    }

    getDisplay(){
        return this.display_time;

    }

    startTimer(){
        this.current_duration = this.duration;
    }

    clockTicking(){
        if(this.current_duration>0){

            this.display_time = this.converter.convertTime(this.current_duration);
            this.decrementTime();

        }else{
            this.sound1.play();
            this.clear;


        }
    }
    decrementTime(){
        this.current_duration = this.current_duration-1;

    }

    clear(){
        this.current_duration = this.duration;
        this.display_time = "00:00";

    }
}