"use client";

import { DAY_REGEX, MONTH_REGEX, YEAR_REGEX } from "@/common/constants/regex";
import FormInput from "@/components/form-elements/FormInput";
import { BsArrowDown } from "react-icons/bs";

import { useState } from "react";

export default function AgeCalculator() {
  const [values, setValues] = useState({
    day: "",
    month: "",
    year: "",
  });

  const [age, setAge] = useState({
    year: 0,
    month: 0,
    day: 0,
  });

  const [showError, setShowError] = useState(false);
  const calculateAge = (birthDate: Date) => {
    let today = new Date();
    let diffTime = today.getTime() - birthDate.getTime();
  
    // convert difference to a Date object
    let diffDate = new Date(diffTime);
  
    let years = diffDate.getUTCFullYear() - 1970;
    let months = diffDate.getUTCMonth();
    let days = diffDate.getUTCDate() - 1;
  
    return { year: years, month: months, day: days };
  };
  
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
  
    setValues((prevState) => ({ ...prevState, [name]: value }));
  
    const day = parseInt(name === "day" ? value : values.day);
    const month = parseInt(name === "month" ? value : values.month) - 1;
    const year = parseInt(name === "year" ? value : values.year);
  
    if (!day || !month || !year) {
      setAge({ year: 0, month: 0, day: 0 });
      setShowError(true);
    } else {
      const birthDate = new Date(year, month, day);
      const age = calculateAge(birthDate);
      setAge(age);
      setShowError(false);
    }
  };
  

  return (
    <div className="age-calculator">
      <div className="top">
        <FormInput
          name="day"
          label="DAY"
          placeholder="DD"
          pattern={DAY_REGEX}
          errorMessage="Please enter a valid day!"
          required={true}
          onChange={onChange}
          value={values.day}
        />
        <FormInput
          name="month"
          label="MONTH"
          placeholder="MM"
          pattern={MONTH_REGEX}
          errorMessage="Please enter a valid month!"
          required={true}
          onChange={onChange}
          value={values.month}
        />
        <FormInput
          name="year"
          label="YEAR"
          placeholder="YYYY"
          pattern={YEAR_REGEX}
          errorMessage="Please enter a valid year!"
          required={true}
          onChange={onChange}
          value={values.year}
          showError={showError}
        />
      </div>
      <div className="seperator">
        <div className="arrow-down-icon">
          <BsArrowDown size={24} color="#fff" />
        </div>
      </div>
      <div className="bottom">
        <div className="value-group">
          <h1 className="value">{age.year ? age.year : "- -"}</h1>
          <h1 className="text">years</h1>
        </div>
        <div className="value-group">
          <h1 className="value">{age.month ? age.month : "- -"}</h1>
          <h1 className="text">months</h1>
        </div>
        <div className="value-group">
          <h1 className="value">{age.day ? age.day : "- -"}</h1>
          <h1 className="text">days</h1>
        </div>
      </div>
    </div>
  );
}
