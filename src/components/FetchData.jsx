import React, { useEffect, useState } from 'react'

const FetchData = () => {
    const[data,setData] = useState([])

    useEffect(()=>
    {
        const data = async()=>
        {
            let url = "https://jsonplaceholder.typicode.com/users";
            const response = await fetch(url)
            let result = await response.json()
            setData(result)
        }

        data();
    },[])
    console.log(data)
  return (
    <div>
      
    </div>
  )
}

export default FetchData
