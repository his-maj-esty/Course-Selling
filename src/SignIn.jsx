import axios from "axios";
import { Navigate } from "react-router-dom";

export default function SignIn(){
    return(
        <div className="border  border-black h-screen flex flex-col justify-center items-center">
            <h1 className="text-4xl text-purple-800 font-semibold mb-7"> Login </h1>
            <div className="flex flex-col h-40 justify-between w-72">
            <Input type={"email"} >Email</Input>
            <Input type={"password"}>Password</Input>
            <div className="flex justify-between">
                <Button onclick={ handleSignIn}>Sign In</Button>
                <Button onclick={handleSignUp}>Sign Up</Button>
                </div>
            </div>
        </div>
    )
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
const handleSignIn = async () => {
      try {
        const res = await axios.post(
          "http://localhost:3000/users/login",
          {},
          {
            headers: {
              "username": `${document.getElementById("Email").value}`,
              "password": `${document.getElementById("Password").value}`,
            },
          }
        );
        const token = res.data.token;
        localStorage.setItem("token", token);
        alert(res.data.message);
        alert("Login successful");
        window.location = "/userdashboard";
      } catch (error) {
        alert(error.response.data.message);
      }
};

const handleSignUp = async () => {
      try {
        const res = await axios.post("http://localhost:3000/users/signup", {
            username: document.getElementById("Email").value,    // DOM operations are expensive than maintaing a state(preferably should use state to get value here)
            password: document.getElementById("Password").value
        }, {
            headers:{
                "Content-Type": "application/json"
            }
        })
            
        const token = res.data.token;
        localStorage.setItem("token", token);
        alert(res.data.message);
        alert("Signup successful");
        // Redirect using Navigate component
        return <Navigate to="/userdashboard" />;
      } catch (error) {
        alert(error.response.data.message);
      }
    };