
    
    function submitform(){

        const Fname = document.getElementById('Fname').value;
        const Lname = document.getElementById('Lname').value;
        const ymail = document.getElementById('ymail').value;
        const ymob = document.getElementById('ymob').value;

        swal({
          title: "Thank You!",
          text: "Our Team will contact you!",
          icon: "success",
          confirmButtonText: "OK",
        }).then(function(){
          window.location = "index.html";
        })
      }

        // Swal.fire({
        //     position: "top-end",
        //     icon: "success",
        //     title: `Thank you, ${Fname} ${Lname}, for contacting us. We will reach you soon`,
        //     showConfirmButton: false,
        //     timer: 1500
        //   });

        
