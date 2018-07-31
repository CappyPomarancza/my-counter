import React from 'react'


class Counter extends React.Component {
    constructor(){
        super()
        this.state = {
            number: this.props.number 
        }
    }

    componentDidMount() {
        const lastState = JSON.parse(localStorage.getItem())
    }


}