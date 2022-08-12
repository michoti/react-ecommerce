import axios from 'axios';
import swal from 'sweetalert';
import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../../../Features/AppContext';

const Login = () => {

  const {setAuth} = useAuth(); 
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/admin';
  const [loginInput, setLogin] = useState({email:'',password:'',error_list: []});

  const handleInput = (e) => {
    e.persist();
    setLogin({...loginInput, [e.target.name]: e.target.value});
  }

  const loginSubmit = (e) => {
    e.preventDefault();

    const data = {
      email: loginInput.email,
      password: loginInput.password,
    }
    axios.get('/sanctum/csrf-cookie').then(response => {
        axios.post(`api/login`, data).then(res => {
          if(res.data.status === 200)
            {
              setAuth({ auth_token: res?.data?.token, auth_name: res?.data?.username });
              swal('success', res.data.message , 'success');
              navigate(from, {replace: true});
            }
            else if (res.data.status === 401)
            {
              swal("invalid credentials!", res.data.message, "warning")
            }
            else
            {
              setLogin({...loginInput, error_list: res.data.validation_errors})
            }
        });
      });
  }

  return (
    <>
     <div className='offset-lg-3 col-lg-6 my-4'>
            <div className='my-5'>
                <h3>Login</h3>
            </div>
            <form onSubmit={loginSubmit}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" name='email' onChange={handleInput} value={loginInput.email} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    <span>{loginInput.error_list.email}</span>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" name='password' onChange={handleInput} value={loginInput.password} className="form-control" id="exampleInputPassword1" />
                    <span>{loginInput.error_list.password}</span>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
     </div>

    </>
  )
}

export default Login