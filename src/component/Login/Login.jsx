import React, { useState } from 'react'

export default function Login(props) {

    const [detail, setDetail] = useState({
        name: '',
        email: '',
        password: ''
    });


    const handleChange = (e) => {
        e.preventDefault();

        props.check(detail)
    }

    return (
        <form className='loginWrapper' onSubmit={handleChange}>
            <div className='innerWrapper'>
                <h1>Login Please</h1>
                <hr />
                {
                    props.error !== '' ? <span className='error'>{props.error}</span> : ''
                }
                <div className="group">
                    <input
                        type="text"
                        onChange={e => setDetail(detail => ({ ...detail, name: e.target.value }))}
                        placeholder={'User Name'} />
                </div>
                <div className="group">
                    <input
                        type="email"
                        onChange={e => setDetail(detail => ({ ...detail, email: e.target.value }))}
                        placeholder={'Email'} />
                </div>
                <div className="group">
                    <input
                        type="password"
                        onChange={e => setDetail(detail => ({ ...detail, password: e.target.value }))}
                        placeholder={'Password'} />
                </div>
                <input className='submit' type="submit" value={'LOGIN'} />
            </div>
        </form>
    )
}
