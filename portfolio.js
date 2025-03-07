const tablinks = document.getElementsByClassName('tab-links')
const tabcontents = document.getElementsByClassName('tab-contents')

// About me
function show(tabname){
    for(tablink of tablinks){
        tablink.classList.remove('active-link')
    }

    for(tabcontent of tabcontents){
        tabcontent.classList.remove('active-tab')
    }

    event.currentTarget.classList.add('active-link')        
    document.getElementById(tabname).classList.add('active-tab')
}


// small screen (open-close menu)
window.addEventListener('DOMContentLoaded', ()=>{  
    const nav = document.getElementById('sidemenu')
    const open = document.getElementById('open')
    const close = document.getElementById('close')
    
    open.addEventListener('click', ()=>{
        nav.style.right = '0px'
    })
    close.addEventListener('click', ()=>{
        nav.style.right = '-240px'
    })
    
})