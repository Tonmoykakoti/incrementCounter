const counters = document.querySelectorAll('.counter')



counters.forEach((x)=>{
    x.innerHTML = 0
    const counterUpdate = () => {
        const dataTarget = Number(x.getAttribute('data-target'))
       
        const startCount = Number(x.innerHTML)
        const increment = dataTarget/100
        
        if(startCount < dataTarget){
            x.innerHTML = `${startCount + increment}`
            setTimeout(counterUpdate,10)
        }else{
            x.innerHTML = dataTarget
        }
    }
    counterUpdate()
})
