import axios from "axios";

export default function SignIn(){
    return(
        <div className="border  border-black h-screen flex flex-col justify-center items-center">
            <h1 className="text-4xl text-purple-800 font-semibold mb-7"> Login </h1>
            <div className="flex flex-col h-40 justify-between w-72">
            <Input type={"email"} >Email</Input>
            <Input type={"password"}>Password</Input>
            <div className="flex justify-between">
                <Button onclick={async()=>{
                    const res = await axios.post("http://localhost:3000/users/login",{},{
                        headers: {
                            "username": `${document.getElementById("Email").value}`,
                            "password" : `${document.getElementById("Password").value}`
                        }
                    }).then((res) =>  {
                        const token = res.data.token;
                        localStorage.setItem("token", token);
                        alert(res.data.message);
                        alert("Login successfull");
                    })
                    .catch((res) => {
                        alert(res.response.data.message);   // just print the res you will get how to retrieve the message         
                    });;   // add data field empty or null because first argument is url, then data and then options
                    const token = res.data.token;   // res.data is response from the server and token and message is part of the server response(check user.js)
                    localStorage.setItem("token", token);
                    alert(res.data.message);
                }}>Sign In</Button>
                <Button onclick={async() => {
                    const res = await axios.post("http://localhost:3000/users/signup", {
                        username: document.getElementById("Email").value,    // DOM operations are expensive than maintaing a state(preferably should use state to get value here)
                        password: document.getElementById("Password").value
                    }, {
                        headers:{
                            "Content-Type": "application/json"
                        }
                    }).then((res) =>  {
                        const token = res.data.token;
                        localStorage.setItem("token", token);
                        alert(res.data.message);
                        alert("Now you should login");
                    })
                    .catch((res) => {
                        alert(res.response.data.message);   // just print the res you will get how to retrieve the message         
                    });

                }}>Sign Up</Button>
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