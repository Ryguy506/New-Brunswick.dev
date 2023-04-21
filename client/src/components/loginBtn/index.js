


const LoginBtn = () => {
    const google = () => {
        window.open('https://newbrunswick-dev.herokuapp.com/auth/google' , '_self')
    }
    
    return (
    

            <button className="button is-info is-outlined" onClick={google}>Login with google</button>
   
    )
    }

export default LoginBtn