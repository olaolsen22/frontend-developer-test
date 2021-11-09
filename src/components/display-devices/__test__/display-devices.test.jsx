import { render, screen, cleanup} from '@testing-library/react'
import { DisplayDevices } from '../display-devices'

const mockDevicesData = [
    {
        "id": 0,
        "name": "Renae"
    }
]

afterEach(cleanup);

test('Should render Display Devices component', () => {
    render(<DisplayDevices deviceList={mockDevicesData}/>);
    const displayDevicesElement = screen.getByTestId('display-devices');
    expect(displayDevicesElement).toBeInTheDocument();
    expect(displayDevicesElement).toHaveTextContent('Devices');
    expect(displayDevicesElement).toHaveTextContent('Online');
})

test('Should render correct Display Devices count', () => {
    render(<DisplayDevices deviceList={mockDevicesData}/>);
    const displayDevicesElement = screen.getByTestId('display-devices-count');
    expect(displayDevicesElement).toHaveTextContent(mockDevicesData.length);
})

test('Should render correct amount of Display Devices bubbles', () => {
    render(<DisplayDevices deviceList={mockDevicesData}/>);
    const displayDevicesElement = screen.getByTestId('display-devices-bubbles');
    expect(displayDevicesElement.getElementsByClassName('device-bubble').length).toBe(mockDevicesData.length);
})