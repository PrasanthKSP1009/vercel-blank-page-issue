import { memo } from "react";
const UpdateNumber=({value})=>{
    return(
        <div>
            <h2> UpdateNumber. </h2>
            <h3>Value is {value}</h3>
        </div>

    );
};
export default memo(UpdateNumber);