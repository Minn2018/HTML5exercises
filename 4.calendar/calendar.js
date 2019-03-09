var today = new Date();
var year = today.getFullYear();
var month = today.getMonth()+1;
var day = today.getDate();

function showInfo(){
    var info = year + "年" + month + "月";
    document.getElementById("info").innerHTML = info;
}

//计算当前月份有多少天
var allday = 0;
function count(){
    if(month!=2){
        if(month==4 || month==6 || month==9 || month==11){
            allday=30;
        }else{
            allday=31;
        }
        
    }else{ //判断是否闰年
        if(year%4 == 0 && year%100 !=0 || year%400 ==0){
            allday = 29;
        }else{
            allday = 28;
        }
    } 
}


//显示当前月份的日历
function showDate(){
    showInfo();  
    count();
    var firstday = new Date(year,month-1,1); //获取当前月份的第一天
    var whichday = firstday.getDay();//0表示星期天 1~6表示周一到周六
 
    var daterow = document.getElementById("date");
    daterow.innerHTML = "";

    if(whichday!=0){ //第一天不是星期日的话补空格
        for(var i=0; i<whichday ; i++){
            var dayElement = document.createElement("div");
            dayElement.className = "day";
            daterow.appendChild(dayElement);
        }
    }

    for(var j=1; j<=allday ; j++){
        var dayElement = document.createElement("div");
        dayElement.className = "day";
        dayElement.innerHTML = j+""; //将日期从数字转化为字符串
        //给当天加颜色
        if(j == day){
            dayElement.style.color = "orange";

        }

        daterow.appendChild(dayElement);
    }
}

//上个月和下个月
function lastMonth(){
    if(month>1){
        month--;
    }else{
        month = 12;
        year--;
    }
    showDate();
}

function nextMonth(){
    if(month<12){
        month++;
    }else{
        month = 1;
        year++;
    }
    showDate();
}