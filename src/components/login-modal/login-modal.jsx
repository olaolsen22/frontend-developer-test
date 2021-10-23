import { useState } from "react";
import axios from 'axios';
import { setUserSession } from '../../utils/common';
import { useHistory } from 'react-router-dom';
// Styles
import './login-modal.scss';
import { faEnvelope, faExclamationCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const LoginModal = () => {
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const history = useHistory();

    const onSubmit = (e) => {
        e.preventDefault();
        const target = e.target;
        loginUser(target.email.value, target.password.value)
    };
    const loginUser = (email, password) => {
        setError(null);
        setLoading(true);
        axios.post('http://35.201.2.209:8000/login', { email: email, password: password }).then(response => {
            setLoading(false);
            setUserSession(response.data, email);
            history.push('/devices')
        }).catch(error => {
            setLoading(false);
            if (error.response.status === 401) {
                setError("Invalid credentials. Please try again.");
            } else {
                setError("Something went wrong. Please try again later.");
            }
        });
    }
    return (
        <div className="login-modal">
            <form onSubmit={onSubmit}>
                <h1 className="login-header">Login</h1>
                <div className="input-field">
                    <div className="input-field-icon">
                        <FontAwesomeIcon icon={faEnvelope}/>
                    </div>
                    <input className='has-icon' type='email' name="email" placeholder="Email Address" disabled={loading}/>
                </div>
                <div className="input-field">
                    <div className="input-field-icon">
                        <FontAwesomeIcon icon={faExclamationCircle}/>
                    </div>
                    <input className='has-icon' type='password' name="password" placeholder="Password" disabled={loading}/>
                </div>
                {
                    loading && <p className="label-generic-message">Logging you in...</p>
                }
                {
                    error && <p className="label-error-message">{error}</p>
                }
                {
                    (!error && !loading) && <div className="form-spacer"/>
                }
                <button type="submit" className='primary-button' disabled={loading}>Log In</button>
            </form>
        </div>);
};
