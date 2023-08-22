export function CreateCourse({course}){
    return(
        <div>
        <h1 className="text-4xl text-purple-800 font-semibold mb-7">Create Course </h1>
        <div className="h-64 flex flex-col justify-around w-56">
            <div className="h-36 flex flex-col justify-between">
                <Input value={course.title}>Title</Input>
                <Input value={course.description}>Description</Input>
                <Input value={course.price}>Price</Input>
                <Input value={course.imgLink}>Image Link</Input>
            </div>
            <div className="flex justify-center">
                <Button>Create</Button>
            </div>
        </div>
        </div>
    );
}

function Input({value, children}){
    return(
        <div className="flex w-72 justify-between border-purple-500 ">
            <label className="font-bold text-purple-800" for={children}>{children}</label>
            <input value={value} className="h-7 bg-slate-300 rounded-md focus:border-purple-400 focus:bg-white" type={type} id={children} />
        </div>
    )
}

function Button({onclick ,children}){
    return(
        <button onClick = {onclick} className="bg-purple-500 px-4 py-1 rounded-md text-white font-semibold w-32 active:bg-purple-700 active:ring-2">{children}</button>
    );
}