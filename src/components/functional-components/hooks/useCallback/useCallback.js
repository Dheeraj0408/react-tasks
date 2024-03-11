import { useCallback, useState } from "react";
import CustomButton from "../../button/customButton";

const ProfileExample=()=>{
    const[age,setAge]=useState(100);
    const[salary,setSalary]=useState(1000);
    const handleAge=
    useCallback(()=>{
        setAge(age+10);
    },[age])
    const handleSalary=
    useCallback(()=>{
        setSalary(salary+1000);
    },[salary]);
    return(
        <>
        <h2>Salary {salary}</h2>
        <h1>Age {age}</h1>
        <CustomButton onClick={handleAge}>
            Age Increment
        </CustomButton>
        <CustomButton onClick={handleSalary}>
            Salary Increment
        </CustomButton>
        </>
    )
}
export default ProfileExample;
