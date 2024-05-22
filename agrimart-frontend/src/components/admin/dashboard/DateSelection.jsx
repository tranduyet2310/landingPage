import React, { useEffect, useState } from "react";

const DateSelection = (props) => {
  const { handleFromSelection, monthValue, yearValue } = props;
  const [currentMonth, setCurrentMonth] = useState("");
  const [currentYear, setCurrentYear] = useState("");

  useEffect(() => {
    setCurrentMonth(monthValue);
    setCurrentYear(yearValue);
  }, []);

  const handleSelectMonth = (event) => {
    setCurrentMonth(event.target.textContent);
    handleFromSelection(event.target.textContent, currentYear);
  };

  const handleSelectYear = (event) => {
    setCurrentYear(event.target.textContent);
    handleFromSelection(currentMonth, event.target.textContent);
  };

  return (
    <>
      <div className="btn-group">
        {currentMonth && (
          <>
            <button className="btn btn-secondary btn-lg" type="button">
              Tháng {currentMonth}
            </button>
            <button
              type="button"
              className="btn btn-lg btn-secondary dropdown-toggle dropdown-toggle-split"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              style={{ marginRight: "2px" }}
            >
              <span className="visually-hidden">Toggle Dropdown</span>
            </button>
            <ul className="dropdown-menu">
              {Array.from({ length: 12 }, (_, i) => (
                <li key={i + 1}>
                  <a
                    className="dropdown-item"
                    onClick={handleSelectMonth}
                    href="#"
                  >
                    {i + 1}
                  </a>
                </li>
              ))}
            </ul>
          </>
        )}
      </div>

      <div className="btn-group">
        {currentYear && (
          <>
            <button className="btn btn-secondary btn-lg" type="button">
              Năm {currentYear}
            </button>
            <button
              type="button"
              className="btn btn-lg btn-secondary dropdown-toggle dropdown-toggle-split"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <span className="visually-hidden">Toggle Dropdown</span>
            </button>
            <ul className="dropdown-menu">
              {[2023, 2024].map((year) => (
                <li key={year}>
                  <a
                    className="dropdown-item"
                    onClick={handleSelectYear}
                    href="#"
                  >
                    {year}
                  </a>
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    </>
  );
};

export default DateSelection;
