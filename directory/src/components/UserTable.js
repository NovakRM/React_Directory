import React, { useContext } from "react"
import HandleUserBody from "./HandleUserBody"
import UserContext from "../utils/UserContext"

const UserTable = () => {
  const context = useContext(UserContext)
  //sets up the table itself; styling, widths, etc

  return (

    <div className="UserTable">
      <table id="table" className="table table-bordered table-sm"
      >
        <thead>
          <tr>
            {context.userState.userProperties.map(({ name }) => {
              return (
                <th 
                  style={{width: 5 + '%'}}
                  className="col"
                  key={name}
                  onClick={() => {
                    context.sortUsers(name)
                  }}
                >
                  {name}
                  <span></span>
                </th>
              )
            })}
          </tr>
        </thead>

        <HandleUserBody />
      </table>
    </div>
  )
}

export default UserTable