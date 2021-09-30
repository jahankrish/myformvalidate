class FormValidation{
    formValues = {
        username :"",
        email :"",
        password :"",
        phoneNumber :"",
        education :"",
        gender :"",
        yourLanguage :""
    }
    errorValues = {
        usernameErr :"",
        emailErr :"",
        passwordErr :"",
        phoneNumberErr :"",
        educationErr :"",
        genderErr :"",
        yourLanguageErr :""
    }
    showErrorMsg(index,msg){
        const form_group = document.
        getElementsByClassName('form-group') [index]
        form_group.classList.add('error')
        form_group.getElementsByTagName('span')[0].textContent =msg
    }
    showSuccessMsg(index){
        const form_group =document.getElementsByClassName('form-group')[index]
        form_group.classList.remove('error')
        form_group.classList.add('success')
    }
    getInputs(){

        this.formValues.username =document.getElementById("username").value.trim()
        this.formValues.email =document.getElementById("email").value.trim()
        this.formValues.password =document.getElementById("password").value.trim()
        this.formValues.phoneNumber =document.getElementById("phoneNumber").value.trim()
        this.formValues.education =document.getElementById("education").value.trim()
        // this.formValues.uploadPhoto =document.getElementById("file").value.trim()
        if(document.getElementById("gender1").checked)
        this.formValues.gender ='male';
        else if(document.getElementById("gender").checked)
        this.formValues.gender ='female';
        else
        this.formValues.gender='';
        // console.log(document.getElementById("gender").checked,document.getElementById("gender1").checked);



        if(document.getElementById("language1").checked)
        this.formValues.yourLanguage ='tamil';
        else if(document.getElementById("language2").checked)
        this.formValues.yourLanguage ='english';
        else if(document.getElementById("language3").checked)
        this.formValues.yourLanguage ='hindi';
        else
        this.formValues.yourLanguage='';
        // console.log(document.getElementById("language1").checked,document.getElementById("language").checked,document.getElementById("language3").checked);
        // this.formValues.yourLanguage =document.getElementById("yourLanguage").value.trim()
    }
    validateUsername(){
        if(this.formValues.username ===""){
            this.errorValues.usernameErr ="*please enter your name"
            this.showErrorMsg(0,this.errorValues.usernameErr)
        } else if(this.formValues.username.length <= 4 ){
            this.errorValues.usernameErr = "* Username must be atLeast 5 Characters"
            this.showErrorMsg(0,this.errorValues.usernameErr)
        } else if(this.formValues.username.length > 14){
            this.errorValues.usernameErr = "* Username should not exceeds 14 Characters"
            this.showErrorMsg(0,this.errorValues.usernameErr)
        } else {
            this.errorValues.usernameErr = ""
            this.showSuccessMsg(0)
        }
    }
    validateEmail(){
        //abc123@gmail.com
        const regExp = /^([a-zA-Z0-9-_\.]+)@([a-zA-Z0-9]+)\.([a-zA-Z]{2,10})(\.[a-zA-Z]{2,8})?$/
        if(this.formValues===""){

            this.errorValues.emailErr = "*please enter the email*"
            this.showErrorMsg(1,this.errorValues.emailErr)
        }else if(!(regExp.test(this.formValues.email))){
            this.errorValues.emailErr = "* Invalid Email"
            this.showErrorMsg(1,this.errorValues.emailErr)
        } else {
            this.errorValues.emailErr = ""
            this.showSuccessMsg(1)
        }    
    }
    validatePassword(){
        if(this.formValues.password === ""){
            this.errorValues.passwordErr = "* Please Provide a Password"
            this.showErrorMsg(2,this.errorValues.passwordErr)
        } else if(this.formValues.password.length <= 4){
            this.errorValues.passwordErr = "* Password must be atleast 5 Characters"
            this.showErrorMsg(2,this.errorValues.passwordErr)
        } else if(this.formValues.password.length > 10){
            this.errorValues.passwordErr = "* Password should not exceeds 10 Characters"
            this.showErrorMsg(2,this.errorValues.passwordErr)
        } else {
            this.errorValues.passwordErr = ""
            this.showSuccessMsg(2)
        } 
    }
    validatePhoneNumber(){
        const phoneNo = /^\d{10}$/
        if(this.formValues.phoneNumber === ""){
            this.errorValues.phoneNumberErr = "* Please Enter your Phone Number"
            this.showErrorMsg(3,this.errorValues.phoneNumberErr)
        } else if(phoneNo.test(this.formValues.phoneNumber)){
            this.errorValues.phoneNumberErr = ""
            this.showSuccessMsg(3)
        } else {
            this.errorValues.phoneNumberErr = "* Invalid Phone Number"
            this.showErrorMsg(3,this.errorValues.phoneNumberErr)
        }
    }
    validateEducation(){
       console.log(this.formValues.education);
       if(this.formValues.education === ""){
        this.errorValues.educationErr ="*please choose the your education*";
        this.showErrorMsg(4,this.errorValues.educationErr);
       }
       else{
        this.errorValues.educationErr ="";
        this.showSuccessMsg(4);
       }              
}
    validateUploadPhoto(){
        
    }
    validateGender(){
        console.log(this.formValues.gender);
      if(this.formValues.gender === ''){
          this.errorValues.genderErr = "* please enter the value";
          this.showErrorMsg(5,this.errorValues.genderErr)
      }else{
        this.errorValues.genderErr ="";
        this.showSuccessMsg(5);
      }     
}
    validateYourLanguage(){

        console.log(this.formValues.yourLanguage);
    
        if(this.formValues.yourLanguage === ''){
            this.errorValues.yourLanguageErr = "* please enter the value";
            this.showErrorMsg(6,this.errorValues.yourLanguageErr)
        }else{
           
          this.errorValues.yourLanguageErr ="";
          this.showSuccessMsg(6);
        }   
    }
    alertMessage(){
        const {usernameErr,
        emailErr,
        passwordErr,
        phoneNumberErr,
        educationErr,
        genderErr,
        yourLanguageErr 
        }  = this.errorValues


         if(usernameErr === "" && emailErr === "" && passwordErr === "" && educationErr === "" && genderErr === "" &&  yourLanguageErr === "" ){


            swal ("Registration Successful","Thank you,  "+this.formValues.username, "Success");
            console.log(this.formValues);
            this.removeInputs();

         }else{

            swal ("Give Valid Inputs", "click ok to continue" , "Error");
        }
    }
    // removeInputs(){
    //     const form_groups =document.getElementsByClassName("form-group");
    //     console.log(form_groups);
    //     Array.from(form_groups).forEach(element => {

    //        element.getElementsByTagName(input)[0].value =""
    //        element.getElementsByTagName(span)[0].textContent =""
    //        element.classList.remove('success')

    //     })
    // }

}

const validateUserInputs = new  FormValidation() 

document.getElementsByClassName('form')[0].addEventListener('submit' , event =>{

   
    event.preventDefault()
    validateUserInputs.getInputs()
    validateUserInputs.validateUsername()
    validateUserInputs.validateEmail()
    validateUserInputs.validatePassword()
    validateUserInputs.validatePhoneNumber()
    validateUserInputs.validateEducation()
    validateUserInputs.validateGender()
    validateUserInputs.validateYourLanguage()
    validateUserInputs. alertMessage()
    // validateUserInputs. removeInputs() 



});