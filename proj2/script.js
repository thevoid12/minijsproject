const progress=document.getElementById('progress')
const prev=document.getElementById('prev')
const next=document.getElementById('next')
const circles=document.querySelectorAll('.circle') //more than one class named circle

let currentActive=1
next.addEventListener('click',()=>{
    currentActive++;
    if(currentActive>circles.length){
        currentActive=circles.length //at max we can go till the end. it shouldnt exceed the end
    }
    update()
})
prev.addEventListener('click',()=>{
    currentActive--;
    if(currentActive<1){
        currentActive=1 //at max we can go till the end. it shouldnt exceed the end
    }
   update()
})
 let update=()=>{
    circles.forEach((c,idx)=>{
        if(idx<currentActive) //adding blue color 
        {
            c.classList.add('active')
        }
        else{
            c.classList.remove('active')
        }
    })
    const actives=document.querySelectorAll('.active')//we get all active classes(with blue circle)
    progress.style.width=(actives.length-1)/(circles.length-1)*100+'%'
    if(currentActive==1)
    {
        prev.disabled=true
    }
    else if(currentActive==circles.length)
    {
        next.disabled=true;
    }
    else{
        prev.disabled=false
        next.disabled=false
    }

 }