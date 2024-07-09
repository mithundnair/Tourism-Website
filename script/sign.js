function create() {

    const Fname = document.getElementById('Fname').value;
    const Lname = document.getElementById('Lname').value;
    const User = document.getElementById('User').value;
    const Password = document.getElementById('Password').value;

    if(User == "" || Password == ""){
        swal({
            icon: "error",
            title: "Field Empty",
            text: "Fields Are Mandatory",
            timer: 2000
          });
    } else {

        // Store the new username and password

        localStorage.setItem('username', User);
        localStorage.setItem('password', Password);

        swal({
            icon: "success",
            title: `Thank You ${Fname} ${Lname}`,
            text: "Your Account Has Been Created!",
            confirmButtonText: "OK",
        }).then(function(){
            window.location = "login.html";
        });
    }
}