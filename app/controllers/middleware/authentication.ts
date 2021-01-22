const jwt = require('jsonwebtoken');
const { JWT_SECRETCODE } = process.env;

const Authenticate = (req:any, res:any, next:any) => {

    var token = "";
    var failredult = {
                        isLogin: false
                    };

    if(req.headers.hasOwnProperty("authorization")){
        token = req.headers.authorization.substring(7, req.headers.authorization.length);
    }

    jwt.verify(token, JWT_SECRETCODE, function(err:any) {
        if(err === null){
            next();
        }else{
            res.status(400);
            res.send(failredult);
        }
    });
}

export default Authenticate;
