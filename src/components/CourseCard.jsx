import axios from "axios";

export function CourseCard({title, imgLink, price, purchased, id, update}){
    return(
        <div className="w-64 rounded-lg border-2 shadow-lg">
            <img src={imgLink} alt="Course image" className="h-48 w-64"/>
            <p className="m-2 font-extrabold text-purple-800">{title}</p>
            <p className="m-2 font-semibold text-purple-800">Price</p>
            <p className="m-2 font-bold text-purple-800">${price}</p>
            <div className="m-2 mb-5 flex justify-center">
                {purchased ? (<p>Purchased</p>) : (<Button id={id} update={update}>Buy</Button>)}
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

async function buyCourse(id, update) {
    try {
        await axios.post("http://localhost:3000/users/courses/" + id, null, {
            headers: {
                Authorization: "Bearer " + window.localStorage.token,
            },
        });
        alert("Course bought successfully");
    } catch (err) {
        alert("An error occurred");
    }
    
    // Call the update function here, after the try-catch block
    update();
}

// use try and catch, to execute the code even if the code crashes within try block. this way update is always called.