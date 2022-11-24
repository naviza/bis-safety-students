
import 'bootstrap/dist/css/bootstrap.min.css';
import {React} from 'react'

const Course = ({course}) => {
  return (
    <tr>
    <td>{course.classid}</td>
        <td>{course.classcode}</td>
        <td>{course.classname}</td>
        <td>{course.certificate}</td>
        <td>{course.passmarks}</td>
        <td>{course.marks}</td>
    </tr>
  )
}

export default Course