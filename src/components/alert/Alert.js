import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Alert = () => {
    const alerts  = useSelector(state => state.toast);

    const [alert, setAlert] = useState({ type: "", message: "" });
    const [show, setShow] = useState(false);

    useEffect(() => {
        setShow(true);
        setTimeout(() => {
            setShow(false);
        }, 3000);
    }, [alerts]);

    const onClose = () => {
        setShow(false);
    };

    const color = alert.type === "success" ? "teal" : "tomato";

    return show ? (
        <div className={"bg-red-500"}>
            {alerts.message}
        </div>
    ) : null;
};

export default Alert;