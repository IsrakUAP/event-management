import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/ContextProvider";


const Registration = () => {
     const {createUser}= useContext(AuthContext)

    const handleRegistration = e =>{
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const name = form.get('name');
        const photo = form.get('photo');
        const email = form.get('email');
        const password = form.get('password');
        createUser(email,password)
        .then(result =>{
            console.log(result.user)
        })
        .catch(error=>{
            console.log(error)
        })
     }
    return (
        <div>
            <div className="hero-content lg:flex-col">
    <div className="text-center lg:text-center">
      <h1 className="text-4xl font-bold">Register</h1>
    </div>
    <div className="w-full max-w-sm  bg-base-100">
      <form onSubmit={handleRegistration} className="card-body">
      <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" placeholder="name" name="name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo URL</span>
          </label>
          <input type="text" placeholder="photo url" name="photo" className="input input-bordered" required />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" name="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" name="password" className="input input-bordered" required />
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-accent">Register</button>
        </div>
      </form>
      <p className="text-center lg:text-center">Have an accout  <Link className=" text-xl font-semibold text-teal-500" to='/login'>Login</Link> </p>
    </div>
  </div>
        </div>
    );
};

export default Registration;