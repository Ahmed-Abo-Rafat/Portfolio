
const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.controlls');
const sectBtn = document.querySelectorAll('.control');
const allSections = document.querySelector('.main-content');

//function to toggle pages
function pageTransitions () {

    for(let i = 0; i < sectBtn.length; i++){
        
        sectBtn[i].addEventListener('click', function() {
            let curentEl = document.querySelectorAll('.active-btn');
            //this action its remove class acitve-btn and add class active-btn to the new element
            curentEl[0].className = curentEl[0].className.replace('active-btn', '');
            this.className += ' active-btn';
        })

        sectBtn[i].addEventListener('click', (e) => {
            const id = e.target.dataset.id;
    
            //remove class active from all btn and add to sepcifec btn
            //sectBtn.forEach((btn) => {
           //     btn.classList.remove('active');
            //})
           // e.target.classList.add('active');
    
            //hide other sections
            //add class active to specif section and remove from other section
            sections.forEach((sec) => {
                sec.classList.remove('active');
            })
            const elment  = document.getElementById(id);
            elment.classList.add('active'); 
            
        })

        let themeBtn = document.querySelector('.theme-btn');
        themeBtn.addEventListener('click', () => {
            let element = document.body;
            let lightIcon = document.querySelector('.light');
            let moonIcon = document.querySelector('.moon');
            
            element.classList.toggle('light-mode');
            lightIcon.classList.toggle('hide');
            moonIcon.classList.toggle('hide');
        })
    }
    /*

    //section active class
    allSections.addEventListener('click', (e) => {
        const id = e.target.dataset.id;

        //remove class active from all btn and add to sepcifec btn
        //sectBtn.forEach((btn) => {
       //     btn.classList.remove('active');
        //})
       // e.target.classList.add('active');

        //hide other sections
        //add class active to specif section and remove from other section
        sections.forEach((sec) => {
            sec.classList.remove('active');
        })
        const elment  = document.getElementById(id);
        elment.classList.add('active'); 
        
    })

    */

}

pageTransitions();