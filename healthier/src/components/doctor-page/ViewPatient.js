import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Patient } from '../../patientData'
const ViewPatient = () => {
    const nav = useNavigate()

    // const patients = [
    //     {
    //         name: 'Mr. John Doe',
    //         gender: 'Male',
    //         age: 20,
    //         address: 'Wolf Street, Casablanca, SA',
    //         report: []
    //     },
    //     // Add more patient objects here
    // ];

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
                        <Link to='/doctor/view-patient' className='left-nav-item-active'>
                            View Patients
                        </Link>
                        <Link to='/doctor/appointments' className='left-nav-item'>
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
                                    Patients
                                </div>
                                <div className='content-nav-item'>
                                    <div className='search-box'>
                                        <input type='text' placeholder='Search' />
                                        <svg width="24" height="24" fill="#a1a1a1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M10 18a7.952 7.952 0 0 0 4.897-1.688l4.396 4.396 1.414-1.414-4.396-4.396A7.952 7.952 0 0 0 18 10c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8Zm0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6Z"></path>
                                            <path d="M11.412 8.587c.379.38.588.882.588 1.414h2a3.977 3.977 0 0 0-1.174-2.828c-1.514-1.512-4.14-1.512-5.652 0L8.586 8.59c.76-.758 2.07-.756 2.826-.002Z"></path>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='doc-cards-container' style={{display: "flex"}}>
                            {Patient.map((patient, index) => (
                                <div className='doc-cards' key={index}>
                                    <div className='doc-card-container'>
                                        <div className='doc-card'>
                                            <div className='doc-card-left'>
                                            </div>
                                            <div className='doc-card-right'>
                                                <div className='doc-right-top'>
                                                    <div className='doc-name'>
                                                        {patient.name}
                                                    </div>
                                                    <div className='doc-spec'>{patient.gender}, {patient.age}</div>
                                                    <div className='doc-hospital'>
                                                        {patient.address}
                                                    </div>
                                                </div>
                                                <div className='doc-right-bottom'>
                                                    <div className='doc-right-btn'
                                                        onClick={() => {
                                                            nav('/doctor/patient-info', {
                                                                state: { id: patient.id }
                                                            })
                                                        }}
                                                    >
                                                        View
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewPatient
