export default function Login() {
    return(
        <>

            <div style={{
                backgroundImage: "url(/bg.jpg)",
                backgroundSize: "cover",
                backgroundPosition: "center",}} className="h-screen w-screen flex justify-center">
                
                <form action="" className="mt-20 w-[400px] h-[550px] drop-shadow-lg backdrop-blur-xl rounded-xl">
                    <div className="flex flex-row h-[20%] justify-center items-center p-2">
                        <img src="/logo.png" alt="" className="rounded-[50px] h-[100%]" />
                        <div className="p-5 text-[35px] font-bold font-sans tracking-wide">Login</div>
                    </div>
                </form>

             </div>


        </>
    );
}