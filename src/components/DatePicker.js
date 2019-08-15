
import React, {useState} from "react";
import "../App.scss";
import "semantic-ui-css/semantic.min.css";
import styled from 'styled-components'
import DatePicker from 'react-datepicker';

import "react-datepicker/dist/react-datepicker.css";

class datePicker extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            startDate: new Date()
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(date) {
        this.setState({
            startDate: date
        });
        let photoMonth = date.getMonth()+1;
        let photoDate = date.getDate();
        let photoYear = date.getFullYear();
        console.log(photoMonth);
        console.log(photoDate);
        console.log(photoYear);
    }

    render() {
        return (
            <DatePicker
                selected={this.state.startDate}
                onChange={this.handleChange}
            />
        );
    }
}

export default datePicker;