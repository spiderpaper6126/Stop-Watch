var jsMilisec = 0
var jsSec = 0
var jsMin = 0

var htmlmilisec = document.getElementById('msec')
var htmlsec = document.getElementById('sec')
var htmlMin = document.getElementById('min')

var interval;


function start(){
    
   interval = setInterval(function(){
        jsMilisec++
        htmlmilisec.innerText = jsMilisec
    
        if(jsMilisec >= 100){
            jsSec++
            htmlsec.innerText = jsSec
            jsMilisec = 0
        }
        else if(jsSec >= 59){
            jsMin++
            htmlMin.innerText = jsMin
            jsSec = 0
        }
    },10)

    document.getElementById('btn').disabled = true
}

function stop(){
    clearInterval(interval)
    document.getElementById('btn').disabled = false
}

function reset(){
    clearInterval(interval)
    jsMilisec = "00"
    jsMin = "00"
    jsSec = "00"
    htmlMin.innerHTML = jsMin
    htmlmilisec.innerHTML = jsMilisec
    htmlsec.innerHTML = jsSec
    document.getElementById('btn').disabled = false
}


