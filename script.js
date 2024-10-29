
const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

function dropdown(){
    const dropdowns = document.querySelectorAll('.dropdown');

    dropdowns.forEach(dropdown => {
        const select = dropdown.querySelector('.select');
        const caret = dropdown.querySelector('.caret');
        const menu = dropdown.querySelector('.menu');
        const options = dropdown.querySelectorAll('.menu li');
        const selected = dropdown.querySelector('.selected');
    
        select.addEventListener('click', () => {
            select.classList.toggle('select-clicked');
            caret.classList.toggle('caret-rotate');
            menu.classList.toggle('menu-open');
        });
    
        options.forEach(option => {
            option.addEventListener('click', () => {
                const icon = selected.querySelector('i'); 
                selected.innerHTML = '';
                selected.appendChild(icon); 
                selected.innerHTML += ' ' + option.innerText; 
    
                select.classList.remove('select-clicked');
                caret.classList.remove('caret-rotate');
                menu.classList.remove('menu-open');
    
                options.forEach(option => {
                    option.classList.remove('active');
                });
                option.classList.add('active');
            });
        });
    });
    
}


function bannermove(){
   
    const arrowLeft = document.querySelector('.arrowleft');
    const arrowRight = document.querySelector('.arrowright');
    const banner = document.getElementById('banner');
    const firstElement = document.getElementById('one');
    const lastElement = document.getElementById('ten');

  
    arrowLeft.addEventListener('click', () => {
        banner.scrollTo({
            left: firstElement.offsetLeft - banner.offsetLeft,
            behavior: 'smooth'
        });
    });

   
    arrowRight.addEventListener('click', () => {
        banner.scrollTo({
            left: lastElement.offsetLeft - banner.offsetLeft,
            behavior: 'smooth'
        });
    });
}


function slideFAQ(){
    const faqs = document.querySelectorAll(".faq")

faqs.forEach((faq)=>
{
    faq.addEventListener("click",()=>
    {
        if(faq.classList.contains("active")){
            faq.classList.remove("active")
        }else{
            faq.classList.add("active")
            faqs.forEach((otherfaq)=>{
                if(otherfaq != faq){
                    otherfaq.classList.remove("active")
                }
            })
        }
        })
})

}
dropdown();
bannermove();
slideFAQ();