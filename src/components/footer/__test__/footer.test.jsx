import { render, screen, cleanup} from '@testing-library/react'
import { Footer } from '../footer'

afterEach(cleanup);

test('Should render Footer component', () => {
    render(<Footer/>);
    const displayDevicesElement = screen.getByTestId('footer');
    expect(displayDevicesElement).toBeInTheDocument();
    expect(displayDevicesElement).toHaveTextContent('Notify');
    expect(displayDevicesElement).toHaveTextContent('Log Out');
})

test('Should render Footer component\'s Log Out Button', () => {
    render(<Footer/>);
    const displayDevicesElement = screen.getByTestId('logout-button');
    expect(displayDevicesElement).toBeInTheDocument();
    expect(displayDevicesElement.nodeName).toMatch('BUTTON');
})

test('Should render Footer component\'s Notify Button', () => {
    render(<Footer/>);
    const displayDevicesElement = screen.getByTestId('notify-button');
    expect(displayDevicesElement).toBeInTheDocument();
    expect(displayDevicesElement.nodeName).toMatch('BUTTON');
})