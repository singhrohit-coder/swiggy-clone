export const checkValidData = (email, password) => {
    // if email and password is not correct give me an error , here we use regex
    const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
    
    const isPasswordValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password);
    
    if (!isEmailValid) return "Email id is not valid";
    
    if (!isPasswordValid) return "Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character";
    
    return null;
    
};