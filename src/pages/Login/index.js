import React from 'react'
import {Input, Button, Gap, Link} from '../../component'
import { LoginBg } from '../../assets'

const Login = () => {
    return (
        <div className="main-page">
            <div className="left">
                <img src={LoginBg} className="bg-image" alt="background" />
            </div>
            <div className="right">
                <h2 className="title">Login</h2>
                <Input label="Email" placeholder="Email" />
                <Gap height={18} />
                <Input label="Password" placeholder="Password" />
                <Gap height={50} />
                <Button title="Login" />
                <Gap height={100} />
                <Link title="Belum punya akun? Daftar" />
            </div>
        </div>
    )
}

export default Login
