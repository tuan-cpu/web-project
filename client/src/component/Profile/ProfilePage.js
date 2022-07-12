import React, { Component } from "react";
import { Container, Row } from "react-bootstrap";

import InforProfile from "./InforProfile";
import OrderHistory from "./OrderHistory";
import "./styles.css";

const ProfilePage = () => {

    return (
        <div className="content">
            <div class="row">
                <div className="left"><InforProfile /></div>
                <div className="right"><OrderHistory/></div>
                
            </div>
        </div>
        
        
      
    );

}

export default ProfilePage;