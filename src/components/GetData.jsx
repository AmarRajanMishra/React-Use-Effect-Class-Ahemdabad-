import React, { useEffect, useState } from 'react'

function GetData() {
    const [users, setUsers] = useState([])
    const getData = () => {
        fetch('http://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setUsers(data)
        })
    }
    console.log('Hello')
    useEffect(()=>{
        getData()
    }, [])
  return (
    <>
      <h1>Get Data</h1>
      <div>
        {
            users.map((myData)=>{
                const {id, name, email} = myData
                return(
                    <div key={id}>
                        <h1>Name : {name}</h1>
                        <h2>Email : {email}</h2>
                    </div>

                )
            })
        }
      </div>
    </>
  )
}

export default GetData;
