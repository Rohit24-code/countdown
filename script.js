const dateofselection= "6 sep 2022"


const daysin= document.getElementById("days")


const hoursin= document.getElementById("hours")


const minutes= document.getElementById("mins")


const secondsin= document.getElementById("seconds")


function countdown(){
    const dateofselection2 = new Date(dateofselection)
    const today = new Date()
    const miliseconds= Math.floor((dateofselection2 - today))
    const seconds= Math.floor(miliseconds/1000)
    const mins = Math.floor(seconds/60)
    const hours= Math.floor(mins/60)
    const days= Math.floor(hours/24)
    console.log(seconds,mins,hours,days)
 

    daysin.innerText=days

    hoursin.innerText=hours

    minutes.innerText=mins

    secondsin.innerText=seconds
}
setInterval(function(){
    countdown()
},1000)
