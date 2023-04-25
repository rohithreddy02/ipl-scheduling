import React from 'react';
import Table from 'react-bootstrap/Table';
import jsPDF from 'jspdf';
import Button from 'react-bootstrap/Button';
import 'jspdf-autotable';


function MatchTable(props) {

    const venues={
        "GT":"Ahmedabad",
        "PK":"Mohali",
        "LSG":"Lucknow",
        "SRH":"Hyderabad",
        "DC":"Delhi",
        "RR":"Guwahati",
        "KKR":"Kolkata",
        "RCB":"Bengaluru",
        "MI":"Mumbai",
        "CSK":"Chennai",
        "gt":"Ahmedabad",
        "pk":"Mohali",
        "lsg":"Lucknow",
        "srh":"Hyderabad",
        "dc":"Delhi",
        "rr":"Guwahati",
        "kkr":"Kolkata",
        "rcb":"Bengaluru",
        "mi":"Mumbai",
        "csk":"Chennai"
    }

    const getTime = (dateStr, index) => {
        const date = new Date(dateStr);
        const dayOfWeek = date.getUTCDay();
        if (dayOfWeek >= 0 && dayOfWeek < 5) {
          return "7:30 PM";
        } else if (dayOfWeek === 5 || dayOfWeek === 6) {
          if (index % 2 === 0) {
            return "3:30 PM";
          } else {
            return "7:30 PM";
          }
        }
      };
      
      

    const dates=props.datesArray;

    const handleDownload = () => {
        const doc = new jsPDF();
        const tableNode = document.querySelector('#table');
        doc.autoTable({
            html: tableNode,
            startY: 10,
        });
        doc.save('ipl-schedule.pdf');
    };

    return (
        <>
            <Table id="table" striped bordered hover>
                <thead>
                    <tr>
                        <th>Match No</th>
                        <th>Date</th>
                        <th>Time</th>
                        <th>Match</th>
                        <th>Venue</th>
                    </tr>
                </thead>
                <tbody>
                    {props.matches.map((match,index)=>(
                        <tr key={index}>
                            <td>{index+1}</td>
                            <td>{dates[index]}</td>
                            <td>{getTime(dates[index],index)}</td>
                            <td>{match}</td>
                            <td>{venues[match.split(" ")[0]]}</td>
                        </tr>

                        
                    ))}
                </tbody>
            </Table>
            <Button variant="primary" onClick={handleDownload} className='btn'>Download</Button>
        </>
    );
}

export default MatchTable;

