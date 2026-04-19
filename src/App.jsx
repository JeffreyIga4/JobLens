import { useEffect, useState } from 'react'
import { supabase } from './supabaseClient'

function App() {
  const [applications, setApplications] = useState([])

  useEffect(() => {
    async function fetchData() {
      const { data, error } = await supabase
        .from('Applications')
        .select('*')

      if (error) {
        console.log('Error:', error)
      } else {
        console.log('Data:', data)
        setApplications(data)
      }
    }

    fetchData()
  }, [])

  return (
    <div>
      <h1>Job Tracker</h1>
      <p>Applications in DB: {applications.length}</p>
    </div>
  )
}

export default App
