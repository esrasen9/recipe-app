import React,{useState} from 'react';
import FormSignup from "./FormSignup";
import FormSuccess from "./FormSuccess";
import image from "./img/pexels-photo-3850998.jpeg"
import "./Form.css";
const Form = () => {
    const [isSubmitted,setIsSubmitted] = useState(false);

    const submitForm = () => {
        setIsSubmitted(true);
    }

    return (
        <div className="form-container">
            <span className="close-btn">X</span>
            <div className="form-content-left">
                <img src={image} alt=""/>
            </div>
            {
                <div className="form-content-right">
                    {
                      !isSubmitted ? <FormSignup submitForm={submitForm}/>
                          : <FormSuccess/>
                    }
                </div>
            }
        </div>
    );
}

export default Form;