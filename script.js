let carta=document.getElementById("carta")
let title=document.getElementById("dz")
let geroy=document.getElementById("roga")
let minion=document.getElementById("minion")
let cartaX=Math.random()*500
let cartaY=Math.random()*500
let shagi=0
let massiv=[]
let treasure=document.getElementById("treasure")
let activeCostume=6
console.log(cartaX,cartaY);
document.body.onkeydown=function (event) {
    console.log(event.keyCode);
}



carta.onclick=function(event){
    console.log("1vratartop",event.offsetX);
    shagi=shagi+1
    massiv.push(shagi*1000)
    console.log("1vratartop",event.offsetY);
    console.log(massiv);
    let pirateX=event.offsetX-20
    let pirateY=event.offsetY-50
    geroy.style.left=pirateX+"px"
    geroy.style.top=pirateY+"px"
    let X=pirateX-cartaX
    let Y=pirateY-cartaY
    let minionX=event.offsetX-30
    let minionY=event.offsetY-60
    minion.style.left=minionX+"px"
    minion.style.top=minionY+"px"
    let distance=Math.sqrt(X*X+Y*Y)
    console.log(distance);
    if (distance<11) {
        title.innerHTML="🎉🎉🎉victory!!!🎉🎉🎉      ТЫ нашел сокровище за "+shagi+" шагов"
    carta.style.pointerEvents="none"
        treasure.style.transform="scale(1) rotate(0)"
    }
    else if(distance<20){
        title.innerHTML=" ТЫ близко МАЛЕНЬКАЯ КИСКА👺👺👺👺"
    }
    else if(distance<45){
        title.innerHTML="сокровище через 45! МЕТРОВ🎁🎁🎁🎁🎁🎁🎁🎁"
    }
    else if(distance<80){
        title.innerHTML="ПОДАЛЬШЕ ИДИ В ПРАВАЛЕВО💩💩💩"
    }
    else if(distance<140){
        title.innerHTML="ПРАВАЛЕВО ЕЩЕ ДАЛЕКО (СЛЕДУЯ ЯНДЕКС НАВИГАТОРУ)🤣🤣🤣"
    }
    else if(distance<200){
        title.innerHTML="ВООЩЕ НЕ ТУДА💀💀💀💀"
    }
    else if(distance<260){
        title.innerHTML="ДА КУДА ТЫ РУЛИШЬ?"
    }
    else if(distance<320){
        title.innerHTML="NO NO NO"
    }
    else{
        title.innerHTML="💩💩💩ВСЕ ОЧЕНЬ ДАЛЕКО💩💩💩"
    }
}
treasure.onclick=function (event) {
    treasure.style.transform="scale(0) rotate(7200deg)"
    carta.style.pointerEvents="auto"
    geroy.style.left="69px"
    geroy.style.top="10px"
    title.innerHTML="неудачи тебе✔✔✔✔✔✔"
    cartaX=Math.random()*500
    cartaY=Math.random()*500
    shagi=0
}

































































































