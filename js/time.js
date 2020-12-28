var seconds = 100;
    var handle;
    setTimeout("startTimer()",1000);
    function startTimer(){
        handle = setInterval("timer()", 1000);
    }
    function timer(){
        seconds-=1;
        document.all.redhacker.innerHTML="问答时间还剩下<font color ='red'>"+seconds+"</font>秒";
        if(seconds==0){
            stopTimer();
        }
    }
    function stopTimer(){
       clearInterval(handle);
       document.all.redhacker.innerHTML="问答已结束";
       tjda();
    }