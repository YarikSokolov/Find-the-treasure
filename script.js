let carta = document.getElementById("carta")
let title = document.getElementById("dz")
let geroy = document.getElementById("roga")
let minion = document.getElementById("minion")
let cartaX = Math.random() * 500
let cartaY = Math.random() * 500
let shagi = 0
let massiv = []
let treasure = document.getElementById("treasure")
// let activeCostume = 6
let active = 5
let images = [
    'minion.webp',
    'yC.gif',
    'shark.webp',
    '0.webp',
    '7.webp',
    'girl.webp',
    'cotik.webp',
    'memnomer1.webp',
    'bokser.webp',
    'c4.webp',
    'sheep.webp',
    '11.png',
]
let costumes = document.getElementsByClassName("costume")
let cursor = document.getElementById("cursor")
console.log(cartaX, cartaY);
document.body.onkeydown = function (event) {
    console.log(event.keyCode);
    if (event.keyCode == 37) {
        active = active - 1
        console.log(active);
        if (active == -1) {
            active = 11
        }
    }
    if (event.keyCode == 39) {
        active = active + 1
        if (active == 12) {
            active = 0
        }
        console.log(active)
    }
    if (event.keyCode == 32 || event.keyCode == 13) {
        console.log("пробел или энтнер")
        geroy.src = images[active]

    }
    for (let i = 0; i < 12; i++) {
        console.log("я тут");
        costumes[i].classList.remove("activeCostume")



    }
    costumes[active].classList.add("activeCostume")
}
document.body.onmousemove = function (event) {
    console.log(event.offsetX,event.offsetY);
    cursor.style.left=event.offsetX+"px"
    cursor.style.top=event.offsetY+"px"
}











let VZRYV = document.getElementById("VZRYV")
carta.onclick = function (event) {
    console.log("1vratartop", event.offsetX);
    shagi = shagi + 1
    massiv.push(shagi * 1000)
    console.log("1vratartop", event.offsetY);
    console.log(massiv);
    let pirateX = event.offsetX - 20
    let pirateY = event.offsetY - 50
    geroy.style.left = pirateX + "px"
    geroy.style.top = pirateY + "px"
    let X = pirateX - cartaX
    let Y = pirateY - cartaY
    let minionX = event.offsetX - 30
    let minionY = event.offsetY - 60
    minion.style.left = minionX + "px"
    minion.style.top = minionY + "px"
    let distance = Math.sqrt(X * X + Y * Y)
    console.log(distance);
    if (distance < 11) {
        title.innerHTML = "🎉🎉🎉victory!!!🎉🎉🎉      ТЫ нашел сокровище за " + shagi + " шагов"
        carta.style.pointerEvents = "none"
        treasure.style.transform = "scale(1) rotate(0)"
    }
    else if (distance < 20) {
        title.innerHTML = " ТЫ близко МАЛЕНЬКАЯ КИСКА👺👺👺👺"
    }
    else if (distance < 45) {
        title.innerHTML = "сокровище через 45! МЕТРОВ🎁🎁🎁🎁🎁🎁🎁🎁"
    }
    else if (distance < 80) {
        title.innerHTML = "ПОДАЛЬШЕ ИДИ В ПРАВАЛЕВО💩💩💩"
    }
    else if (distance < 140) {
        title.innerHTML = "ПРАВАЛЕВО ЕЩЕ ДАЛЕКО (СЛЕДУЯ ЯНДЕКС НАВИГАТОРУ)🤣🤣🤣"
    }
    else if (distance < 200) {
        title.innerHTML = "ВООЩЕ НЕ ТУДА💀💀💀💀"
    }
    else if (distance < 260) {
        title.innerHTML = "ДА КУДА ТЫ РУЛИШЬ?"
    }
    else if (distance < 320) {
        title.innerHTML = "NO NO NO"
    }
    else {
        title.innerHTML = "💩💩💩ВСЕ ОЧЕНЬ ДАЛЕКО💩💩💩"
    }
}
treasure.onclick = function (event) {
    treasure.style.transform = "scale(0) rotate(7200deg)"
    carta.style.pointerEvents = "auto"
    geroy.style.left = "69px"
    geroy.style.top = "10px"
    title.innerHTML = "неудачи тебе✔✔✔✔✔✔"
    cartaX = Math.random() * 500
    cartaY = Math.random() * 500
    shagi = 0
}
shop.onclick = function (event) {
console.log("МАГАЗИН  . Желаю сногсшибательных продаж И головокружительных доходов,Народ чтоб вас брал на абордаж,И бизнес мчался в гору год от года!Чтоб кризисы вас мимо обошли,Простоев не случалось в важном деле,И чтобы никогда вы на мели  С прекрасным магазином не сидели");
shop.style.transform="scale(0) rotate(14400deg)"
setTimeout(function () {
    VZRYV.style.opacity=1
},6000)
setTimeout(function () {
    VZRYV.style.opacity=0
},8000)
}