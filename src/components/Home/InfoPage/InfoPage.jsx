import React from 'react';
import './InfoPage.css';
import { FaClock, FaHeadset,FaHouseUser  } from "react-icons/fa";
import { Link } from 'react-router-dom';

const InfoPage = () => {
    return (
        <section className="why-us mt-5 mt-md-0">
            <div className="container">

                <div className="row">
                    <div className="col-lg-4 d-flex align-items-stretch">
                        <div className="content">
                            <h3>What is UHI ?</h3>
                            <p>
                            The Unified Health Interface (UHI), a cornerstone of the Ayushman Bharat Digital Mission led by Prime Minister Narendra Modi, revolutionizes access to healthcare services in India by creating a seamless digital platform for patients and professionals alike
                            </p>
                            <div className="text-center">
                            <a href="https://uhi.abdm.gov.in/" className="more-btn" target="_blank" rel="noopener noreferrer">
                                Learn More <i className="bx bx-chevron-right"></i>
                            </a>
                        </div>
                        </div>
                    </div>
                    <div className="col-lg-8 d-flex align-items-stretch">
                        <div className="icon-boxes d-flex flex-column justify-content-center">
                            <div className="row">
                                <div className="col-xl-4 d-flex align-items-stretch">
                                    <div className="icon-box mt-4 mt-xl-0">
                                        <FaHouseUser className="icon"/>
                                        <h4>Appointment Scheduling and Record Management</h4>
                                        <small className='text-secondary'>24 Hours Service</small>
                                        <p>   - Allow patients to book, reschedule, or cancel appointments with doctors or specialists.</p>
                                        <p>   - Securely store and manage patient medical records, including past visit notes, laboratory results, and medical imaging.</p>
                                    </div>
                                </div>
                                <div className="col-xl-4 d-flex align-items-stretch">
                                    <div className="icon-box mt-4 mt-xl-0">
                                        <FaHeadset className="icon"/>
                                        <h4>Doctor Profile and Medication Management</h4>
                                        <p>-Detailed profiles for doctors and healthcare facilities, including qualifications, specialties, reviews, and available services.</p>

                                        <p>-Prescription management streamlines medication adherence and safety by organizing and monitoring patient prescriptions digitally.</p>
                                    </div>
                                </div>
                                <div className="col-xl-4 d-flex align-items-stretch">
                                    <div className="icon-box mt-4 mt-xl-0">
                                        <FaClock className="icon"/>
                                        <h4>Improving HealthCare</h4>
                                        <small className='text-secondary'>Cross-Platform Integration and Data Exchange</small>
                                        <p>
                                        Improving Indian healthcare requires a multifaceted approach encompassing enhanced access, quality, and affordability, along with bolstering healthcare infrastructure and workforce capacity. Embracing technology, community engagement, and evidence-based policies can drive transformative change towards a more inclusive and effective healthcare system for all Indians.</p>
                                       </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default InfoPage