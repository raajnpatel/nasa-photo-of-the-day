import React, {useState, useEffect} from "react";
import "./App.scss";
import 'bootstrap';
import axios from "axios";
import Header from "./components/Header";
import Content from './components/Content';
import Footer from './components/Footer';
import 'semantic-ui-css/semantic.min.css';
import styled from "styled-components";
import DatePicker from "./components/DatePicker";
import "react-datepicker/dist/react-datepicker.css";


function App() {
    const [title, setTitle] = useState();
    const [hdurl, setHdurl] = useState();
    const [url, setUrl] = useState();
    const [explanation, setExplanation] = useState();
    const [datePicker, setDatePicker] = useState(new Date());

    useEffect(() => {
        const dateString = `${datePicker.getFullYear()}-${datePicker.getMonth() + 1}-${datePicker.getDate()}`;
        console.log(dateString);
        axios
            .get(`https://api.nasa.gov/planetary/apod?api_key=0aaDPjJbZKQr2kJOxmNw37yDqhX8wpJXgLwQbOKo&date=${dateString}`)
            .then((response) => {
                console.log(response);
                setTitle(response.data.title);
                setHdurl(response.data.hdurl);
                setUrl(response.data.url);
                setExplanation(response.data.explanation);
            });
    });
  return (
    <div className="App">
        <DatePicker/>
        <Header/>
        <Content title = {title} hdurl = {hdurl} explanation = {explanation} url = {url}/>
        <Footer/>
    </div>
  );
}

export default App;
