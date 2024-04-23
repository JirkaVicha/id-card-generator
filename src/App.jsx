import Header from "./components/Header"
import Form from "./components/Form"
import Cards from "./components/Cards"
import { useState } from "react"

const App = () => {
  const[student, setStudent] = useState({
    id: '',
    name: "",
    college: "",
    location: ""
  })
  const[students, setStudents] = useState([])

  const submitForm = (e) => {
    e.preventDefault()
    const newStudent = { ...student } // vsechny polozky u 'student'
    setStudents(prevStudents => [...prevStudents, newStudent])
    setStudent({
      id: '',
      name: '',
      college: '',
      location: ''
    })
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setStudent(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  return (
    <div className="container">
      <Header />
      <section className="middle-part">
        <Form 
          submitForm={submitForm}
          handleInputChange={handleInputChange}
          student={student}
        />
        <Cards students={students} />
      </section>
    </div>
  )
}

export default App