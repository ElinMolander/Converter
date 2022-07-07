/*
1 meter = 3.281 feet
1 feet = 0.3048 meter
1 liter = 0.264 gallon
1 gallon= 3.78541178 liter
1 kilogram = 2.204 pound
*/



const meterResultEl = document.getElementById("length-Result")

function converterMeterToFeet(num1){
    let calculationMetersToFeet = num1 * 3.280
    let calculationFeetToMeters = num1 * 0.3048
     meterResultEl.innerHTML = `<p>${num1} meters = ${calculationMetersToFeet.toFixed(3)} feet | ${num1} feet = ${calculationFeetToMeters.toFixed(3)}  </p>`
   

}

const volumeResult = document.getElementById("volume-Result")

function converterLiterToGallon (num1){
     let calculationLitertoGallon = num1 * 0.264
     let calculationGalontoLiter = 3.78541178 * num1
     volumeResult.innerHTML = `<p> ${num1} liters = ${calculationLitertoGallon.toFixed(3)} gallons | ${num1} gallons = ${calculationGalontoLiter.toFixed(3)} </p>`
    
}
const massResult = document.getElementById("mass-Result")

 function converterkilogramToPound (num1){
    let calculationKgToPounds = num1 * 2.204
    let calculationPoundsToKg = 0.45359237 * num1
    massResult.innerHTML = `<p> ${num1} kilos = ${calculationKgToPounds.toFixed(3)} pounds | ${num1} pounds = ${calculationPoundsToKg.toFixed(3)} kilos </p>`
         
   
        
}
    


let inputEl = document.getElementById("input-El")
let convertbutton =document.getElementById("convertbutton")

convertbutton.addEventListener("click", function(){
    let num1 = inputEl.value
    converterkilogramToPound (num1)
    converterLiterToGallon (num1)
    converterMeterToFeet (num1)
})

