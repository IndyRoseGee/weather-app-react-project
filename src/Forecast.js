import React from "react";
import "./forecast.css";
import emoji from "./media/02d.png";

export default function Forecast() {
  return (
    <div className="small-temps" id="forecast">
      <div className="row">
        <div className="col">
          <div className="card">
            <div className="card-body">
              <p className="day" id="day-one">
                Day 1
              </p>
              <span id="day-one-box">
                <p className="small-t-emoji">
                  <img src={emoji} alt="icon" />
                </p>

                <p>
                  <span className="daytemp" id="highFiveDayTemp">
                    {" "}
                    -
                  </span>
                  º
                  <span className="nighttemp" id="lowFiveDayTemp">
                    {" "}
                    | -
                  </span>
                  º
                </p>
              </span>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <div className="card-body">
              <p className="day" id="day-two">
                Day 2
              </p>
              <span id="day-two-box">
                <p className="small-t-emoji">
                  <img src={emoji} alt="icon" />
                </p>
                <p>
                  <span className="daytemp" id="highFiveDayTemp">
                    {" "}
                    -º
                  </span>
                  <span className="nighttemp" id="lowFiveDayTemp">
                    {" "}
                    | -º
                  </span>
                </p>
              </span>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <div className="card-body">
              <p className="day" id="day-three">
                Day 3
              </p>
              <span id="day-three-box">
                <p className="small-t-emoji">
                  <img src={emoji} alt="icon" />
                </p>
                <p>
                  <span className="daytemp" id="highFiveDayTemp">
                    {" "}
                    -º
                  </span>
                  <span className="nighttemp" id="lowFiveDayTemp">
                    {" "}
                    | -º
                  </span>
                </p>
              </span>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <div className="card-body">
              <p className="day" id="day-four">
                Day 4
              </p>
              <span id="day-four-box">
                <p className="small-t-emoji">
                  <img src={emoji} alt="icon" />
                </p>
                <p>
                  <span className="daytemp" id="highFiveDayTemp">
                    {" "}
                    -º
                  </span>
                  <span className="nighttemp" id="lowFiveDayTemp">
                    {" "}
                    | -º
                  </span>
                </p>
              </span>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <div className="card-body">
              <p className="day" id="day-five">
                Day 5
              </p>
              <span id="day-five-box">
                <p className="small-t-emoji">
                  <img src={emoji} alt="icon" />
                </p>
                <p>
                  <span className="daytemp" id="highFiveDayTemp">
                    {" "}
                    -º
                  </span>
                  <span className="nighttemp" id="lowFiveDayTemp">
                    {" "}
                    | -º
                  </span>
                </p>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
