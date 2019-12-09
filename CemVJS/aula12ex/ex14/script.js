function loader(){
    
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('image')
    var data = new Date()
    var hour = data.getHours()

    msg.innerHTML = `Is ${hour} hours now!`

    if (hour >= 0 && hour < 12){
        // Good morning!
        img.src = "morning.png"
        document.body.style.background = '#a69b27'
    }
    else if (hour >= 12 && hour < 18) {
        // Good afternoon!
        img.src = "afternoon.png"
        document.body.style.background = '#a26f5a'
    }
    else {
        // Good night!
        img.src = "night.png"
        document.body.style.background = '#1c3b5a'
    }
}