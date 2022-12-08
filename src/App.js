import {useState,useEffect} from 'react'
import axios from 'axios'
import {Data} from './Components/Data'

function App() {

  // form states
  const [usn, setUsn]=useState('');
  const [course, setCourse]=useState('');
  // const [designation, setDesignation]=useState('');
  // const [salary, setSalary]=useState('');

  // retrived data state
  const [data, setData]=useState([]);

  // submit event
  const handleSubmit=(e)=>{
    e.preventDefault();
    // console.log(name, age, designation, salary);

    // our object to pass
    const data = {
      usn, course,
      // designation, salary
    }
    axios.post('https://sheet.best/api/sheets/e7a8bead-e947-4de5-9421-8e17433a3fff',data).then(response=>{
      // console.log(response);
      setCourse('');
      setUsn('');
      // setDesignation('');
      // setSalary('');
    })
  }

  // getting data function
  const getData=()=>{
    axios.get('https://sheet.best/api/sheets/e7a8bead-e947-4de5-9421-8e17433a3fff').then((response)=>{
      setData(response.data);
    })
  }

  // triggering function
  useEffect(()=>{
    getData();
  },[data])

  return (
    <div className="container">
      <br></br>
      <h1>Form Data</h1>
      <br></br>
      <form autoComplete="off" className='form-group'
      onSubmit={handleSubmit}>
        <label>USN</label>
        <input type='text' className='form-control' required
          placeholder='Enter your USN' onChange={(e)=>setUsn(e.target.value)}
          value={usn}
        />
        <br></br>
        <label>Course</label>
        <input type='text' className='form-control' required
          placeholder='Enter your course' onChange={(e)=>setCourse(e.target.value)}
          value={course}
        />
        {/* <br></br>
        <label>Designation</label>
        <input type='text' className='form-control' required
          placeholder='Enter your designation'
          onChange={(e)=>setDesignation(e.target.value)}
          value={designation}
        />
        <br></br>
        <label>Salary</label>
        <input type='text' className='form-control' required
          placeholder='Enter your salary'
          onChange={(e)=>setSalary(e.target.value)}
          value={salary}
        /> */}
        <br></br>
        <div style={{display:"flex",justifyContent:'flex-end'}}>
          <button type='submit' className='btn btn-primary'>Submit</button>
        </div>
      </form>
      <div className='view-data'>
        {data.length<1&&<>No data to show</>}
        {data.length>0&&(
          <div className='table-responsive'>
            <table className='table'>
              <thead>
                <tr>
                  <th scope='col'>Index</th>
                  <th scope='col'>USN</th>
                  <th scope='col'>Course Code</th>
                  {/* <th scope='col'>Designation</th>
                  <th scope='col'>Salary</th> */}
                </tr>
              </thead>
              <tbody>
                <Data data={data}/>
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;