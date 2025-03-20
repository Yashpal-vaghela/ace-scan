"use client";
import { useForm } from "react-hook-form";
import React, { useState } from "react";
import "../public/css/contact.css";


const contactUs = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [submitted, setSubmitted] = useState(false);

    const onSubmit = (data) => {
        console.log("Form Data:", data);
        setSubmitted(true);
    };
    return (
        <section className="contactForm" style={{ marginTop: '80px' }}>
            <div className="container mt-5 ">
                <div className="row justify-content-center align-items-center">
                    <div className="col-md-6 col-lg-5 p-4 ">
                        <form onSubmit={handleSubmit(onSubmit)} >
                            <div className="mb-3">
                                {/* <label className="form-label">Full Name</label> */}
                                <input
                                    type="text"
                                    className={`form-control ${errors.name ? "is-invalid" : ""} , custom-input`}
                                    placeholder="Enter your name"
                                    {...register("name", { required: "Name is required" })}
                                />
                                {errors.name && <div className="invalid-feedback">{errors.name.message}</div>}
                            </div>

                            <div className="mb-3">
                                {/* <label className="form-label">Mobile Number</label> */}
                                <input type="text"
                                    className={`form-control ${errors.mobile ? "is-invalid" : ""}`}
                                    placeholder="Enter your mobile number"
                                    {...register("mobile", {
                                        required: "Mobile number is required"
                                    })}
                                />
                                {errors.mobile && <div className="invalid-feedback">{errors.mobile.message}</div>}
                            </div>

                            {/* Email Address Field */}
                        <div className="mb-3">
                            {/* <label className="form-label">Email Address</label> */}
                            <input 
                                type="email"
                                className={`form-control ${errors.email ? "is-invalid" : ""}`}
                                placeholder="Enter your email"
                                {...register("email", { 
                                    required: "Email is required",
                                    pattern: {
                                        value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                                        message: "Enter a valid email address"
                                    }
                                })}
                            />
                            {errors.email && <div className="invalid-feedback">{errors.email.message}</div>}
                        </div>

                        {/* Message Field (Optional) */}
                        <div className="mb-3">
                            {/* <label className="form-label">Message</label> */}
                            <textarea 
                                className="form-control" 
                                rows="4"
                                placeholder="Your message (optional)"
                                {...register("message")}
                            ></textarea>
                        </div>

                         {/* Submit Button */}
                         <button type="submit" className="btn btn-primary w-100 btn_submit">Submit</button>

                        </form>
                    </div>

                </div>

            </div>
        </section>
    )
}

export default contactUs;