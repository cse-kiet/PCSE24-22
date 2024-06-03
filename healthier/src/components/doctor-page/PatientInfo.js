import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { sendFileToIpfs } from '../../ipfs'
import { Patient } from '../../patientData'
import {useLocation} from 'react-router-dom'
const PatientInfo = () => {
    const location = useLocation();
    const data = location.state.id;
    const patientdata = Patient.filter((patient) => patient.id === data)
    const [patients, setPatient] = useState(patientdata[0])
    console.log(patientdata)
    console.log("Patient Info");
    const nav = useNavigate()
    const uploadFile = async (e) =>{
        console.log(e.target.files[0])
        const response = await sendFileToIpfs(e.target.files[0])
        setPatient({...patients, report: [...patients.report, response]})
        Patient[0].report.push(response)
    }
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
                                    <span
                                        onClick={() => {
                                            nav('/doctor/view-patient')
                                        }}
                                    >
                                        Patients
                                    </span> &#10093; Patient Details
                                </div>
                            </div>
                        </div>
                        <div className='patient-info-container'>
                            <div className='patient-info'>
                                <div className='patient-info-top'>
                                    <div className='info-top-card'>
                                        <div className='patient-info-card'>
                                            {patients?.name}
                                        </div>
                                        <div className='patient-info-card'>
                                            {patients?.gender}
                                        </div>
                                        <div className='patient-info-card'>
                                            {patients?.age}
                                        </div>
                                    </div>
                                    <div className='info-top-card'>
                                        <div className='patient-info-card'>
                                            {patients?.bloodGroup}
                                        </div>
                                        <div className='patient-info-card'>
                                            ID: {patients?.id}
                                        </div>
                                        <div className='patient-info-card'>
                                            {patients?.address}
                                        </div>
                                    </div>
                                </div>
                                <div className='patient-info-bottom'>
                                    <div className='content'>
                                        <div className='form-container'>
                                            <div className='form'>
                                                
                                                <div className='form-fields-add'>
                                                    <div className='form-field'>
                                                        <span>Upload Report</span>
                                                        &nbsp;
                                                        &nbsp;
                                                        <input type='file' onChange={uploadFile}/>
                                                    </div>
                                                </div>
                                                <div className='form-fields-btn'>
                                                    <div className='form-field-btn'>
                                                        Save
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
                            {/* Report list */}
                            <div className='patient-info-bottom'>
                                    <div className='content'>
                                        <div className='form-container'>
                                            <div className='form'>
                                                                                               <div className='form-fields-add'>
                                                    <div className='form-field'>
                                                        <span>Report</span>
                                                        &nbsp;
                                                        &nbsp;
                                                        {patients?.report.map((report, index) => (
                                                            <div key={index} className='report-list'>
                                                                <div className='report-list-item'>
                                                                <div style={{width: "500px"}} className='input'>
                                                                <a href={`https://gateway.pinata.cloud/ipfs/${report}`}>
                                                                    
                                                                       {report}
                                                                    </a> 
                                                                </div>
                                                                </div>
                                                            </div>
                                                        ))}
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

export default PatientInfo
