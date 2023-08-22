import axios from "axios";

export function AdminLogin(){
    return(
        <div className="border  border-black h-screen flex flex-col justify-center items-center">
            <h1 className="text-4xl text-purple-800 font-semibold mb-7">Admin Login </h1>
            <div className="flex flex-col h-40 justify-between w-72">
            <Input type={"email"} >Email</Input>
            <Input type={"password"}>Password</Input>
            <div className="flex justify-center">
                <Button onclick={ handleSignIn}>Sign In</Button>
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
          "http://localhost:3000/admins/login",
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
        window.location = "/admindashboard";
      } catch (error) {
        alert(error.response.data.message);
      }
};