import profileImage from "../../Assets/images/profile.jpg";
import { MdExpandMore } from "react-icons/md";
import React, { useState } from "react";

function SideBarInfo() {

    return (
        <div className="sidebar-info">
            <figure className="avatar-box">
                <img id="profile-img" src={profileImage} alt="Hugo ChunHo Lin" width="80" />
            </figure>
            <div className="info-content">
                <h1 className="name" title="Hugo ChunHo Lin">
                    Hugo ChunHo Lin
                </h1>
                <p className="title">Day 1 ⚡️</p>
            </div>
            <button className="info_more-btn" data-sidebar-btn>
                <span>Show Contacts</span>
                <MdExpandMore />
                {/* <IonIcon name="chevron-down"></IonIcon> */}
            </button>
        </div>
    );
}

export default SideBarInfo;
