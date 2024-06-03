import React from 'react'
import { Link } from 'react-router-dom'

const DoctorAccount = () => {
    return (
        <div className='admin-page-container'>
            <div className='admin-page-left'>
                <div className='admin-page-left-nav'>
                    <div className='left-nav-items'>
                        <Link to='/' className='left-nav-logo'>
                            Healthier
                        </Link>
                        <Link to='/doctor' className='left-nav-item'>
                            Home
                        </Link>
                        <Link to='/doctor/add-patient' className='left-nav-item'>
                            Add Patients
                        </Link>
                        <Link to='/doctor/view-patient' className='left-nav-item'>
                            View Patients
                        </Link>
                        <Link to='/doctor/appointments' className='left-nav-item'>
                            Appointments
                        </Link>
                        <Link to='/doctor/account' className='left-nav-item-active'>
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
                            Welcome Dr.
                        </div>
                    </div>
                </div>
                <div className='content-container'>
                    <div className='content-view'>
                        <div className='content-nav-container'>
                            <div className='content-nav'>
                                <div className='content-nav-item'>
                                    Account Settings
                                </div>
                            </div>
                        </div>
                        <div className='details-container'>
                            <div className='details'>
                                <div className='details-header'>
                                    Personal Details
                                </div>
                                <div className='details-box'>
                                    <div className='detail'>
                                        <div className='det-image'></div>
                                        <div className='det'>
                                            <div className='det-title'>
                                                Name:
                                            </div>
                                            <div className='det-text'>
                                                @admin
                                            </div>
                                            <div className='det-edit'>
                                                <svg width="24" height="24" fill="#5a7196" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="m16 2.016 3 3-2.287 2.288-3-3L16 2.016ZM4 14.004v3h3l8.299-8.287-3-3L4 14.004Zm0 6h16v2H4v-2Z"></path>
                                                </svg>
                                            </div>
                                        </div>
                                        <div className='det'>
                                            <div className='det-title'>
                                                Email:
                                            </div>
                                            <div className='det-text'>
                                                doctor@example.com
                                            </div>
                                            <div className='det-edit'>
                                                <svg width="24" height="24" fill="#5a7196" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="m16 2.016 3 3-2.287 2.288-3-3L16 2.016ZM4 14.004v3h3l8.299-8.287-3-3L4 14.004Zm0 6h16v2H4v-2Z"></path>
                                                </svg>
                                            </div>
                                        </div>
                                        <div className='det'>
                                            <div className='det-title'>
                                                Phone:
                                            </div>
                                            <div className='det-text'>
                                                1234567890
                                            </div>
                                            <div className='det-edit'>
                                                <svg width="24" height="24" fill="#5a7196" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="m16 2.016 3 3-2.287 2.288-3-3L16 2.016ZM4 14.004v3h3l8.299-8.287-3-3L4 14.004Zm0 6h16v2H4v-2Z"></path>
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DoctorAccount
