import React from "react";
import { Card, Image } from "react-bootstrap";
import "./styles.css";

const InfoProfile = (props) => {
  const {user} = props;
  return (
    <div class="col-sm-4">
      {/* <Col xs={12} md={4}> */}
      <Card>
        <Card.Body>
          <div className="row-profile">
            <div className="text-color-body inforText greyBoldText">INFO</div>
            <div id="threedot">...</div>
          </div>
          <div className="text-center">
            <Image
              src={
                "https://icon-library.com/images/default-user-icon/default-user-icon-4.jpg"
              }
              className="img-profile shadow"
            />
            <p className="text-link-lg-20 pt-3 mb-0 name">
              {user.name}
            </p>
            <p className="text-color-body career">Moviegoers</p>
            <hr />
          </div>
          <div>
            <p className="text-link-sm text-color-body greyBoldText pointTitle">
              Loyalty Points
            </p>
            <Card bg="primary">
              <Card.Body className="pointBody">
                <p className="text-white text-display-xs-bold-18">Moviegoers</p>
                <div className="d-flex align-items-center">
                  <p className="text-link-lg text-white m-0">320 points</p>
                  <p className="mt-4 pl-1 text-xs-10 text-white"></p>
                </div>
              </Card.Body>
            </Card>
            <p className="text-center pt-3 greyText pointNeed">
              180 points become a master
            </p>
            <div className="pg-bar pointBar">
              <div className="indicator"></div>
            </div>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};
export default InfoProfile;
