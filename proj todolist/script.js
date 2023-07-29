const texts=document.getElementById('text');
const subbutton=document.getElementById('btn');
const container=document.getElementById('container');

subbutton.addEventListener('click',()=>{
    //console.log(texts.value);
    const task=document.createElement("h2");
    task.classList.add('tasks');
    const node = document.createTextNode(texts.value);
    task.appendChild(node);
    container.appendChild(task);
    texts.value='';
    task.addEventListener('click',()=>{
        //console.log(task.innerText);
       // t.remove();
       task.classList.toggle('active'); //add and remove alternatively
    })
})
//const tasks=document.querySelectorAll('.tasks');

// tasks.forEach((t)=>{
//     t.addEventListener('click',()=>{
//         console.log(t.innerText);
//        // t.remove();
//        t.classList.toggle('active'); //add and remove alternatively
//     })
// })

