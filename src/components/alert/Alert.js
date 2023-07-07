import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Alert = () => {
    const { alerts } = useSelector(state => state.toast);
    const [alert, setAlert] = useState({ type: "", message: "" });
    const [show, setShow] = useState(false);

    useEffect(() => {
        if (alerts.length > 0) {
            setAlert(alerts[alerts.length - 1]);
            setShow(true);
            setTimeout(() => {
                setShow(false);
            }, 3000);
        }
    }, [alerts]);

    const onClose = () => {
        setShow(false);
    };

    const color = alert.type === "success" ? "teal" : "tomato";

    return show ? (
        <div>
            success
        </div>
    ) : null;
};

export default Alert;