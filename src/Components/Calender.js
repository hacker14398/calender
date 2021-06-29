import React, { useState } from 'react'
import moment from 'moment'
import {CalenderWrapper, CalanderContainer, PagingButton, Day, DayHeader} from './CalenderComponent'

function Calender() {
    const [Date, setDate] = useState(moment())

    const createDaysOfMonth = (refDate) => {
        const date = moment(refDate).endOf('month');
        const lastDate = date.date();
        const firstWeekday = date.startOf('month').day();
      
        const calendarDays = [];
      
        const today = moment();
      
        for (let w=0; w<firstWeekday; w++) {
          calendarDays.push(<Day key={Math.random()}/>); // empty days
        }
      
        for (let d=1; d<lastDate; d++) {
          calendarDays.push(<Day key={d} today={date.date(d).isSame(today, 'day')}>{d}</Day>);
        }
      
        while (calendarDays.length % 7 !== 0) {
          calendarDays.push(<Day key={Math.random()}/>);
        }
      
        return calendarDays;
    }

    const prevMonth = () => {
        setDate(Date =  Date.subtract(1, 'month'))
    }
      
    const nextMonth = () => {
        setDate(Date = Date.add(1, 'month'))
    }
    return (
        <CalenderWrapper>
            <h2>{Date.format('MMMM YYYY')}</h2>
            <div>
                <PagingButton onClick={prevMonth}>&lt;</PagingButton>
                <PagingButton onClick={nextMonth}>&gt;</PagingButton>
            </div>
            <CalanderContainer>
                <DayHeader>Sunday</DayHeader>
                <DayHeader>Monday</DayHeader>
                <DayHeader>Tuesday</DayHeader>
                <DayHeader>Wednesday</DayHeader>
                <DayHeader>Thursday</DayHeader>
                <DayHeader>Friday</DayHeader>
                <DayHeader>Saturday</DayHeader>
                {createDaysOfMonth(Date)}
            </CalanderContainer>
        </CalenderWrapper>
    )
}

export default Calender
