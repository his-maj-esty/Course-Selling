

export function CourseCardAdmin({course}){
    return(
        <div className="w-64 rounded-lg border-2 shadow-lg">
            <img src={imgLink} alt="Course image" className="h-48 w-64"/>
            <p className="m-2 font-extrabold text-purple-800">{course.title}</p>
            <p className="m-2 font-semibold text-purple-800">Price</p>
            <p className="m-2 font-bold text-purple-800">${course.price}</p>
            <div className="m-2 mb-5 flex flex-col justify-center">
                <Button>Create</Button>
                <Button>Update</Button>
                <Button>Delete</Button>
            </div>
        </div>
    )
}


function Button({id,children, update}){
    return(
        <button onClick = {() => {
            buyCourse(id,update);
            update();
        }} className="bg-purple-500 px-4 py-1 rounded-md text-white font-semibold w-32 active:bg-purple-700 active:ring-2 hover:bg-purple-600">{children}</button>
    );
}