import React, {useEffect, useState} from "react";
import axios from "axios";
import Week from "../components/Week";
import {Navigate, useParams} from "react-router-dom";
import {Button} from 'antd';

const CourseWeeks = () => {
    const [redirect, setRedirect] = useState(false);

    const [weeks, setWeeks] =
        useState([]);

    //vrednost, ki si jo pošljem ob kliku na course
    const {courseId} = useParams();

    //spremenljivka, ki prepreči nadaljno dodajanje gumbov
    let gumbODkleniZeDodan = 0;

    const loadWeeks = async () => {
        try {
            const res =
                await axios.get(`http://localhost:3000/courses-weeks/findAllInCourse/${courseId}`, {withCredentials: true});
            setWeeks(res.data);
        } catch (e) {
            console.log(e);
        }

    }
    useEffect(() => {
        loadWeeks()
    }, []);

    const handleUnlockNextWeek = async () => {
        try {
            await axios.post('http://localhost:3000/user-access-course/unlock-next-week', {courseId}, {withCredentials: true});
            window.location.reload();
        } catch (e) {
            console.log('Napaka pri odklepanju novega tedna' + e)
        }
    };

    const izbrisiCourse = async (courseId: any) => {
        try {
            const res = await axios.delete(`http://localhost:3000/courses/${courseId}`, {withCredentials: true});
            console.log(res);
            if (res.status == 200) {
                setRedirect(true);
            }
        } catch (e) {
            console.log('Napaka pri brisanju tečaja: ', e);
        }


    };

    if (redirect) {
        return <Navigate to='/'/>;
    }

    return (
        <>
            <div className="row-week mb-2">
                {weeks.map((weeks: any, i: number) => {

                    if (weeks.odkleni !== 'Unlocked' && gumbODkleniZeDodan == 0) {
                        gumbODkleniZeDodan = 1;
                        return (<><Button onClick={() => handleUnlockNextWeek()}>Odkleni naslednji teden</Button>
                            <Week weekData={weeks} key={i}/></>);
                    }
                    return <Week weekData={weeks} key={i}/>
                })}
                <Button onClick={() => izbrisiCourse(courseId)} style={{backgroundColor: "red", color: "white"}}>Izbriši
                    tečaj</Button>
            </div>
        </>
    );
};


export default CourseWeeks;
