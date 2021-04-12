import React, { useState, useEffect } from "react";
// import "../styles/DataArea.css";
// import Nav from "./Nav";
import API from "../utils/API";
import UserContext from "../utils/UserContext";

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

    const sortUsers = userProperties => {
        userProperties.sort((a, d)=>(a.order > d.order)? 1:-1)
        //a - ascend, d - descend
    }

    const userSearch = e => {
        const filter = e.target.value;
        const filteredList = userState.users.filter(item => {
          let values = item.name.first.toLowerCase() + " " + item.name.last.toLowerCase();
          console.log(filter, values)
        if(values.indexOf(filter.toLowerCase()) !== -1){
          return item
        };
        });
    
        setUserState({ ...userState, filteredUsers: filteredList });
      };

    useEffect(() => {
        API.getUsers().then(results => {
          console.log(results.data.results);
          setUserState({
            ...userState,
            users: results.data.results,
            filteredUsers: results.data.results
          });
        });
    }, []);
    
    return (
        <UserContext.Provider
            value={{ userState, userSearch, sortUsers }}
        />
    )
}
//HandleUser will handle data passed from the API
export default HandleUsers