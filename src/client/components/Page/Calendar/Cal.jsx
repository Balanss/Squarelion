import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const CalendarWithNotes = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [notes, setNotes] = useState({});

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleAddNote = () => {
    const note = prompt('Enter your note:');
    if (note) {
      setNotes((prevNotes) => ({
        ...prevNotes,
        [selectedDate.toISOString()]: note,
      }));
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Calendar with Notes</h1>
      <div className="calendar-container mb-8">
        <Calendar
          value={selectedDate}
          onChange={handleDateChange}
          tileContent={({ date, view }) => {
            if (view === 'month' && notes[date.toISOString()]) {
              return <p className="note-indicator">●</p>;
            }
            return null;
          }}
        />
      </div>
      {selectedDate && (
        <div className="note-editor">
          <h2 className="text-lg font-bold mb-2">Add Note for {selectedDate.toLocaleDateString()}:</h2>
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
            onClick={handleAddNote}
          >
            Add Note
          </button>
          {notes[selectedDate.toISOString()] && (
            <div className="note bg-gray-100 mt-4 p-4 rounded">
              <h3 className="text-lg font-bold mb-2">Note:</h3>
              <p>{notes[selectedDate.toISOString()]}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default CalendarWithNotes;
