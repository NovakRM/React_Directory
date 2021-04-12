import React, { useState, useEffect } from "react"
// import Nav from "./Nav"
import API from "../utils/API"
import UserContext from "../utils/UserContext"
import UserTable from "./UserTable"

const HandleUsers = () =>{
    const [userState, setUserState] = useState({
        users: [],
        order: "descend", //what to sort by
        searchFilter: [],
        userProperties: [
            {name: "picture", order: "descend"},
            {name: "name", order: "descend"},
            {name: "phone", order: "descend"},
            {name: "email", order: "descend"},
            {name: "dob", order: "descend"},
        ] //object containing headings for the data
    })
    //sort by name (will be the same for sorting by email more or less?)
        //ascend and descend? 

   const sortUsers = user => {
    let currentOrder = userState.userProperties
      .filter(elem => elem.name === user)
      .map(elem => elem.order)
      .toString()

    if (currentOrder === "descend") {
      currentOrder = "ascend"
    } else {
      currentOrder = "descend"
    }

    const orderFilter = (a, d) => {
      if (currentOrder === "ascend") {
        // account for missing values
        if (a[user] === undefined) {
          return 1
        } else if (d[user] === undefined) {
          return -1
        }
      }
    }
    const sortedUsers = userState.searchFilter.sort(orderFilter)
    const updatedOrder = userState.userProperties.map(user => {
      user.order = user.name === user ? currentOrder : user.order
      return user
    })

    setUserState({
      ...userState,
      searchFilter: sortedUsers,
      userProperties: updatedOrder
    })
  }

    const userSearch = e => {
        const filter = e.target.value
        const filteredList = userState.users.filter(item => {
          let values = item.name.first.toLowerCase() + " " + item.name.last.toLowerCase()
          console.log(filter, values)
            if(values.indexOf(filter.toLowerCase()) !== -1){
            return item
            }
        })
    
        setUserState({ ...userState, searchFilter: filteredList })
      }

    useEffect(() => {
        API.getUsers().then(res => {
          console.log(res.data.results)
          setUserState({
            ...userState,
            users: res.data.results,
            searchFilter: res.data.results
          })
        })
    }, [])
    
    return (
        <UserContext.Provider
            value={{ userState, userSearch, sortUsers }}
        >
        {/* <Nav /> */}
        <div>
          {userState.searchFilter.length > 0 ? <UserTable /> : <div></div>}
        </div>
      </UserContext.Provider>
    )
}
//HandleUser will handle data passed from the API
export default HandleUsers