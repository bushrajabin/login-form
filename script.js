// =========================THIS IS FOR HEADER==========
const header = document.getElementById("mainHead");
const div = document.createElement("div");
div.className = "divForHead";
div.innerHTML = `
<img src="./images/logo.png" id="image"/>
<i class="fa-solid fa-user fa-2x"></i>`;
header.appendChild(div)




function loginForm() {
    //   IN THIS LINE WE GET ALL USER INPUT
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("Cp").value;


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
            if (!emailCheck) {
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
        }
        else if (confirmPassword != password) {
            alert("password does not match");
        }
        else {
            let person = {
                email: email,
                password: password
            };
            localStorage.setItem('person', JSON.stringify(person))

            // const showForm = document.getElementById("showhere");
            // showForm.style.display = "flex";

            document.getElementById("mainHead").style.display = "flex";
            document.getElementById("form1").style.display = "none"
            document.getElementById("box1").style.display = "flex";

        }
    }

}

// ----------------SHOW FORM------------------
// document.getElementById('login').addEventListener("click", () => {
//     let userData = JSON.parse(localStorage.getItem('person'))
//     const showForm = document.getElementById("showhere");
//     const show = document.createElement('div');
//     show.innerHTML = `
//          <h2> Email:${userData.email}</h2>
//          <h2> Password:${userData.password}</h2>`;
//     showForm.appendChild(show);

// })



// =============================THis FUNCTION for remove elemnt from local storage==========
// function removeItem() {
//     localStorage.removeItem('person');
//     document.getElementById("showhere").style.display = "none";

// }

// ==========THIS FUNCTION FOR CHANGEVISIBILITYOFICON===========

function showPassword() {


    var passField = document.getElementById("password");
    var showPass = document.getElementById("passwordDiv");
    if (passField.type === "password") {
        passField.type = "text";

        showPass.children[0].classList = "fa fa-lock-open fa-1x"

    } else {
        passField.type = "password";
        showPass.children[0].classList = "fa fa-lock fa-1x"

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
            // toast.classList =  `"fa-solid fa-circle-exclamation" ${message}`;
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
    }, 9000);
}







// password validation


