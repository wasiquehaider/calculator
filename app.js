//============== Calculator==============

var showDisplay = document.getElementById("display"),
    value1,
    value2,
    operatorSign,
    calculateValue;



function operator(sign) {
    operatorSign = sign
    showDisplay.innerHTML = operatorSign
}

function cal(num) {
    num = num.toString()
    if (operatorSign == undefined) {
        if (value1 == undefined) {
            value1 = num;
        }
        else {
            value1 += num
            //     value = value + num

        }
        value1 = showDisplay.innerHTML = value1

    } else {
        if (value2 == undefined) {
            value2 = num;
        }
        else {
            value2 += num
            //     value = value + num
        }
        value2 = showDisplay.innerHTML = value2
    }

}


function equal(){
    value1 = parseInt(value1)
    value2 = parseInt(value2)

    if(operatorSign == '+')
    {
        calculateValue = value1 + value2

    }
     showDisplay.innerHTML = calculateValue

}