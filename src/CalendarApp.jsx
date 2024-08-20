import React, { useState } from "react";

// Properly define the calendars array
const calendars = ["NSW", "QLD", "VIC"];

export default function CalendarApp() {
  // Set the initial state to the first calendar in the array
  const [selectedCalendar, setSelectedCalendar] = useState(calendars[0]);

  // Handle the calendar change by updating the state
  const handleCalendarChange = (calendar) => {
    setSelectedCalendar(calendar);
  };

  return (
    <>
      <CalendarSelector
        calendars={calendars}
        onCalendarChange={handleCalendarChange}
      />
      <hr />
      <Calendar calendar={selectedCalendar} />
    </>
  );
}

function CalendarSelector({ calendars, onCalendarChange }) {
  return (
    <div>
      {calendars.map((calendar, index) => (
        <button key={index} onClick={() => onCalendarChange(calendar)}>
          {calendar}
        </button>
      ))}
    </div>
  );
}

function Calendar({ calendar }) {
  return (
    <div>
      <h2>Selected Calendar: {calendar}</h2>
      <SearchBar></SearchBar>
      <hr />
      <ViewTable calendar={calendar}></ViewTable>
    </div>
  );
}

function SearchBar() {
  return (
    <div className="search-bar">
      <label>Search Events</label>
      <input type="text"></input>
    </div>
  );
}

function ViewTable({ calendar }) {
  const views = ["Day", "Month"];
  const [view, setView] = useState(views[0]);

  function renderView() {
    if (view === "Day") {
      return <DayView calendar={calendar}></DayView>;
    } else return <MonthView calendar={calendar}></MonthView>;
  }

  return (
    <>
      {/* // Select view */}
      <div>
        {views.map((view, index) => (
          <button key={index} onClick={() => setView(view)}>
            {view}
          </button>
        ))}
      </div>
      <hr />
      <h4>
        View Calendar: {calendar} with {view} view
      </h4>
      {renderView()}
    </>
  );
}

function DayView({ calendar }) {
  function onSquareClick() {
    // To be implemented
  }
  // Take only the events of the selected calendar
  const events = WAREHOUSE_SCHEDULE.filter(
    (event) => event.location === `Warehouse ${calendar}`
  );

  return (
    <div>
      <h3>Day View for {calendar}</h3>

      {events.map((event, index) => (
        <div key={index}>
          <p>
            {event.date}: {event.status}
          </p>
        </div>
      ))}
    </div>
  );
}

function MonthView({ calendar }) {
  function onSquareClick() {
    // To be implemented
  }

  const events = WAREHOUSE_SCHEDULE.filter(
    (event) => event.location === `Warehouse ${calendar}`
  );

  return (
    <div>
      <h3>Month View for {calendar}</h3>
      {events.map((event, index) => (
        <div key={index}>
          <p>
            <Square
              date={event.date}
              status={event.status}
              onSquareClick={onSquareClick}
            ></Square>
          </p>
        </div>
      ))}
    </div>
  );
}

function Square({ date, status, onSquareClick }) {
  function backGroundColour() {
    return status === "Open" ? "lightgreen" : "lightcoral";
  }

  return (
    <button
      className="square"
      onClick={onSquareClick}
      style={{ backgroundColor: backGroundColour() }}
    >
      {date}
    </button>
  );
}

