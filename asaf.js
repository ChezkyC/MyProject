let yes = document.getElementById(`yes1`)
let no = document.getElementById(`btn1`)
yes.addEventListener("click", () => {
    document.body.style.backgroundImage = "url('i-love-you-hearts-balloons.gif')";
    document.body.style.color = "blue"
    yes.innerText = 'WILL YOU MARRY MY?'
    no.innerHTML = no1()
})

no1 = () => {
    no = document.getElementById(`btn`)
    no.innerHTML = ""
}



const heSaidNo1 = () => {
    document.body.style.backgroundImage = "url('sad.gif')";
    document.body.innerHTML = ""
}
no.addEventListener(`click`, heSaidNo1)