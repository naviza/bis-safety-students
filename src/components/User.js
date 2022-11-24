
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from 'react-bootstrap';
import {React, useState} from 'react'
import ViewCourses from './ViewCourses';
import EditUser from './EditUser';

const User = ({user, submitEditUser}) => {

    const [showViewCourses, setShowViewCourses] = useState(false);
    const handleCloseViewCourse = () => setShowViewCourses(false);
    const handleShowViewCourse = () => setShowViewCourses(true);

    
    const [showEdit, setShowEdit] = useState(false);
    const handleCloseEdit = () => setShowEdit(false);
    const handleShowEdit = () => setShowEdit(true);

  return (
    <>
        <ViewCourses
            show={showViewCourses}
            handleClose={handleCloseViewCourse}
            name={user.name}
            userID={user.id}    
        />

        <EditUser 
            show={showEdit}
            handleClose={handleCloseEdit}
            user={user}
            submitEditUser={submitEditUser}
            />

        <tr>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.phone}</td>
            <td>{user.role}</td>
            <td>{user.username}</td>
            <td>{user.address}</td>
            <td>{user.city}</td>
            <td>{user.email}</td>
            <td><Button variant="secondary" onClick={handleShowEdit}>Edit</Button></td>
            <td><Button onClick={handleShowViewCourse}>View Courses</Button></td>
        </tr>
    </>
    

    
  )
}

export default User