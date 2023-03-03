import React from "react";

import { ButtonProps } from "../../redux/types";

const Button: React.FC<ButtonProps> = ({text, page, role, type, clickFunction, form}) => {

    let class_name: string = "";

    switch (page) {
        case "index":
            class_name += "index ";
            break;
        case "form": 
            class_name += "form ";
            break;
    }

    if (role) { class_name += "main " };

    switch (type) {
        case "button":
            class_name += "";
            break;
        case "reset":
            class_name += "";
            break;
        case "submit":
            class_name += "form-submit main ";
            break;
    }

    return (
        <button type={type} className={class_name.trimEnd()} onClick={clickFunction} form={form}>{text}</button>
    );
}

export default Button;