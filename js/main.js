//select var, grab class and id
let betNumber=document.querySelector('#placeYourBet')
let spinWheel=document.querySelector('#spinButton')
let firstSlot=document.querySelector('.firstWheel')
let secondSlot=document.querySelector('.secondWheel')
let thirdSlot=document.querySelector('.thirdWheel')
let balance=document.querySelector('#balance')

let wheels=document.getElementsByClassName('wheel')

//create a fx for spinWheel on click get feedback as a callback
spinWheel.addEventListener('click', getFeedback);
//set max amount to 1000
let total=1000
balance.innerHTML =total

function getFeedback(){
    spin()
}

//get 3 wheels to randomize 3 differ background color
function spin(){
    let colors=['img/pic1.png', 'img/pic2.png', 'img/pic3.png', 'img/pic4.png', 'img/pic5.png']
    let box1=null
    let box2=null
    let box3=null

    for (let i=0; i<wheels.length; i++){
        const wheel = wheels[i]
        let index=Math.floor(Math.random()*colors.length)
        //get random index for color
        wheel.style.backgroundImage = `url(\'${colors[index]}\')`
        if (i===0){
            box1=index
        }else if (i===1){
            box2=index
        }else if(i===2){
            box3=index
        }
    }
    //console.log(box1)
    //console.log(box2)
    //console.log(box3) 
    checskWin(box1,box2,box3)
} 


//make function to check if player won ß
function checskWin(color1,color2,color3){
    if (color1===color2 && color1===color3){
        total+=Number(betNumber.value)
        console.log(betNumber.value)
        balance.innerText=`${total}`
        //console.log(total)
    }else {
        //console.log(betNumber.value)
        total-=Number(betNumber.value)
        //console.log(total)
        balance.innerText=`${total}`
    }

}

var rotation =0
setInterval( function (){
    $('div')
})

