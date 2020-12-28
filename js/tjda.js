function tjda(){
        var sum = 0;
        var t2 = "";
        var p2 = "B,C,C,D,D,C,A,A,C,B";
        for(var i = 0;i<10;i++){
            var flag = 0;
            for(var j = 0;j<4;j++){
                if(c.elements[4*i+j].checked){
                    flag = 1;
                    v = c.elements[4*i+j].value;
                    break;
                }
            }
            if(!flag)v="0";
            if(i==0)
                t2=t2+v;
            else
                t2 = t2+","+v;
        }
        for(i=0;i<10;i++){
            a = p2.substring(i*2,i*2+1);
            b = t2.substring(i*2,i*2+1);
            if(a==b)sum=sum+10;
        }
        document.getElementById("an").innerText="你的成绩为 "+sum+" 分";
        stopTimer();
    }