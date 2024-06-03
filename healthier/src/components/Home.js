import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Home = () => {
    const nav = useNavigate()

    return (
        <div className='home-container'>
            <div className='home'>
                <div className='home-content'>
                    <div className='navbar-container'>
                        <div className='navbar'>
                            <div className='navbar-logo'>
                                Healthier
                            </div>
                            <div
                                className='navbar-connect-btn'
                                onClick={() => {
                                    nav('/yogai')
                                }}
                            >
                                YogAI
                            </div>
                            <div
                                className='navbar-connect-btn'
                                onClick={() => {
                                    nav('/admin')
                                }}
                            >
                                Mental Health
                            </div>
                        </div>
                    </div>
                    <div className='info-container'>
                        <div className='info'>
                            <div className='title-light'>
                                With &nbsp;
                                <span className='title-logo'>
                                    Healthier
                                </span>
                            </div>
                            <div className='title'>
                                Store Your Medical Records at a Safe Place
                            </div>
                            <div className='title-sub'>
                                A decentralized medical records storage platform that allows you to store your medical records safely and share them with your doctors and hospitals.
                            </div>
                            <div
                                className='connect-btn'
                                onClick={() => {
                                    nav('/doctor')
                                }}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="#005ac2" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">&lt;!--!  Atomicons Free 1.00 by @atisalab License - https://atomicons.com/license/ (Icons: CC BY 4.0) Copyright 2021 Atomicons --&gt;<polyline points="11 17 16 12 11 7"></polyline></svg>
                                <div
                                    className='connect-btn-text'>
                                    View
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='other-content'>
                <div className='resources-container'>
                    <div className='resources'>
                        <div className='resources-title'>
                            Built with
                        </div>
                        <div className='resource-list'>
                            
                            <div className='resource'>
                                Web3
                            </div>
                            <div className='resource'>
                                React
                            </div>
                        </div>
                    </div>
                </div>
                <div className='content-container'>
                    <div className='content'>
                        <div className='content-title'>
                            A safe, secure platform to store your medical records.
                        </div>
                        <div className='content-sub-title'>
                            Healthier has verified doctor profiles, who then add your medical records, securing them within the blockchain.
                        </div>
                        <div className='cards-container'>
                            <div className='cards'>
                                <div className='card-container'>
                                    <div className='card'>
                                        <div className='card-image1'></div>
                                        <div className='card-title'>
                                            Admins add the doctor's profile after verifying them
                                        </div>
                                        <div className='card-sub'>
                                            We are the admin, searching for verified doctors around the world and adding them to our platform. We also verify the doctor's profile. This is done in order to ensure that the doctor is a real person and that he/she is a verified doctor and there is no discrepancy.
                                        </div>
                                    </div>
                                </div>
                                <div className='card-container'>
                                    <div className='card'>
                                        <div className='card-image2'></div>
                                        <div className='card-title'>
                                            Verified doctors create patient profiles
                                        </div>
                                        <div className='card-sub'>
                                            Patients' information is added via doctor and the reports are also uploaded by the doctor. A unique QR code is generated for patient upon successful registration.
                                        </div>
                                    </div>
                                </div>
                                <div className='card-container'>
                                    <div className='card'>
                                        <div className='card-image3'></div>
                                        <div className='card-title'>
                                            Patients can view thier reports
                                        </div>
                                        <div className='card-sub'>
                                            On the patients' dasboard, they can view their profile and their past reports. The patient can use the QR code when visiting a doctor. On scanning the QR, doctor can view all the past reports of the patient.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='footer-container'>
                <div className='footer'>
                    <div className='copy-text'>
                        &copy; {new Date().getFullYear()} Healthier Co.
                    </div>
                    <div className='github-btn'>
                        <a href='https://github.com/GeekCoderRaj/health-decentralized' target='_blank' rel='noreferrer'>
                            Github
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
