import React from 'react'
import { Link } from 'react-router-dom'

const PatientPage = () => {
    return (
        <div className='admin-page-container'>
            <div className='admin-page-left'>
                <div className='admin-page-left-nav'>
                    <div className='left-nav-items'>
                        <Link to='/' className='left-nav-logo'>
                            Healthier
                        </Link>
                        <Link to='/patient' className='left-nav-item-active'>
                            Home
                        </Link>
                        <Link to='/patient/view-doctor' className='left-nav-item'>
                            View Doctors
                        </Link>
                        <Link to='/patient/reports' className='left-nav-item'>
                            Reports
                        </Link>
                        <Link to='/patient/account' className='left-nav-item'>
                            Account
                        </Link>
                    </div>
                    <Link to='/' className='left-nav-logout'>
                        Logout
                    </Link>
                </div>
            </div>
            <div className='admin-page-right'>
                <div className='admin-page-right-nav'>
                    <div className='right-nav-items'>
                        <div className='right-nav-item'>
                            Welcome Mr.
                        </div>
                    </div>
                </div>
                <div className='content-container'>
                    <div className='content-view'>
                        <div className='content-nav-container'>
                            <div className='content-nav'>
                                <div className='content-nav-item'>
                                    Hi there 👋
                                </div>
                            </div>
                        </div>
                        <div className='intro-box'>
                            <div className='intro'>
                                <div className='intro-title'>
                                    Welcome to your dashboard!
                                </div>
                                <div className='intro-sub'>
                                    Here you can manage your account and check your reports. Check out the navigation bar on the left to get started.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PatientPage
