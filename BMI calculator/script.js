function calculateBMI(){

    let weight = document.getElementById('weight').value
    let height = document.getElementById('height').value
    let result =  document.getElementById('result')

    let bmi = weight / (height/100)**2

    let resultMsg = "Your BMI is " + bmi.toFixed(2)

    if(bmi < 18.5)
    {
        resultMsg = resultMsg + " ( Under weight )"
        result.style.color = "red"
        
    }

    else if(bmi >= 18.5 && bmi < 25)
    {
        resultMsg = resultMsg + " ( Normal )"
        result.style.color = "green"
        
    }

    else if(bmi >= 25 && bmi < 30)
    {
        resultMsg = resultMsg + " ( Over weight )"
       
    }

    
    else if (bmi >= 30)
    {
        resultMsg = resultMsg + " ( Obes )"
        result.style.color = "yellow"
    }

    else{
        resultMsg = "Enter valid height & weight!"
    }

    result.innerHTML = resultMsg;
}
