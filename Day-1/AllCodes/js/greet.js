 function sayWelcome(){
        var firstName = document.getElementById("firstname").value;
        var lastName=document.getElementById("lastname").value;
        var msg = "Welcome "+firstName+" "+lastName;
        document.getElementById("message").innerHTML=msg;
    }