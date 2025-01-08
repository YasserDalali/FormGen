## FormGenerator Component

The `FormGenerator` is a flexible React component that generates forms dynamically based on a schema configuration. It supports various input types and provides a consistent, styled interface using Tailwind CSS.

### Usage

```jsx
import FormGenerator from "./HOC/formGenerator";

// Example schema
const formSchema = {
  name: "User Registration",
  fields: [
    {
      name: "email",
      label: "Email Address",
      type: "email",
      placeholder: "Enter your email",
      required: true,
    },
    // ... more fields
  ],
};

// Example usage
const MyForm = () => {
  const handleFormChange = (e) => {
    // Handle form changes
  };

  return (
    <FormGenerator schema={formSchema} handleFormChange={handleFormChange} />
  );
};
```

### Props

- `schema` (required): An object containing form configuration

  - `name`: Form title
  - `fields`: Array of field objects

- `handleFormChange` (required): Function to handle form field changes

### Supported Field Types

1. Basic Inputs:

   - text
   - email
   - password
   - tel
   - url
   - number
   - date
   - time
   - datetime-local
   - search

2. Select Dropdown:

   ```jsx
   {
     type: "select",
     name: "country",
     label: "Country",
     options: [
       { value: "us", label: "United States" },
       { value: "uk", label: "United Kingdom" }
     ]
   }
   ```

3. Checkbox:

   ```jsx
   {
     type: "checkbox",
     name: "subscribe",
     label: "Subscribe to newsletter"
   }
   ```

4. Radio Buttons:

   ```jsx
   {
     type: "radio",
     name: "gender",
     label: "Gender",
     options: [
       { value: "male", label: "Male" },
       { value: "female", label: "Female" }
     ]
   }
   ```

5. Textarea:

   ```jsx
   {
     type: "textarea",
     name: "description",
     label: "Description",
     rows: 4
   }
   ```

6. File Upload:
   ```jsx
   {
     type: "file",
     name: "document",
     label: "Upload Document",
     accept: ".pdf,.doc",
     multiple: false
   }
   ```

### Styling

The component uses Tailwind CSS classes for styling and includes:

- Responsive design
- Focus states
- Hover effects
- Consistent spacing and alignment
- Custom file input styling
