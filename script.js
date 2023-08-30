
function loginForm() {
    //   IN THIS LINE WE GET ALL USER INPUT
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // IN THIS LINE WE CHECK PASS LENGTH OR VALIDATE EMAIL USING .LENGTH & EMAILINCLUDES
    const passCheck = password.length;
    const emailCheck = email.includes("@gmail.com")

    // ======================================iN THIS LINE WE CHECK SOME CONDITIONS FOR EMAIL AND PASWORD==============
    if (email === "" && password === "") {
        const msg = "Please enter email and password!! , it can't be empty!!";
        showToast(msg, "error");
    } else if (email == "" || password == "") {
        if (email == "") {
            const msg = "Please enter emailid. It can't be empty!! ";
            showToast(msg, "error");
        } else if (password == "") {
            if (!checkEmail) {
                const msg = "email is not valid and also enter password";
                showToast(msg, "invalid");
                //
            } else {
                const msg = "Please enter Password. It can't be empty!! ";
                showToast(msg, "error");
            }
        }
    } else {
        if (!emailCheck) {
            if (password < 8) {
                const msg =
                    "Email is not valid and Password length must be atleast 8 characters";
                showToast(msg, "invalid");
            } else {
                const msg = "email is not valid";
                showToast(msg, "invalid");
            }
            //
        } else if (password < 8) {
            const msg = "Password length must be atleast 8 characters";
            showToast(msg, "invalid");
        } else {
            const msg = `${email + "\n" + password}`;
            showToast(msg, "success");
        }
    }
}


// =======================IN THIS FUNCTION WE CHANGE THE VISIBLITY OF THE PASSWORD ICON==============
function passwordIcon() {
    const passwordType = document.getElementById("password");
    const passIcon = document.getElementById("passwordIcon");

    if (passwordType.type === "password") {
        passwordType.type = "text";
        passIcon.src = "images/passwordShow.png";

    } else {
        passwordType.type = "password";
        passIcon.src = "images/passwordHide.png"
    }
}


// ===============================================THIS FUNCTION IS FOR TOAST-BOX==================================================

let toastBox = document.getElementById("toastBox");

function showToast(message, type) {

    const toast = document.createElement("div");
    toast.className = "toast";
    switch (type) {
        case "success":
            toast.classList.add("Success");
            toast.innerHTML = `<img src="images/checkMark.png" > ${message} `;
            break;
        case "error":
            toast.classList.add("Error");
            toast.innerHTML = `<img src="images/crossMark.png" > ${message}`;

            break;
        case "invalid":
            toast.classList.add("Invalid");
            toast.innerHTML = `<img src="images/errorMark.png" > ${message}`;

            break;
        default:
            console.log("please see all toast type , may be some type issue !!");
            break;
    }
    toastBox.appendChild(toast);

    setTimeout(() => {
        toast.remove();
    }, 8000);
}


