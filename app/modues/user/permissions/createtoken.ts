const jwt = require('jsonwebtoken');

const { JWT_SECRETCODE } = process.env;

interface SignInDef {
    email:string,
    password:string
}

const SignIn = async (cred:SignInDef) => {

    var token = await jwt.sign({ email: cred.email }, JWT_SECRETCODE);

    var user = {
        token,
        displayName:"Ashish",
        email: cred.email,
        sessionrest:1,
        authStatusReported:false,
        isUserSignedIn:true
    }

    var returnreq = {
        data:{user},
        isLogin:true,
        status:200,
        message:"OK"
    };
    
    return(returnreq);

}

export default SignIn;