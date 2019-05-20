import React from 'react'

export function CreateErrorHOC(WrappedComponent) {
    return class extends React.Component {
        constructor(props) {
            super(props)
            this.state = {
                error: false
            }
        }

        createError = () => {
            this.setState({
                error: !this.state.error
            })
        }

        render() {
            return (
                <React.Fragment>
                    { (this.state.error) 
                    ? new Error()
                    : 
                    <React.Fragment>
                        <WrappedComponent {...this.props} />
                        <button style = {{position: "fixed", fontSize: "32px", top: "12%"}} 
                                onClick={this.createError}
                                >Error</button>
                    </React.Fragment>
                    }
                    
                </React.Fragment>
            )
        }
    }
}