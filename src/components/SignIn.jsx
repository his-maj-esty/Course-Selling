export default function SignIn(){
    return(
        <div className="flex flex-col h-32 justify-between">
            <Input type={"text"} >Username</Input>
            <Input type={"password"}>Password</Input>
            <Button>sdfad</Button>
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

function Button({children}){
    return(
        <button className="bg-purple-500 px-4 py-1 rounded-md text-white font-semibold w-20">{children}</button>
    );
}