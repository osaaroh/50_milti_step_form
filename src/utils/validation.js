let errorNameMsg =""
let errorEmailMsg =""
let errorPhoneMsg =""
let errorPlanMsg =""
let nameInput = ""
let emailInput = ""
let phoneInput = ""

window.addEventListener('load', function () {
    nameInput = document.querySelector("#name");
    emailInput = document.querySelector("#email");
    phoneInput = document.querySelector("#phone");
    errorNameMsg = document.querySelector(".error_input__name");
    errorEmailMsg = document.querySelector(".error_input__email");
    errorPhoneMsg = document.querySelector(".error_input__phone");
    errorPlanMsg = document.querySelector(".error_input__plan");
    
})

const step1ValidationTimeout = () => setInterval(() => {
    errorNameMsg.innerHTML = "";
    errorEmailMsg.innerHTML = "";
    errorPhoneMsg.innerHTML = "";
}, 8000);
const step2ValidationTimeout = () => setInterval(() => {
    errorPlanMsg.innerHTML =""
}, 8000);


const checkNameInput=()=>{
    if (nameInput.value.length === 0 || (/^\w+( \w+)*$/.test(nameInput.value))===false) {
        errorNameMsg.innerHTML = "Name can contain only letters";
        nameInput.classList.add('error_border')
        return  false;
    } 
    
    else {
        return true
    }
}
const checkEmailInput=()=>{
    const emailValidation = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (emailInput.value.length === 0 || (emailValidation.test(emailInput.value))===false) {
        errorEmailMsg.innerHTML = "Enter valid Email";
        emailInput.classList.add('error_border')
        return  false;
    } 
    
    else {
        return true
    }
}
const checkPhoneInput=()=>{
    if (phoneInput.value.trim().length === 0) {
        errorPhoneMsg.innerHTML = "This field is required";
        phoneInput.classList.add('error_border')
        return false;
    } 
    
    else {
        return true
    }
}

let step1Validation =()=>{
    checkNameInput();
    checkEmailInput();
    checkPhoneInput();
    step1ValidationTimeout()
    return [checkNameInput, checkEmailInput, checkPhoneInput]
}
let step2Validation =(obj)=>{
    errorPlanMsg = document.querySelector(".error_input__plan");
    if(obj.hasOwnProperty("plan")){
        errorPlanMsg.innerHTML="";
        return true
    } else {
        errorPlanMsg.innerHTML="Please choose a plan below";
        step2ValidationTimeout();
        return false
    }
    
}

export let isValid = (currentStep, formObjects)=>{
    if(currentStep===0){
        if(step1Validation()[0]()&&step1Validation()[1]()&&step1Validation()[2]()){
            console.log(formObjects)
            return true
        }
        else{
            return false
        }
    }
    else if(currentStep===1){
        if(step2Validation(formObjects)){
            console.log(formObjects)
            return true
        }
        else{
            return false
        }
    }
    else if(currentStep===2){
        return true
    }
    else if(currentStep===3){
        return true
    }
}


