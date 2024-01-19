import React from "react";
import FacultyCard from "./FacultyCard";
import "./Faculties.css";
const Faculties=()=>{
    return(
        <div className="faculties">
            <h1 className="heading">
            Highly Experienced Industry Faculty
            </h1>
            <div className="faculty">
                <FacultyCard />
                <FacultyCard />
                <FacultyCard />
                <FacultyCard />
            </div>
        </div>
    )
}
export default Faculties;