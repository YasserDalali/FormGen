import React, { useState } from "react";
import FormGenerator from "./formGenerator";
import loginFormSchema from "./formCongif";

const FormPage = () => {
    const [formData, setFormData] = useState({});

    const handleFormChange = (data) => {
        setFormData({ ...formData, [data.target.name]: data.target.value || data.target.checked });
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        console.log("Form Data Submitted:", formData);
        setFormData({});
        // Process the data here (e.g., API call, validation, etc.)
    };


    return (
        <div>
            <h1>Welcome to the {loginFormSchema.name} Page</h1>
            <form action="" onSubmit={handleFormSubmit}>
                <FormGenerator schema={loginFormSchema} onFormChange={handleFormChange} />

                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default FormPage;
