import React, {useEffect, useState} from 'react';
import "./panelTable.css"
import {FcNumericalSorting12} from "react-icons/all";
import PanelDeleteIcon from "../panel-delete-icon/panelDeleteIcon";
import course1 from "../../../assets/img/02.jpg"
import course2 from "../../../assets/img/03.jpg"
import course3 from "../../../assets/img/09.jpg"
import course4 from "../../../assets/img/01.jpg"
import course5 from "../../../assets/img/04.jpg"
import GetUserDetails from "../../../core/services/API/auth/GetUserDetail.api";

const PanelTable = (props) => {


    return (
        <>


            {/*<img className={"table-course-img"} src={props.userInfo.result.terms[0].course.image} alt="course1"/>*/}
            <table className="table panel-table table-borderless">
                <thead className={"thead-color"}>
                <tr className={"tr-color"}>
                    <th scope="col "><FcNumericalSorting12/></th>
                    <th scope="col ">شماره سفارش</th>
                    <th scope="col ">نام دوره</th>
                    <th scope="col ">مدرس</th>
                    <th scope="col ">تاریخ خرید</th>
                    <th scope="col "> وضعیت</th>
                    <th scope="col "> مجموع سفارش</th>
                    <th scope="col "> تنظیمات</th>
                </tr>
                </thead>
                <tbody>
                {Object.keys(props.userInfo.result.terms).map(termObj => <tr key={termObj} className={"green-hover"}>
                    <th scope="row" className={"panel-th-items"}>{termObj}</th>
                    <td className={"panel-td-items"}>4554-01</td>
                    <td className={"panel-td-items"}>
                        <img className={"table-course-img"} src={props.userInfo.result.terms[termObj].course.image} alt=""/>
                        {props.userInfo.result.terms[termObj].course.courseName}
                    </td>
                    <td className={"panel-td-items"}> {props.userInfo.result.terms[termObj].course.description}</td>
                    <td className={"panel-td-items"}> 1400/01/20</td>
                    <td className={"panel-td-items"}>
                        <span className="badge bg-success">خرید موفق</span>
                    </td>
                    <td className={"panel-td-items"}>{props.userInfo.result.terms[termObj].cost + " تومان"} </td>
                    <td className={"panel-td-items"}>
                        <PanelDeleteIcon/>
                    </td>
                </tr>)}


                </tbody>
            </table>

        </>
    );
};

export default PanelTable;
