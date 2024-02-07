<script>
    function sendEmail(){
        Email.send({
    Host : "smtp.gmail.com",
    Username : "ss.deepthee@gmail.com",
    Password : "Deepthee@2001",
    To : 'ss.deepthee@gmail.com',
    From : document.getElementById("email").value,
    Subject : "New contact form Enquiry",
    Body : "Name: "+document.getElementById("name").value+"<br> Email:"+document.getElementById("email").value+
    "<br>Phone no.:"+document.getElementById("phone").value+
    "<br>message: "+document.getElementById("message").value
}).then(
  message => alert("message sent succesfully")
);
    }
</script>
