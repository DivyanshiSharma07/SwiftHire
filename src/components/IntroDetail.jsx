import React, { useEffect } from 'react';
import './styles/IntroDetail.css';
import page1 from './images/page1.png';

const IntroDetail = () => {
  useEffect(() => {
    const detailWrapper = document.querySelector('.detail-wrapper');
    const detailImage = document.querySelector('.detail-image');

    const handleScroll = () => {
      const detailWrapperRect = detailWrapper.getBoundingClientRect();
      const scrollProgress = (window.innerHeight - detailWrapperRect.top) / window.innerHeight;

      detailWrapper.style.transform = `translateY(${scrollProgress * 50}px)`;
      detailImage.style.transform = `translateY(-${scrollProgress * 50}px)`;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className="detail-section">
      <div className="detail-content">
        <h2 className="detail-heading">Unlock a vast network of skilled candidates with just a few clicks</h2>
        <div className="detail-wrapper">
          <div className="detail-image">
            <img src={page1} alt="Logo" className="h-8" />
          </div>
          <div className="detail-text">
            <p>
              Our platform revolutionizes the way you hire by connecting you with a diverse pool of talent. Whether you're looking for experienced professionals or fresh graduates, our comprehensive database ensures that you find the perfect fit for your company. With advanced search filters and intelligent algorithms, you can easily narrow down your options and discover candidates who possess the right skills and qualifications. Save time and resources by tapping into our extensive network of talented individuals who are ready to contribute to your company's success. Leave no stone unturned in your quest for exceptional talent with our powerful recruitment solution.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroDetail;
