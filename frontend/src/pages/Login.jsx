import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"

export default function Login() {
    const [formData, setFormData] = useState({})
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value,
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            setLoading(true)
            const res = await fetch("/api/auth/login", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData),
            })
            const data = await res.json()
            if (data.success === false) {
                setError(data.message)
                setLoading(false)
                return
            }
            setLoading(false)
            setError(null)
            navigate('/')
        } catch (error) {
            setLoading(false)
            setError(data.message)
        }
    }
    // console.log(formData)
    return (
        <>
            <div className="p-3 max-w-lg mx-auto">
                <h1 className="text-3xl text-center font-semibold my-7">
                    Login
                </h1>
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <input type="email" name="" id="email" placeholder="Email" className="border outline-none p-3 rounded-lg" onChange={handleChange} />
                    <input type="password" name="" id="password" placeholder="Password" className="border outline-none p-3 rounded-lg" onChange={handleChange} />
                    <button disabled={loading} className="bg-[#274C77] text-white p-3 rounded-lg uppercase hover:opacity-80 disabled:opacity-60">
                        {
                            loading ? 'Loading...' : 'Login'
                        }
                    </button>
                </form>
                <div className="flex gap-2 mt-5">
                    <p>Dont have an account?</p>
                    <Link to={"/register"}>
                        <span className="text-blue-700">Register</span>
                    </Link>
                </div>
                {error && <p className="text-red-600 mt-5">{error}</p>}
            </div>
        </>
    )
}