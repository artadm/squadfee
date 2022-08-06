import React, { useState } from 'react'
import img1 from '../assets/img/team/team-1.jpg'
import img2 from '../assets/img/team/team-2.jpg'
import img3 from '../assets/img/team/team-3.jpg'
import Icon from '@reacticons/bootstrap-icons';

const Team = () => {
    const [team, setTeam] = useState([
        { name: 'Walter White', work: 'Chief Executive Officer', img: img1 },
        { name: 'Sarah Jhonson', work: 'Product Manager', img: img2 },
        { name: 'William Anderson', work: 'CTO', img: img3 },
    ])
    return (
        <section id="team" className="team">
            <div className="container">

                <div className="section-title" data-aos="fade-in" data-aos-delay="100">
                    <h2>Team</h2>
                    <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                </div>

                <div className="row">
                    {team.map(peop =>

                        <div key={peop.name} className="col-lg-4 col-md-6">
                            <div className="member" data-aos="fade-up">
                                <div className="pic"><img src={peop.img} className="img-fluid" alt="" /></div>
                                <div className="member-info">
                                    <h4>{peop.name}</h4>
                                    <span>{peop.work}</span>
                                    <div className="social">
                                        <a href=""><Icon className='bi' name='twitter' /></a>
                                        <a href=""><Icon className='bi' name="facebook" /></a>
                                        <a href=""><Icon className='bi' name="instagram" /></a>
                                        <a href=""><Icon className='bi' name="linkedin" /></a>
                                    </div>
                                </div>
                            </div>
                        </div>

                    )}




                </div>

            </div>
        </section>
    )
}

export default Team