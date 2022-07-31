import { Axios } from 'axios';
import React, { useState } from 'react'

const Register = () => {
    const [regInput, setReg] = useState({
        name:'',
        email:'',
        password:''
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

        Axios.post(`api`, data).then(res => console.log(res));
    };

  return (
        <>
        <div className='offset-lg-3 col-lg-6 my-4'>
            <form onSubmit={regSubmit}>
                <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input type="text" name='name' onChange={handleInput} value={regInput.name} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Email address</label>
                    <input type="email" name='email' onChange={handleInput} value={regInput.email}  className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input type="password" name='password' onChange={handleInput} value={regInput.password}  className="form-control" id="exampleInputPassword1" />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>    
        </>
  )
}

export default Register