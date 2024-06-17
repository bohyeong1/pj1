
/////////////////////////사이드메뉴
const sideBtn = document.querySelectorAll('.side-box')
const terms_description = document.querySelector('.terms-description')
const des_cancel = document.querySelector('.des-cancel')
const lang = document.querySelector('.lang')
const creater = document.querySelector('.creater')

des_cancel.addEventListener('click', ()=>{
    terms_description.style.width = '0vw'
    terms_description.style.height = '0vh'
    terms_description.style.opacity = 0 
})
sideBtn[1].addEventListener('click', ()=>{
    html.scrollTop = 0
})
sideBtn[0].addEventListener('click', (e)=>{

    if(terms_description.style.width==='15vw'){
        terms_description.style.width = '0vw'
        terms_description.style.height = '0vh'
        terms_description.style.opacity = 0    

    }else{
        terms_description.style.width = '15vw'
        terms_description.style.height = '40vh'
        terms_description.style.opacity = 1
    }
    
})



//gnb라인
const nav = document.querySelector('.nav')
const body = document.querySelector('body')
const header = document.querySelector('header')
const main_menu = document.querySelector('.main-menu')
const menus = document.querySelectorAll('.menu')
const log_in = document.querySelector('.log-in')
const menu_line = document.querySelector('.lines')
const eaglesMenu = ['HISTORY', '마스코트']
const playerMenu = ['선수단']
const menuMap = {
  EAGLES : eaglesMenu,
  PLAYER : playerMenu
}
var submenu;

function createDropdown(menus, target){
  submenu = document.createElement('div')
  submenu.className = 'sub-menu'
  for(menu of menus){
    submenu.innerHTML += `<span id='${menu}'>${menu}</span>`
  }
  nav.appendChild(submenu)
  const hisMenu = document.querySelector('#HISTORY')
  const mascot = document.querySelector('#마스코트')
  const player = document.querySelector('#선수단')

  if(target.innerText==='EAGLES'){
    hisMenu.addEventListener('click', ()=>{location.href = '../eaglesMenu/history/history.html'})
    mascot.addEventListener('click', ()=>{location.href = '../eaglesMenu/mascot/mascot.html'})
    }else if(target.innerHTML==='PLAYER'){
        player.addEventListener('click', ()=>{location.href = '../playerMenu/player/player.html'})
    }
}



function showSubmenu(e){
    
    if(e.target.className === 'menu'){
    if(e.target===menus[0] || e.target===menus[1]){ 
        menu_line.style.opacity = '1'
        if(submenu){
            submenu.remove()
        } 
        main_menu.style.height = 12.5+'vh'
        createDropdown(menuMap[e.target.innerText], e.target)  

    }

    if(e.target === menus[2]||e.target===menus[3]){
        if(submenu){
            submenu.remove()
        }        
        menu_line.style.opacity = '1'
        main_menu.style.height= 6+'vh'
    }
    main_menu.style.background = 'rgb(78, 74, 74,0.5)'
    }
}

log_in.addEventListener('mouseover',()=>{main_menu.style.background = 'rgb(78, 74, 74,0.5)', menu_line.style.opacity = '1'})
log_in.addEventListener('mouseleave',()=>{main_menu.style.background='black',     menu_line.style.opacity = '0'})
main_menu.addEventListener('mouseover', showSubmenu)
nav.addEventListener('mouseleave', ()=>{
    if(submenu){submenu.remove()}
    main_menu.style.background='black'
    main_menu.style.height=6+'vh'
    menu_line.style.opacity = '0'})








////////////////////////////////////섹션1


const html = document.querySelector('html')
const section1_img1 = document.querySelector('.section1-img1')
const section1_img2 = document.querySelector('.section1-img2')
const section1_img3 = document.querySelector('.section1-img3')
const sec4_logo = document.querySelector('.sec4-logo')
const section_5 = document.querySelector('.section-5')
const sec5_2_imgbox1 = document.querySelector('.sec5-2-imgbox1')
const sec5_2_imgbox2 = document.querySelector('.sec5-2-imgbox2')
const sec5_2_imgbox3 = document.querySelector('.sec5-2-imgbox3')
const sec5_2_imgbox4 = document.querySelector('.sec5-2-imgbox4')
const sec6_logo = document.querySelector('.sec6-logo')

var vool = true               //////////////////섹션3 1번만 동작하게 하는 변수




