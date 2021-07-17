import React from 'react';
import useForm from "./useForm";
import validateInfo from "./validateInfo";
const FormSignup = ({submitForm}) => {
    const {values,handleChange,handleSubmit,errors} = useForm(submitForm,validateInfo);
    return (
        <div className="form-content-right">
            <form className="form"
                  onSubmit={handleSubmit}>

                <h1>Get started with us today! Create your
                account by filling out the information below!</h1>

                <div className="form-input-container">
                    <label htmlFor="username"
                           className="form-label">Username</label>
                    <input type="text"
                           className="form-input"
                           placeholder="Enter your username"
                           name="username"
                           id="username"
                           value={values.username}
                           onChange={handleChange}
                    />
                    {errors.username && (<p>{errors.username}</p>)}
                </div>

                <div className="form-input-container">
                    <label htmlFor="email"
                           className="form-label">Email</label>
                    <input type="email"
                           className="form-input"
                           placeholder="Enter your email"
                           name="email"
                           id="email"
                           value={values.email}
                           onChange={handleChange}
                    />
                    {errors.email && (<p>{errors.email}</p>)}
                </div>

                <div className="form-input-container">
                    <label htmlFor="password"
                           className="form-label">Password</label>
                    <input type="password"
                           className="form-input"
                           placeholder="Enter your password"
                           name="password"
                           id="password"
                           value={values.password}
                           onChange={handleChange}
                    />
                    {errors.password && (<p>{errors.password}</p>)}
                </div>

                <div className="form-input-container">
                    <label htmlFor="password"
                           className="form-label">Confirm Password</label>
                    <input type="password"
                           className="form-input"
                           placeholder="Confirm your password"
                           name="password2"
                           id="password2"
                           value={values.password2}
                           onChange={handleChange}
                    />
                    {errors.password2 && (<p>{errors.password2}</p>)}
                </div>

                <button className="form-input-btn"
                        type="submit">Sign Up!</button>

                <span className="form-input-login">
                    Already have an account? Login <a href="#">here</a>
                </span>

            </form>

        </div>
    );
}

export default FormSignup;