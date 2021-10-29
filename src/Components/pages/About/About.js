import React from 'react';
import './About.css';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';


const About = () => {
   return (
      <div id="about">
         <div className=" about">
            <Header></Header>
            <div className="p-5">
               <h3>About Us</h3>
               <p><b>Positive relationship:</b>We Maintain a positive relationship with our students. The administrators creates a harmonious leaning environment. </p>
               <p><b>Learning actively:</b>Students learn when they are actively engaged in their class activities. Our teachers don't not impose students ideas or opinions on the class but allows students to participate actively in a student-centric environment. To encourage the meaningful application of knowledge, they always encourage students to link what they have learned with events/happenings in their everyday lives.</p>
               <p><b>Constructive feedback:</b> The instructor allocate time to evaluate  students’ understanding of their instruction. From the feedback,they can assist learners with constructive advice to help them progress. It is the responsibility of the teacher to provide help in the form of feedback and suggestions in order to improve learning.</p>
               <p><b>Teacher as a responsible educator:</b> Our teacher have passionate about her profession. They always carry out their responsibilities as an educator in the true sense of the word, going beyond merely imparting knowledge in the classroom.</p>
               <p><b>Use technology to make the class interesting:</b> Using multimedia in the classroom makes the lesson more interesting and thus motivates students to be more attentive. Use a simple projector to present your instruction in the classroom. Sounds, pictures and graphics help learners to conceptualize the essential points. Thus, students learn faster and more effectively. Use the Internet to post assignments online for easy access by students.</p>
            </div>
            <Footer></Footer>
         </div>

      </div>
   );
};

export default About;