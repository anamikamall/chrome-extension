// const txt=document.querySelector(".input-el"); 

const inbtn= document.getElementById("btn-1");
const delbtn= document.getElementById("btn-2");
const savbtn= document.getElementById("btn-3");
const input= document.getElementById("input-el");
let arr=[];
// console.log(input);


inbtn.addEventListener("click",()=>{
     let a= input.value;
    // console.log(a);
arr.push(a);
renderli(arr);
localStorage.setItem('Array',JSON.stringify(arr));
// console.log(arr);
input.value="";
});

delbtn.addEventListener("dblclick",()=>{
// while(arr.length!=0
    arr=[];
    // arr.pop();[]
// console.log(arr);
input.value="";
 renderli(arr);
localStorage.clear();
});

// const render=(input)=>{
    // console.log("hello");
    // const input= document.getElementById("input-el");
   
// document.getElementById("content").innerHTML+=`<li> ${a} </li>`;
// }

const renderli = (arr) => {
    let list="";
    for(let i=0;i<arr.length;i++)
    {
list+=`<li>${arr[i]}</li>`;
    }
    document.getElementById("content").innerHTML=list;
}

// const a=[1,2,3,4,5];

// a.forEach(e => {
    //     console.log(e);
    // });

    let storeitem = JSON.parse(localStorage.getItem('Array'));
    // console.log(storeitem);
    if (storeitem)
    {
        arr = storeitem;
        // console.log(arr);
        renderli(arr);
    }
    //Save Button
    // let save = ["AnaAdi"];
    savbtn.addEventListener('click',() => {
        chrome.tabs.query({active: true, currentWindow: true},(tabs) => {
            arr.push(tabs[0].url);
        console.log(arr);
        localStorage.setItem('Array',JSON.stringify(arr));
renderli(arr);
        });
        
// localStorage.clear();
// arr=[];
    });
