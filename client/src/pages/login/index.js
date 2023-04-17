


const Login = () => {

const google = () => {
    window.open('http://localhost:3003/auth/google' , '_self')
}

return (

<div id="parent">
        <button className="button is-primary is-outlined" onClick={google}>Login with google</button>
</div>
)
}

export default Login