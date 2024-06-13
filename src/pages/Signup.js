import React, { useState } from "react";
import loginSignupImage from '../Images/assest/user.png';
import { BiShow, BiHide } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";


function Signup() {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const handleShowPassword = () => {
        setShowPassword((preve) => !preve);
      };
    
    const handleShowConfirmPassword = () => {
      setShowConfirmPassword((preve) => !preve);
      };

      const [data, setData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
        image : ""
      });

      const handleOnChange = (e) => {
        const { name, value } = e.target;
        setData((preve) => {
          return {
            ...preve,
            [name]: value,
          };
        });
      };

      const handleSubmit = (e)=>{
        e.preventDefault();
        const { firstName, email, password, confirmPassword } = data;
        if (firstName && email && password && confirmPassword) {
            if (password === confirmPassword) {
                alert("sucssesfull");
            }else{
                alert("password and conferm password not equal");
            }
        }else{
            alert("plase enter the requre field");
        }
      }

  return (
    <div className='p-3 md:p-4'>
        <div className='w-full max-w-sm bg-white m-auto flex items-center flex-col p-4 rounded-md'>
            {/* <h1 className='text-center text-2xl font-bold '>SignUp</h1> */}
            <div className='w-20 overflow-hidden rounded-full drop-shadow-md shadow-md '>
                <img src={loginSignupImage} alt="Userimage" className="w-full" />
                
            </div>

            <form className='w-full py-3 flex flex-col' onSubmit={handleSubmit}>
                <label htmlFor="firstName">First Name</label>
                <input type={"text"} id="firstName" 
                name="firstName" 
                className="mt-1 mb-2 w-full bg-slate-200 px-2 py-1 rounded focus-within:outline-blue-300"
                value={data.firstName}
                onChange={handleOnChange}
                />

                <label htmlFor="lastName">Last Name</label>
                <input type={"text"} 
                id="email" name="email" 
                className="mt-1 mb-2 w-full bg-slate-200 px-2 py-1 rounded focus-within:outline-blue-300"
                value={data.lastName}
                onChange={handleOnChange}
                />

                <label htmlFor="email">Email</label>
                <input
                    type={"email"}
                    id="email"
                    name="email"
                    className="mt-1 mb-2 w-full bg-slate-200 px-2 py-1 rounded focus-within:outline-blue-300"
                    value={data.email}
                    onChange={handleOnChange}
                />

                <label htmlFor="password">Password</label>

                <div className="flex px-2 py-1 bg-slate-200 rounded mt-1 mb-2 focus-within:outline focus-within:outline-blue-300">
                    <input type={showPassword ? "text":"password"} 
                    id="password" 
                    name="password" 
                    className=" w-full bg-slate-200 border-none outline-none"
                    value={data.password}
                    onChange={handleOnChange}
                    />
                        <span className="flex text-xl cursor-pointer" onClick={handleShowPassword}>{showPassword ? <BiShow /> : <BiHide />} </span>
                </div>

                <label htmlFor="confirmpassword">Confirm Password</label>
                <div className="flex px-2 py-1 bg-slate-200 rounded mt-1 mb-2  focus-within:outline focus-within:outline-blue-300">
                    <input
                      type={showConfirmPassword ? "text" : "password"}
                      id="confirmpassword"
                      name="confirmPassword"
                      className=" w-full bg-slate-200 border-none outline-none " 
                      value={data.confirmPassword} 
                      onChange={handleOnChange}
                      />
                    <span
                      className="flex text-xl cursor-pointer"
                      onClick={handleShowConfirmPassword} >
                      {showConfirmPassword ? <BiShow /> : <BiHide />}
                    </span>
                </div>

                <button type="submit" className="w-full max-w-[150px] m-auto items-center bg-blue-500 hover:bg-blue-600 cursor-pointer  text-white text-xl font-medium text-center py-1 rounded-full mt-4">
                Sign up </button>
                
            </form>

            <p className="text-left text-sm mt-2">Already have account ?{" "}
                <Link to={"/login"} className="text-blue-500 underline"> Login </Link>
            </p>    

        </div>
    </div>
  )
}

export default Signup;