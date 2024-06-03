import React from 'react'
import { Link } from 'react-router-dom'

const Appointments = () => {
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
                            Approve Patients
                        </Link>
                        <Link to='/doctor/appointments' className='left-nav-item-active'>
                            Appointments
                        </Link>
                        <Link to='/doctor/account' className='left-nav-item'>
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
                                    Appointments
                                </div>
                            </div>
                        </div>
                        <div className='doc-cards-container'>
                            <div className='doc-cards'>
                                <div className='doc-card-container'>
                                    <div className='doc-card'>
                                        <div className='doc-card-left'>
                                        </div>
                                        <div className='doc-card-right'>
                                            <div className='doc-right-top'>
                                                <div className='doc-name'>
                                                    Mr. John Doe
                                                </div>
                                                <div className='doc-spec'>Male, 20</div>
                                                <div className='doc-hospital'>
                                                    Wolf Street, Casablanca, SA
                                                </div>
                                            </div>
                                            <div className='doc-right-bottom'>
                                                <div className='doc-right-btn'
                                                    onClick={() => {
                                                        // nav('/doctor/patient-info')
                                                    }}
                                                >
                                                    Approve
                                                </div>
                                                <div className='doc-right-btn'
                                                    onClick={() => {
                                                        // nav('/doctor/patient-info')
                                                    }}
                                                >
                                                    Postpone
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='doc-card-container'>
                                    <div className='doc-card'>
                                        <div className='doc-card-left'>
                                        </div>
                                        <div className='doc-card-right'>
                                            <div className='doc-right-top'>
                                                <div className='doc-name'>
                                                    Mr. John Doe
                                                </div>
                                                <div className='doc-spec'>Male, 20</div>
                                                <div className='doc-hospital'>
                                                    Wolf Street, Casablanca, SA
                                                </div>
                                            </div>
                                            <div className='doc-right-bottom'>
                                                <div className='doc-right-btn'
                                                    onClick={() => {
                                                        // nav('/doctor/patient-info')
                                                    }}
                                                >
                                                    Approve
                                                </div>
                                                <div className='doc-right-btn'
                                                    onClick={() => {
                                                        // nav('/doctor/patient-info')
                                                    }}
                                                >
                                                    Postpone
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='doc-card-container'>
                                    <div className='doc-card'>
                                        <div className='doc-card-left'>
                                        </div>
                                        <div className='doc-card-right'>
                                            <div className='doc-right-top'>
                                                <div className='doc-name'>
                                                    Mr. John Doe
                                                </div>
                                                <div className='doc-spec'>Male, 20</div>
                                                <div className='doc-hospital'>
                                                    Wolf Street, Casablanca, SA
                                                </div>
                                            </div>
                                            <div className='doc-right-bottom'>
                                                <div className='doc-right-btn'
                                                    onClick={() => {
                                                        // nav('/doctor/patient-info')
                                                    }}
                                                >
                                                    Approve
                                                </div>
                                                <div className='doc-right-btn'
                                                    onClick={() => {
                                                        // nav('/doctor/patient-info')
                                                    }}
                                                >
                                                    Postpone
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='doc-cards'>
                                <div className='doc-card-container'>
                                    <div className='doc-card'>
                                        <div className='doc-card-left'>
                                        </div>
                                        <div className='doc-card-right'>
                                            <div className='doc-right-top'>
                                                <div className='doc-name'>
                                                    Mr. John Doe
                                                </div>
                                                <div className='doc-spec'>Male, 20</div>
                                                <div className='doc-hospital'>
                                                    Wolf Street, Casablanca, SA
                                                </div>
                                            </div>
                                            <div className='doc-right-bottom'>
                                                <div className='doc-right-btn'
                                                    onClick={() => {
                                                        // nav('/doctor/patient-info')
                                                    }}
                                                >
                                                    Approve
                                                </div>
                                                <div className='doc-right-btn'
                                                    onClick={() => {
                                                        // nav('/doctor/patient-info')
                                                    }}
                                                >
                                                    Postpone
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='doc-card-container'>
                                    <div className='doc-card'>
                                        <div className='doc-card-left'>
                                        </div>
                                        <div className='doc-card-right'>
                                            <div className='doc-right-top'>
                                                <div className='doc-name'>
                                                    Mr. John Doe
                                                </div>
                                                <div className='doc-spec'>Male, 20</div>
                                                <div className='doc-hospital'>
                                                    Wolf Street, Casablanca, SA
                                                </div>
                                            </div>
                                            <div className='doc-right-bottom'>
                                                <div className='doc-right-btn'
                                                    onClick={() => {
                                                        // nav('/doctor/patient-info')
                                                    }}
                                                >
                                                    Approve
                                                </div>
                                                <div className='doc-right-btn'
                                                    onClick={() => {
                                                        // nav('/doctor/patient-info')
                                                    }}
                                                >
                                                    Postpone
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='doc-card-container'>
                                    <div className='doc-card'>
                                        <div className='doc-card-left'>
                                        </div>
                                        <div className='doc-card-right'>
                                            <div className='doc-right-top'>
                                                <div className='doc-name'>
                                                    Mr. John Doe
                                                </div>
                                                <div className='doc-spec'>Male, 20</div>
                                                <div className='doc-hospital'>
                                                    Wolf Street, Casablanca, SA
                                                </div>
                                            </div>
                                            <div className='doc-right-bottom'>
                                                <div className='doc-right-btn'
                                                    onClick={() => {
                                                        // nav('/doctor/patient-info')
                                                    }}
                                                >
                                                    Approve
                                                </div>
                                                <div className='doc-right-btn'
                                                    onClick={() => {
                                                        // nav('/doctor/patient-info')
                                                    }}
                                                >
                                                    Postpone
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='doc-cards'>
                                <div className='doc-card-container'>
                                    <div className='doc-card'>
                                        <div className='doc-card-left'>
                                        </div>
                                        <div className='doc-card-right'>
                                            <div className='doc-right-top'>
                                                <div className='doc-name'>
                                                    Mr. John Doe
                                                </div>
                                                <div className='doc-spec'>Male, 20</div>
                                                <div className='doc-hospital'>
                                                    Wolf Street, Casablanca, SA
                                                </div>
                                            </div>
                                            <div className='doc-right-bottom'>
                                                <div className='doc-right-btn'
                                                    onClick={() => {
                                                        // nav('/doctor/patient-info')
                                                    }}
                                                >
                                                    Approve
                                                </div>
                                                <div className='doc-right-btn'
                                                    onClick={() => {
                                                        // nav('/doctor/patient-info')
                                                    }}
                                                >
                                                    Postpone
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='doc-card-container'>
                                    <div className='doc-card'>
                                        <div className='doc-card-left'>
                                        </div>
                                        <div className='doc-card-right'>
                                            <div className='doc-right-top'>
                                                <div className='doc-name'>
                                                    Mr. John Doe
                                                </div>
                                                <div className='doc-spec'>Male, 20</div>
                                                <div className='doc-hospital'>
                                                    Wolf Street, Casablanca, SA
                                                </div>
                                            </div>
                                            <div className='doc-right-bottom'>
                                                <div className='doc-right-btn'
                                                    onClick={() => {
                                                        // nav('/doctor/patient-info')
                                                    }}
                                                >
                                                    Approve
                                                </div>
                                                <div className='doc-right-btn'
                                                    onClick={() => {
                                                        // nav('/doctor/patient-info')
                                                    }}
                                                >
                                                    Postpone
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='doc-card-container'>
                                    <div className='doc-card'>
                                        <div className='doc-card-left'>
                                        </div>
                                        <div className='doc-card-right'>
                                            <div className='doc-right-top'>
                                                <div className='doc-name'>
                                                    Mr. John Doe
                                                </div>
                                                <div className='doc-spec'>Male, 20</div>
                                                <div className='doc-hospital'>
                                                    Wolf Street, Casablanca, SA
                                                </div>
                                            </div>
                                            <div className='doc-right-bottom'>
                                                <div className='doc-right-btn'
                                                    onClick={() => {
                                                        // nav('/doctor/patient-info')
                                                    }}
                                                >
                                                    Approve
                                                </div>
                                                <div className='doc-right-btn'
                                                    onClick={() => {
                                                        // nav('/doctor/patient-info')
                                                    }}
                                                >
                                                    Postpone
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='doc-cards'>
                                <div className='doc-card-container'>
                                    <div className='doc-card'>
                                        <div className='doc-card-left'>
                                        </div>
                                        <div className='doc-card-right'>
                                            <div className='doc-right-top'>
                                                <div className='doc-name'>
                                                    Mr. John Doe
                                                </div>
                                                <div className='doc-spec'>Male, 20</div>
                                                <div className='doc-hospital'>
                                                    Wolf Street, Casablanca, SA
                                                </div>
                                            </div>
                                            <div className='doc-right-bottom'>
                                                <div className='doc-right-btn'
                                                    onClick={() => {
                                                        // nav('/doctor/patient-info')
                                                    }}
                                                >
                                                    Approve
                                                </div>
                                                <div className='doc-right-btn'
                                                    onClick={() => {
                                                        // nav('/doctor/patient-info')
                                                    }}
                                                >
                                                    Postpone
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='doc-card-container'>
                                    <div className='doc-card'>
                                        <div className='doc-card-left'>
                                        </div>
                                        <div className='doc-card-right'>
                                            <div className='doc-right-top'>
                                                <div className='doc-name'>
                                                    Mr. John Doe
                                                </div>
                                                <div className='doc-spec'>Male, 20</div>
                                                <div className='doc-hospital'>
                                                    Wolf Street, Casablanca, SA
                                                </div>
                                            </div>
                                            <div className='doc-right-bottom'>
                                                <div className='doc-right-btn'
                                                    onClick={() => {
                                                        // nav('/doctor/patient-info')
                                                    }}
                                                >
                                                    Approve
                                                </div>
                                                <div className='doc-right-btn'
                                                    onClick={() => {
                                                        // nav('/doctor/patient-info')
                                                    }}
                                                >
                                                    Postpone
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='doc-card-container'>
                                    <div className='doc-card'>
                                        <div className='doc-card-left'>
                                        </div>
                                        <div className='doc-card-right'>
                                            <div className='doc-right-top'>
                                                <div className='doc-name'>
                                                    Mr. John Doe
                                                </div>
                                                <div className='doc-spec'>Male, 20</div>
                                                <div className='doc-hospital'>
                                                    Wolf Street, Casablanca, SA
                                                </div>
                                            </div>
                                            <div className='doc-right-bottom'>
                                                <div className='doc-right-btn'
                                                    onClick={() => {
                                                        // nav('/doctor/patient-info')
                                                    }}
                                                >
                                                    Approve
                                                </div>
                                                <div className='doc-right-btn'
                                                    onClick={() => {
                                                        // nav('/doctor/patient-info')
                                                    }}
                                                >
                                                    Postpone
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
        </div>
    )
}

export default Appointments
