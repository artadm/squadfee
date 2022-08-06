import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import img1 from '../assets/img/portfolio/portfolio-1.jpg'
import img2 from '../assets/img/portfolio/portfolio-2.jpg'
import img3 from '../assets/img/portfolio/portfolio-3.jpg'
import img4 from '../assets/img/portfolio/portfolio-4.jpg'
import img5 from '../assets/img/portfolio/portfolio-5.jpg'
import img6 from '../assets/img/portfolio/portfolio-6.jpg'
import img7 from '../assets/img/portfolio/portfolio-7.jpg'
import img8 from '../assets/img/portfolio/portfolio-8.jpg'
import img9 from '../assets/img/portfolio/portfolio-9.jpg'
import { Modal } from 'antd'



const Portfolio = () => {
    const [items, setItems] = useState([
        {
            img: img1, desc: 'Autem ipsum nam porro corporis rerum. Quis eos dolorem eos itaque inventore commodi labore quia quia. Exercitationem repudiandae officiis neque suscipit non officia eaque itaque enim. Voluptatem officia accusantium nesciunt est omnis tempora consectetur dignissimos. Sequi nulla at esse enim cum deserunt eius.', title: 'This is an example of portfolio detail',
            category: 'Web design', client: 'ASU Company', date: '01 March, 2020', url: '/'
        },
        {
            img: img2, desc: 'Autem ipsum nam porro corporis rerum. Quis eos dolorem eos itaque inventore commodi labore quia quia. Exercitationem repudiandae officiis neque suscipit non officia eaque itaque enim. Voluptatem officia accusantium nesciunt est omnis tempora consectetur dignissimos. Sequi nulla at esse enim cum deserunt eius.', title: 'This is an example of portfolio detail',
            category: 'Web design', client: 'ASU Company', date: '01 March, 2020', url: '/'
        },
        {
            img: img3, desc: 'Autem ipsum nam porro corporis rerum. Quis eos dolorem eos itaque inventore commodi labore quia quia. Exercitationem repudiandae officiis neque suscipit non officia eaque itaque enim. Voluptatem officia accusantium nesciunt est omnis tempora consectetur dignissimos. Sequi nulla at esse enim cum deserunt eius.', title: 'This is an example of portfolio detail',
            category: 'Web design', client: 'ASU Company', date: '01 March, 2020', url: '/'
        },
        {
            img: img4, desc: 'Autem ipsum nam porro corporis rerum. Quis eos dolorem eos itaque inventore commodi labore quia quia. Exercitationem repudiandae officiis neque suscipit non officia eaque itaque enim. Voluptatem officia accusantium nesciunt est omnis tempora consectetur dignissimos. Sequi nulla at esse enim cum deserunt eius.', title: 'This is an example of portfolio detail',
            category: 'Web design', client: 'ASU Company', date: '01 March, 2020', url: '/'
        },
        {
            img: img5, desc: 'Autem ipsum nam porro corporis rerum. Quis eos dolorem eos itaque inventore commodi labore quia quia. Exercitationem repudiandae officiis neque suscipit non officia eaque itaque enim. Voluptatem officia accusantium nesciunt est omnis tempora consectetur dignissimos. Sequi nulla at esse enim cum deserunt eius.', title: 'This is an example of portfolio detail',
            category: 'Web design', client: 'ASU Company', date: '01 March, 2020', url: '/'
        },
        {
            img: img6, desc: 'Autem ipsum nam porro corporis rerum. Quis eos dolorem eos itaque inventore commodi labore quia quia. Exercitationem repudiandae officiis neque suscipit non officia eaque itaque enim. Voluptatem officia accusantium nesciunt est omnis tempora consectetur dignissimos. Sequi nulla at esse enim cum deserunt eius.', title: 'This is an example of portfolio detail',
            category: 'Web design', client: 'ASU Company', date: '01 March, 2020', url: '/'
        },
        {
            img: img7, desc: 'Autem ipsum nam porro corporis rerum. Quis eos dolorem eos itaque inventore commodi labore quia quia. Exercitationem repudiandae officiis neque suscipit non officia eaque itaque enim. Voluptatem officia accusantium nesciunt est omnis tempora consectetur dignissimos. Sequi nulla at esse enim cum deserunt eius.', title: 'This is an example of portfolio detail',
            category: 'Web design', client: 'ASU Company', date: '01 March, 2020', url: '/'
        },
        {
            img: img8, desc: 'Autem ipsum nam porro corporis rerum. Quis eos dolorem eos itaque inventore commodi labore quia quia. Exercitationem repudiandae officiis neque suscipit non officia eaque itaque enim. Voluptatem officia accusantium nesciunt est omnis tempora consectetur dignissimos. Sequi nulla at esse enim cum deserunt eius.', title: 'This is an example of portfolio detail',
            category: 'Web design', client: 'ASU Company', date: '01 March, 2020', url: '/'
        },
        {
            img: img9, desc: 'Autem ipsum nam porro corporis rerum. Quis eos dolorem eos itaque inventore commodi labore quia quia. Exercitationem repudiandae officiis neque suscipit non officia eaque itaque enim. Voluptatem officia accusantium nesciunt est omnis tempora consectetur dignissimos. Sequi nulla at esse enim cum deserunt eius.', title: 'This is an example of portfolio detail',
            category: 'Web design', client: 'ASU Company', date: '01 March, 2020', url: '/'
        },
    ])
    const [modal, setModal] = useState(false)

    return (
        <section id="portfolio" className="portfolio">
            <div className="container">

                <div className="section-title" data-aos="fade-in" data-aos-delay="100">
                    <h2>Portfolio</h2>
                    <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                </div>

                <div className="row" data-aos="fade-in">
                    <div className="col-lg-12 d-flex justify-content-center">
                        <ul id="portfolio-flters">
                            <li data-filter="*" className="filter-active">All</li>
                            <li data-filter=".filter-app">App</li>
                            <li data-filter=".filter-card">Card</li>
                            <li data-filter=".filter-web">Web</li>
                        </ul>
                    </div>
                </div>

                <div className="row portfolio-container" data-aos="fade-up">

                    {items.map(el =>
                        <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                            <div className="portfolio-wrap">
                                <img src={el.img} className="img-fluid" alt="" />
                            </div>
                        </div>
                    )}
                </div>

            </div>

        </section>
    )
}

export default Portfolio