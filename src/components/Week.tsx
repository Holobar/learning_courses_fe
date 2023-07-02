import React, {useState} from "react";
import "./Week.css";

const Week = ({weekData}: any) => {
    const [expanded, setExpanded] = useState(false);

    const toggleExpand = () => {
        setExpanded(!expanded);
    };

    if (weekData.odkleni === "Locked") {
        weekData.description = null;
        weekData.video_path = null;
        weekData.file_path = null;
    }

    return (
        <div className={`container ${expanded ? "expanded" : ""}`}>
            <div className="container-header">
                <h3>
                    Teden{" "}
                    {weekData.odkleni === "Locked"
                        ? weekData.week + "(Locked)"
                        : weekData.week}
                </h3>
            </div>
            <a href="#" className="expand-link" onClick={toggleExpand} key="expand-link">
                {weekData.odkleni === "Locked" ? "" : expanded ? "" : "Razširi"}
            </a>
            <div className="container-content">
                <img src={weekData.video_path} alt="Image"/>
                <p>{weekData.description}</p>
                {expanded && (
                    <div className="close-button">
                        <a href="#" onClick={toggleExpand} key="close-button-link">
                            Zapri
                        </a>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Week;
