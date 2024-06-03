import React from 'react'
import { Link } from 'react-router-dom'

const AddPatient = () => {
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
                        <Link to='/doctor/view-patient' className='left-nav-item'>
                            View Patients
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
                    <div className='content'>
                        <div className='form-container'>
                            <div className='form'>
                                <div className='form-fields'>
                                    <div className='form-field'>
                                        <input type='text' placeholder='First Name' />
                                    </div>
                                    <div className='form-field'>
                                        <input type='text' placeholder='Last Name' />
                                    </div>
                                </div>
                                <div className='form-fields'>
                                    <div className='form-field'>
                                        <input type='text' placeholder='Gender' />
                                    </div>
                                    <div className='form-field'>
                                        <input type='text' placeholder='Age' />
                                    </div>
                                </div>
                                <div className='form-fields'>
                                    <div className='form-field'>
                                        <input type='text' placeholder='Mobile No.' />
                                    </div>
                                    <div className='form-field'>
                                        <input type='email' placeholder='Email id' />
                                    </div>
                                </div>
                                <div className='form-fields-add'>
                                    <div className='form-field'>
                                        <input type='text' placeholder='Address' />
                                    </div>
                                </div>
                                <div className='form-fields-btn'>
                                    <div className='form-field-btn'>
                                        Add
                                    </div>
                                    <div className='form-field-btn'>
                                        Cancel
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

export default AddPatient
