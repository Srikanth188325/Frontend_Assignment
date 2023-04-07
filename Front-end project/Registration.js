

$(document).ready(function() {
  jQuery('#form').validate({
    rules: {
        
      first: "required",
      last: {
        required: true
      },
      mail: {
        required: true
      },
      mobile: {
        required: true,
        pattern: "^[0-9-+s()]*$",
      },
      DOB: {
        required: true
      },
      create: {
        required: true
      },
      confirm: {
        required: true
      }
    },
    messages: {
      first: {
        required: "First Name is Mandatory in the Field"
      },
      last: {
        required: "Last Name is Mandatory in the Field"
      },
      mail: {
        required: "Email-id is Mandatory in the Field"
      },
      mobile: {
        required: "Mobile Number is Mandatory in the Field"
      },
      DOB: {
        required: "Date of Birth is Mandatory in the Field"
      },
      create: {
        required: "Password is Mandatory in the Field"
      },
      confirm: {
        required: "Password is Mandatory in the Field"
      }
    },
  });
  
    $('#button').click(function() {
      if(
      $('#form').valid()){
      alert("Congratulations your form details are successfully submited");
      }
    });
  });