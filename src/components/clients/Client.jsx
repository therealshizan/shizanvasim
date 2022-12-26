import React from 'react'
import './clients.css'

class Client extends React.Component{
    render(props){
        return(
            <div className="client">
            <img src={this.props.img} alt="" />
        </div>
        )
    }
}

export default Client