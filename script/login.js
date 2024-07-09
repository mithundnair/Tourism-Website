

function log(){
    const Fname = document.getElementById('Usname').value;
    const Password = document.getElementById('pswd').value;

    const storedUser = localStorage.getItem('username');
    const storedPswd = localStorage.getItem('password');


    if (Fname === "" || Password === ""){
        swal({
            icon: "error",
            title: "Error",
            text: "Fields Are Mandatory!!Cannot Be Empty!",
            timer : 1500,
        });
    } else if (Fname !== storedUser || Password !== storedPswd) {
        swal({
            icon: "error",
            title: "Error",
            text: "Invalid Username or Password!",
            timer: 1500,
        });
    } else{
        localStorage.setItem('isLoggedIn','true')
        window.location = "index.html";
    }
}

function updateNavbar(){
    const isLoggedIn = localStorage.getItem('isLoggedIn');

    if(isLoggedIn === 'true'){
        document.getElementById('login-item').style.display = 'none';
        document.getElementById('sign-item').style.display = 'none';

        const logoutItem = document.createElement('li');
        logoutItem.classList.add('ml-auto');
        logoutItem.innerHTML = '<a href="#" class=" btn btn-danger text-white" onclick="logout()">Logout</a>';
        document.getElementById('right-nav').appendChild(logoutItem);
    }
}

function logout() {
    localStorage.removeItem('isLoggedIn');
    window.location = "login.html"
}

window.onload = updateNavbar;