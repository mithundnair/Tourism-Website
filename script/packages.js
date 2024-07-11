

function BookTickets() {
    var myModal = new bootstrap.Modal(document.getElementById('bookingModal'), {
        keyboard: false
    });
    myModal.show();
}

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