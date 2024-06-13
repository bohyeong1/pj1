const loading = document.querySelector('.loading')
const load_box = document.querySelector('.load-box')
const wrapper = document.querySelector('.wrapper')

//배경박스
for(let i=0; i<5; i++){
    for(let j=0; j<10; j++){
        const backbox = document.createElement('div')
        backbox.className = 'backbox'
        backbox.style.left = `${10*j}vw`
        backbox.style.top = `${20*i}vh`
        wrapper.appendChild(backbox)
    }
}
const backboxs = document.querySelectorAll('.backbox')
function backCloser(){
    let i = 1
    function backAnimation(y){    
        setTimeout(()=>{backboxs[y].classList.add('disappear')},20*i)
        i++ 
    
        if(i===51){i=1}}
    return backAnimation
}
const backClosers = backCloser()

function backBoxDisappear(){
    load_box.style.opacity = '0'
    const lists = new Set();
      
    while (50 > lists.size) {
      lists.add(Math.floor(Math.random()*50));
    }

    for(let list of lists){                   
        backClosers(list)        
    }
}

window.addEventListener('load',()=>{
    setTimeout(backBoxDisappear,3000)
})


//중앙 박스
for(let i=0; i<3; i++){
    for(let j=0; j<3; j++){
        divbox = document.createElement('div')
        divbox.className = 'divbox'
        divbox.style.left = `${2*j}vw`
        divbox.style.top = `${2*i}vw`
        loading.appendChild(divbox)}
}
divboxs = document.querySelectorAll('.divbox')

function closer(){
    let i = 1
    function boxAnimation(y){    
        setTimeout(()=>{divboxs[y].classList.add('boxAni')},300*i)
        i++ 
    
        if(i===10){i=1}}
    return boxAnimation
}
const closers = closer()

function boxDisappear(){    
    inventorys = []
    for(let i=0; i<9; i++){
        nums = Math.floor(Math.random()*9)
        if(inventorys.indexOf(nums)===-1){
            inventorys.push(nums)
        }
        else{i--}   
    }

    for(inventory of inventorys){   
                
        closers(inventory)        
    }
}

window.addEventListener('load', boxDisappear)


//백브라우저 텍스트 입력 효과
const back_Browser = document.querySelector('.backBrowser')
const text_box = document.querySelector('.text-box')
const textBoxs = document.querySelector('.text')
const btn = document.querySelector('.button')
const texts = ['Created by Seo Bo Hyeong...']

let i = 0;

const displayText = async() => {

    for(let i=0; i<texts.length; i++){
    const text = texts[i].split('')
    while(text.length){
        await wait(200)
        textBoxs.innerHTML += text.shift()
    }} 

    

    await wait(2600)
    const text3 = texts[0].split('')
    console.log(texts[0].length)
    while(text3.length > (texts[0].length - 3)){
        await wait(100)
        text3.pop()
        textBoxs.innerHTML = text3.join('')

    }
    await wait(800)
    text_box.style.opacity = 0  
    await wait(100)
    text_box.remove()
    wrapper.remove()
    btn.style.opacity = 1
}

function wait(time){
    return new Promise(dum => setTimeout(dum,time))
}



setTimeout(displayText, 4500)


//enter 버튼

function mouseHover(e){
    // console.log(e.target)
    if(e.target===btn){
        e.target.style.color = 'white'
        e.target.style.border = 'solid 1px white'
        e.target.style.background = 'black'
    }
}

back_Browser.addEventListener('mouseover',mouseHover)
btn.addEventListener('mouseout',()=>{
    btn.style.color = 'black'
    btn.style.background = 'white'
    cursorParent.style.display = 'none'
})


















//////////////////////////마우스 호버 이벤트
const cursorParent = document.querySelector('#mouse-cursor')
const cursorChild = document.querySelector('#inner-cursor')



let cursorX = 0, cursorY = 0
function mousemove(e){
    cursorParent.style.display = 'block'
    cursorX = e.pageX - cursorParent.offsetWidth/2
    cursorY = e.pageY - cursorParent.offsetHeight/2
    cursorParent.style.left = `${cursorX}px` 
    cursorParent.style.top = `${cursorY}px`
    e.target.style.cursor = 'none'
}
function mousedown(e){
    cursorChild.style.setProperty('--cursor-scale',0.8)
}
function mouseup(e){
    cursorChild.style.setProperty('--cursor-scale',1)
}


btn.addEventListener('mousemove', mousemove)
btn.addEventListener('mousedown', mousedown)
