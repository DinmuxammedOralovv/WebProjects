//1
function bir(){
var ismi=prompt("Ismingizni kirirting : ");
var familiya=prompt("Familiyangizni kirirting : ");
var yoshi=prompt("Yoshingizni kirirting : ");
var manzil=prompt("Manzilingizni kirirting : ");
var tel=prompt("Telefon Raqam(XX XXX XX XX) : ");
var email=prompt("Ijtimoiy tarmoq manzili : ");
alert("Talaba"+"\n"+
    "Yoshi : "+ismi+"\n"+
    "Familiyasi : "+familiya+"\n"+
    "Manzili : "+manzil+"\n"+
    "Tel : (+998)"+tel+"\n"+
    "Ijtimoiy tarmoq manzili : "+email
);
}
//2
function ikki(){
var kun=prompt("Tug'ilgan kun : ");
var oy=prompt("Tug'ilgan oy : ");
var yil=prompt("Tug'ilgan yil : ");
alert(kun+" "+oy+" "+yil);
}
//3
function uch(){
    let son1=Number(prompt("Son 1 : "));
    let son2=Number(prompt("Son 2 : "));
    let son3=Number(prompt("Son 3 : "));
    let son4=Number(prompt("Son 4 : "));
    let son5=Number(prompt("Son 5 : "));

    let one=(son1*son4);
    let two=son3**4;
    let three=son2/son5;
    let four=son2+son5;
    alert(son1 +" * "+son4+" = "+one+"\n"+
    son3+"**4 = "+two+"\n"+
    son2 +" / "+son5+" = "+three+"\n"+
    son2 +" + "+son5+" = "+four+"\n");
}

//4
function tort(){
    var a=43;
    var b=false;
    var c="Salom";
    var d="2022 yilni kiritdiniz";
    alert(
        a+"\n"+
        b+"\n"+
        c+"\n"+
        d
    )
}








// 3-misol


// let a=prompt("San kiriting");
// let s=0;
// for(let i=1;i<a;i++){
// if(a%i==0){s+=i;}
// }
// if(a==s){
//     alert("Bu son mukkammal son")
// }
// else{
//     alert("Bu mukkammal emas")
// }


// let n=prompt("N ga qiymat");
// let j=0;let k=1;
// k++;
// do{
// j+=1/Math.pow((2*k+1),2);
// }while(k<=n){
// }

// alert(j);
function solve(year){

    if(year<1000&&year>99){
        year="0"+year;
    }

    if(year<100&&year>9){
        year="00"+year;
    }

    if(year<10&&year>=0){
        year="000"+year;
    }
        if(year%400==0||(year%4==0&&year/100!=0)){
            console.log("12/09/"+year);
        }
        else{
            console.log("13/09/"+year);
    
        }
  

}



