import React from "react";
import Navbar from "./Components/Navbar";
import Filter from "./Components/Filter";
import Cards from "./Components/Cards";
import Spinner from "./Components/Spinner";
import { apiUrl, filterData } from "./data.js";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";

const App = () => {
   const [courses,setCourses]=useState(null);
   const[loader,setLoader]=useState(true);
   const[category,setCategory]=useState(filterData[0].title);
  async function fetchData()  {
    setLoader(true);
    try{
     let response= await fetch(apiUrl);
     let output= await response.json();
      setCourses(output.data);
    }
    catch(error){
      toast.error("Network me Error HAi");
    }
    setLoader(false);
  }

  useEffect( ()=>{
      fetchData();
  },[]);
  return( 

       <div className="min-h-screen flex-col flex bg-bgDark2">
        <div><Navbar></Navbar></div>
        <div><Filter filterData={filterData}
          category={category}
          setCategory={setCategory}
        
        ></Filter></div>
        
        
        <div className="w-11/12 max-w-[1200px] min-h-[50vh] mx-auto flex flex-wrap justify-center items-center">
          {
            loader ? (<Spinner></Spinner>):(<Cards courses={courses} category={category}/>)
          }
        </div>
        
       </div>



  );
};

export default App;
