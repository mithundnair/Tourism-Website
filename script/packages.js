
function isLoggedIn() {
    return localStorage.getItem('isLoggedIn') === 'true';
}

// Function to handle booking tickets
function BookTickets() {
    if (isLoggedIn()) {
        // Show the booking form modal
        var myModal = new bootstrap.Modal(document.getElementById('bookingModal'), {
            keyboard: false
        });
        myModal.show();
    } else {
        // Show an alert and redirect to the login page
        swal({
            icon: "error",
            title: "Error",
            text: "You must log in to book tickets.",
            timer: 1500,
        }).then(() => {
            window.location.href = "login.html"; // Replace with your login page URL
        });
    }
}


// function BookTickets() {
    
//         var myModal = new bootstrap.Modal(document.getElementById('bookingModal'), {
//             keyboard: false
//         });
//         myModal.show();
// }

function showUserForm(user){
    document.getElementById('userform').classList.add('hidden');
    document.getElementById('childform').classList.add('hidden');
    document.getElementById('under').classList.add('hidden');

     // Show the selected user form
     document.getElementById('userform').classList.remove('hidden');
}

function showChildrenForm() {
    document.getElementById('userform').classList.add('hidden');

    //show the child form
    document.getElementById('under').classList.remove('hidden');
    document.getElementById('childform').classList.remove('hidden');
}

