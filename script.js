'use strict'

function obtainValue() {
    var doObtain = +prompt('Enter Reaction out of 100') || '0'
    var doObtain2 = +prompt('Enter Memory out of 100') || '0'
    var doObtain3 = +prompt('Enter Visual out of 100') || '0'
    var doObtain4 = +prompt('Enter Verbal out of 100') || '0'
    if (doObtain < 100 && doObtain2 < 100 && doObtain3 < 100 && doObtain4 < 100 || 0) {
        var obtained = document.querySelector('.reaction #obtain')
        var obtained2 = document.querySelector('.memory #obtain')
        var obtained3 = document.querySelector('.visual #obtain')
        var obtained4 = document.querySelector('.verbal #obtain')
        obtained.textContent = `${doObtain}`
        obtained2.textContent = `${doObtain2}`
        obtained3.textContent = `${doObtain3}`
        obtained4.textContent = `${doObtain4}`
        var value = doObtain + doObtain2 + doObtain3 + doObtain4;
        return value / 4
    }
    else {
        alert('Enter value below 100')
        debugger
    }
}

const returnValue = obtainValue() || 0

function result() {
    var myResult = document.querySelector('.result-score #obtain')

    myResult.textContent = returnValue

    return returnValue
}

const returnResult = result()

function decideGrade() {

    const toggleChange = document.querySelector('.result h2')

    if (returnResult > 0 && returnResult <= 35) {
        toggleChange.textContent = "Nice"
    }

    else if (returnResult > 35 && returnResult <= 55) {
        toggleChange.textContent = "Awesome"
    }

    else if (returnResult => 55 && returnResult <= 85) {
        toggleChange.textContent = "Great"
    }

    else {
        toggleChange.textContent = "Excellent"
    }
}

decideGrade()


