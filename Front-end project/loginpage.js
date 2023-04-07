
$(document).ready(function() {
  $("#form").validate({
    rules: {
      User: {
        required: true
      },
      password: {
        required: true,
        pattern:"^[0-9-+s()]*$",
      }
    },
    messages: {
      User: {
        required: "*User must be required"
      },
      password: {
        required: "*Password Must be Required"
      }
    },
  });
    $('#submit').click(function() {
          if(
           $("#form").valid()){
          alert("Thank You! You Are successfully Login");
          } else {
            alert("please fill the form")
           }
  })
  });