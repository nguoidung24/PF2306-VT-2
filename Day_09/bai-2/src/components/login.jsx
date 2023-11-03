import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
function Login() {
    const getUser = () => {
        return  (name == "admin@gmail.com" && pass == "letmein");
    }
    const [isLogin, setIsLodin] = useState(false);
    const handleSubmit = async (e) => {
        const user = await getUser();
        if (user) {
            setIsLodin(true);
        }
      };
    const [name, setName] = useState("admin@gmail.com");
    const [pass, setPass] = useState("letmein");
    return (
        !isLogin ? <>
                <p>Tên đăng nhập: </p>
                <input
                    onChange={e => setName(e.target.value)}
                    value={name}
                    type="text" /> <br />
                <p>
                    Mật khẩu:
                </p>
                <input
                    onChange={e => setPass(e.target.value)}
                    value={pass} 
                    type="text" /> <br />
                <button onClick={handleSubmit} >Login</button>
        </> : <Navigate to={"/home"}/>
    );
}

export default Login;