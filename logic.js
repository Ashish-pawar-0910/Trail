let e1 = document.getElementById("txt_2");
let e2=document.getElementById("txt");

function forequal() {
    elem = document.getElementsByClassName("equal")
    let ans= eval(calc.txt.value)
    elem.innerHTML=" "
    if(ans!==undefined)
    {
        document.calc.txt.value=ans
        document.calc.text2.value = ans
        e1.classList.add("answer");
        e2.classList.add("ans_sec");
    }
}
function clearall(){
    calc.txt.value= '';
    calc.text2.value= '';
    rm_ans();
    
}
function instantvalue(){
    calc.text2.value= eval(document.calc.txt.value);
    rm_ans();
}

function appendNo(x){
  document.calc.txt.value += x;
  instantvalue();
  rm_ans();
}

function sin(){

    let ans= eval(calc.txt.value)
    console.log(ans)
    var pi = Math.PI;
    document.calc.txt.value=Math.sin(ans*(pi/180))
    document.calc.text2.value=document.calc.txt.value;
    rm_ans();
    
}
function cos(){

    let ans= eval(calc.txt.value)
    console.log(ans)
    var pi = Math.PI;
    document.calc.txt.value=Math.cos(ans*(pi/180))
    document.calc.text2.value=document.calc.txt.value;
    rm_ans();
    
}
function tan(){

    let ans= parseInt(eval(calc.txt.value))
    console.log(ans)
    var pi = Math.PI;
    if (ans%90==0 && ans/90!=0) {
    
        document.calc.txt.value="∞";
        document.calc.text2.value="∞";
        rm_ans();
    }
    else
        document.calc.txt.value=Math.tan(ans*(pi/180))
        document.calc.text2.value=document.calc.txt.value
    
}
function getsquare(){
    document.calc.txt.value=(Math.pow(document.calc.txt.value,2)) ;
    document.calc.text2.value=document.calc.txt.value ;
    rm_ans();
}
function cube(){
    document.calc.txt.value=Math.pow(document.calc.txt.value,3);
    document.calc.text2.value = document.calc.txt.value;
    rm_ans();
}
function sqrt2(){
    document.calc.txt.value=Math.pow(document.calc.txt.value,(1/2));
    document.calc.text2.value = document.calc.txt.value;
    rm_ans();
}
function sqrt3(){
    document.calc.txt.value=Math.pow(document.calc.txt.value,1/3);
    document.calc.text2.value = document.calc.txt.value;
    rm_ans();
}
function getpercent(){
    document.calc.txt.value= document.calc.txt.value/100;
    document.calc.text2.value= document.calc.txt.value;
    rm_ans();
}
function BACKSPC(){
    var a=document.calc.txt.value
    document.calc.txt.value=a.substring(0,a.length-1)
    document.calc.text2.value = a.substring(0, a.length - 1)
    rm_ans();
}

let rm_ans = () => {
    e1.classList.remove("answer");
    e2.classList.remove("ans_sec");
}