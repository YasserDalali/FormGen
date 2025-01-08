const loginFormSchema = {
    name: "login Form",
    fields:
        [{
            name: "email",
            label: "Email",
            type: "email",
            required: true,
            placeholder: "Enter your email",
        },
        {
            name: "password",
            label: "Password",
            type: "password",
            required: true,
            placeholder: "Enter your password",
        },
    {
        name: "PIN",
        label: "PIN",
        type: "select",
        required: true,
        options: [
            { value: "1", label: "1" },
            { value: "2", label: "2" },
            { value: "3", label: "3" },
        ]
        
    }]
}

export default loginFormSchema;