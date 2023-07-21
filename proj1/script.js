const panels=document.querySelectorAll('.panel')
//we have multiple class with same name of panels so we use queryselectorall. now we have an array of all panal class
panels.forEach((p)=>{
    p.addEventListener('click',()=>{
        removeActiveClasses();
        p.classList.add('active')//we can modify the class details witrh classList dom. now new class name will have panel as well as active
    })
})
let removeActiveClasses=()=>
{
    panels.forEach((p)=>{
        p.classList.remove('active')//remove all the active classes
    })
}