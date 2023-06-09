import React from "react";
import workout from "../../Assets/workout.png";
import sales from "../../Assets/sales.jpg";
function Portfolio()
{
    return(
        
          <div>
          <div className="project-info">
            <div className="project-img">
              <a href="https://github.com/amalahema/go-super-team-1-">
                {" "}
                <img
                  src={workout}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="Workout_Dashboard"
                />
              </a>
            </div>
            <div className="project-summary">
              <h4>Workout Dashboard</h4>
              <p>
               Workout and Nutritional API are used in this project.This project filters the data as the visual format from the API
              </p>
            </div>
          </div>
          <div className="project-info">
            <div className="project-img">
              <a href="https://github.com/amalahema/Jungslist">
                {" "}
                <img
                  src={sales}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="Online Marketplace"
                />
              </a>
            </div>
            <div className="project-summary">
              <h4>Marketplace</h4>
              <p>
              This site offers many different products from many different sellers
              </p>
            </div>
          </div>
        </div> 
        
      
    );
}
export default Portfolio;
