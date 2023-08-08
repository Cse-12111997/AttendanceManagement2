


import React, { useState } from 'react';
import axios from 'axios';
import {Row,Col,Form} from 'react-bootstrap'
const MarkAttendance = () => {
  const [rollNumber, setRollNumber] = useState('');
  const [date, setDate] = useState('');
  const [attendanceStatus, setAttendanceStatus] = useState('Present');
  const [message, setMessage] = useState('');

  const handleAttendanceSubmit = async (event) => {
    event.preventDefault();

    const attendanceData = {
      rollNumber,
    //   date,
      attendanceStatus,
    };
        console.log(attendanceData);
    axios.post('http://localhost:8081/home',attendanceData)
        .then(res => console.log('Success'))
        .catch(err => console.log(err));

    // try {
    //   const response = await axios.post('http://localhost:8081/home', attendanceData);

    //   if (response.status === 201) {
    //     setMessage('Attendance marked successfully.');
    //   } else {
    //     setMessage('Error: Failed to mark attendance.');
    //   }
    // } catch (error) {
    //   if (error.response && error.response.status === 400) {
    //     setMessage('Error: Attendance already marked for this roll number on this date.');
    //   } else {
    //     setMessage('Error: Failed to mark attendance.');
    //   }
    // }
  };

  return (
    <div className='d-flex justify-content-center align-items-center bg-image vh-100'>
        <div className='bg-white p-3 rounded w-25'>
      <h1>Mark Attendance</h1>


      <form onSubmit={handleAttendanceSubmit}>
        <div className='jbzd'>

        <Row>

        <Col xl={6}>
        <label htmlFor="rollNumber">Roll Number:</label>
        </Col>
        <Col xl={6}>
        <input className='form-control' type="text" id="rollNumber" name="rollNumber" value={rollNumber} onChange={(e) => setRollNumber(e.target.value)} required />
          
          </Col>


        </Row>
        <Row>
        <Col xl={6}>
        <label htmlFor="date">Date:</label>
        </Col>
        <Col xl={6}>
        <select className='form-select' id="date" name="date" value={date} onChange={(e) => setDate(e.target.value)} required>
          <option value="08-Aug-2023">08-Aug-2023</option>
          <option value="09-Aug-2023">09-Aug-2023</option>
          <option value="10-Aug-2023">10-Aug-2023</option>
          <option value="11-Aug-2023">11-Aug-2023</option>
          <option value="12-Aug-2023">12-Aug-2023</option>
        </select>
        </Col>
        </Row>
    <Row>
      <Col xl={6}>
        <label htmlFor="attendanceStatus">Attendance Status:</label>
        </Col>
        <Col xl={6}>
        <select className='form-select' id="attendanceStatus" name="attendanceStatus" value={attendanceStatus} onChange={(e) => setAttendanceStatus(e.target.value)} required>
          <option value="Present">Present</option>
          <option value="Absent">Absent</option>
        </select>
      </Col>
    </Row>
        <Row>
        <Col xl={6}>
      
        <input className='btn btn-primary' type="submit" value="Submit"  />
          </Col>
        </Row>
        </div>
      </form>
      <div>{message}</div>
      </div>
    </div>
  );
};

export default MarkAttendance;

