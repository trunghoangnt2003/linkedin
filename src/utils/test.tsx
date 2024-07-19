import React from "react";
import useForm from "../hooks/useForm";

const MyForm: React.FC = () => {
    // Khởi tạo hook useForm với các giá trị mặc định
    const form = useForm({
        name: "",
        email: "",
        schoolSelected: [],
        gender: "",
    });

    console.log(form.values);

    return (
        <form>
            {/* Text Input */}
            <div>
                <label>
                    Name:
                    <input
                        type="text"
                        {...form.getInputProps("name", "text")}
                    />
                </label>
            </div>

            <div>
                <label>
                    Email:
                    <input
                        type="email"
                        {...form.getInputProps("email", "text")}
                    />
                </label>
            </div>

            {/* Checkbox */}
            <div>
                <label>
                    School 1
                    <input
                        type="checkbox"
                        {...form.getInputProps(
                            "schoolSelected",
                            "checkbox",
                            "school1"
                        )}
                        value="school1"
                    />
                </label>
                <label>
                    School 2
                    <input
                        type="checkbox"
                        {...form.getInputProps(
                            "schoolSelected",
                            "checkbox",
                            "school2"
                        )}
                        value="school2"
                    />
                </label>
            </div>

            {/* Radio Buttons */}
            <div>
                <label>
                    Male
                    <input
                        type="radio"
                        {...form.getInputProps("gender", "radio", "male")}
                        value="male"
                    />
                </label>
                <label>
                    Female
                    <input
                        type="radio"
                        {...form.getInputProps("gender", "radio", "female")}
                        value="female"
                    />
                </label>
            </div>

            {/* Reset Button */}
            <button type="button" onClick={form.reset}>
                Reset
            </button>
        </form>
    );
};

export default MyForm;
