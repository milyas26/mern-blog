import React from 'react'
import './register.scss'
import { RegisterBg } from '../../assets'
import {Input, Button, Gap, Link} from '../../component'

const Register = () => {
    return (
        <div className="main-page">
            <div className="left">
                <img src={RegisterBg} className="bg-image" alt="background" />
            </div>
            <div className="right">
                <h2 className="title">Register</h2>
                <Input label="Full Name" placeholder="Full Name" />
                <Gap height={18} />
                <Input label="Email" placeholder="Email" />
                <Gap height={18} />
                <Input label="Password" placeholder="Password" />
                <Gap height={50} />
                <Button title="Register" />
                <Gap height={100} />
                <Link title="Kembali ke Login" />
            </div>
        </div>
    )
}

export default Register
