import { Link } from 'react-router-dom';
import './styles.css';


export default function Register() {
 return(

        <>
    
    <div style={{
                backgroundImage: "url(/bg.jpg)",
                backgroundSize: "cover",
                backgroundPosition: "center",}} className="h-screen w-screen flex justify-center">
                
                <form action="" className="mt-20 w-[350px] h-[500px] drop-shadow-2xl backdrop-blur-2xl rounded-xl font-sans tracking-wide p-2">
                    <div className="flex flex-col">
                        
                        <div className="flex flex-row h-[100px] justify-center items-center p-2">
                            <img src="/logo.png" alt="" className="rounded-[50px] h-[100%] drop-shadow-2xl" />
                            <div className="p-5 text-[35px] font-bold font-sans tracking-wide" id = "login">Register</div>
                        </div>


                        <div className="flex flex-col p-3">
                            <label htmlFor="name" className="text-[16px] text-white">Name</label>
                            <input type="text" name="name" placeholder="Your full name" id="name" className="p-2 border rounded-lg rounded-xl bg-transparent input-focus" />
                        </div>


                        <div className="flex flex-col p-3">
                            <label htmlFor="email" className="text-[16px] text-white">Email</label>
                            <input type="email" name="email" placeholder="abc123@email.com" id="email" className="p-2 border rounded-lg rounded-xl bg-transparent input-focus" />
                        </div>

                        <div className="flex flex-col p-3 ">
                            <label htmlFor="password" className="text-[16px] text-white">Password</label>
                            <input type="password" placeholder='Your password' name="password" id="password" className="p-2 border rounded-xl rounded-[90px] bg-transparent input-focus placeholder-opacity-0" />
                        </div>


                        <div className='flex flex-col justify-center items-center mt-5'>
                            <div className='flex flex-col justify-center items-center  p-2 w-[85%] rounded-2xl bg-white hover:bg-gray-300'>                            
                                    <Link to="/dashboard" className="h-full w-full text-center">Register</Link>
                            </div>
                        </div>

                        


                    </div>
                </form>

             </div>
    
        </> 

 )

}
