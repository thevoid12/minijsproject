const search=document.querySelector('.search');
const btn=document.querySelector('.btn');
const input=document.querySelector('.input');
btn.addEventListener('click',()=>{
    //search.classList.add('active');
    search.classList.toggle('active');//toggle adds 'active' to the class if its not present and remove 'active' if its present
    input.focus()//focuses on input 

})
