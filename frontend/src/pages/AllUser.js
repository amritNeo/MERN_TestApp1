import React, { useEffect, useState } from 'react'
import summaryAPI from '../common'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import moment from "moment";
import { MdModeEdit } from "react-icons/md";
import ChangeUserRole from '../components/ChangeUserRole';


const AllUser = () => {

  const [allUsers, setAllUsers] = useState([])
  const [updateUser, setUpdateUser] = useState({
    userId:"",
    email: "",
    name: "",
    role: ""
  })
  const [openUpdate, setOpenUpdate] = useState(false)

  const fetchAllUsers = async () => {
    const userDetails = await fetch(summaryAPI.allUsers.url, {
      method: summaryAPI.allUsers.method,
      credentials: 'include'
    })

    const apiData = await userDetails.json();
    console.log("apiData", apiData);
    if (apiData.success) {
      setAllUsers(apiData.data)
    }

    if (apiData.error) {
      toast.error(apiData.message)
    }

  }

  useEffect(() => {
    fetchAllUsers()
  }, [])

  return (
    <div>
      <table className="w-full usertable">
        <thead>
          <th>Sr.</th>
          <th>Name</th>
          <th>Email Id</th>
          <th>Role</th>
          <th>Created Date</th>
          <th>Action</th>
        </thead>
        <tbody>
          {
            allUsers.map((element, index) => {
              return (
                <tr>
                  <td>{index + 1}</td>
                  <td>{element.name}</td>
                  <td>{element.email}</td>
                  <td>{element.role}</td>
                  <td>{moment(element.createdAt).format('ll')}</td>
                  <td>
                    <button onClick={() => {
                      setOpenUpdate(true)
                      setUpdateUser(element)
                    }} className='bg-green-100 p-2 
                    rounded-full cursor-pointer hover:bg-green-600 hover:text-white'><MdModeEdit /></button>
                  </td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
      {
        openUpdate && (
          <ChangeUserRole onClose={() => setOpenUpdate(false)}
            name={updateUser.name}
            email={updateUser.email}
            role={updateUser.role}
            userId = {updateUser._id}
            callfunc = {fetchAllUsers}
          ></ChangeUserRole>
        )
      }
    </div>
  )
}

export default AllUser
