import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './styles/Client.css'; // Create a CSS file for styling the carousel
import caro1 from './images/caro1.png';
import cara2 from './images/cara2.png';



const Client = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div className="client-container">
      <h2 className="client-heading">
        Our clients' success stories speak for themselves.
      </h2>
      <p className="client-subheading">
        Discover how our platform saves time, uncovers exceptional talent, and fuels business growth. Join our satisfied clients and transform your recruitment strategy today.
      </p>

      <Slider {...settings}>
        <div>
          <img src={cara2} alt="Image 1" />
          <div className="description">
            <p>SwiftHire implemented our digital recruitment solution and witnessed a remarkable transformation in their hiring process. By automating repetitive tasks, leveraging AI-powered candidate screening, and enabling seamless collaboration, they saved significant time and resources while attracting top talent.</p>
          </div>
        </div>
        <div>
          <img src={caro1} alt="Image 2" />
          <div className="description">
            <p>Client ABC embraced our platform and experienced unprecedented business growth. By leveraging our advanced recruitment tools, they swiftly identified highly skilled professionals, reduced time-to-hire, and built a high-performing team. Their success story demonstrates how our solution drives tangible business outcomesClient ABC embraced our platform and experienced unprecedented business growth. By leveraging our advanced recruitment tools, they swiftly identified highly skilled professionals, reduced time-to-hire, and built a high-performing team. Their success story demonstrates how our solution drives tangible business outcomes</p>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Client;
