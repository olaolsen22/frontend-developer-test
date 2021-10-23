import './display-devices.scss';

export const DisplayDevices = (props) => {
    const renderDeviceBubbles = () => {
        let deviceBubbles = []
        for (const device in props.deviceList) {
            deviceBubbles.push(
                <div
                    className='device-bubble'
                    key={'device' + device}
                />
            )
        }
        return deviceBubbles
    }
    return (
        <div className='display-device-container'>
            <label className='device-count-header'>{props.deviceList.length}</label>
            <label className='device-count-subheader'>Devices{<br/>}Online</label>
            <div className='device-bubbles'>
                {renderDeviceBubbles()}
            </div>
        </div>
    )
}