import "./App.css";
import React, { useState, useEffect } from "react";
import { regionMapping, monthMapping, weekMapping } from "./mappings";
import CarPlateInfo from "./components/CarPlateInfo";
import Form from "./components/Form";
import DisplayPlate from "./components/DisplayPlate";

const App = () => {
  const [plateNumber, setPlateNumber] = useState("");
  const [str, setStr] = useState("");
  const [result, setResult] = useState("");

  const handleInputChange = (e) => {
    setPlateNumber(e.target.value);
  };

  useEffect(() => {
    if (str.trim() !== "") {
      const validationResult = isValidPlateNo(str);
      if (validationResult) {
        setResult(validationResult);
      } else {
        setResult("Invalid Plate Number");
      }
    }
  }, [str]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (plateNumber.trim() === "") {
      alert("Please enter a plate number");
      return;
    }
    setStr(plateNumber);
    setPlateNumber("");
  };

  function isValidPlateNo(str) {
    if (str.length > 7) return false;
    // Define a function to check if a character is a letter
    // and a function to check if a character is a digit
    const isLetter = (char) => /[a-zA-Z]/.test(char);
    const isDigit = (char) => /\d/.test(char);

    // Check if the string matches the car format (LLLDDDD)
    if (str.length === 7) {
      const characters = str.split("");
      if (
        characters.slice(0, 3).every(isLetter) &&
        characters.slice(3).every(isDigit)
      ) {
        const validCarPlate = str.split("");
        const lastCharIndex = validCarPlate.length - 1;
        const secondLastCharIndex = validCarPlate.length - 2;
        const firstChar = validCarPlate[0];
        const secondLastChar = validCarPlate[secondLastCharIndex];
        const lastChar = validCarPlate[lastCharIndex];
        if (
          firstChar === firstChar &&
          secondLastChar === secondLastChar &&
          lastChar === lastChar
        ) {
          const region = regionMapping[firstChar];
          const week = weekMapping[secondLastChar];
          const month = monthMapping[lastChar];
          return <CarPlateInfo region={region} month={month} week={week} />;
        }
      }
    }
    // Check if the string matches the vintage car format (LLLDDD)
    if (str.length === 6) {
      const characters = str.split("");
      if (
        characters.slice(0, 3).every(isLetter) &&
        characters.slice(3, -1).every(isDigit)
      ) {
        const validCarPlate = str.split("");
        const lastCharIndex = validCarPlate.length - 1;
        const secondLastCharIndex = validCarPlate.length - 2;
        const firstChar = validCarPlate[0];
        const secondLastChar = validCarPlate[secondLastCharIndex];
        const lastChar = validCarPlate[lastCharIndex];
        if (
          firstChar === firstChar &&
          secondLastChar === secondLastChar &&
          lastChar === lastChar
        ) {
          const region = regionMapping[firstChar];
          const week = weekMapping[secondLastChar];
          const month = monthMapping[lastChar];
          return <CarPlateInfo region={region} month={month} week={week} />;
        }
      }
    }

    // Check if the string matches the motorcycle format (LDDDLL or DDDLLL)
    if (str.length === 6) {
      const characters = str.split("");
      if (
        isLetter(characters[0]) &&
        characters.slice(1, 4).every(isDigit) &&
        characters.slice(4).every(isLetter)
      ) {
        const validCarPlate = str.split("");
        const lastCharIndex = validCarPlate.length - 3;
        const secondLastCharIndex = validCarPlate.length - 4;
        const firstChar = validCarPlate[0];
        const secondLastChar = validCarPlate[secondLastCharIndex];
        const lastChar = validCarPlate[lastCharIndex];
        if (
          firstChar === firstChar &&
          secondLastChar === secondLastChar &&
          lastChar === lastChar
        ) {
          const region = regionMapping[firstChar];
          const week = weekMapping[secondLastChar];
          const month = monthMapping[lastChar];
          return <CarPlateInfo region={region} month={month} week={week} />;
        }
        //   return "Motorcycle Plate";
      }
    }

    if (str.length === 6) {
      const characters = str.split("");
      if (
        characters.slice(0, 3).every(isDigit) &&
        isLetter(characters[3]) &&
        characters.slice(4).every(isLetter)
      ) {
        const validCarPlate = str.split("");
        const lastCharIndex = validCarPlate.length - 4;
        const secondLastCharIndex = validCarPlate[1];
        const firstChar = validCarPlate[4];
        const secondLastChar = validCarPlate[secondLastCharIndex];
        const lastChar = validCarPlate[lastCharIndex];
        if (
          firstChar === firstChar &&
          secondLastChar === secondLastChar &&
          lastChar === lastChar
        ) {
          const region = regionMapping[firstChar];
          const week = weekMapping[secondLastChar];
          const month = monthMapping[lastChar];
          return <CarPlateInfo region={region} month={month} week={week} />;
        }
      }
    }

    // Check if the string matches the vintage motorcycle format (DDDDLL)
    if (str.length === 6) {
      const characters = str.split("");
      if (
        characters.slice(0, 3).every(isDigit) &&
        characters.slice(4).every(isLetter)
      ) {
        const validCarPlate = str.split("");
        const lastCharIndex = validCarPlate.length - 3;
        const secondLastCharIndex = validCarPlate[1];
        const firstChar = validCarPlate[4];
        const secondLastChar = validCarPlate[secondLastCharIndex];
        const lastChar = validCarPlate[lastCharIndex];
        if (
          firstChar === firstChar &&
          secondLastChar === secondLastChar &&
          lastChar === lastChar
        ) {
          const region = regionMapping[firstChar];
          const week = weekMapping[secondLastChar];
          const month = monthMapping[lastChar];
          return <CarPlateInfo region={region} month={month} week={week} />;
        }
      }
    }

    // Check if the string matches the vintage motorcycle format (LDDDDD)
    if (str.length === 6) {
      const characters = str.split("");
      if (
        characters.slice(0, 1).every(isLetter) &&
        characters.slice(1, -1).every(isDigit)
      ) {
        const validCarPlate = str.split("");
        const lastCharIndex = validCarPlate.length - 1;
        const secondLastCharIndex = validCarPlate[4];
        const firstChar = validCarPlate[0];
        const secondLastChar = secondLastCharIndex;
        const lastChar = validCarPlate[lastCharIndex];
        if (
          firstChar === firstChar &&
          secondLastChar === secondLastChar &&
          lastChar === lastChar
        ) {
          const region = regionMapping[firstChar];
          const week = weekMapping[secondLastChar];
          const month = monthMapping[lastChar]; // Assuming January, you need to adjust this based on your requirements
          return <CarPlateInfo region={region} month={month} week={week} />;
        }
      }
    }

    // Return false if the string doesn't match any format
    return false;
  }

  return (
    <main>
      <section className="display-plate">
        <h2 className="plate-title">Your plate number</h2>
        <DisplayPlate str={str} />
      </section>
      <section className="display-info">{result}</section>
      <section className="form-container">
        <Form
          plateNumber={plateNumber}
          handleInputChange={handleInputChange}
          handleSubmit={handleSubmit}
        />
      </section>
    </main>
  );
};

export default App;
