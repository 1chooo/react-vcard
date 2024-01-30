import React from "react";
import SocialList from "./SocialList";

import ContactsList from "./ContactsList";
import SideBarInfo from "./SideBarInfo";

function SideBar() {
    return (
        <aside className="sidebar" data-sidebar>

            <SideBarInfo />

            <div className="sidebar-info_more">
                <div className="separator"></div>

                <ContactsList />

                <div className="separator"></div>

                <SocialList />

            </div>

        </aside>
    );
}

export default SideBar;
