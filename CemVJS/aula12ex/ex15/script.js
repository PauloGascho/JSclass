function verify(){
    var data = new Date()
    var year = data.getFullYear()
    var fyear = document.getElementById('txtyear')
    var res = document.querySelector('div#res')

    if(fyear.value.length == 0 || Number(fyear.value) > year) {
        window.alert('[ERROR] Please, check the data and try again')
    } else {
        var fgen = document.getElementsByName("radgen")
        var age = year - Number(fyear.value)
        var gender = ''
        var img = document.createAttribute
        if (fgen[0].checked){
            gender = 'Man'
        } else if (fgen[1].checked){
            gender = 'Woman'
        }
        res.style.textAlign = 'center'
        res.innerHTML = `${gender}'s detected with ${fyear} years old`
    }
}