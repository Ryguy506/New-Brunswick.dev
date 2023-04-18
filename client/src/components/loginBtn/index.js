


const LoginBtn = () => {
    const google = () => {
        window.open('http://localhost:3003/auth/google' , '_self')
    }
    
    return (
    

            <button className="button is-info is-outlined" onClick={google}>Login with google</button>
   
    )
    }

export default LoginBtn