const WAREHOUSE_SCHEDULE = [
  { location: "Warehouse NSW", date: "2024-08-01", status: "Closed" }, // Sunday
  { location: "Warehouse QLD", date: "2024-08-01", status: "Closed" },

  { location: "Warehouse NSW", date: "2024-08-02", status: "Open" }, // Monday
  { location: "Warehouse QLD", date: "2024-08-02", status: "Open" },

  { location: "Warehouse NSW", date: "2024-08-03", status: "Open" }, // Tuesday
  { location: "Warehouse QLD", date: "2024-08-03", status: "Closed" },

  { location: "Warehouse NSW", date: "2024-08-04", status: "Open" }, // Wednesday
  { location: "Warehouse QLD", date: "2024-08-04", status: "Open" },

  { location: "Warehouse NSW", date: "2024-08-05", status: "Open" }, // Thursday
  { location: "Warehouse QLD", date: "2024-08-05", status: "Closed" },

  { location: "Warehouse NSW", date: "2024-08-06", status: "Open" }, // Friday
  { location: "Warehouse QLD", date: "2024-08-06", status: "Open" },

  { location: "Warehouse NSW", date: "2024-08-07", status: "Closed" }, // Saturday
  { location: "Warehouse QLD", date: "2024-08-07", status: "Closed" },

  { location: "Warehouse NSW", date: "2024-08-08", status: "Closed" }, // Sunday
  { location: "Warehouse QLD", date: "2024-08-08", status: "Closed" },

  { location: "Warehouse NSW", date: "2024-08-09", status: "Open" }, // Monday
  { location: "Warehouse QLD", date: "2024-08-09", status: "Open" },

  { location: "Warehouse NSW", date: "2024-08-10", status: "Open" }, // Tuesday
  { location: "Warehouse QLD", date: "2024-08-10", status: "Closed" },

  { location: "Warehouse NSW", date: "2024-08-11", status: "Open" }, // Wednesday
  { location: "Warehouse QLD", date: "2024-08-11", status: "Open" },

  { location: "Warehouse NSW", date: "2024-08-12", status: "Open" }, // Thursday
  { location: "Warehouse QLD", date: "2024-08-12", status: "Closed" },

  { location: "Warehouse NSW", date: "2024-08-13", status: "Open" }, // Friday
  { location: "Warehouse QLD", date: "2024-08-13", status: "Open" },

  { location: "Warehouse NSW", date: "2024-08-14", status: "Closed" }, // Saturday
  { location: "Warehouse QLD", date: "2024-08-14", status: "Closed" },

  { location: "Warehouse NSW", date: "2024-08-15", status: "Closed" }, // Sunday
  { location: "Warehouse QLD", date: "2024-08-15", status: "Closed" },

  { location: "Warehouse NSW", date: "2024-08-16", status: "Open" }, // Monday
  { location: "Warehouse QLD", date: "2024-08-16", status: "Open" },

  { location: "Warehouse NSW", date: "2024-08-17", status: "Open" }, // Tuesday
  { location: "Warehouse QLD", date: "2024-08-17", status: "Closed" },

  { location: "Warehouse NSW", date: "2024-08-18", status: "Open" }, // Wednesday
  { location: "Warehouse QLD", date: "2024-08-18", status: "Open" },

  { location: "Warehouse NSW", date: "2024-08-19", status: "Open" }, // Thursday
  { location: "Warehouse QLD", date: "2024-08-19", status: "Closed" },

  { location: "Warehouse NSW", date: "2024-08-20", status: "Open" }, // Friday
  { location: "Warehouse QLD", date: "2024-08-20", status: "Open" },

  { location: "Warehouse NSW", date: "2024-08-21", status: "Closed" }, // Saturday
  { location: "Warehouse QLD", date: "2024-08-21", status: "Closed" },

  { location: "Warehouse NSW", date: "2024-08-22", status: "Closed" }, // Sunday
  { location: "Warehouse QLD", date: "2024-08-22", status: "Closed" },

  { location: "Warehouse NSW", date: "2024-08-23", status: "Open" }, // Monday
  { location: "Warehouse QLD", date: "2024-08-23", status: "Open" },

  { location: "Warehouse NSW", date: "2024-08-24", status: "Open" }, // Tuesday
  { location: "Warehouse QLD", date: "2024-08-24", status: "Closed" },

  { location: "Warehouse NSW", date: "2024-08-25", status: "Open" }, // Wednesday
  { location: "Warehouse QLD", date: "2024-08-25", status: "Open" },

  { location: "Warehouse NSW", date: "2024-08-26", status: "Open" }, // Thursday
  { location: "Warehouse QLD", date: "2024-08-26", status: "Closed" },

  { location: "Warehouse NSW", date: "2024-08-27", status: "Open" }, // Friday
  { location: "Warehouse QLD", date: "2024-08-27", status: "Open" },

  { location: "Warehouse NSW", date: "2024-08-28", status: "Closed" }, // Saturday
  { location: "Warehouse QLD", date: "2024-08-28", status: "Closed" },

  { location: "Warehouse NSW", date: "2024-08-29", status: "Closed" }, // Sunday
  { location: "Warehouse QLD", date: "2024-08-29", status: "Closed" },

  { location: "Warehouse NSW", date: "2024-08-30", status: "Open" }, // Monday
  { location: "Warehouse QLD", date: "2024-08-30", status: "Open" },

  { location: "Warehouse NSW", date: "2024-08-31", status: "Open" }, // Tuesday
  { location: "Warehouse QLD", date: "2024-08-31", status: "Closed" },
];