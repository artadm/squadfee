import React from 'react'
import Icon from '@reacticons/bootstrap-icons'
const Counts = () => {
    return (
        <>
            <section id="counts" className="counts  section-bg">
                <div className="container">

                    <div className="row no-gutters">

                        <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch">
                            <div className="count-box">
                                <Icon name='emoji-smile' className="bi__counts"></Icon>
                                <span className="purecounter">232</span>
                                <p><strong>Happy Clients</strong> consequuntur quae</p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch">
                            <div className="count-box">
                                <Icon name='journal-richtext' className="bi__counts"></Icon>
                                <span className="purecounter">521</span>
                                <p><strong>Projects</strong> adipisci atque cum quia aut</p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch">
                            <div className="count-box">
                                <Icon name='headset' className="bi__counts"></Icon>
                                <span className="purecounter">1463</span>
                                <p><strong>Hours Of Support</strong> aut commodi quaerat</p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch">
                            <div className="count-box">
                                <Icon name='people' className="bi__counts"></Icon>
                                <span className="purecounter">15</span>
                                <p><strong>Hard Workers</strong> rerum asperiores dolor</p>
                            </div>
                        </div>

                    </div>

                </div>
            </section>

            <section id="cta" className="cta">
                <div className="container" data-aos="zoom-in">

                    <div className="text-center">
                        <h3>Call To Action</h3>
                        <p> Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        <a className="cta-btn" href="#">Call To Action</a>
                    </div>

                </div>
            </section>
        </>
    )
}

export default Counts