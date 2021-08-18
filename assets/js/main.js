//helping functions
//get ID and Value Function
function getMe(id){
    let val = document.getElementById(id).value;
    return Number(val);
}
//get ID and check value function
function check(id){
    let val1 = document.getElementById(id).checked;
    return Boolean(val1)
}
//Html injection Function
function inject(id,val,string){
    document.getElementById(id).innerHTML = val + string;
}
//display controler Function
function style(id,val){
    document.getElementById(id).style.display = val;
}
//start solution
//call function change Action onchange 
function change(){
    if (check("per") == false){
        style("ein-2","inline");
        style("ein.2","block");
    } 
}
function no(){
    console.log("mytest")
    if (check("per2") == false){
        style("ein-2","none");
        style("ein.2","none");  
    }
}
//call function calc Action = onclick
function calc(){
    //geting HTML Element values
    let salOne = getMe("ein");
    let salTow = getMe("ein2");
    let sal,sal2;
    let personOne = check("per");
    let personTow = check("per2");
    let year = getMe("jahr");
    console.log(salOne,salTow,personOne,personTow,year)
    //define number var...
    let case1,case21,case22,case31,case32,case41,case42,case5,num1,num2,num3,num4,num5,num6,num7,num8,num9,num10,num11;
    //define result var...
    let ESt,z,y,rest;
    num3 = 1400;
    num6 = 2397;
    num8 = 0.42;
    num10 = 0.45 ;
    if (personTow == true){
        sal2 = salOne + salTow;
        sal = (salOne + salTow)/2;
    }else {
        sal = salOne;
    }
    if ( year == 2021 && (personOne == true|| personTow == true)){
        console.log("test")
        case1 = 9744;
        case21 = 9745;
        case22 = 14753;
        num1 = 9744;
        num2 = 995.21;
        case31 = 14754;
        case32 = 57918;
        num4 = 14753;
        num5 = 208.85;
        num7 = 950.96;
        case41 = 57919;
        case42 = 274612;
        num9 = 9136.63;
        case5 = 274613;
        num11 = 17374.99;
        
    }else if( year == 2020 && (personOne == true|| personTow == true)){
        console.log("2020")
        case1 = 9409;
        case21 = case1-1;
        case22 = 14532;
        num1 = case1;
        num2 = 972.87;
        case31 = 14533;
        case32 = 57051;
        num4 = 14533;
        num5 = 212.02;
        num7 = 972.79;
        case41 = 57052;
        case42 = 270500;
        num9 = 8963.74;
        case5 = 270501;
        num11 = 17078.74; 
    }else if( year == 2019 && (personOne == true|| personTow == true)){
        console.log("2019")
        case1 = 9168;
        case21 = 9169;
        case22 = 14254;
        num1 = 9168;
        num2 = 980.14;
        case31 = 14255;
        case32 = 55960;
        num4 = 14254;
        num5 = 216.16;
        num7 = 965.58;
        case41 = 55961;
        case42 = 265326;
        num9 = 8780.90;
        case5 = 265.327;
        num11 = 16740.68; 
    }
    switch (true) {
        case (sal <= case1):
            console.log("case1")
            ESt = 0;
            rest = sal-ESt; 
            break;
        case (case21 <= sal && sal<= case22):
            console.log("case2")
            y = (sal - num1)/10000;
            ESt =(num2*y+num3)*y;
            break;
        case (case31<= sal && sal<= case32):
            console.log("case3")
            y = (sal - num4)/10000;
            ESt =(num5*y+num6)*y+num7;
            break;
        case (case41 <= sal && sal <= case42):
            console.log("case4")
            ESt =num8*sal-num9;
            break;
        case (sal>=case5):
            console.log("case5")
            ESt =(num10*sal)-num11;
            break;

        default:
            break;
    }
    if (personTow == true){
        ESt = ESt*2;
        rest = sal2-ESt;
    }else{
    rest = sal-ESt;
}
inject("ein-st",ESt,"€");
inject("rest",rest,"€")
style("result","block");
}