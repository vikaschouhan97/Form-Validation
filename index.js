

function validate(){
    let firstNameInput = document.getElementById('first-name').value
    let lasttNameInput = document.getElementById('last-name').value
    let emailInput = document.getElementById('email').value
    let cityInput = document.getElementById('city').value
    let stateInput = document.getElementById('state').value
    let zipInput = document.getElementById('zip').value
    let tnCInput = document.getElementById('tnC').checked
   
    let error = false


    if(firstNameInput.length){
        document.getElementById('first-name-valid').style.display ='block' 
        document.getElementById('first-name-invalid').style.display ='none' 
    }else{
        document.getElementById('first-name-invalid').style.display ='block' 
        document.getElementById('first-name-valid').style.display ='none' 
        error = true
    }

  
    if(lasttNameInput.length){
        document.getElementById('last-name-valid').style.display='block'
        document.getElementById('last-name-invalid').style.display='none'
    }else{
        document.getElementById('last-name-invalid').style.display='block'
        document.getElementById('last-name-valid').style.display='none'
        error = true
    }
    
   
   if(emailInput.length && 
    emailInput.includes("@") && 
    emailInput.includes(".") && 
    emailInput.lastIndexOf(".") <= emailInput.length-3  &&
    emailInput.indexOf("@") !== 0){
    document.getElementById('email-valid').style.display='block'
    document.getElementById('email-invalid').style.display='none'
   }else{
    document.getElementById('email-invalid').style.display='block'
    document.getElementById('email-valid').style.display='none'
    error = true
   }


   if(cityInput && cityInput.length >= 3){  
    document.getElementById("valid_city").style.display='block'
    document.getElementById("invalid_city").style.display='none'
   }else{
    document.getElementById("invalid_city").style.display='block'
    document.getElementById("valid_city").style.display='none'
    error = true
   }
   
  
   if(zipInput && zipInput.length === 6 && parseInt(zipInput)){  
    document.getElementById('valid_zip').style.display='block'
    document.getElementById('invalid_zip').style.display='none'
   }else{
    document.getElementById('invalid_zip').style.display='block'
    document.getElementById('valid_zip').style.display='none'
    error = true
   }
   

   if(tnCInput){
    document.getElementById('tnC_invalid').style.display ='none'
   }else{
    document.getElementById('tnC_invalid').style.display ='block'
    error = true
   }


   if(stateInput !== "Select your State"){
    document.getElementById('state_valid').style.display = 'block'
    document.getElementById('state_invalid').style.display = 'none'
   }else{
    document.getElementById('state_invalid').style.display = 'block'
    document.getElementById('state_valid').style.display = 'none'
    error = true
   }
   if(!error){
    alert('details saved successfully')

    
    document.getElementById('first-name').value = ''
    document.getElementById('last-name').value = ''
    document.getElementById('email').value = ''
    document.getElementById('city').value = ''
    document.getElementById('state').value = 'Select your State'
    document.getElementById('zip').value = ''
    document.getElementById('tnC').checked = false

    

    document.getElementById('first-name-valid').style.display ='none'
    document.getElementById('last-name-valid').style.display='none'
    document.getElementById("valid_city").style.display='none'
    document.getElementById('email-valid').style.display='none'
    document.getElementById('valid_zip').style.display='none'
    document.getElementById('state_valid').style.display = 'none'

   }
}
