function Validate() {
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;  
    if (password != confirmPassword) {
        alert("Passwords do not match.");
        return false;
    } else {
        if(password.length < 8) {  
            alert("Password length must be at least 8 characters");
            return false;  
        }  
        alert("Passwords match!");
    }
}