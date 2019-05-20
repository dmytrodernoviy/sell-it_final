import React, {Component} from 'react'

class ErrorBoundary extends Component {
    state = {
        hasError: false
    }

    componentDidCatch() {
        this.setState({hasError: true})
    }

    render() {
        if(this.state.hasError) {
            return <div style={{width: "275px", 
                                height: "218px", 
                                margin: "30px 10px", 
                                border: "3px solid #00b3be"}}>
                        <img src={require("../../assets/img/robot-error-codes.png")} 
                             style = {{height: "100%", width: "100%"}}
                             alt = "Error"/>
                    </div>
        }

        return this.props.children
    }
}

export default ErrorBoundary