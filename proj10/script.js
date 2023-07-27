const jokeEl=document.getElementById('joke');
const jokeBtn= document.getElementById('btn');
jokeBtn.addEventListener('click',generateJoke)

generateJoke()

//using ASYNC/AWAIT
async function generateJoke() //since fetch is async we need to write awaite(await till the func get over). if we use await then we should mention async infront of function
{
    const config={
        headers:{
            'Accept':'application/json'
        }
    }
   const resp=await fetch('https://icanhazdadjoke.com',config) //will return a promise so await
    
   const data=await resp.json() //will return a promise
   jokeEl.innerHTML=data.joke;
}

//USING .THEN
// function generateJoke()
// {
//     const config={
//         headers:{
//             'Accept':'application/json'
//         }
//     }
//     fetch('https://icanhazdadjoke.com',config)
//     .then(res=>res.json())
//     .then(data=>{
//         jokeEl.innerHTML=data.joke;
//     })
// }