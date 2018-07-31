import React from 'react'
//import RaisedButton from 'material-ui/RaisedButton'


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
            <div>
                <h1>{this.state.number}</h1>
                <button
                    onClick={this.incHandler}
                >
                    +
                    </button>
                <button
                    onClick={this.decHandler}
                >
                    -
                    </button>
                <button
                    onClick={this.incHandler5}
                >
                    + 5
                    </button>
                <button
                    onClick={this.decHandler5}
                >
                    - 5
                    </button>
                    <button
                    onClick={this.reset}
                >
                    reset
                    </button>
            </div>
        )
    }
}
export default Counter