var date = new Date()
setInterval(function(){ 
    const date = new Date()
    const spanTime = document.querySelector('span')
    var newDate_Change_in_everySecond = date.toLocaleTimeString()
    spanTime.innerHTML = newDate_Change_in_everySecond
}, 1000);


