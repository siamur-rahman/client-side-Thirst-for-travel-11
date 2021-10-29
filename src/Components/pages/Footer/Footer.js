import { faFacebook, faInstagram, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import FooterQuickLinks from '../FooterQuickLinks/FooterQuickLinks';



const Footer = () => {
   return (
      <footer className="bg-dark py-5">
         <div className="container">
            <div className="row d-flex justify-content-center align-items-center text-white">
               <div className="col-md-4 d-flex">
                  <FontAwesomeIcon icon={faMapMarkerAlt} style={{ fontSize: '40px' }} />
                  <p className="ms-2 fw-bolder">Robert Schattner Center
                     University of Pennsylvania
                     School of MEDI CARE
                     240 S.<br /> 40th Street
                     Philadelphia, PA 19104</p>
               </div>
               <div className="col-md-4 ">
                  <h4>Quick Links</h4>
                  <div>
                     <FooterQuickLinks></FooterQuickLinks>
                  </div>
               </div>
               <div className="col-md-4">
                  <h4>About Us</h4>
                  <p>Welcome to MEDI CARE. We are pleased that you have selected us for your care. Our service is committed to providing comprehensive, patient-centered oral health care, within the scope of our educational programs, since 1878. This means that our coordinated health care team, consisting of our faculty, students, and staff, will fully inform you of the findings of our examination and the available treatment options.!</p>
                  <div className='d-flex justify-content-evenly' style={{ fontSize: '2em' }}>
                     <FontAwesomeIcon icon={faFacebook} />
                     <FontAwesomeIcon icon={faInstagram} />
                     <FontAwesomeIcon icon={faTwitter} />
                     <FontAwesomeIcon icon={faWhatsapp} />
                  </div>
               </div>
            </div>
         </div>
      </footer>
   );
};

export default Footer;