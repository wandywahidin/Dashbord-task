import React from "react";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Calendar = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <div className="p-5 rounded-2xl shadow bg-[#F5F2FF] flex justify-center">
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          inline
        />
    </div>
  );
};

export default Calendar;
