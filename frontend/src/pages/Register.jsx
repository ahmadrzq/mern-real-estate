import { Link } from "react-router-dom"

export default function Register() {
    return (
        <>
            <div className="p-3 max-w-lg mx-auto">
                <h1 className="text-3xl text-center font-semibold my-7">
                    Register
                </h1>
                <form className="flex flex-col gap-4">
                    <input type="text" name="" id="username" placeholder="Username" className="border p-3 rounded-lg" />
                    <input type="email" name="" id="email" placeholder="Email" className="border p-3 rounded-lg" />
                    <input type="password" name="" id="password" placeholder="Password" className="border p-3 rounded-lg" />
                    <button className="bg-[#274C77] text-white p-3 rounded-lg uppercase hover:opacity-80 disabled:opacity-60">Register</button>
                </form>
                <div className="flex gap-2 mt-5">
                    <p>Have an account?</p>
                    <Link to={"/login"}>
                        <span className="text-blue-700">Login</span>
                    </Link>
                </div>
            </div>
        </>
    )
}