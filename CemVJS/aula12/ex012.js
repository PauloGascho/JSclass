var now = new Date(
)
var hour = now.getHours()

if (hour < 12){
    console.log('Good morning!')
} else if (hour <= 18){
    console.log('Good afternoon!')
} else {
    console.log('Good night!')
}