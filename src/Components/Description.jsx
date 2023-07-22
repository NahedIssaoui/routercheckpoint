import products from './products';
import { Link, useParams } from 'react-router-dom';
import './Description.css'
import  './Navigationbar.jsx';
import Navigationbar from './Navigationbar.jsx';


function Description() {
  const { id } = useParams()
  const item = products[id]
  return (
    <>
    <Navigationbar />
    <div className="video-container">
      <h1>{item.title}</h1>
      <div className="iframe-wrapper">
        <iframe
          title="Trailer"
          width="560"
          height="315"
          src={item.trailer}
          allowFullScreen>
        </iframe>
      </div>
      <br />
     <Link to="/">Back to Home</Link>
    </div>
</>
  )
}

 export default Description



