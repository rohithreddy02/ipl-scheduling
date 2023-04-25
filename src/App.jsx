import { useState , useEffect} from 'react'
import './App.css'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import CloseButton from 'react-bootstrap/CloseButton';
import Schedule from './component/Schedule';
import Title from './component/Title';
import Table from 'react-bootstrap/Table';

function App() {
  const [teams,setTeams]=useState([])

  const[inputValue,setInputValue]=useState("")

  const[errorMsg,setErrorMsg]=useState("")

  const keyClicked=()=>{
    if(event.code==="Enter"){
      setTeams([...teams,inputValue])
      setInputValue("")
    }
  }

  const removeTeam=(team)=>{
    setTeams(teams.filter(temp=>{
      return team!==temp
    }))
  }

  const prepareSchedule=()=>{
    if (teams.some(team => !team.match(/^(SRH|RCB|DC|RR|PK|LSG|GT|MI|KKR|CSK)$/))) {
      setErrorMsg("Invalid team code entered. Please enter a valid team code.")
    }
    else if(teams.length<4){
      setErrorMsg("Minimum 4 teams")
    }
    else if(teams.length%2!==0){
      setErrorMsg("Even teams should be present , add or remove team")
    }
    else{
      setErrorMsg("")
    }
  }

  useEffect(()=>{
      prepareSchedule()
  },[teams])

  return (
    <>
    <Title />
    <div className='searchBar'>
      <InputGroup size="lg" >
        <Form.Control
          aria-label="Large"
          aria-describedby="inputGroup-sizing-sm"
          placeholder="Add a team name and press enter"
          value={inputValue}
          onChange={()=>setInputValue(event.target.value)}
          onKeyDown={keyClicked}
        />
      </InputGroup>
      <br></br>
      {teams.map(team=>(
        <>
        <span className='capsule'>{team}
        <CloseButton className='remove' onClick={()=>removeTeam(team)} />
        </span>
        
        </>
      ))}

      <br></br>

      <h3 className='error'>{errorMsg}</h3>
      <br></br>
      {!errorMsg && <Schedule teams={teams}/>}
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Teams</th>
              <th>Code</th>
            </tr>
        </thead>
        <tbody>
          <tr>
            <td>Sunrisers</td>
            <td>SRH</td>
          </tr>
          <tr>
            <td>Royal Challengers Bangalore</td>
            <td>RCB</td>
          </tr>
          <tr>
            <td>Delhi Capitals</td>
            <td>DC</td>
          </tr>
          <tr>
            <td>Rajstan Royals</td>
            <td>RR</td>
          </tr>
          <tr>
            <td>Punbaj Kings</td>
            <td>PK</td>
          </tr>
          <tr>
            <td>Lucknow Super Gaints</td>
            <td>LSG</td>
          </tr>
          <tr>
            <td>Gujarat Titans</td>
            <td>GT</td>
          </tr>
          <tr>
            <td>Mumbai Indians</td>
            <td>MI</td>
          </tr>
          <tr>
            <td>Kolkata Knight Riders</td>
            <td>KKR</td>
          </tr>
          <tr>
            <td>Chennai Super Kings</td>
            <td>CSK</td>
          </tr>
        </tbody>
      </Table>
    </div>
    </>
  )
}

export default App