function partImg(){
    let pixOfH = window.innerHeight/100

    if(html.scrollTop>pixOfH*32.5&&html.scrollTop<152.5*pixOfH){

        section1_img1.style = 'transform:scale(1)'
        section1_img2.style = 'transform:scale(1)'
        section1_img3.style = 'transform:scale(1)'
        section1_img1.style.top = 0
        section1_img2.style.top = '-40vh'
        section1_img2.style.left = 0
        section1_img3.style.top = '-80vh'
    }else{
        section1_img1.style = 'transform:scale(1.7)'
        section1_img2.style = 'transform:scale(1.7)'
        section1_img3.style = 'transform:scale(1.7)'
        section1_img1.style.top = '20vh'
        section1_img2.style.top = '-20vh'
        section1_img2.style.left = '35vw'
        section1_img3.style.top = '-60vh'   
    }
//////////////////////////////////////////////////////////////            섹션2 이벤트

    if(html.scrollTop>90*pixOfH){
        displayTitle()
    }
    if(html.scrollTop>262.5*pixOfH && html.scrollTop<462.5*pixOfH){
        sec2_content.style.transform = `translateX(${-((html.scrollTop-262.5*pixOfH)/pixOfH)}vw)`
    }

////////////////////////////////////////////////////////////////// 섹션3이벤트

    if(html.scrollTop>630*pixOfH){
        if(vool){
            movePhoto()
            vool = false
        }

    }


/////////////////////////////////////////////////////////////                섹션4이벤트
    if(html.scrollTop>760*pixOfH&&html.scrollTop<830*pixOfH){

    sec4_logo.style.transform = `scaleX(${1-(html.scrollTop-760*pixOfH)/pixOfH*0.0015}) translateY(${(html.scrollTop-760*pixOfH)/pixOfH*0.1}vh)`
    sec4_logo.style.opacity = `${1-(html.scrollTop-760*pixOfH)/pixOfH*0.008}`    
    }
    if(html.scrollTop>820*pixOfH&&html.scrollTop<870*pixOfH){
        section_5.style.transform = `translateY(${(html.scrollTop-820*pixOfH)/pixOfH*2.5}vh)`
    }

//////////////////////////////////////////////////////////               섹션5-2이벤트
    if(html.scrollTop>1010*pixOfH&&html.scrollTop<1295*pixOfH){
        sec5_2_imgbox2.style.transform = `translateY(${(html.scrollTop/pixOfH-1010)*0.3108108108108108}vh)`
        sec5_2_imgbox4.style.transform = `translateY(${(html.scrollTop/pixOfH-1010)*0.3108108108108108}vh)`
        sec5_2_imgbox3.style.transform = `translateY(${-(html.scrollTop/pixOfH-1010)*0.1108108108108108}vh)`
        sec5_2_imgbox1.style.transform = `translateY(${-(html.scrollTop/pixOfH-1010)*0.1108108108108108}vh)`

    }

////////////////////////////////////////////////////////                   섹션6 이벤트
    if(html.scrollTop>1210*pixOfH){
        sec6_logo.style.top = 0
    }else{
        sec6_logo.style.top = '20vh'
    }

    console.log((html.scrollTop)/pixOfH)
}

window.addEventListener('scroll', partImg)




////////////////////////////////섹션2
const sec2_container1 = document.querySelector('.sec2-container1')
const sec2_container2 = document.querySelector('.sec2-container2')
const sec2_container3 = document.querySelector('.sec2-container3')
const sec2_container4 = document.querySelector('.sec2-container4')
const sec2_slogun_wrapper = document.querySelector('.sec2-slogun-wrapper')
const sec2_content = document.querySelector('.sec2-content')



const displayTitle = async()=>{
    sec2_container1.style.transform = 'translateY(-30vh)'
    sec2_container2.style.transform = 'translateY(-50vh)'
    sec2_container3.style.transform = 'translateY(-70vh)'
    sec2_container4.style.transform = 'translateY(-90vh)'

    await wait(1100)
    sec2_slogun_wrapper.style.transform = 'translateY(-8vh)'

}









//////////////////////////섹션3
const photo_box = document.querySelector('.photo-box')
const section_3 = document.querySelector('.section-3')
for(i=1; i<67; i++){
    photo = document.createElement('div')
    photo.className = 'img-box'
    photo.innerHTML = `<img class='photo-img' src='../../project-img/img/slide/slide-photo${i}.jpg' onclick="location.href='../gallery/photo.html'">`
    photo.style.left = `${Math.random()*10+35}vw`
    if(i===66){photo.style.left = '40vw'}
    photo_box.appendChild(photo)
}
const photos = document.querySelectorAll('.img-box')

