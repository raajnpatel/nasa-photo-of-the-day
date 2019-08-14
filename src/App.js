import React, {useState, useEffect} from "react";
import "./App.css";
import axios from "axios";

function App() {
    const [title, setTitle] = useState();
    const [hdurl, setHdurl] = useState();
    const [url, setUrl] = useState();
    const [explanation, setExplanation] = useState();
    const [selectDate, setSelectDate] = useState();

    useEffect(() => {
        console.log("test");
        let today = new Date;

        console.log(today.getFullYear());
        console.log(today.getMonth()+1);
        console.log(today.getDate());
    }, [selectDate]);
  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀!
      </p>
    </div>
  );
}

export default App;
