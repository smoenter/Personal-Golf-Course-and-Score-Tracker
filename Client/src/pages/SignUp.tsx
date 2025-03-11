import { useState, FormEvent, ChangeEvent } from "react";
import Auth from '../utils/auth';
import { signUp } from "../api/authAPI";

import "../styles/SignUp.css";

const SignUp = () => {
    const [signUpData, setSignUpData] = useState({
        username: '',
        password: '',
        email: ''
    });

    const [error, setError] = useState<string | null>(null);
    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setSignUpData({
            ...signUpData,
            [name]: value
        });
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setError(null);
        try {
            const data = await signUp(signUpData);
            Auth.signUp(data.token);
        } catch (err) {
            console.error('Failed to signUp', err);
            setError('Invalid username, email or password');
        }
    };
    return (
        <div className='container'>
            <form className='form' onSubmit={handleSubmit}>
                <h1>Sign Up</h1>
                {error && <p className="error-message">{error}</p>}
                <label >Username</label>
                <input
                    type='text'
                    name='username'
                    value={signUpData.username || ''}
                    onChange={handleChange}
                    required
                />
                 <label >Email</label>
                <input
                    type='email'
                    name='email'
                    value={signUpData.email || ''}
                    onChange={handleChange}
                    required
                />
                <label>Password</label>
                <input
                    type='password'
                    name='password'
                    value={signUpData.password || ''}
                    onChange={handleChange}
                    required
                />
                <button type='submit'>Submit Form</button>
            </form>
        </div>
    )

};
export default SignUp;