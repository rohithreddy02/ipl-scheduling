import React from 'react'
import MatchTable from './Table'

function Schedule(props) {

    var matches=[]

    var datesArray=[]
    var date=new Date()

    const round=(lst)=>{
        var secondTeam=String(lst.splice(1,1))
        lst.push(secondTeam)
        return lst
    }

        const match = (lst) => {
        var teams = lst.length;
        var j = teams - 1;
    
        for (let i = 0; i < teams - 2; i++) {
            if (j > i) {
                matches.push(lst[i] + " vs " + lst[j]);
                if (date.getDay() === 6 || date.getDay() === 0) {
                    datesArray.push(date.toDateString());
                    datesArray.push(date.toDateString());
                    date.setDate(date.getDate() + 1);
                } else {
                    datesArray.push(date.toDateString());
                    date.setDate(date.getDate() + 1);
                }
    
                j = j - 1;
            }
        }
    };

    var lst=props.teams

    match(lst)
    for(let r=0;r<lst.length-2;r++){
            round(lst)
            match(lst)
    }

  return (
    <MatchTable matches={matches} datesArray={datesArray} />
  )
}

export default Schedule
