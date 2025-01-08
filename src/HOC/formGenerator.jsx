const FormGenerator = ({ schema, handleFormChange }) => {
    if (!schema || !schema.fields) {
        return null;
    }

    const { name, fields } = schema;
    return (
        <div className="w-full max-w-md mx-auto p-6">
            <h1 className="text-2xl font-bold text-gray-800 mb-6">{name}</h1>

            <div className="space-y-4">
                {fields.map((f, index) => {
                    return (
                        <label key={index} htmlFor={f.name} className="block">
                            <span className="text-gray-700 font-medium mb-1 block">{f.label}</span>
                            {["text", "email", "password", "tel", "url", "number", "date", "time", "datetime-local", "search"].includes(f.type) ? (
                                <input
                                    type={f.type}
                                    name={f.name}
                                    placeholder={f.placeholder}
                                    required={f.required || false}
                                    onChange={handleFormChange}
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-2"
                                />
                            ) : f.type === "select" ? (
                                <select 
                                    name={f.name} 
                                    required={f.required || false} 
                                    onChange={handleFormChange}
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-2"
                                >
                                    {f?.options.map((opt, i) =>
                                        <option key={i} value={opt.value}>{opt.label}</option>)}
                                </select>
                            ) : f.type === "checkbox" ? (
                                <input 
                                    type="checkbox" 
                                    name={f.name} 
                                    required={f.required || false} 
                                    onChange={handleFormChange}
                                    className="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 h-4 w-4"
                                />
                            ) : f.type === "radio" ? (
                                <div className="space-y-2">
                                    {f?.options?.map((opt, i) => (
                                        <div key={i} className="flex items-center">
                                            <input
                                                type="radio"
                                                id={`${f.name}-${i}`}
                                                name={f.name}
                                                value={opt.value}
                                                required={f.required || false}
                                                onChange={handleFormChange}
                                                className="rounded-full border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 h-4 w-4"
                                            />
                                            <label htmlFor={`${f.name}-${i}`} className="ml-2">{opt.label}</label>
                                        </div>
                                    ))}
                                </div>
                            ) : f.type === "textarea" ? (
                                <textarea
                                    name={f.name}
                                    placeholder={f.placeholder}
                                    required={f.required || false}
                                    onChange={handleFormChange}
                                    rows={f.rows || 4}
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-2"
                                />
                            ) : f.type === "file" ? (
                                <input
                                    type="file"
                                    name={f.name}
                                    required={f.required || false}
                                    onChange={handleFormChange}
                                    accept={f.accept}
                                    multiple={f.multiple || false}
                                    className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-600 hover:file:bg-indigo-100"
                                />
                            ) : null}
                        </label>
                    );
                })}
            </div>
        </div>
    );
};

export default FormGenerator;
