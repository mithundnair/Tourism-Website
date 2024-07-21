

function log() {
    const Fname = document.getElementById('Usname').value;
    const Password = document.getElementById('pswd').value;

    const storedUser = localStorage.getItem('username');
    const storedPswd = localStorage.getItem('password');

    if (Fname === "" || Password === "") {
        swal({
            icon: "error",
            title: "Error",
            text: "Fields Are Mandatory!!Cannot Be Empty!",
            timer: 1500,
        });
    } 
    
    else if (Fname !== storedUser || Password !== storedPswd) {
        swal({
            icon: "error",
            title: "Error",
            text: "Invalid Username or Password!",
            timer: 1500,
        });
    } else {
        localStorage.setItem('isLoggedIn', 'true');
        window.location = "index.html";
    }
}

// Update navbar based on login status
function updateNavbar() {
    const isLoggedIn = localStorage.getItem('isLoggedIn');

    if (isLoggedIn === 'true') {
        document.getElementById('login-item').style.display = 'none';
        document.getElementById('sign-item').style.display = 'none';

        const logoutItem = document.createElement('li');
        logoutItem.classList.add('nav-item', 'ml-auto');
        logoutItem.innerHTML = '<a href="#" class="btn btn-danger text-white" onclick="logout()">Logout</a>';
        document.getElementById('right-nav').appendChild(logoutItem);
    }
}

// Function to log out the user
function logout() {
    localStorage.removeItem('isLoggedIn');
    window.location = "login.html";
}

// Update navbar on page load
window.onload = updateNavbar;