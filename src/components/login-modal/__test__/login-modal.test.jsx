import { render, screen, cleanup, fireEvent } from '@testing-library/react'
import { LoginModal } from '../login-modal'

afterEach(cleanup);

test('Should render Login Modal component', () => {
    render(<LoginModal/>);

    const displayDevicesElement = screen.getByTestId('login-modal');
    const emailFieldElement = screen.getByTestId('input-email-field');
    const passwordFieldElement = screen.getByTestId('input-password-field');
    
    expect(displayDevicesElement).toBeInTheDocument();
    expect(displayDevicesElement).toHaveTextContent('Login');

    expect(emailFieldElement).toBeInTheDocument();
    expect(emailFieldElement.getAttribute('name')).toBe('email');
    
    expect(passwordFieldElement).toBeInTheDocument();
    expect(passwordFieldElement.getAttribute('name')).toBe('password');
})

test('Should accept text inputs for Login Modal', () => {
    render(<LoginModal/>);

    const emailFieldElement = screen.getByTestId('input-email-field');
    const passwordFieldElement = screen.getByTestId('input-password-field');

    expect(emailFieldElement.value).toBe('');
    fireEvent.change(emailFieldElement, {target: {value: 'test@test.com'}});
    expect(emailFieldElement.value).toBe('test@test.com');

    expect(passwordFieldElement.value).toBe('');
    fireEvent.change(passwordFieldElement, {target: {value: 'meld123'}});
    expect(passwordFieldElement.value).toBe('meld123');
})