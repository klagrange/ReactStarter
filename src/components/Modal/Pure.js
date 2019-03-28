import React, { Component } from 'react'
import ReactModal from 'react-modal';

import Spinner from 'components/Spinner'

export default class Modal extends Component {
    render() {
        const {
            isOpen = false
        } = this.props

        return (
            <ReactModal
                isOpen={isOpen}
                contentLabel="Example Modal"
                style={{ 
                    overlay: { backgroundColor: "#D3D3D3"}, 
                    content: {}
                }}
                data={{
                    background: "green"
                }}
                >
                <Spinner />
            </ReactModal>
            
        )
    }
}