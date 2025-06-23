
// // function ans()
// // {
// //     for(var a=1; a<=2; a++){
// //         console.log(a)
        
// //     }
// //     console.log(a)
// // }
// // ans();

// // var a = 10;
 
// // let b =39;

// // function color(){
// //     var green =10;

// //     function loan(){
// //         var now =10;
// //     }


// // }
// // color();

// // console.log(a)

// // var a ;
// // console.log(a)
// // a =19;

// // var a=[1,3,4];
// // var b=a;
// // b.pop();

// // var anas={
// //     name:"khan"
// // }
// // var obaid={...anas};

// // obaid.pop();

// // truthy and Falsy :************************************************************

// // function completer()
// // {



// // }
// // completer();

// // if(0){
// //     console.log("show me if values")

// // }
// // else
// // {
// //     console.log("show me else condition")
// // }

// // forEach loop will be used in array and run ofr every index element in array 
// // var array=[9,10,22,11,2,3,43,45];
// // array.forEach(function(index){
// //     console.log(index+2);
// // }
// // )
// // *ppppppppppppppppppppppppppp we use for_in for object

// // var my_obj ={
// //     name : "rohan",
// //     city:"isalmabad",
// //     age:"23"
// // }

// // for (var pro in my_obj){
// //     console.log(pro,my_obj[pro])
// // }

// //  new we will use call back function in javaScript

// // we we run a function after some time 

// // setTimeout(function(){
// //     console.log("this is not runnig code");
// // },1000)

// // ************************************synchronas JS
// // when one task completer then the other task get started 
// // process tasks one by one 
// // task 01 complete then task 2 start 
// //  code run line by line 

// // ******************Async 
// // when all the task get started at once &tasks complete randomley (which task get complete give that answer )
// // there is no order in the task 
// //  all th code runs at once

// // 1) setTimeout
// // 2) setInterval(() => {
    
// // }, interval);
// // 3) axios
// // 4) fitch 
// // 5) promises
// //6)  XMLHttpRequest
// // when you want to use these Five (05) in JS this is async js 

// // } 


// // after some time the code will be call back to Run
// // console.log("sync")
// // setTimeout(function(){
// //     console.log("This is async code will run after 2 sec ")

// // },2000);
// // console.log("this is also sync code")


// // Main stack 
// // // event loop (can communicate in between tasks in main and side stack )
// // Side stack

// // console.log("code1")
// // setTimeout(() => {
// //     console.log("code2")
    
// // }, 2000);
// // console.log("code3")

// // for req to the third party
// // when we senf requesst for something to the  third party then we use 
// // fitch 
// // axios 
// // settimeout 
// // setinterval 
// // promises

// // for get that data 
// // then we will get that data in a response as
// // in a 
// // async await 
// // callbacks 
// // then 
// // catch



// // here we are requesting to the server of google for the images or some thing else
// // we are requesting from our leptop to the server now--->i didnnot know i how much time the response will come 

// // when we want to retrive data from or Request to the thired party

// // fetch("https:www.google.com") 

// //                                                     promises ************************




// // when we have send a req the the req will be resolved or rejected 
// // for resloved we use then 
// // for reject we use  catch 

// // var calculate = new Promise((res,rej)=>{

   

// //         return res("asallam o alakom");
   
// // })

// // var p2=calculate.then(function(data){
// //     console.log(data);
// //     return new Promise((res, rej) => {
// //         return res("this is mt pc");
        
// //     })
// // })
// // var p3=p2.then(function(data){
// //     console.log(data);
// //      return new Promise((res, rej) => {
// //         return res("and the time is finish");
        
// //     })
    
// // })
// // var p4=p3.then(function(data){
// // console.log(data)
// // })

// // **********************************promises

// //  var malak =new Promise(function(res,rej){
// //     return res("my name is khan");

// // })
// // var adamkhan =malak.then((data)=>{
// //     console.log(data);
// //     return new Promise((res,rej)=>{
// //         return res("I am a website developer");

// //     })

// // })
// // var meens= adamkhan.then((data)=>{

// //     console.log(data);
// //     return new Promise((res,rej)=>{
// //         return res("adam is a family member od malak")
// //     })
// // })
// // var royal= meens.then((data)=>{
// //     console.log(data)
// // })


// // async await 

// // function adamkhan(){
// //     fetch(`https://randomuser.me/api/`)
// //     .then(function(raw){
// //         return raw.json();

// //     })
// //     .then(function(data){
// //         console.log(data);
// //     })


// // }

// // adamkhan();

// // async function alikhan(){
// //      let readible = await fetch(`https://randomuser.me/api/`)
// //         let output =   await readible.json();
// //         console.log(output);

// //  }
// // alikhan();


// // var man=document.querySelector("#page02")
// // man.addEventListener("mouseenter",function(){
   
// //    gsap.to(img,{
// //     scale:0,
// //     opacity:0,
// //    })
  
// // })
// // man.addEventListener("mouseleave",function(){
   
// //    gsap.to(img,{
// //     scale:1,
// //     opacity:1,
// //    })
  
// // })
// // var p4c=document.querySelector("#page04 #cont4")
// // var p4b =document.querySelector("#box1")
// // var p4c=addEventListener("mouseenter",function(dets){

// //     gsap.from(p4b,{
// //         y:30,
// //         scale:2,
// //     })
// // })

// var p4c  = document.querySelector("#cont4");
// var p4 = document.querySelector("#box1");
// var p4c =addEventListener("mouseenter",function(){
    
//     gsap.from(p4,{
//         y:-30,
//         opacity:1,
//         duration:3,
        
        
//     })
//     gsap.from(" #box2  ",{
//         y:-30,
        
//     })
//     gsap.from("  #box3  ",{
//         y:-30,
        
//     })
//     gsap.from(" #box4  ",{
//         y:-30,
        
//     })
//     gsap.from("  #box5 ",{
//         y:-30,
        
//     })
//     gsap.from("  #box6 ",{
//         y:-30,
        
//     })
// })

























