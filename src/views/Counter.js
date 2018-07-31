import React from 'react'


class Counter extends React.Component {
    constructor(){
        super()
        this.state = {
            number: this.props.number 
        }
    }

    componentDidMount() {
        const lastState = JSON.parse(localStorage.getItem('cappy-react-counter'))

        if(lastState===null) return 
        this.setState(lastState)
    }
    componentWillUnmount() {
        localStorage.setItem('cappy-react-counter', JSON.stringify(this.state))
    }


    incHandler =() => {
        this.setState({
            number: this.state.number + 1
        })
    }
    decHandler = () => {
        this.setState({
            number: this.state.number - 1
        })
    }

    render (){
        return(
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
            </div>
        )
    }


}
export default Counter