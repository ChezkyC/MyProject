let btn = document.getElementById(`btn`)
let no = document.getElementById(`btnNo`)
let yes = document.getElementById(`btnYes`)

yes.addEventListener("click", () => {
    document.body.style.backgroundImage = "url('i-love-you-hearts-balloons.gif')";

    document.body.style.color = "rgb(200, 23, 23)"
    // document.body.style.alignSelf = "center"

    let loveU = document.createElement(`span`);
    loveU.setAttribute("class", "loveU");
    
    let header = document.getElementById(`header`)
    header.innerHTML = 'I ❤️ U'
    btn.innerHTML = ""
})

const heSaidNo1 = () => {
    document.body.style.backgroundImage = "url('sad.gif')";
    document.body.innerHTML = ""
}
no.addEventListener(`click`, heSaidNo1)