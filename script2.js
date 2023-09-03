// Function for main head
function Navbar() {
    const header = document.getElementById("mainHead");
    const div = document.createElement("div");
    div.className = "divForHead";
    div.innerHTML = `
    <img src="./images/logo.png" id="image"/>
    <i class="fa-solid fa-user fa-2x" onclick="showHideDiv()" ></i>`;
    header.appendChild(div)
}
Navbar();
// FUNCTION FOR BOX
function forBox() {
    document.getElementById("box1").style.display = "flex"
}
// forBox()
// FUNCTION FOR LOGIN FORM
async function loginForm() {

    // //   IN THIS LINE WE GET ALL USER INPUT
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("Cp").value;
    const number = document.getElementById("Contact").value;
    const DOB = document.getElementById("Dob").value;
    const profileInput = document.getElementById("file").files[0];
    // Check length=
    const passCheck = password.length;
    const emailCheck = email.includes("@gmail.com")
    //iN THIS LINE WE CHECK SOME CONDITIONS FOR EMAIL AND PASWORD
    if (name === "" && email === "" && password === "" && number === "" && DOB === "") {
        const msg = "Please enter all fields , it can't be empty!!";
        showToast(msg, "error");
    } else if (name == "" || email == "" || password == "" || confirmPassword == "" || number == "" || DOB == "") {
        if (name == "") {
            const msg = "Please enter yourFullName. It can't be empty!! ";
            showToast(msg, "error");
        } else if (email == "") {
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
                name,
                email,
                password,
                confirmPassword,
                number,
                DOB,
            };
            localStorage.setItem('person', JSON.stringify(person));
            document.getElementById("mainHead").style.display = "flex";
            document.getElementById("form1").style.display = "none"
            document.getElementById("box1").style.display = "flex";
        }
    }
}

// THIS FUNCTION FOR TOAST BOX
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
    }, 9000);
}

// THIS FUNCTION IS FOR SHOWPASSWORDVISIBILITY
function showPassword() {
    var passField = document.getElementById("Cp");
    var showPass = document.getElementById("passwordDiv");
    if (passField.type === "password") {
        passField.type = "text";
        showPass.children[0].classList = "fa fa-lock-open fa-1x"
    } else {
        passField.type = "password";
        showPass.children[0].classList = "fa fa-lock fa-1x"
    }
}
// THIS FUNCTION IS FOE UPLOAD IMAGE 
function uploadImage() {
    let profilePicture = document.getElementById("picture");
    let inputFile = document.getElementById("file")
    inputFile.onchange = function () {
        profilePicture.src = URL.createObjectURL(inputFile.files[0])
    }
}
uploadImage()
// CHECK IF DATA ALREADY SAVE THAN DON'T SHOW THE LOGIN FORM
window.addEventListener("load", function () {
    // Your code to handle the page load event here

    if (localStorage.getItem("person")) {
        const forContainer = document.getElementById("contain");
        forContainer.style.display = "flex";
      

        createNavbar();
    }
});


// FILE TO BASE 64 CONVERTER
// function fileToBase64(file) {
//     return new Promise((resolve, reject) => {
//         if (!file) {
//             reject("No file provided");
//             return;
//         }
//         const reader = new FileReader();

//         reader.onload = function (e) {
//             const base64Data = e.target.result;
//             console.log(base64Data)
//         };

//         reader.readAsDataURL(file);
//     });
// }