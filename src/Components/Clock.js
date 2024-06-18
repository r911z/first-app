import React from "react";
import "./Clock.css"

function Clock() {
    const [date, setDate] = React.useState(new Date());

    React.useEffect(() => {
        const timerID = setInterval(() => tick(), 1000);

        return function cleanup() {
            clearInterval(timerID);
        };
    });

    function tick() {
        setDate(new Date());
    }

    return (
        <div>
            <h1 className="clock-msg">{date.toLocaleTimeString()} en Dallas, Tx.</h1>
        </div>
    );
}

export default Clock;