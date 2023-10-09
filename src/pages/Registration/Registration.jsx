import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/ContextProvider";
import swal from 'sweetalert';

const Registration = () => {
     const {createUser}= useContext(AuthContext)
     const [passwordError, setPasswordError] = useState("");
     const handlePasswordChange = (e) => {
        const password = e.target.value;
        const passwordCheck = /^(?=.*[A-Z])(?=.*[!@#$%^&*(),.?":{}|<>]).{6,}$/;
    
        if (!passwordCheck.test(password)) {
          setPasswordError(
            "Password must be at least 6 characters long, contain at least one capital letter, and one special character."
          );
        } else {
          setPasswordError("");
        }
      };

    const handleRegistration = e =>{
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const displayName = form.get('displayName');
        const photoURL = form.get('photoURL');
        const email = form.get('email');
        const password = form.get('password');
        createUser(email,password,displayName,photoURL)
        .then((result) => {
            console.log(result.user);
            swal("Good job!", "Registration successful!", "success");
          })
        .catch(error=>{
            console.log(error)
        })
        
     }
    return (
        <div>
            <div className="hero-content flex-col">
    <div className="text-center lg:text-center">
      <h1 className="text-4xl font-bold">Register</h1>
    </div>
    <div className="w-full max-w-sm  bg-base-100">
      <form onSubmit={handleRegistration} className="card-body">
      <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" placeholder="name" name="displayName" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo URL</span>
          </label>
          <input type="text" placeholder="photo url" name="photoURL" className="input input-bordered" required />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" name="email" className="input input-bordered" required />
        </div>
        <div className="form-control relative">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input onChange={handlePasswordChange} type="password" placeholder="password" name="password" className="input input-bordered" required />
              {passwordError && (
              <p className="text-red-500 mt-2">{passwordError}</p>
            )}
            </div>
        <div className="form-control mt-6">
          <button className="btn btn-accent">Register</button>
        </div>
      </form>
      <p className="text-center lg:text-center">Already have an accout? <Link className=" text-xl font-semibold text-teal-500" to='/login'>Login here!</Link></p>
    </div>
  </div>
        </div>
    );
};

export default Registration;