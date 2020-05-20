import React, { Component } from "react";
import CardImage from "./cardImage";
export default class Home extends Component {
  render() {
    return (
      <div>
        <div className="jumbotron jumbotron-fluid bg-transparent  ">
          <div className="container text-center">
            <h1>Mek Hotel</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </div>
        </div>

        <div className="container">
          <img
            src="image/fronthotel.jpg"
            class="shadow-lg img-fluid w-100"
          ></img>
        </div>

        <div className="container-fluid padding-topbot">
          <div class="row">
            <div className="col-6">
              <CardImage src="image/hotel1.jpg" text="Mek" />
            </div>
            <div className="col-6">
              <CardImage src="image/hotel2.jpg" text="Mek2" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
