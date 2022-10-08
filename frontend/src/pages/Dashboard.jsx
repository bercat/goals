// https://www.youtube.com/watch?v=UXjMo25Nnvc&list=PLillGF-RfqbbQeVSccR9PGKHzPJSWqcsm&index=4 time: 10:16

import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import GoalForm from '../components/GoalForm';


function Dashboard() {
  const navigate = useNavigate()

  const { user } = useSelector((state) => state.auth)

  useEffect(() => {

    if (!user) {
      navigate('/login')
    }

  }, [user, navigate])


  return (
    <>
     <section className='heading'>
        <h1>Welcome {user && user.name}</h1>
        <p>Goals Dashboard</p>
     </section>
     <GoalForm />
    </>
  )
}

export default Dashboard