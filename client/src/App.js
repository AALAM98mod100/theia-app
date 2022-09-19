import React, {useState, useEffect} from 'react'

function App() {

  const [data, setData] = useState([{}])

  useEffect(() => {
    fetch("/test").then(
      res => res.json()
    ).then(
      data => {
        setData(data)
        console.log(data)
      }
    )
  }, [])

  return (
    <div>{JSON.stringify(data)}
    <div>
      {(typeof data.members === 'undefined') ?(
        <p>Loading...</p>
      ) : (
        data.members.map((member,i) => (
          <p key={i}>{member}</p>
        ))
      )}
    </div>
    </div>
  )
}

export default App