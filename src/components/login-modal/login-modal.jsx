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
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const history = useHistory();

    const updateEmail = (e) => {
        setEmail(e.target.value);
    }
    const updatePassword = (e) => {
        setPassword(e.target.value);
    }

    const onSubmit = (e) => {
        e.preventDefault();
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
        <div className="login-modal" data-testid='login-modal'>
            <form onSubmit={onSubmit} data-testid='login-form'>
                <h1 className="login-header">Login</h1>
                <div className="input-field">
                    <div className="input-field-icon">
                        <FontAwesomeIcon icon={faEnvelope}/>
                    </div>
                    <input 
                        className='has-icon'
                        data-testid='input-email-field'
                        type='email'
                        name="email"
                        value={email}
                        onChange={updateEmail}
                        placeholder="Email Address"
                        disabled={loading}
                    />
                </div>
                <div className="input-field">
                    <div className="input-field-icon">
                        <FontAwesomeIcon icon={faExclamationCircle}/>
                    </div>
                    <input 
                        className='has-icon'
                        data-testid='input-password-field'
                        type='password'
                        name="password"
                        value={password}
                        onChange={updatePassword}
                        placeholder="Password"
                        disabled={loading}
                    />
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
                <button
                    type="submit"
                    data-testid='submit-login-button'
                    className='primary-button'
                    disabled={loading}
                >
                    Log In
                </button>
            </form>
        </div>);
};
