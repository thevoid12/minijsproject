const boxes=document.querySelectorAll('.box')
window.addEventListener('scroll',checkBoxes)
checkBoxes()

function checkBoxes(){
    const triggerBottom =window.innerHeight/5 *4 //innerheight gives the total height of the window screen
    boxes.forEach(box=>{
        const boxTop=box.getBoundingClientRect().top//it gets the top dimention of the box content
        if(boxTop<triggerBottom)
        {
            box.classList.add('show')
        }
        else{
            box.classList.remove('show')
        }
    })
}