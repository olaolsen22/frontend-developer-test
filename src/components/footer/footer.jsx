import { useHistory } from 'react-router-dom';
import { removeUserSession } from '../../utils/common';
import './footer.scss';

export const Footer = () => {
    const history = useHistory();
    const logoutUser = () => {
        removeUserSession();
        history.replace('/');
    }
    return (
        <div className='footer-container'>
            <div>
                <button className='white-button'>Notify</button>
                <button className='secondary-button' onClick={logoutUser}>Log Out</button>
            </div>
        </div>
    )
}