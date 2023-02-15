console.log("script running...")
document.querySelector('.cross').style.display = 'none';
document.querySelector('.hamburger').addEventListener("click", ()=>{
    document.querySelector('.sidebar').classList.toggle('sidebarGo')
    if(document.querySelector('.sidebar').classList.contains('sidebarGo')){
        document.querySelector('.ham').style.display = 'inline'
        document.querySelector('.cross').style.display = 'none'
    }
    else{
        document.querySelector('.ham').style.display = 'none'
        setTimeout(() => {
            document.querySelector('.cross').style.display = 'inline'
        }, 300);
        }
})

const text = document.querySelector(".about1");
const textLoad = () => {
    setTimeout(() => {
        text.textContent = "Developer,.....";
    }, 0);
    setTimeout(() => {
        text.textContent = "UI/UX Designer,";
    }, 5000);
    setTimeout(() => {
        text.textContent = "AI Enthusiast.";
    }, 10000);
}

textLoad();
setInterval(textLoad, 10000);