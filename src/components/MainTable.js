
import {React, useState, useEffect} from 'react'
import User from './User';
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table';



const MainTable = () => {

  
  const [userTable, setUserTable]  = useState([]);
  useEffect(
    () => {getUsers()},
    []
  );

  const getUsersFromAPI = async() => {
    const res = await fetch('https://pre.bistrainer.com/v1/index.cfm?action=testapi.users')
    const data = await res.json()
    // console.log(data)
    return data
  }

  const getUsers = async () => {
    const usersFromServer = await getUsersFromAPI()
    // console.log(usersFromServer)
    setUserTable(usersFromServer.users)
  }

  const submitEditUser = (id, username, address) => {
    // console.log(id, username, address)
    setUserTable(userTable.map((user) => 
    user.id === id ? { ...user, username:username, address:address} : user
  ))
  };

  return (
    <div>
      <Table striped bordered hover>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Phone</th>
          <th>Role</th>
          <th>Username</th>
          <th>Address</th>
          <th>City</th>
          <th>Email</th>
          <th>Edit</th>
          <th>View Courses</th>
        </tr>
      </thead>
      <tbody>
      {userTable.map((user, index) => <User key={index} user={user} submitEditUser={submitEditUser}/>)}
      </tbody>
        
      </Table>
    </div>
  )
}

export default MainTable