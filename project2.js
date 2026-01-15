const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
  e.preventDefault()

  const height =parseInt(document.querySelector("#height").value)
  const weight =parseInt(document.querySelector("#weight").value)
  const result =document.querySelector("#results")
  const conclusion =document.querySelector("#conclusion")

  if(height === '' || height <0 || isNaN(height)){
    result.innerHTML = "Please give a valid height";
  }
  else if(weight === '' || weight <0 || isNaN(weight)){
    result.innerHTML = "Please give a valid weight";
  }
  else{
    const bmi =(weight / ((height*height)/10000)).toFixed(2)

    results.innerHTML = bmi
    if(results.innerHTML < 18.6){
       conclusion.innerHTML = "<span>underweight</span>"
    }
    if(results.innerHTML > 18.6 && results.innerHTML <24.9){
      conclusion.innerHTML = "<span>Normal range</span>"
   }
   else{
    conclusion.innerHTML = "<span>overweight</span>"
   }
   
  }
});