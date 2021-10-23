import { useState, Component } from "react";
import './devices.scss'
// COMPONENTS
import { DisplayDevices } from '../../components/display-devices/display-devices'
import axios from "axios";

class Devices extends Component {
    constructor (props) {
        super(props)
        this.state = {
            deviceList: []
        }
    }
    componentDidMount() {
        this.getDevices();
        setInterval(this.getDevices, 5000);
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
            </div>
        )
    }
}

export default Devices;