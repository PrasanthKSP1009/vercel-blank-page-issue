import { useContext } from "react";
import { ThemeProvider } from "../Hooks/UseContext";

const ExamResults=()=>{
    const res=useContext(ThemeProvider)
    return (
       
     <div>
        {console.log(res)}
         <h2>Results published and your SGPA is{res.sgpa} , CGPA is {res.cgpa}</h2>
     </div>
 
    )
 }
 export default ExamResults;