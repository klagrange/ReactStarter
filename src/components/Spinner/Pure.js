import React, { Component } from 'react'
import Loader from 'react-loader-spinner'

export default class Spinner extends Component {
    render() {
        const {
            type = "Circles",
            color = "#00BFFF",
            height="150",
            width="150"
        } = this.props

        return (
            <Loader 
                type={type}
                color={color}
                height={height}
                width={width}
            />
        )
    }
}