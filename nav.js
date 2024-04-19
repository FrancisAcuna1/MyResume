document.addEventListener("DOMContentLoaded", function() {
  const navbar = document.getElementById("navbar1");

  window.addEventListener("scroll", function() {
      if (window.scrollY > 50) {
          navbar.classList.remove("transparent-navbar");
          navbar.classList.add("solid-navbar");
      } else {
          navbar.classList.remove("solid-navbar");
          navbar.classList.add("transparent-navbar");
      }
  });
});


    var toastbutton = document.getElementById('hirebtn');
    toastbutton.addEventListener('click', function(){
      toastr.success('Your Request Successfully Sent!', 'Success', {
        progressBar: true,
        textcolor: 'black',
        position: 'relative',
        zIndex: 1,
        // backgroundColor: 'black'
      });
    });
    

// function showalert(){
//   alert('Your Request was sending Successfully!');
// }