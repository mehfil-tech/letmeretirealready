import React, { useState } from "react";
import { numberToRupeeFormatter } from "./numberToRupeeFormatter";

interface MonthData {
  month: string;
  expenses: number;
}

interface MonthSelectorProps {
  onSelect?: (month: string) => void;
}

const MonthSelector: React.FC<MonthSelectorProps> = ({ onSelect }) => {
  const [selectedYear, setSelectedYear] = useState<number>(2024);
  const [selectedMonth, setSelectedMonth] = useState<string>(new Date().toLocaleString("en-US", { month: "short" }));

  const data: MonthData[] = [
    { month: "Jan", expenses: 500 },
    { month: "Feb", expenses: 300 },
    { month: "Mar", expenses: 450 },
    { month: "Apr", expenses: 600 },
    { month: "May", expenses: 700 },
    { month: "Jun", expenses: 800 },
    { month: "Jul", expenses: 900 },
    { month: "Aug", expenses: 1000 },
    { month: "Sep", expenses: 1100 },
    { month: "Oct", expenses: 1200 },
    { month: "Nov", expenses: 1300 },
    { month: "Dec", expenses: 1400 },
  ];

  const handleYearChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (!isNaN(Number(value))) {
      setSelectedYear(Number(value));
    }
  };

  return (
    <div className="fixed bottom-0 w-full flex justify-center align-bottom">
      <div className="flex">
        <input
          type="text"
          value={selectedYear}
          onChange={handleYearChange}
          className="text-gray-300 bg-transparent w-24 h-16 self-end border border-gray-700 rounded-md ml-6 mr-6 mb-6 text-3xl text-center font-extralight"
          placeholder="2024"
        />
      </div>
      <div className="flex overflow-x-auto py-6 pr-6 space-x-3 justify-start">
        {data.map((item, index) => (
          <button
            key={index}
            className={`flex-shrink-0 px-4 p-2 rounded-md w-24 h-16 ${selectedMonth === item.month ? "bg-gray-700 border-2 border-gray-400" : "bg-gray-700"}`}
            onClick={() => {
              onSelect && onSelect(item.month);
              setSelectedMonth(item.month);
            }}
          >
            <div className="text-center">
              <div className="text-md font-light text-gray-300">
                {numberToRupeeFormatter(item.expenses)}
              </div>
              <div className="text-sm font-semibold">{item.month}</div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default MonthSelector;
