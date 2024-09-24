import React from "react";
import Card from "./Card";
import { useState } from "react";
function Cards(props){
    
    let courses=props.courses;
    let category=props.category;
   const [likedCourses,setLikedCourses]=useState([]);
    // function getCourse(){
        let allCourses=[];
    if(category==="All"){
        
         Object.values(courses).forEach( array =>{
           array.forEach( cousedata =>{
            allCourses.push(cousedata);
        });
    } )
}
else{
     allCourses= courses[category];
}
    // return allCourses;
// }
    // console.log(allCourses);
    return(
        <div className="flex flex-wrap justify-center gap-4 mb-4">{
             
            allCourses.map( course=>{
                // console.log(course);
                   return <Card course={course} key={course.id}
                      likedCourses={likedCourses} setLikedCourses={setLikedCourses}
                   ></Card>
            })
        
        
        }</div>
    );
}
export default Cards;