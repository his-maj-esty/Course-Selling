import { useEffect, useState } from "react";
import { CourseCard } from "./components/CourseCard";
import axios from "axios";

export function UserDashBoard(){
    const [purchased, setPurchased] = useState([]);
    const [allCourses, setAllCourses] = useState([]);

    const getPurchased = async()=>{
        const response = await axios.get(
            "http://localhost:3000/users/purchasedCourses",
            {
              headers: {
                Authorization: "Bearer " + window.localStorage.token,
              },
            }
          ).then((res) => {
                setPurchased(res.data.purchasedCourses);
            }).catch((res)=>{
                alert(res.response.data.message);
                window.location = "/"
            })
    };

    async function getAllCourses(){
        await axios.get("http://localhost:3000/users/courses",{
            headers:{
                Authorization: "Bearer "+localStorage.token
            }
        }).
        then((res)=>{
            setAllCourses(res.data.courses);
        })
        .catch((err) =>{
            alert(err);
        })
    }

    useEffect(() => {
        getPurchased();
        getAllCourses()
    },[]);

    return(
        <div>
            <div>
                <h1 className="font-bold text-4xl text-purple-700">Purchased Courses</h1>
                <div className="flex">
                {
                    purchased.map((course) =>{
                        return (<CourseCard title={course.title} price={course.price} imgLink={course.imgLink} purchased={true} id={course._id}></CourseCard>);
                    })
                }
                </div>
                <div>
                    <h1 className="font-bold text-4xl text-purple-700">Available Courses</h1>
                    <div className="flex">
                        {
                            allCourses.map((course) => {
                                const alreadyPurchased = purchased.find((pCourse) => pCourse._id === course._id);
                                if(!alreadyPurchased){
                                    return (<CourseCard title={course.title} price={course.price} imgLink={course.imgLink} purchased={false} id={course._id}></CourseCard>);
                                }
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}





