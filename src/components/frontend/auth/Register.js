import axios from 'axios';
import React, { useState } from 'react';
import swal from 'sweetalert';

const Register = () => {
    const [regInput, setReg] = useState({
        name:'',
        email:'',
        password:'',
        error_list: [],
    });

    const handleInput = (e) => {
        e.persist();
        setReg({...regInput, [e.target.name]: e.target.value});
    };

    const regSubmit = (e) => {
        e.preventDefault();

        const data = {
            name     : regInput.name,
            email    : regInput.email,
            password : regInput.password,
        };

        axios.get('/sanctum/csrf-cookie').then(response => {
            axios.post(`/api/register`, data)
                 .then(res => {
                    if(res.data.status === 200)
                    {
                        localStorage.setItem('auth_token', res.data.token);
                        localStorage.setItem('auth_name', res.data.username);
                        swal('success', res.data.message , 'success');

                    }
                    else
                    {
                        setReg({...regInput, error_list: res.data.validation_errors})
                    }
                 });
        });

        
    };

  return (
        <>
        <div className='offset-lg-3 col-lg-6 my-4'>
            <form onSubmit={regSubmit}>
                <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input type="text" name='name' onChange={handleInput} value={regInput.name} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    <span>{regInput.error_list.name}</span>
                </div>
                <div className="mb-3">
                    <label className="form-label">Email address</label>
                    <input type="email" name='email' onChange={handleInput} value={regInput.email}  className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    <span>{regInput.error_list.email}</span>
                </div>
                <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input type="password" name='password' onChange={handleInput} value={regInput.password}  className="form-control" id="exampleInputPassword1" />
                    <span>{regInput.error_list.password}</span>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>    
        </>
  )
}

export default Register