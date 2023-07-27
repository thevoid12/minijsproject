const tagsEl=document.getElementById('tags');
const textarea=document.getElementById('textarea')

textarea.focus() //automatically focuses on the textarea when page is loaded

textarea.addEventListener('keyup',(e)=>{
    createTags(e.target.value)
    if(e.key==='Enter')
    {
        setTimeout(()=>{
            e.target.value=''
        },10)
        randomSelect()
    }
})
const createTags=(input)=>{
const tags=input.split(',').filter(tag=>tag.trim()!=='').map(tag=>tag.trim())
console.log(tags);
tagsEl.innerHTML=''
tags.forEach(tag=>{
    const tagElement=document.createElement('span')//creating a span tag 
    tagElement.classList.add('tag') //giving a classname to the created tag
    tagElement.innerText=tag; //adding the typed tag in the span
    tagsEl.appendChild(tagElement)
})
}
const randomSelect=()=>{
    const times=30
    const interval=setInterval(()=>{
        const randomTag=pickRandomTag()
        highlightTag(randomTag)
        setTimeout(()=>{
            unhighlightTag(randomTag)
        },100)
    },100);

    setTimeout(()=>{
        clearInterval(interval)
        setTimeout(()=>{
            const randomtag=pickRandomTag();
            highlightTag(randomtag)
        },100)
    },times*100)
}

function pickRandomTag(){
    const tags=document.querySelectorAll('.tag')
    return tags[Math.floor(Math.random()*tags.length)]
}

function highlightTag(tag)
{
    tag.classList.add('highlight')
}
function unhighlightTag(tag)
{
    tag.classList.remove('highlight')
}