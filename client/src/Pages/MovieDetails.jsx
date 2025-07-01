import React from 'react'
import { dummyBookingData, dummyDateTimeData } from '../assets/assets'

function MovieDetails() {
  const {id} = useParams()

  const [show, setShow] = useState(null)
  
 
  const getShow = async () => {
    const getshowdata = dummyBookingData.find(show => show._id === id)
    console.log(getshowdata)
    setShow({
      movie:getshowdata,
      dateTime:dummyDateTimeData
    })
  }

  useEffect(() => {
    getShow()
  }, [id])
  

  return show ? (
    <div>
     <h1>{getshowdata.title}</h1>
    </div>
  ):
  (
    <div>
    loading
    </div>
  )
}

export default MovieDetails