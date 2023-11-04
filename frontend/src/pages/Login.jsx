import { Link } from "react-router-dom"

export default function Login() {
    return (
        <>
            <div className="p-3 max-w-lg mx-auto">
                <h1 className="text-3xl text-center font-semibold my-7">
                    Login
                </h1>
                <form className="flex flex-col gap-4">
                    <input type="email" name="" id="email" placeholder="Email" className="border outline-none p-3 rounded-lg" required/>
                    <input type="password" name="" id="password" placeholder="Password" className="border outline-none p-3 rounded-lg" required/>
                    <button className="bg-[#274C77] text-white p-3 rounded-lg uppercase hover:opacity-80 disabled:opacity-60">Login</button>
                </form>
                <div className="flex gap-2 mt-5">
                    <p>Don't have an account?</p>
                    <Link to={"/register"}>
                        <span className="text-blue-700">Register</span>
                    </Link>
                </div>
            </div>
        </>
    )
}