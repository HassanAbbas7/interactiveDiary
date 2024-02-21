import React from 'react'
import { useEffect, useState } from 'react'
import { getQuestions } from '../cosnstants'
import List from '../components/list'


const Admin = () => {

    // const [data, setData] = useState(null)
    

    // useEffect(() => {
    //     async function fetchData() {
    //         data_ = await getQuestions()
    //         setData(data_)
    //       }
    //     fetchData()
    // })

    return (
        <div className="App">
          <List />
        </div>
      );
}

export default Admin;