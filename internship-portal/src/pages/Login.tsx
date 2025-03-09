export default function Login() {
    return(
        <>

            <div style={{
                backgroundImage: "url(/bg.jpg)",
                backgroundSize: "cover",
                backgroundPosition: "center",}} className="h-screen w-screen flex justify-center">
                
                <form action="" className="mt-20 w-[400px] h-[550px] drop-shadow-lg backdrop-blur-xl rounded-xl">
                    <div className="flex flex-col">
                        
                        <div className="flex flex-row h-[100px] justify-center items-center p-2">
                            <img src="/logo.png" alt="" className="rounded-[50px] h-[100%]" />
                            <div className="p-5 text-[35px] font-bold font-sans tracking-wide">Login</div>
                        </div>

                        <div className="flex flex-col p-5 ">
                            <label htmlFor="email" className="text-[16px] text-white">Email</label>
                            <input type="email" name="email" id="email" className="p-2 border rounded-lg rounded-[90px] bg-transparent" />
                        </div>

                        <div className="flex flex-col p-5 ">
                            <label htmlFor="password" className="text-[16px] text-white">Password</label>
                            <input type="password" name="password" id="password" className="p-2 border rounded-lg rounded-[90px] bg-transparent" />
                        </div>


                    </div>
                </form>

             </div>


        </>
    );
}