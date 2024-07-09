
    
    function submitform() {
      const Fname = document.getElementById('Fname').value;
      const Lname = document.getElementById('Lname').value;
      const ymail = document.getElementById('ymail').value;
      const ymob = document.getElementById('ymob').value;
  
      if (Fname === "" || Lname === "" || ymail === "") {
          swal({
              title: "Error",
              text: "Fields Are Mandatory!!Cannot Be Empty!",
              icon: "error",
              confirmButtonText: "OK",
          });
      } else {
          swal({
              title: `Thank You ${Fname} ${Lname}!`,
              text: "Our Team will contact you!",
              icon: "success",
              buttons: false,
              timer: 1500,
              // confirmButtonText: "OK",
          // }).then(function() {
          //     window.location = "index.html";
          });

          setTimeout(function() {
            window.location = "index.html";
        }, 1500);
      }
  }
  

        // Swal.fire({
        //     position: "top-end",
        //     icon: "success",
        //     title: `Thank you, ${Fname} ${Lname}, for contacting us. We will reach you soon`,
        //     showConfirmButton: false,
        //     timer: 1500
        //   });

        
