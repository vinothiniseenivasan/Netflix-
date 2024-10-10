export const validateData = (email ,password,fullName)=>{
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    const nameRegex = /^[a-zA-Z ]{2,30}$/.test(fullName);

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password);
    if(!nameRegex)
        {
            return(
                "Name must be between 2 to 30 characters and contain only letters and spaces."
            )
        }

    if(!emailRegex)
    {
        return(
            "Please enter a valid email address !"  
        )

    }
  
    if(!passwordRegex)
    {
        return("Password must be at least 8 characters long and include an uppercase letter, a lowercase letter, a digit, and a special character");
    }

   //    if both password and email is valid
    return null;

}