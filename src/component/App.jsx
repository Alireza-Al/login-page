import React, { useState } from 'react';
import '../asset/App.scss';
import Login from './Login/Login';

function App() {

    const correctUser = {
        email: 'email@email.com',
        password: 'email4250'
    }

    const [detail, setDetail] = useState({
        name: '',
        email: ''
    })

    const [error, setError] = useState('')

    const LoginChecker = (info) => {
        setDetail(info)

        if (detail.email !== correctUser.email || detail.password !== correctUser.password) {
            setError('Email or Password Incorrect')

        }
        
    }


    const LogOut = () => {
        setDetail({
            name: '',
            email: ''
        })
        setError('')
    }

    return (
        <div className="App">
            {
                detail.email === correctUser.email && detail.password === correctUser.password ?
                    <div className='success'>
                        <h1>
                            Welcome User <span>{detail.name}</span> you have successfully logged in with <span>{detail.email}</span>
                        </h1>
                        <button onClick={LogOut}>LOGOUT</button>

                    </div>
                    :
                    <Login check={LoginChecker} error={error} />
            }
        </div>
    );
}

export default App;
