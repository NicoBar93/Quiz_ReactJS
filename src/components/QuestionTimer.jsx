import { useEffect, useState } from "react";

export default function QuestionTimer({ skipAnswer, timeout, mode }) {
    const [remainingTime, setRemainingTime] = useState(timeout);

    useEffect(() => {
        const timer = setTimeout(skipAnswer, timeout);

        return () => {
            clearTimeout(timer);
        };
    }, [timeout, skipAnswer]);

    useEffect(() => {
        const interval = setInterval(() => {
            setRemainingTime((prev) => prev - 10);
        }, 10);

        return () => {
            clearInterval(interval);
        };
    }, []);

    return <progress id="question-time" value={remainingTime} max={timeout} className={mode} />;
}