window.addEventListener("DOMContentLoaded", ()=>{
    const loader = document.querySelector('.loader')

    setTimeout( ()=>{
        loader.style.opacity = '0'
        setTimeout(()=>{
            loader.style.display = 'none'
        },500)
    },2000)
})



// setTimeout(function(){
//     alert('Hi');
// },1000)

// setInterval(function(){
//     alert("Hello")
// },3000)