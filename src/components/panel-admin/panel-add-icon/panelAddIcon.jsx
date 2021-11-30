import React, {useEffect, useState} from 'react';
import add_icon from "../../../assets/img/add.png"
import {BootstrapTooltip } from "../../tooltip/bootstrapTooltip"
import AddStuToTerm from "../../../core/services/API/student/addStudentToTerm";
import GetUserDetails from "../../../core/services/API/auth/GetUserDetail.api";
import {toast, ToastContainer} from "react-toastify";

const PanelAddIcon = (props) => {

    const [userInformation, setUserInformation] = useState([]);


    const getUserInformation = async () => {
        try {

            const result = await GetUserDetails();
            setUserInformation(result.result);
            console.log(userInformation.terms);


        } catch (err) {
            console.log("header api error :" + err)
        }
    }

    useEffect(() => {
        getUserInformation();

    } , [])

    const addStudent = async () => {
        const termID = {
            termId : props.termId
        }

        const result = await AddStuToTerm(termID , userInformation._id);
        if (result.statusText === "OK") {
            toast.success("انجام شد");

            } else {
                toast.error("انجام نشد");

            }
        console.log("hello");
        console.log(props.termId);
        console.log(result);
        console.log(userInformation._id)
        window.location.reload();
    }


    return (
        <>
            <ToastContainer
                position="top-center"
                limit={1}
                autoClose={2000}
                rtl={true}
            />
            <BootstrapTooltip placeMent={"left"} title="ثبت نام">
                <img width={16} style={{opacity:"90%" , position:"relative" , left:"-15px"}} src={add_icon} alt="add_icon" onClick={addStudent}/>
            </BootstrapTooltip>
        </>
    );
};

export default PanelAddIcon;
