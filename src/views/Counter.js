import React from 'react'
import Button from '@material-ui/core/Button'
import MyFancyPaper from '../Components/MyFancyPaper';

class Counter extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            number: 0
        }
    }
    
    componentDidMount() {
        const lastState = JSON.parse(localStorage.getItem('cappy-react-counter')) || this.state
        this.setState(lastState)
    }
    componentWillUnmount() {
        localStorage.setItem('cappy-react-counter', JSON.stringify(this.state))
    }


    incHandler = () => {
        const number = {
            number: this.state.number + 1
        }
        this.setState({
            number: this.state.number + 1
        })
        localStorage.setItem('cappy-react-counter', JSON.stringify(number))
    }
    incHandler5 = () => {
        const number = {
            number: this.state.number + 5
        }
        this.setState({
            number: this.state.number + 5
        })
        localStorage.setItem('cappy-react-counter', JSON.stringify(number))
    }
    decHandler = () => {
        const number = {
            number: this.state.number - 1
        }
        this.setState({
            number: this.state.number - 1
        })
        localStorage.setItem('cappy-react-counter', JSON.stringify(number))
    }
    decHandler5 = () => {
        const number = {
            number: this.state.number - 5
        }
        this.setState({
            number: this.state.number - 5
        })
        localStorage.setItem('cappy-react-counter', JSON.stringify(number))
    }
    reset = () => {
        const number = {
            number: this.state.number * 0  
        }
        this.setState({
            number: this.state.number = 0
        })
        localStorage.setItem('cappy-react-counter', JSON.stringify(number))
    }

    render() {
        return (
            <MyFancyPaper>
                <h3>Hello In My Counter </h3>
                <h1>{this.state.number}</h1>
                <Button variant="contained" color="primary"
                    onClick={this.incHandler}
                >
                    +
                    </Button>
                    <Button variant="contained" color="primary"
                    onClick={this.incHandler5}
                >
                    + 5
                    </Button>
                <Button variant="contained" color="primary"
                    onClick={this.decHandler}
                >
                    -
                    </Button>
                
                <Button variant="contained" color="primary"
                    onClick={this.decHandler5}
                >
                    - 5
                    </Button>
                    <Button variant="contained" color="secondary"
                    onClick={this.reset}
                >
                    reset
                    </Button>
            </MyFancyPaper>
        )
    }
}
export default Counter