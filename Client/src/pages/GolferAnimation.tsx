import _React, { useEffect, useState } from "react";
import "../styles/GolferAnimation.css";
import golferImg from "../assets/putter.png";

const GolferAnimation = () => {
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setAnimate(true);
            setTimeout(() => setAnimate(false), 4000); // Reset animation after 4 seconds
        }, 5000); // Repeat every 5 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="golf-scene">
            <div className="golfer">
                <img src={golferImg} alt="Golfer swinging" className={animate ? "swing" : ""} />
            </div>
            <div className={`golf-ball ${animate ? "move-ball" : ""}`}></div>
            <div className="putting-green">
                <div className="flag"></div>
            </div>
        </div>
    );
};

export default GolferAnimation;
