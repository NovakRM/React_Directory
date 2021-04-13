import React, { useContext } from "react"
import UserContext from "../utils/UserContext"

const HandleUserBody = () => {
  const context = useContext(UserContext)
  //content of table, individual employee rows.
  //using id returned on initial API objects to filter our dudes @ id.value
  //then telling the app whereto place each 

  return (
    <tbody>
      {context.userState.searchFilter[0] !== undefined && context.userState.searchFilter[0].name !== undefined ? (
        context.userState.searchFilter.map(({ id, name, picture, phone, email, dob }) => {
          return (
            <tr key={id.value}>
              <td data-th="Image" className="align-middle">
                <img src={picture.medium} className="img-responsive"/>
              </td>
              <td data-th="Name" className="name-cell align-middle">
                 {name.first} {name.last}
              </td>
              <td data-th="Phone" className="align-middle">
                {phone}
              </td>
              <td data-th="Email" className="align-middle">
                  {email}
              </td>
              <td data-th="DOB" className="align-middle">
                 {dob.date} 
              </td>
            </tr>
          )
        })
      ): 
      (
        <></>
      )}
    </tbody>
  )
}
//DOB looking a bit ****, mess with doing some .trim?

export default HandleUserBody