function submitButton() {
    const email = document.getElementById("usernameOrEmail").value;
    const pass = document.getElementById("password").value;
    if (
        (email == "" || email == null) &&
        (pass == "" || pass == null)
    ) {
        alert("Please enter email and password");
        return false;
    } else if (email == "" || email == null) {
        alert("Please enter your emailid. ");
        return false;
    } else if (pass == "" || pass == null) {
        alert("Please enter your  password ");
        return false;
    }



    const checkEmail = email.indexOf("@gmail.com");
    if (checkEmail == -1) {
        alert("email is not valid");
        return false;
    }

    const passwordCheck = pass.length;
    if (passwordCheck < 8) {
        alert("Password length must be atleast 8 characters");
    } else {
        alert(email + "\n" + pass);
    }

}