import React from 'react'
import Button from '@material-ui/core/Button'
import MyFancyPaper from '../Components/MyFancyPaper';

class Counter extends React.Component {

    state = {
        number: this.props.number
    }
    
    componentDidMount() {
        const lastState = JSON.parse(localStorage.getItem('cappy-react-counter'))

        if (lastState === null) return
        this.setState(lastState)
    }
    componentWillUnmount() {
        localStorage.setItem('cappy-react-counter', JSON.stringify(this.state))
    }


    incHandler = () => {
        this.setState({
            number: this.state.number + 1
        })
    }
    incHandler5 = () => {
        this.setState({
            number: this.state.number + 5
        })
    }
    decHandler = () => {
        this.setState({
            number: this.state.number - 1
        })
    }
    decHandler5 = () => {
        this.setState({
            number: this.state.number - 5
        })
    }
    reset = () => {
        this.setState({
            number: this.state.number= 0
        })
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