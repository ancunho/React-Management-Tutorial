import React from 'react';

class Customer extends React.Component {

    render() {
        return(
            <div>
                <CustomerProfile id={this.props.id} imageURL={this.props.imageURL} name={this.props.name} />
                <CustomerInfo birthDay={this.props.birthDay} gender={this.props.gender} />
            </div>
        );
    }
}

class CustomerProfile extends React.Component {
    render() {
        return (
            <div>
                <h3><img src={this.props.imageURL} alt="profile" /></h3>
                <h4>{this.props.name} ({this.props.id})</h4>
            </div>
        );
    }
}


class CustomerInfo extends React.Component {
    render() {
        return (
            <div>
                <p>{this.props.birthDay}</p>
                <p>{this.props.gender}</p>
            </div>
        );
    }    
}


export default Customer;