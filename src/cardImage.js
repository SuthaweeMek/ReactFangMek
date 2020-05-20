import React, { Component } from "react";

function CardImage(props) {
  return (
    <div>
        <div class="card card-width mx-auto shadow-lg">
                <img src={props.src} class="card-img-top" alt="..." />
                <div class="card-body">
                  <p class="card-text">
                    {props.text}
                  </p>
                </div>
              </div>
    </div>);
}

export default CardImage;
