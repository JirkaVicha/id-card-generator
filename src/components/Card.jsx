import { FaUser } from "react-icons/fa";

const Card = ({ student }) => {
  return (
    <div className='card'>
      <div className='photo'>
        <FaUser className="icon" />
      </div>
        <div className='info'>
          <div className="id"><h4>ID:</h4> {student.id}</div>
          <div className="name"><h4>Name:</h4> {student.name}</div>
          <div className="college"><h4>College Name:</h4> {student.college}</div>
          <div className="location"><h4>Location:</h4> {student.location}</div>
        </div>
    </div>
  )
}

export default Card