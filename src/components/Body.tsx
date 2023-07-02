import Course from "./Course";
import {useEffect, useState} from "react";
import axios from "axios";

const Body = () => {

    //array course-ov, ki jih ima prijavljeni uporabnik
    const [courses, setCourses] =
        useState([]);

    //dobi array course-ov prijavljenega uporabnika
    const loadCourses = async () => {
        try {
            const res =
                await axios.get('http://localhost:3000/user-access-course/getCourses', {withCredentials: true});
            setCourses(res.data);
        } catch (e) {
            console.log(e);
        }
    }
    useEffect(() => {
        loadCourses()
    }, []); //ob pageloadu naloži course

    return (
        <>
            <div className="row-course mb-2">
                {courses.map((courses: any, i) => {
                    return <Course courseData={courses.course} key={i}/>
                })}
            </div>
        </>
    );
};

export default Body;