const timer = document.querySelector('#clock')

setInterval(function(){
    let date = new Date();
    timer.innerHTML = date.toLocaleTimeString();
}, 1000)