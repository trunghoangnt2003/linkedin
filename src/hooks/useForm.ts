import { useState, ChangeEvent } from "react";

interface FormValues {
    [key: string]: any;
}

interface GetInputProps {
    name: string;
    type: string;
    value?: string;
}

const useForm = (initialValues: FormValues = {}) => {
    const [values, setValues] = useState<FormValues>(initialValues);

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value, type, checked } = e.target;
        if (type === "checkbox") {
            if (checked) {
                setValues((prevValues) => ({
                    ...prevValues,
                    [name]: [...(prevValues[name] || []), value],
                }));
            } else {
                setValues((prevValues) => ({
                    ...prevValues,
                    [name]: prevValues[name].filter((v: string) => v !== value),
                }));
            }
        } else {
            setValues({ ...values, [name]: value });
        }
    };

    const setFieldValue = (name: string, value: any) => {
        setValues({ ...values, [name]: value });
    };

    const reset = () => {
        setValues(initialValues);
    };

    const getInputProps = (name: string, type: string, value?: string) => {
        switch (type) {
            case "checkbox":
                return {
                    name,
                    value,
                    checked: (values[name] || []).includes(value || ""),
                    onChange: handleInputChange,
                };
            case "radio":
                return {
                    name,
                    value,
                    checked: values[name] === value,
                    onChange: handleInputChange,
                };
            default:
                return {
                    name,
                    value: values[name] || "",
                    onChange: handleInputChange,
                };
        }
    };

    return { values, reset, setFieldValue, getInputProps };
};

export default useForm;
