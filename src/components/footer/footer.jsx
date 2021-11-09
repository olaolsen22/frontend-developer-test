import { useHistory } from 'react-router-dom';
import { removeUserSession, getToken } from '../../utils/common';
import axios from "axios";
import './footer.scss';

export const Footer = () => {
    const history = useHistory();
    const logoutUser = () => {
        removeUserSession();
        history.replace('/');
    }
    const notifyAPI = () => {
        axios.post('http://35.201.2.209:8000/notify', {
            name: 'Ola T. Olsen',
            email: 'olaolsen22@gmail.com',
            repoUrl: 'https://github.com/olaolsen22/frontend-developer-test/',
            message: 'Hi, just submitting the skills exam for the frontend position.'
        },
        {
            headers: {
                'Authorization': `Bearer ${getToken()}`
            }
        }).then(response => {
            alert('Succesfully notified API!')
        }).catch(err => {
            alert('Error when submitting notification!')
        })
    }
    return (
        <div className='footer-container' data-testid='footer'>
            <button className='white-button' data-testid='notify-button' onClick={notifyAPI}>Notify</button>
            <button className='secondary-button' data-testid='logout-button' onClick={logoutUser}>Log Out</button>
        </div>
    )
}