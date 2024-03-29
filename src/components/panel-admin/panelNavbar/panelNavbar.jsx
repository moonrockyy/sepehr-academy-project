import React, {useEffect, useState} from "react";
import "./panelNavbar.css";
import background from "../../../assets/img/backgrounds/background.png";
import userImage from "../../../assets/img/user-images/img4.png";
import logOut from "../../../assets/img/icons/logout(2).png";
import BookmarkTwoToneIcon from "@mui/icons-material/BookmarkTwoTone";
import LocalLibraryTwoToneIcon from "@mui/icons-material/LocalLibraryTwoTone";
import EditTwoToneIcon from "@mui/icons-material/EditTwoTone";
import LocalOfferTwoToneIcon from "@mui/icons-material/LocalOfferTwoTone";
import CategoryTwoToneIcon from "@mui/icons-material/CategoryTwoTone";
import EvStationTwoToneIcon from "@mui/icons-material/EvStationTwoTone";
import ModeCommentTwoToneIcon from "@mui/icons-material/ModeCommentTwoTone";
import HomeTwoToneIcon from "@mui/icons-material/HomeTwoTone";
import AnalyticsTwoToneIcon from "@mui/icons-material/AnalyticsTwoTone";
import {BootstrapTooltip} from "../../tooltip/bootstrapTooltip";
import ShoppingCartTwoToneIcon from "@mui/icons-material/ShoppingCartTwoTone";
import {Link} from "react-router-dom";
import GetUserDetails from "../../../core/services/API/auth/GetUserDetail.api";
import {getItem} from "../../../core/services/storage/storage";
import {useStateIfMounted} from "use-state-if-mounted";


const PanelNavbar = (props) => {
    const [userInformation, setUserInformation] = useStateIfMounted([]);
    const [image, setImage] = useStateIfMounted("");
    const getUserInformation = async () => {
        try {
            setImage(getItem(props.userInfo._id + "image"));
            // console.log(getItem(props.userInfo._id + "image"))
            const result = await GetUserDetails();
            setUserInformation(result.result);
            // console.log(result.result)
        } catch (err) {
            console.log("header api error :" + err)
        }
    }
    useEffect(() => {
        getUserInformation()
    }, [userInformation]);

    return (
        <>
            <div className={"navbar-panel-width"}>
                <div className="card">
                    <img
                        height={135}
                        src={background}
                        className="card-img-top panel-background"
                        alt="..."
                    />
                    <section className={"top-data"}>
                        <div className={"d-flex justify-content-center"}>
                            {image ? <img src={image} className={"panel-user-image"} alt="..."/> :
                                <img src={userImage} className={"panel-user-image"} alt="..."/>}
                        </div>
                        <BootstrapTooltip
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal"
                            placement={"left"}
                            title="خروج"
                        >
                            <img src={logOut} className={"logOut-img"} alt={"..."}/>
                        </BootstrapTooltip>


                        <div className={"d-flex justify-content-center"}>
                            <span className={"panel-user-name"}>{userInformation.fullName}</span>

                        </div>
                    </section>


                    <div className="card-body panel-navbar-body">
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item panel-list-item">
                                <Link className={"link-link"} to={`/dashboard/${userInformation._id}`}>
                                    <AnalyticsTwoToneIcon
                                        className={"panel-navList-icons"}
                                        fontSize={"small"}
                                    />
                                    داشبرد
                                </Link>
                            </li>

                            <li className="list-group-item panel-list-item">
                                <Link className={"link-link"} to={"/cart"}>
                                    <ShoppingCartTwoToneIcon
                                        className={"panel-navList-icons"}
                                        fontSize={"small"}
                                    />
                                    سبد خرید
                                </Link>
                            </li>
                            <li className="list-group-item panel-list-item">
                                <Link className={"link-link"} to={`/dashboard/${userInformation._id}/bought`}>
                                    <BookmarkTwoToneIcon
                                        className={"panel-navList-icons"}
                                        fontSize={"small"}
                                    />
                                    دوره های خریداری شده
                                </Link>
                            </li>
                            <li className="list-group-item panel-list-item">
                                <Link className={"link-link"} to={`/dashboard/${userInformation._id}/edit`}>
                                    <EditTwoToneIcon
                                        className={"panel-navList-icons"}
                                        fontSize={"small"}
                                    />
                                    ویرایش پروفایل
                                </Link>
                            </li>
                            <li className="list-group-item panel-list-item">
                                <Link className={"link-link"} to={`/dashboard/${userInformation._id}`}>
                                    <EvStationTwoToneIcon
                                        className={"panel-navList-icons"}
                                        fontSize={"small"}
                                    />
                                    شارژ کردن کیف پول
                                </Link>
                            </li>
                            <li className="list-group-item panel-list-item">
                                <Link className={"link-link"} to={`/dashboard/${userInformation._id}`}>
                                    <CategoryTwoToneIcon
                                        className={"panel-navList-icons"}
                                        fontSize={"small"}
                                    />
                                    دسته بندی دوره ها
                                </Link>
                            </li>
                            <li className="list-group-item panel-list-item">
                                <Link className={"link-link"} to={`/dashboard/${userInformation._id}/liked`}>
                                    <LocalLibraryTwoToneIcon
                                        className={"panel-navList-icons"}
                                        fontSize={"small"}
                                    />
                                    دوره های مورد علاقه
                                </Link>
                            </li>
                            <li className="list-group-item panel-list-item">
                                <Link className={"link-link"} to={`/dashboard/${userInformation._id}`}>
                                    <LocalOfferTwoToneIcon
                                        className={"panel-navList-icons"}
                                        fontSize={"small"}
                                    />
                                    تخفیفات روزانه
                                </Link>
                            </li>
                            <li className="list-group-item panel-list-item">
                                <Link className={"link-link"} to={`/dashboard/${userInformation._id}`}>
                                    <ModeCommentTwoToneIcon
                                        className={"panel-navList-icons"}
                                        fontSize={"small"}
                                    />
                                    ثبت نظرات
                                </Link>
                            </li>
                            <li className="list-group-item panel-list-item">
                                <Link className={"link-link"} to={"/"}>
                                    <HomeTwoToneIcon
                                        className={"panel-navList-icons"}
                                        fontSize={"small"}
                                    />
                                    بازگشت به خانه
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PanelNavbar;
