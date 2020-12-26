import React from "react";
 

export default function FormattedDate(props) {
console.log(props.date);

let days = [
    "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday",
  ];
  let months = [ "Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug",
 "Sept", "Oct", "Nov", "Dec",
  ];

let currentDay = days[props.date.getDay()];
let currentMonth = months[props.date.getMonth()];
let currentYear = props.date.getFullYear();
let currentDate = props.date.getDate();

  return (
  <div>
      <span className="current-date" >
          <h3 className="date-dayname" id="day-time">
            {currentDay}
          </h3>
          <div className="date-day" id="day">
           {currentDate} {currentMonth} {currentYear}
          </div>
        </span>
        </div>
  );
}
