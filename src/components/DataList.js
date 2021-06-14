import React, {useEffect, useState} from 'react'

const DataList = () => {

    const [data, setData] = useState([])


    const fetchData = () => {

        fetch('https://randomuser.me/api/?results=50')
        .then((res) => {
           return res.json()
        })
        .then((datas) => setData(datas.results))
    }

    console.log("i bims, the data", data)

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div>
           {data && data.map((user, index) => {
               return (
                  <div key={index}>
                  <img src={user.picture.large} alt="" />
                  <h1>{user.name.first} {user.name.last}</h1> 
                  <h2>{user.dob.age} years old</h2>
                  <h2>from {user.location.city}</h2>
                   </div>
               )
            })}
        </div>
    )
}

export default DataList