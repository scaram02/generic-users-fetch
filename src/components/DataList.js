import React, {useEffect, useState} from 'react'

const DataList = () => {

    const [data, setData] = useState([])
    const [isReversed, setIsReversed] = useState(false)


    const fetchData = () => {

        fetch('https://randomuser.me/api/?results=50')
        .then((res) => {
           return res.json()
        })
        .then((datas) => setData(datas.results.sort((a,b) => a.name.last.localeCompare(b.name.last))))
    }

  const toggleData = () => {
      setIsReversed(!isReversed)
      setData(data.reverse())
  }

    useEffect(() => {
        fetchData()
    }, [])

    

    return (
        <div>
            <button onClick={toggleData}>{isReversed? "Sort ascending" : "Sort descending"}</button>
            
           {data && data.map((user, index) => {
               return (
                  <div key={index} className="profile-card">
                  <img src={user.picture.large} alt="profile picture" />
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