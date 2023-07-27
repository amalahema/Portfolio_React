
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
                <p>As a deep learner and dedicated worker, I bring a unique blend of skills, experience, and passion to every project I undertake. Recently, I completed a comprehensive bootcamp in Full-Stack Web Development, further enhancing my expertise in the field. Throughout the bootcamp, I actively contributed to various projects on GitHub, showcasing my practical understanding of the concepts we studied.</p>
                <p>With a Master's degree in Computer Application and proficiency in HTML, CSS, JavaScript, Angular, and React, I am well-equipped to develop and deploy robust web applications. I have a proven track record of success in delivering high-quality code on time. Additionally, I have collaborated on team projects, gaining valuable experience in working cohesively within a group setting.</p>
                <p>Outside of work, I am known for my decorative and colorful personality, which reflects in both my personal and professional life. I enjoy reading books, which helps me stay creative and inspired, allowing me to bring fresh perspectives to my projects. Whether working independently or as part of a team, I am committed to delivering exceptional results and exceeding expectations. My enthusiasm for learning and dedication to excellence drive me to continuously grow and adapt to emerging technologies and industry trends.</p>
                <p>Throughout my journey, I have maintained a strong focus on timely assignment submissions, ensuring that I practically apply the knowledge gained from the bootcamp to real-world projects effectively.</p>
                </p>
              </div>
            </div>  
        </section>
    );
}
export default About;