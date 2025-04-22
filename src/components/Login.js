import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const uname = useRef("");
  const email = useRef("");
  const pass = useRef("");
  const navigate = useNavigate();

  const submit = (e) => {
    e.preventDefault(); // Prevent page reload on form submit

    const user = uname.current.value.trim();
    const mail = email.current.value.trim();
    const password = pass.current.value.trim();

    if (!user || !mail || !password) {
      alert("Please fill all the fields");
      return;
    }

    // Store in localStorage
    localStorage.setItem("user", user);
    localStorage.setItem("email", mail);

    // Navigate after login
    alert("Login successful");
    navigate(`/dashboard/${localStorage.getItem("email")}`);


    
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-4">
          <h3 className="text-center mb-4">Login</h3>
          <form onSubmit={submit}>
            <div className="mb-3">
              <label htmlFor="username" className="form-label">Username</label>
              <input type="text" ref={uname} className="form-control" id="username" placeholder="Enter username" required />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input type="email" ref={email} className="form-control" id="email" placeholder="Enter email" required />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Password</label>
              <input type="password" ref={pass} className="form-control" id="password" placeholder="Enter password" required />
            </div>
            <button type="submit" className="btn btn-primary w-100">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
