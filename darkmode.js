const body = document.querySelector('body')
const navigationBar = document.querySelector('.navigationBar')
const menuContainer = document.querySelector('.menuContainer')
const sliderContainer = document.querySelector('.sliderContainer')
const sliderCore = document.querySelector('.sliderCore');
let mode = document.querySelector('.mode')
let icon = document.querySelector('#icon')
icon.className="fas fa-sun fa-2x"
const title1 = document.querySelector('.title1')
const pass1 = document.querySelector('.pass1')
const p2title = document.querySelector('.p2title')
const divContainer = document.querySelector('.divContainer')
let img1= document.querySelector('.img1')
let img2 = document.querySelector('.img2')
let img3 = document.querySelector('.img3')
const firstdiv = document.querySelector('.firstdiv')
const seconddiv = document.querySelector('.seconddiv')
const thirddiv = document.querySelector('.thirddiv')
const p3title = document.querySelector('.p3title')
const primary = document.querySelector('.primary')
const secondary = document.querySelector('.secondary')
const disabled = document.querySelector('.disabled')
const outline = document.querySelector('.outline')
const altoutline = document.querySelector('.altoutline')
const disabled2 = document.querySelector('.disabled2')
const p3textcontainer = document.querySelector('.p3textcontainer')
const p3text = document.querySelector('.p3text')
const home = document.querySelector('#l1')
const about = document.querySelector('#l2')
const projects = document.querySelector('#l3')
const contact = document.querySelector('#l4')





sliderContainer.addEventListener('click', ()=>{
    sliderCore.classList.toggle('sliderCoreDark')
    body.classList.toggle('bodyDark')
    navigationBar.classList.toggle('navigationDark')
    menuContainer.classList.toggle('menuContainerDark')
    sliderContainer.classList.toggle('sliderContainerDark')
    mode.classList.toggle('modeDark')
    mode.textContent = 'Dark Mode'
    divContainer.classList.toggle('divContainerDark')
    firstdiv.classList.toggle('firstdivDark')
    seconddiv.classList.toggle('seconddivDark')
    thirddiv.classList.toggle('thirddivDark')
    p3title.classList.toggle('p3titleDark')
    primary.classList.toggle('primaryDark')
    secondary.classList.toggle('secondaryDark')
    disabled.classList.toggle('disabledDark')
    outline.classList.toggle('outlineDark')
    altoutline.classList.toggle('altoutlineDark')
    disabled2.classList.toggle('disabled2Dark')
    p3textcontainer.classList.toggle('p3textcontainerDark')
    p3text.classList.toggle('p3textDark')

    

    if(mode.classList.contains('modeDark')){
        icon.className = "fas fa-moon fa-2x"
        icon.style.color = 'whitesmoke'
        img1.src='./pics/undraw_conceptual_idea_dark.svg'
        img2.src='./pics/undraw_feeling_proud_dark.svg'
        img3.src="./pics/undraw_proud_coder_dark.svg"
    }else{
        icon.className = "fas fa-sun fa-2x"
        icon.style.color= '#424242'
        img1.src='./pics/undraw_conceptual_idea_light.svg'
        img2.src='./pics/undraw_feeling_proud_light.svg'
        img3.src="./pics/undraw_proud_coder_light.svg"
    }
    title1.classList.toggle('title1Dark')
    pass1.classList.toggle('pass1Dark')
    p2title.classList.toggle('p2titleDark')
    img2.classList.toggle('img2Dark')
})
home.addEventListener('click',()=>{
    scrollTo(0,0)
    
})
about.addEventListener('click',()=>{
    scrollTo(0,713.6)
    
})
projects.addEventListener('click',()=>{
    scrollTo(0,1427.2)
    
})
projects.addEventListener('click',()=>{
    scrollTo(0,2140.8)
    
})