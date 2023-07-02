import {Navigate} from "react-router-dom";
import React, {useState} from "react";

const Course = ({courseData}: any) => {

    //if true preusmeri na stran /courseWeeks
    const [redirectToCourseWeeks, setRedirectToCourseWeeks] = useState(false);

    //shrani course id, da ga prenese na drugo stran
    const [courseId, setCourseId] = useState();

    //ob kliku se sproži preusmeritev na /courseWeeks
    const courseClick = (courseId: any) => {
        setRedirectToCourseWeeks(true);
        setCourseId(courseId);
    };

    //if true preusmeri
    if (redirectToCourseWeeks) {
        return <Navigate to={`/courseWeeks/${courseId}`}/>;
    }

    return (
        <>
            <div className="col-md-6" onClick={() => courseClick(courseData.course_id)}>
                <div className="card flex-md-row mb-4 box-shadow h-md-250 overlay">
                    <div className="card-body d-flex flex-column align-items-start">
                        <h3 className="mb-0">
                            <a className="text-dark" href="#">

                            </a>
                        </h3>
                        <div className="mb-1 text-muted">{courseData.title}</div>
                        <p className="card-text mb-auto">
                            {courseData.description}
                        </p>

                    </div>
                    <img
                        className="card-img-right flex-auto d-none d-md-block"
                        data-src="holder.js/200x250?theme=thumb"
                        alt="Thumbnail [200x250]"
                        style={{width: 200, height: 250}}
                        src={courseData.thumbnail_path === "/" ?
                            "https://via.placeholder.com/200" : courseData.thumbnail_path}
                        data-holder-rendered="true"
                    />
                </div>
            </div>
        </>
    )
}

export default Course;