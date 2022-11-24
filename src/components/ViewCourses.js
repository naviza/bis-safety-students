import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Modal, Table} from 'react-bootstrap';
import {React, useState, useEffect} from 'react'
import Course from './Course';

const ViewCourses = ({show, handleClose, name, userID}) => {

  const getCourses = async () => {
    const coursesFromServer = await getCoursesFromAPI()
    // console.log(userID, coursesFromServer.classes)
    setCourses(coursesFromServer.classes)
  }

  const [courses, setCourses]  = useState([]);
  useEffect(
    () => {getCourses()}, []
  );

  

const getCoursesFromAPI = async() => {
  const res = await fetch(
    `https://pre.bistrainer.com/v1/index.cfm?action=testapi.courses&id=${userID}`
    )
  const data = await res.json()
  // console.log(userID, `https://pre.bistrainer.com/v1/index.cfm?action=testapi.courses&id=${userID}`,data)
  return data
}




  return (
    <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        size="lg"
      >
        <Modal.Header closeButton>
          <Modal.Title>Courses for: {name}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          
          <Table>
        <thead>
        <tr>
          <th>ClassID</th>
          <th>Class Code</th>
          <th>Class Name</th>
          <th>Certificate</th>
          <th>Passmarks</th>
          <th>Marks</th>
        </tr>
      </thead>
      <tbody>
      {courses.map( (course, index) => <Course key={index} course={course}/>)}
      </tbody>
    </Table>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
  )
}

export default ViewCourses