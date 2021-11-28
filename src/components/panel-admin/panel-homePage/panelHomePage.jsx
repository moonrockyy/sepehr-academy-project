import React from 'react';
import PanelTitle from "../panel-title/panelTitle";
import PanelFloatBtn from "../panel-float-btn/panelFloatBtn";
import PanelTable from "../panelTable/panelTable";
import PanelChart1 from "../panel-charts/panelChart1";
import PanelChart2 from "../panel-charts/panelChart2";
import PanelChart3 from "../panel-charts/panelChart3";
import PanelTableForHpmePage from "../panelTable/panelTableForHomePage";

const PanelHomePage = (props) => {





    return (
        <>
            <div className={"row"}>
                <PanelTitle title={props.title}/>
                <div className={"d-flex floating-btn-mr justify-content-end"}>
                    <PanelFloatBtn/>
                </div>
            </div>
            <PanelTableForHpmePage userInfo={props.userInfo}/>

        </>
    );
};

export default PanelHomePage;
