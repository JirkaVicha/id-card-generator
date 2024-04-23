import Card from "./Card"

const Cards = ({ students }) => {
  return (
      <div className="cards-container">
      {students.map((student) => (
        <div className="cards" key={student.id}>
          <h3>Generated Card of {student.name}</h3>
          <Card student={student} />
        </div>
      ))}
      </div>
  )
}

export default Cards