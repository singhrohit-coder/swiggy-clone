import * as Yup from "yup";

export const signInSchema = Yup.object({
    name: Yup.string().min(2).max(25).required("Please enter your name"),

    email: Yup.string().email().required("Please enter your email"),
    
    phoneNumber: Yup.string().matches(/^[0-9]{10}$/,
        "Phone number must be exactly 10 digits"
    ).required("Please enter your Phone Number")
});