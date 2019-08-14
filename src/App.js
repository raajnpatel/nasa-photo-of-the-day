import React, {useState, useEffect} from "react";
import "./App.css";
import axios from "axios";
import Header from "./components/Header";
import Content from './components/Content';
import Footer from './components/Footer';
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css";

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

    axios
        .get("https://api.nasa.gov/planetary/apod?api_key=0aaDPjJbZKQr2kJOxmNw37yDqhX8wpJXgLwQbOKo")
        .then((response) => {
           console.log(response);
           setTitle(response.data.title);
           setHdurl(response.data.hdurl);
           setUrl(response.data.url);
           setExplanation(response.data.explanation);
        });
  return (
    <div className="App">
        <Header/>
        <Content title = {title} hdurl = {hdurl} explanation = {explanation}/>
        <Footer/>
    </div>
  );
}

export default App;
