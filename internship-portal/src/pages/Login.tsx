import './styles.css';
import { Link, useNavigate } from 'react-router-dom';
import {useState} from 'react';


export default function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    console.log(email); 
    const handleLogin = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        e.preventDefault();
        const validEmail = "admin123@gmail.com";
        const validPassword = "admin123";
        console.log(email+"1");

        if (email === validEmail && password === validPassword) {
            console.log(email+"2");
            navigate('/dashboard');
        }
        else {
            alert("Invalid email or password"); 
        }


    }
    return(
        <>

            <div style={{
                backgroundImage: "url(/bg.jpg)",
                backgroundSize: "cover",
                backgroundPosition: "center",}} className="h-screen w-screen flex justify-center">
                
                <form action="" className="mt-20 w-[350px] h-[500px] drop-shadow-2xl backdrop-blur-2xl rounded-xl font-sans tracking-wide">
                    <div className="flex flex-col">
                        
                        <div className="flex flex-row h-[100px] justify-center items-center p-2">
                            <img src="/logo.png" alt="" className="rounded-[50px] h-[100%] drop-shadow-2xl" />
                            <div className="p-5 text-[35px] font-bold font-sans tracking-wide" id = "login">Login</div>
                        </div>

                        <div className="flex flex-col p-5 ">
                            <label htmlFor="email" className="text-[16px] text-white">Email</label>
                            <input type="email" name="email" placeholder="abc123@email.com" id="email" className="p-2 border rounded-lg rounded-xl bg-transparent input-focus" value={email} onChange = {(e)=> setEmail(e.target.value)}/>
                        </div>

                        <div className="flex flex-col p-5 ">
                            <label htmlFor="password" className="text-[16px] text-white">Password</label>
                            <input type="password" placeholder='Your password' name="password" id="password" className="p-2 border rounded-xl rounded-[90px] bg-transparent input-focus placeholder-opacity-0" value={password} onChange={(e)=> setPassword(e.target.value)}/>
                        </div>


                        <div className='flex flex-col justify-center items-center mt-5'>
                            <div className='flex flex-col justify-center items-center  p-2 w-[85%] rounded-2xl bg-white hover:bg-gray-300'>                            
                                    <Link to="/dashboard" className="h-full w-full text-center" onClick={handleLogin}>Login</Link>
                            </div>
                        </div>

                        <div className='flex flex-col justify-center items-center mt-5'> 
                            <Link id="getRegistered" to="/register" className="hover:border hover:rounded-xl p-2 text-white" >Want yourself get Registered?</Link>
                        </div>


                    </div>
                </form>

             </div>


        </>
    );
}