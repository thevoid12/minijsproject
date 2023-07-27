const counters=document.querySelectorAll('.counter')//will give us a nodelist
//
counters.forEach(counter=>{
    counter.innerText='0'
   
    const updateCounter=()=>{
        const target=parseInt(counter.getAttribute('data-target'))
        const c=Number(counter.innerText)

        const increment=target/500
        if(c<target)
            {
                counter.innerText=`${Math.ceil(c+increment)}`
                setTimeout(updateCounter,1)
            }
            else{
                counter.innerText=target;
            }

    }
    updateCounter()
})