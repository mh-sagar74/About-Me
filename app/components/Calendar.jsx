"use client";

import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function Calendar() {
  const [currDate, setCurrDate] = useState(new Date());
  const [daysInMonth, setDaysInMonth] = useState([]);
  const [startDay, setStartDay] = useState(0);
  const weeks = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  useEffect(() => {
    const year = currDate.getFullYear();
    const month = currDate.getMonth();
    const date = new Date(year, month, 1);
    const days = [];

    while (date.getMonth() === currDate.getMonth()) {
      days.push(new Date(date));
      date.setDate(date.getDate() + 1);
    }

    setDaysInMonth(days);
    setStartDay(new Date(year, month, 1).getDay());
  }, [currDate]);

  const handlePreBtn = () => {
    setCurrDate(new Date(currDate.setMonth(currDate.getMonth() - 1)));
  };

  const handleNxtBtn = () => {
    setCurrDate(new Date(currDate.setMonth(currDate.getMonth() + 1)));
  };

  return (
    <div className="items-center justify-items-center w-[412] m-auto pt-20 pb-20 gap-16 font-[family-name:var(--font-geist-sans)]">
      <h1 className="text-4xl font-semibold">Calendar</h1>
      <div>
        <span className="flex gap-5 m-6 justify-center">
          <button onClick={handlePreBtn} className="border pl-3 pr-3">
            &lt;
          </button>
          <h1 className="w-[250] text-center text-xl">
            {currDate.toLocaleString("default", { month: "long" })}{" "}
            {currDate.getFullYear()}
          </h1>
          <button onClick={handleNxtBtn} className="border pl-3 pr-3">
            &gt;
          </button>
        </span>
        <div className="w-[412] m-auto">
          <div className="flex gap-4 mb-6">
            {weeks.map((week) => (
              <h1 className="w-[45px] text-center" key={uuidv4()}>
                {week}
              </h1>
            ))}
          </div>
          <div className="flex flex-wrap gap-4">
            {Array.from({ length: startDay }).map((_, index) => (
              <div className="w-[45px] text-center" key={index} />
            ))}
            {daysInMonth.map((day) => (
              <h1
                className={`w-[45px] text-center ${
                  day.getDate() === new Date().getDate() &&
                  day.getMonth() === new Date().getMonth() &&
                  day.getFullYear() === new Date().getFullYear()
                    ? "bg-white text-black"
                    : ""
                }`}
                key={uuidv4()}>
                {day.getDate()}
              </h1>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
