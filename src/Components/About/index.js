
import React from "react";
import avatar from "../../Assets/amala.png"
//About component
function About(){
    return(
        <section className="my-5 intro">
            <div>
                <h1>Amala Hema Francis</h1>
            </div>
            <div>
              <div class="intro-info">
                <div class="intro-img">
                    <img src={avatar} style={{ width: "100%" }} alt="profile" />
                </div>
                <p className="about-me">
                As a quick learner and dedicated worker, I bring a unique blend of skills,
                experience, and passion to every project I undertake. With a Master's degree in
                Computer Application and expertise in HTML, CSS, JavaScript, Angular, and React,
                I am well-equipped to develop and deploy robust web applications. I have a proven
                track record of success in delivering high-quality code on time and within budget.
                Outside of work, I enjoy reading books and exploring new recipes in the kitchen.
                I find that these hobbies help me stay creative and inspired, and allow me to bring
                fresh perspectives to my work. Whether working independently or as part of a team,
                I am committed to delivering exceptional results and exceeding expectations.
                </p>
              </div>
            </div>  
        </section>
    );
}
export default About;