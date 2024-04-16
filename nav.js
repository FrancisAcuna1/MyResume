window.onscroll = function (event) {
    var scroll = window.pageYOffset;
    if (scroll > 100) {
      document.getElementById('navbar1').style ="background-color: white;"         
    }
    else{
      document.getElementById('navbar1').style = ""
    }
    }

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