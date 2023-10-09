import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/ContextProvider";
import swal from 'sweetalert';
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getAuth } from "firebase/auth";
import app from "../../firebase/firebase.config";
const auth = getAuth(app);
const Login = () => {
    const {logIn} =useContext(AuthContext);
    const provider = new GoogleAuthProvider();
    const [loading,setLoading]= useState(true);
    const location = useLocation();
    const navigate = useNavigate();
    const handGoogleLogin = () => {
        setLoading(true);
        signInWithPopup(auth, provider)
          .then((result) => {
            const user = result.user;
            console.log(user);
            swal("Good job!", "successful login By Google", "success");
            navigate(location?.state? location.state : '/')
          })
          .catch((error) => {
            console.log(error.message);
          });
      };

    const [loginError, setLoginError] = useState("");
    const handleLogin = e =>{
       e.preventDefault();
       const form = new FormData(e.currentTarget);
       const email = form.get('email');
       const password = form.get('password');

       const emailCheck = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const passwordCheck = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*(),.?":{}|<>]).{6,}$/;
        if (!emailCheck.test(email)) {
            setLoginError("Invalid email format");
            return;
        }
        if (!passwordCheck.test(password)) {
            setLoginError("Invalid password format");
            return;
        }
        setLoginError("");
       logIn(email,password)
       .then(result=>{
        console.log(result.user);
        swal("Good job!", "successful login", "success");
        navigate(location?.state? location.state : '/')
       })
       .catch(error => {
        console.log(error);
        
            setLoginError("Email or Password doesn't match");
        
    });
    

    }

    return (
        <div>
  <div className="hero-content flex-col">
    <div className="text-center md:text-center">
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
        {loginError && (
                            <p className="text-red-500 mt-2">{loginError}</p>
                        )}
        <div className="form-control mt-6">
          <button className="btn btn-accent">Login</button>
        </div>
        <div className="form-control mt-6">
            <button onClick={handGoogleLogin} className="btn btn-accent"><img className="h-[30px]" src="https://i.ibb.co/7C92f9B/7611770.png" alt="" /> Google login</button>
        </div>
      </form>
      
      <p className="text-center lg:text-center">Create new accout  <Link className=" text-xl font-semibold text-teal-500" to='/registration'>Register</Link> </p>
    </div>
  </div>
</div>
    );
};

export default Login;