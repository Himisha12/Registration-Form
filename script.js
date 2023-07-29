function showSuccessMessage() {
    const successMessage = document.getElementById('successMessage');
    const successContainer = document.getElementById('successContainer');
    successMessage.style.display = 'block';
    successContainer.style.display = 'block';
}

function hideSuccessMessage() {
    const successMessage = document.getElementById('successMessage');
    const successContainer = document.getElementById('successContainer');
    successMessage.style.display = 'none';
    successContainer.style.display = 'none';
}

function hideRefillButton() {
    const successContainer = document.getElementById('successContainer');
    successContainer.style.display = 'none';
}

function clearForm() {
    // Clear the form fields
    document.forms['myForm']['fname'].value = '';
    document.forms['myForm']['femail'].value = '';
    document.forms['myForm']['fphone'].value = '';
    document.forms['myForm']['fpass'].value = '';
    document.forms['myForm']['fcpass'].value = '';
    hideSuccessMessage();
    hideRefillButton();
}

function refillForm() {
    clearForm();
}

function clearErrors()
    {
        errors = document.getElementsByClassName('formerror');
        for(let item of errors)
        {
            item.innerHTML = ""; 
        }
    }
    function seterror(id,error)
    {
        elemment = document.getElementById(id);
        elemment.getElementsByClassName('formerror')[0].innerHTML = error;
    }
    function validateform()
    {
        var returnval = true;
        clearErrors();
        var name = document.forms['myForm']["fname"].value;
        if(name.length<3){
            seterror("name","*Length of name is too short");
            returnval = false;
        }
        // if(name.length==0){
        //     seterror("name","*Length of name cannot be zero");
        //     returnval = false;
        // }
        var email = document.forms['myForm']["femail"].value;
        if(email.length>30){
            seterror("email","*Length of email is too long!");
            returnval = false;
        }
        var phone = document.forms['myForm']["fphone"].value;
        if(phone.length!=10){
            seterror("phone","Phone number is not valid!");
            returnval = false;
        }
        var password = document.forms['myForm']["fpass"].value;
        if(password.length<4){
            seterror("pass","Password should be atleast 4 characters long!");
            returnval = false;
        }
        var cpassword = document.forms['myForm']["fcpass"].value;
        if(cpassword!=password){
            seterror("cpass","Passwords should match!");
            returnval = false;
        }
        if (returnval) {
            showSuccessMessage();
        } else {
            hideSuccessMessage();
        }
        // return returnval;
        return false;
    }