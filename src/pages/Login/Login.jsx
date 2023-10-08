import { Link } from "react-router-dom";


const Login = () => {
    const handleLogin = e =>{
       e.preventDefault();
       const form = new FormData(e.currentTarget);
    }

    return (
        <div>
  <div className="hero-content lg:flex-col">
    <div className="text-center lg:text-center">
      <h1 className="text-4xl font-bold">Login</h1>
    </div>
    <div className="w-full max-w-sm  bg-base-100">
      <form onSubmit={handleLogin} className="card-body">
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
          <button className="btn btn-accent">Login</button>
        </div>
      </form>
      <p className="text-center lg:text-center">Create new accout  <Link className=" text-xl font-semibold text-teal-500" to='/registration'>Registration</Link> </p>
    </div>
  </div>
</div>
    );
};

export default Login;