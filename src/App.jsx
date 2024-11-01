import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  const url = 'https://jsonplaceholder.typicode.com/posts'
 
  
  useEffect(()=>{
    setLoading(true)
    const fetchPosts = async ()=>{
      const res= await fetch(url)
      const resData = await res.json()
      console.log(resData)
      setData(resData)
      setLoading(false)
    } 
    fetchPosts()

  }, [url])

  return (
    <>
      <div className='dataDiv'>{
      loading ? <p>Loading...</p> :
      data?.map((item)=>{
        return (
          <div key={item.id} className='imageDiv' data-id="dataid">
            <h2>{item.title}</h2>
            <p>{item.body}</p>
            <button style={{border:"1px solid"}}>Click </button>
          </div>
        )
      }) }</div>
    </>
  )
}

export default App
