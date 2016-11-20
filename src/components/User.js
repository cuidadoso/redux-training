/**
 * Created by Alejandro on 20.11.2016.
 */
import React, { PropTypes, Component } from 'react'

export default class User extends Component {
    render() {
        const { name } = this.props;
        return <div>
            <p>Привет, {name}!</p>
        </div>
    }
}

User.propTypes = {
    name: PropTypes.string.isRequired
}