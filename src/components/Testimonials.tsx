import * as React from 'react';
import img1 from '../assets/img/testimonials/testimonials-1.jpg'
import img2 from '../assets/img/testimonials/testimonials-2.jpg'
import img3 from '../assets/img/testimonials/testimonials-3.jpg'
import img4 from '../assets/img/testimonials/testimonials-4.jpg'
import img5 from '../assets/img/testimonials/testimonials-5.jpg'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



const Testimonials = () => {
    const testim = [
        { name: 'Saul Goodman', work: 'Ceo &amp; Founder', review: 'Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.', img: img1 },
        { name: 'Sara Wilsson', work: 'Designer', review: 'Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.', img: img2 },
        { name: 'Jena Karlis', work: 'Store Owner', review: 'Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.', img: img3 },
        { name: 'Matt Brandon', work: 'Freelancer', review: 'Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.', img: img4 },
        { name: 'John Larson', work: 'Entrepreneur', review: 'Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.', img: img5 },
    ]


    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true
    };

    return (
        <section id="testimonials" className="testimonials section-bg">
            <div className="container">

                <div className="section-title" data-aos="fade-in" data-aos-delay="100">
                    <h2>Testimonials</h2>
                    <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                </div>

                <div className="testimonials-slider swiper" data-aos="fade-up" data-aos-delay="100">

                    <Slider {...settings} >
                        {testim.map(el =>
                            <div key={el.name}>
                                <div className="testimonial-item">
                                    <p>
                                        <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                                        {el.review}
                                        <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                                    </p>
                                    <img src={el.img} className="testimonial-img" alt="" />
                                    <h3>{el.name}</h3>
                                    <h4>{el.work}</h4>
                                </div>
                            </div>
                        )}
                    </Slider>

                    <div className="swiper-pagination"></div>
                </div>

            </div>
        </section >
    )
}

export default Testimonials