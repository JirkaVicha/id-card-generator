
const Form = ({ submitForm, handleInputChange, student }) => {
  return (
    <div className="form-container">
    <div className='form'>
      <h3>Input Form</h3>
        <form onSubmit={submitForm}>
        <div>
           <input
            type='text'
            value={student.id}
            onChange={handleInputChange}
            name='id'
            placeholder='Enter ID...'
            required
          /> 
          </div>

          <div>
           <input
            type='text'
            value={student.name}
            onChange={handleInputChange}
            name='name'
            placeholder='Enter name...'
            required
          /> 
          </div>
          
          <div>
           <input
            type='text'
            value={student.college}
            onChange={handleInputChange}
            name='college'
            placeholder='Enter College Name...'
            required
          /> 
          </div>
          
          <div>
           <input 
            type='text'
            value={student.location}
            onChange={handleInputChange}
            name='location'
            placeholder='Enter Location...'
            required
          /> 
          </div>
          
          <div>
           <button type='submit'>Generate Card</button> 
          </div>
        </form>
      </div>
    </div>
  )
}

export default Form