let t_rex=document.getElementById('t-rex')
let cactus=document.getElementById('cactus')
 let scoreElement=document.getElementById('score')
 let score=0
let isJumping=false



addEventListener('keydown',checkKey)
function checkKey(info){
    if(info.key=='ArrowUp'){
        jump()
    }
addEventListener('keydown',checkKey2)
function checkKey2(info){
    if(info.key=='ArrowDown'){
        down()
    }
}

    
}
function jump(){
    if(isJumping){
        return
    }
    isJumping=true
    t_rex.classList.add('jump')
    setTimeout(removeAnimation,1000);
    let jumpSound=new Audio('press.wav')
    jumpSound.play()
}
function removeAnimation(){
    t_rex.classList.remove('jump')
    isJumping=false
    score++
    scoreElement.innerHTML='Your score: '+score
}
function removeAnimation2(){
    t_rex.classList.remove('down')
    isJumping=false

}
function down(){
    
    isJumping=false
    t_rex.classList.remove('jump')
    t_rex.classList.add('down')
    setTimeout(removeAnimation2,0);

}

let playMain=setInterval(main,100)


function main(){
    if(elementsOverlap(t_rex,cactus)){
        clearInterval(playMain)
        let best=localStorage.getItem('best')
        if(!best||score>best){
            localStorage.setItem('best',score)
            best=score
        }
        document.body.innerHTML=`
        <div style="background-image: url('https://www.bing.com/th/id/OGC.8600060fcd0aa514e645bd5d06a401a3?o=7&cb=iwp2&pid=1.7&rm=3&rurl=https%3a%2f%2fc.tenor.com%2fq0Ejci9EQhcAAAAC%2frick-astley-rick-roll.gif&ehk=CZX%2bCnmeSEUMQcWJ2SjZO3RZVoRDlq1yc5bnNzC5T2E%3d')">
        <p id="gameOver">Game over!!!!</p>
        <p id="result">Your score is...${score}</p>
        <p id="best">Your best score is....${best}</p>
       <center> <button id="tryAgain" onclick="window.location.replace('https://gojo581.github.io/no-internet-game/')"> try again </button></center>
        </div>
        <button style="background-color: green; width: 60px; height: 60px;" onclick="window.location.replace('https://gojo581.github.io/games/')">come back</button>
       `
        let gameSound=new Audio('game over sound.wav')
        gameSound.play()
    }
}


function elementsOverlap(el1, el2) {
    const domRect1 = el1.getBoundingClientRect()
    const domRect2 = el2.getBoundingClientRect()


    return !(
        domRect1.top > domRect2.bottom ||
        domRect1.right < domRect2.left ||
        domRect1.bottom < domRect2.top ||
        domRect1.left > domRect2.right
    )
}
let arrows = [
`2 cactuses.png`,
`cactus.png`,
`3 cactuses.png`
]



//0=1cactus
//1=2cactuses
//2=3cactuses


let picked=0


setInterval(pickImage,2500)


function pickImage(){
    picked=randomInteger(0,2)
    cactus.setAttribute('src',arrows[picked])
}


function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}