const movePhoto = async() =>{       
    
    for(let i=1; i<67; i++){
        photos[i-1].style.width = `${Math.random()*5+17.5}vw`
        photos[i-1].style.height = `${Math.random()*3+10.5}vw`
        photos[i-1].style.opacity=1
        photos[i-1].style.left = `${Math.random()*3+38.5}vw`
        photos[i-1].style.top = `${Math.random()*3+41.5}vh`
        if(i===66){
            photos[i-1].style.width ='29vw'
            photos[i-1].style.height = `17vw`
            photos[i-1].style.opacity=1
            photos[i-1].style.left = '35.5vw'
            photos[i-1].style.top = '38vh'
        }
        await wait(100)
    }

    await wait(2000)
    for(let i=1; i<52; i++){
           let radi = Math.random()*360*Math.PI/180
           let cosRad = Math.cos(radi)  //left거리
           let sinRad = Math.sin(radi)    //top거리
           let hypotenuse = 150            //빗변거리
           photos[i-1].style.left = `${hypotenuse*cosRad}vw`
           photos[i-1].style.top = `${hypotenuse*sinRad}vh`
      
        await wait(10)
    }

        let i = 0
        let k = 52
        let q = 1
        for(let j=1; j<16; j++){
            photos[k-1].style.left = `${-Math.random()*1.5+25.5*(q-1)-11}vw`
            photos[k-1].style.top = `${Math.random()*3+i*40}vh`
            photos[k-1].style.width = `${Math.random()*3+19.5}vw`
            photos[k-1].style.height = `${Math.random()*2+8.5}vw`
            
            if(k===66){
                photos[k-1].style.left = '35.5vw'
                photos[k-1].style.top = '38vh'
                photos[k-1].style.width ='29vw'
                photos[k-1].style.height = `17vw`
            }
            if(k===59){
                photos[k-1].style.left = `90vw`
                photos[k-1].style.top = `80vh`
                photos[k-1].style.width = `${Math.random()*3+18.5}vw`
                photos[k-1].style.height = `${Math.random()*2+10.5}vw`
            }
            k++
            q++

            if(j%5===0){i++}
            if((q-1)%5===0){q=1}
            await wait(10)     
    }
}

function wait(time){
    return new Promise(dum => setTimeout(dum,time))
}






////////////////////////////////////////////////////////섹션6

const sec6_con_box = document.querySelectorAll('.sec6-con-box')
const sec6_img = document.querySelectorAll('.sec6-img')
const sec6_tex = document.querySelectorAll('.sec6-tex')

function extendContent(e){

    sec6_con_box.forEach((ele)=>{ele.style.width = '25%'})
    sec6_img.forEach((ele)=>{ele.style.opacity = 0})
    sec6_tex.forEach((ele)=>{ele.style.transform = 'translateY(0vh)'})

    this.style.width = '40%'
    this.childNodes[3].style.opacity = 1
    this.childNodes[1].childNodes[1].style.transform = 'translateY(-8vh)'
    this.childNodes[1].childNodes[3].style.transform = 'translateY(-8vh)'
}


sec6_con_box.forEach((ele)=>{ele.addEventListener('mouseover', extendContent)})



/////////////////////////로드 이벤트
const root_wrapper = document.querySelector('.root_wrapper')

async function disappearWrapper(){
    root_wrapper.style.opacity = 0

    await wait(700)
    root_wrapper.remove()
}

window.addEventListener('load', disappearWrapper)












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



for(sideBt of sideBtn){
sideBt.addEventListener('mousemove', mousemove)
sideBt.addEventListener('mousedown', mousedown)
sideBt.addEventListener('mouseout',()=>{
    cursorParent.style.display = 'none'
})}

des_cancel.addEventListener('mousemove', mousemove)
des_cancel.addEventListener('mousedown', mousedown)
des_cancel.addEventListener('mouseout',()=>{
    cursorParent.style.display = 'none'
})


main_menu.addEventListener('mousemove', mousemove)
main_menu.addEventListener('mousedown', mousedown)
main_menu.addEventListener('mouseout',()=>{
    cursorParent.style.display = 'none'
})








const masBtn = document.querySelector('.masBtn')
const cheerBtn = document.querySelector('.cheerBtn')
const sec6_container = document.querySelectorAll('.sec6-container')



for(photo of photos){
    photo.addEventListener('mousemove', mousemove)
    photo.addEventListener('mousedown', mousedown)
    photo.addEventListener('mouseout',()=>{
        cursorParent.style.display = 'none'
})
}

masBtn.addEventListener('mousemove', mousemove)
masBtn.addEventListener('mousedown', mousedown)
masBtn.addEventListener('mouseout',()=>{
    cursorParent.style.display = 'none'
})


cheerBtn.addEventListener('mousemove', mousemove)
cheerBtn.addEventListener('mousedown', mousedown)
cheerBtn.addEventListener('mouseout',()=>{
    cursorParent.style.display = 'none'
})


for(sec6_contain of sec6_container){
sec6_contain.addEventListener('mousemove', mousemove)
sec6_contain.addEventListener('mousedown', mousedown)
sec6_contain.addEventListener('mouseout',()=>{
    cursorParent.style.display = 'none'
})}