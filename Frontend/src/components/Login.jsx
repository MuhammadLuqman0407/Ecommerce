import React from 'react'
import { useAppContext } from '../context/AppContext'

const Login = () => {
    const { showUserLogin, setShowUserLogin, setUser } = useAppContext();
    const [state, setState] = React.useState("login");
    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");

    const onSubmitHandler = async (e) => {
        e.preventDefault();
        setUser({ 
            email: "test@user.dev",
            name: "Anonymous User", 
        });
        setShowUserLogin(false);
    };

    if (!showUserLogin) return null;

  return (
    <div onClick={() => setShowUserLogin(false)} className='fixed top-0 bottom-0 left-0 right-0 z-30 flex items-center justify-center text-sm text-gray-600 bg-black/92 backdrop-blur-lg'>
       <form
                onSubmit={onSubmitHandler}
                onClick={(e) => e.stopPropagation()}
                className="w-full sm:w-87.5 text-center bg-white/6 border border-white/10 rounded-2xl px-8">
                <h1 className="text-white text-3xl mt-10 font-medium">
                    {state === "login" ? "Login" : "Sign up"}
                </h1>

                <p className="text-gray-400 text-sm mt-2">Please sign in to continue</p>

                {state !== "login" && (
                    <div className="flex items-center mt-6 w-full bg-white/5 ring-2 ring-white/10 focus-within:ring-primary h-12 rounded-lg overflow-hidden pl-6 gap-2 transition-all ">
                        <input type="text" name="name" placeholder="Name" className="w-full bg-transparent text-white placeholder-white/60 border-none outline-none " value={name} onChange={(e) => setName(e.target.value)} required />
                    </div>
                )}

                <div className="flex items-center w-full mt-4 bg-white/5 ring-2 ring-white/10 focus-within:ring-primary h-12 rounded-lg overflow-hidden pl-6 gap-2 transition-all ">
                    <input type="email" name="email" placeholder="Email id" className="w-full bg-transparent text-white placeholder-white/60 border-none outline-none " value={email} onChange={(e) => setEmail(e.target.value)} required />
                </div>

                <div className=" flex items-center mt-4 w-full bg-white/5 ring-2 ring-white/10 focus-within:ring-primary h-12 rounded-lg overflow-hidden pl-6 gap-2 transition-all ">
                    <input type="password" name="password" placeholder="Password" className="w-full bg-transparent text-white placeholder-white/60 border-none outline-none" value={password} onChange={(e) => setPassword(e.target.value)} required />
                </div>

                <div className="mt-4 text-left">
                    <button className="text-sm text-primary hover:underline">
                        Forget password?
                    </button>
                </div>

                <button type="submit" className="mt-2 w-full h-11 rounded-full text-white bg-primary hover:bg-primary-dull transition " >
                    {state === "login" ? "Login" : "Sign up"}
                </button>

                <p onClick={() => setState(prev => prev === "login" ? "register" : "login")} className="text-gray-400 text-sm mt-3 mb-11 cursor-pointer" >
                    {state === "login" ? "Don't have an account?" : "Already have an account?"}
                    <span className="text-primary hover:underline ml-1">click here</span>
                </p>
            </form>

    </div>
  )
}

export default Login