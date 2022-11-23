window.addEventListener('scroll', reveal)

function reveal() {
    let sections = document.querySelectorAll('.reveal'); 
    
    for(let i = 0; i < sections.length; i++){
        let windowHeight = window.innerHeight; 
        let revealTop = sections[i].getBoundingClientRect().top;
        let revealPoint = 150;
        
        if(revealTop < windowHeight - revealPoint){
            sections[i].classList.add('active'); 
        }
        else {
            sections[i].classList.remove('active'); 
        }
    }
}