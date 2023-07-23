import React from "react";
import workout from "../../Assets/workout.png";
import sales from "../../Assets/sales.jpg";
import event from "../../Assets/event.PNG";
function Portfolio() {
  return (

    <div>
      <div className="project-info">

        <div className="project-img">
          <a href="https://flawlessfunction.herokuapp.com/">
            {" "}
            <img
              src={event}
              className="my-2"
              style={{ width: "100%" }}
              alt="Event Planner"
            />
          </a>
        </div>

        <div className="project-summary">
          <h4>Event Planner</h4>
          <p>
            This is an event planner website built on the MERN (MongoDB, Express.js, React, Node.js) stack, with MongoDB used as the backend database. GraphQL can be seamlessly integrated into this stack to handle the API layer and facilitate the functionality of adding, updating, and deleting events.
            <br />
            Check out the project demo <a href = "https://drive.google.com/file/d/1sdOABqQi1sd_dAC7opwpk5fzljxo-ce6/view" > here </a>
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
            This project is an online marketplace where users can sell their own items and browse items for sale based on location. It is built using Express.js as the backend web application framework and MySQL as the database management system.
            <br />
            Check out the project demo <a href="https://drive.google.com/file/d/1XD-YDu_T2qnof2SQU_EHh5ZAJHTEybyW/view"> here </a>
          </p>
        </div>
      </div>


      <div className="project-info">
        <div className="project-img">
          <a href="https://amalahema.github.io/workout_api/">
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
            This project utilizes a Workout and Nutritional API to fetch data for a fitness-oriented application. The project is built on JavaScript and incorporates HTML and CSS/Bootstrap for designing and structuring the layout of the application. Additionally, two APIs are utilized to retrieve dynamic data, which can be manipulated using JavaScript to further customize the page.
            <br />
            Check out project demo <a href="https://drive.google.com/file/d/1khdhZMLiejKNgkrHiYcmd2QBcOD-JZNF/view"> here </a>
          </p>
        </div>
      </div>




    </div>


  );
}
export default Portfolio;
