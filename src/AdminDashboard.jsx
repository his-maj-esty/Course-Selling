import axios from "axios";
import {CourseCardAdmin} from "./components/CourseCardAdmin";
import { CreateCourse } from "./components/CreateCourse";

export function AdminDashboard(){
    return(
        <div>
            <div className="border-2 h-64  flex flex-col justify-center items-center">
                <h1 className="text-4xl text-purple-800 font-semibold mb-7">Add new Admin</h1>
                <div className="flex flex-col h-40 justify-between w-72">
                    <Input type={"email"} >Email</Input>
                    <Input type={"password"}>Password</Input>
                    <div className="flex justify-center">
                        <Button onclick>Add Admin</Button>
                    </div>
                </div>
            </div>
            <div>
                    {/* <CourseCardAdmin></CourseCardAdmin> */}
                    <CreateCourse></CreateCourse>
            </div>
        </div>
    );
}

function Input({type, children}){
    return(
        <div className="flex w-72 justify-between border-purple-500 ">
            <label className="font-bold text-purple-800" for={children}>{children}</label>
            <input className="h-7 bg-slate-300 rounded-md focus:border-purple-400 focus:bg-white" type={type} id={children} />
        </div>
    )
}

function Button({onclick ,children}){
    return(
        <button onClick = {onclick} className="bg-purple-500 px-4 py-1 rounded-md text-white font-semibold w-32 active:bg-purple-700 active:ring-2">{children}</button>
    );
}