
      // let string = "";
      // let values = document.querySelectorAll(".button");
      // console.log(values);
      // const items = Array.from(values);
      //       console.log(items);

     let display =  document.getElementById("text");
     display = "";
     let keys = document.querySelectorAll(".button");
     console.log(keys);
     Array.from(keys).forEach((el) =>{
      el.addEventListener('click',(i) =>{
            // console.log(i.target.value);
            num = i.target.value;
            if(num == '='){
                 display = eval(display);
                 document.getElementById("text").value = display;
            }else if(num == 'C'){
                  display = display.toString().slice(0,-1);
            }else{
                  display = display + num;
            }
            document.getElementById("text").value = display;
            d =  document.getElementById("text").value;
            });
     }) ;




           
     





// let light = " styles/light.css";
// let dark = "style/dark.css";
// let res = document.querySelector(".result");
// res=''

// let keys = document.querySelectorAll(".btn");
// // for( i=0; i <keys.length; i++){
 
// // document.querySelectorAll('.btn').addEventListener()
//     // console.log(keys[i].value);
// // }
// document.addEventListener('click',(keypress)=>{
//     // console.log("key is press");
//     n=keypress.target.value;
//     if(n=="1"){
// console.log("one is pressed");

// res=res+n;
// document.getElementById("display").value=res;
//     }
//     else if(n=="2"){
//         console.log("2 is pressed");
//         res=res+n;
// document.getElementById("display").value=res;
//     }
//     else if(n=="3"){
//         console.log("3 is pressed");
//         res=res+n;
// document.getElementById("display").value=res;
//     }
     
//     else if(n=="4"){
//         console.log("4 is pressed");
//         res=res+n;
// document.getElementById("display").value=res;
//     }
     
//     else if(n=="5"){
//         console.log("5 is pressed");
//         res=res+n;
// document.getElementById("display").value=res;
//     }
     
//     else if(n=="6"){
//         console.log("6 is pressed");
//         res=res+n;
// document.getElementById("display").value=res;
//     }
     
//     else if(n=="7"){
//         console.log("7 is pressed");
//         res=res+n;
// document.getElementById("display").value=res;
//     }
     
//     else if(n=="8"){
//         console.log("8 is pressed");
//         res=res+n;
// document.getElementById("display").value=res;
//     }
     
//     else if(n=="9"){
//         console.log("9 is pressed");
//         res=res+n;
// document.getElementById("display").value=res;
//     }
     
//     else if(n=="0"){
//         console.log("0 is pressed");
//         res=res+n;
// document.getElementById("display").value=res;
//     }
     
//     else if(n=="."){
//         console.log(". is pressed");
//         res=res+n;
// document.getElementById("display").value=res;
//     }
     
//     else if(n=="*"){
//         console.log("* is pressed");
//         res=res+n;
// document.getElementById("display").value=res;
//     }
//     else if(n=="/"){
//         console.log("/ is pressed");
//         res=res+n;
// document.getElementById("display").value=res;
//     }
//     else if(n=="-"){
//         console.log("-  is pressed");
//         res=res+n;
// document.getElementById("display").value=res;
//     }
//     else if(n=="+"){
//         console.log("+ is pressed");
//         res=res+n;
// document.getElementById("display").value=res;
//     }
//     else if(n=="C"){
//         res=display.value.toString().slice(0 ,-1);
//         document.getElementById("display").value=res;
        
    

       
//     }

//     else {
       
            
//          document.getElementById("display").value=eval(res);
        
        
//     }
     

//        })

