import React from "react";
import "./ReviewsBox.css";
import twoStar from "../../assets/twoStar.png";

export default function ReviewsBox() {
  return (
    <div className="review-box-section">
      <div className="review-head">
        <h1 className="rev-h1">
          We trive to meet the needs of our clients and we value their opinions
          about our work
        </h1>
      </div>
      <div className="rev-cards-section">
        <div className="rev-cards-all">
          <div className="rev-card ">
            <h5 className="review-sum">Best Price Assured</h5>
            <img className="rating-pic" src={twoStar} />
            <p className="rating-para">
              Habitant morbi tristique senectus et du amon ut venenatis tellus
              in metus vulpute ate augue interdum velit euismod in pel lent sque
              mauris pharetra et ultrices neq ue te amet cursus sit amet dictum
              sit ami justo arcu dictu.
            </p>
            <div className="info-rev">
              <span>Madison Edward</span>
              <span>,</span>
              <span>New York</span>
            </div>
          </div>
          <div className="rev-card end-2">
            <h5 className="review-sum">Best Price Assured</h5>
            <img className="rating-pic" src={twoStar} />
            <p className="rating-para">
              In hac habitasse platea dictu imst vesti ulumon rhoncus est
              pellentesqu ini ultriceso in iaculis nunc sed augue lac imperdiet
              dui accumsan sit a.
            </p>
            <div className="info-rev">
              <span>Madison Edward</span>
              <span>,</span>
              <span>New York</span>
            </div>
          </div>
          <div className="rev-card rev-end">
            <h5 className="review-sum">Best Price Assured</h5>
            <img className="rating-pic" src={twoStar} />
            <p className="rating-para">
              In hac habitasse platea dictu imst vesti ulumon rhoncus est
              pellentesqu ini ultriceso in iaculis nunc sed augue lac imperdiet
              dui accumsan sit a.
            </p>
            <div className="info-rev">
              <span>Madison Edward</span>
              <span>,</span>
              <span>New York</span>
            </div>
          </div>
          <div className="rev-card end-2">
            <h5 className="review-sum">Best Price Assured</h5>
            <img className="rating-pic" src={twoStar} />
            <p className="rating-para">
              In hac habitasse platea dictu imst vesti ulumon rhoncus est
              pellentesqu ini ultriceso in iaculis nunc sed augue lac imperdiet
              dui accumsan sit a.
            </p>
            <div className="info-rev">
              <span>Madison Edward</span>
              <span>,</span>
              <span>New York</span>
            </div>
          </div>{" "}
          <div className="rev-card end-2">
            <h5 className="review-sum">Best Price Assured</h5>
            <img className="rating-pic" src={twoStar} />
            <p className="rating-para">
              In hac habitasse platea dictu imst vesti ulumon rhoncus est
              pellentesqu ini ultriceso in iaculis nunc sed augue lac imperdiet
              dui accumsan sit a.
            </p>
            <div className="info-rev">
              <span>Madison Edward</span>
              <span>,</span>
              <span>New York</span>
            </div>
          </div>
          <div className="rev-card end-2">
            <h5 className="review-sum">Best Price Assured</h5>
            <img className="rating-pic" src={twoStar} />
            <p className="rating-para">
              In hac habitasse platea dictu imst vesti ulumon rhoncus est
              pellentesqu ini ultriceso in iaculis nunc sed augue lac imperdiet
              dui accumsan sit a.
            </p>
            <div className="info-rev">
              <span>Madison Edward</span>
              <span>,</span>
              <span>New York</span>
            </div>
          </div>{" "}
          <div className="rev-card end-2">
            <h5 className="review-sum">Best Price Assured</h5>
            <img className="rating-pic" src={twoStar} />
            <p className="rating-para">
              In hac habitasse platea dictu imst vesti ulumon rhoncus est
              pellentesqu ini ultriceso in iaculis nunc sed augue lac imperdiet
              dui accumsan sit a.
            </p>
            <div className="info-rev">
              <span>Madison Edward</span>
              <span>,</span>
              <span>New York</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
