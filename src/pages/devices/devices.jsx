import { useState, Component } from "react";
import { getToken } from '../../utils/common';
import axios from "axios";
import './devices.scss'
// COMPONENTS
import { DisplayDevices } from '../../components/display-devices/display-devices'
import { Footer } from '../../components/footer/footer'


class Devices extends Component {
    constructor (props) {
        super(props)
        this.state = {
            deviceList: []
        }
    }
    componentDidMount() {
        if (!getToken()) {
        } else {
            this.getDevices();
            setInterval(this.getDevices, 5000);
        }
    }
    getDevices = () => {
        axios.get('http://35.201.2.209:8000/devices').then(response => {
            this.setState({deviceList: response.data.devices})
        })
    }
    render () {
        return (
            <div className='devices-container'>
                <DisplayDevices deviceList={this.state.deviceList}/>
                <Footer/>
            </div>
        )
    }
}

export default Devices;