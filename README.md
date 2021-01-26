# twister-dashboard-backend

This module is backend for Twister reactjs template. Creates session at server side and keep check on each request for session.

## APIs

<ul>
    <li>

This API call will create session at server side and response back a token. The token needs to be included in every following request's header.

```url   
/api/monitoring/validateuser (POST)
```

**Login Credentials**
```
    Email: any email with proper email format.
    password: any password
```

**Reqest**
```json
    {
        "email": "ashish@twistertest.com",
        "password":"abc"
    }
```

**Response**

```json
{
    "isLogin":true,
    "status":200,
    "message":"OK",
    "data":{
        "user":{
            "token":"<token>",
            "displayName":"Ashish",
            "email": "ashish@twistertest.com",
            "sessionrest":1,
            "authStatusReported":false,
            "isUserSignedIn":true
        }
    }
}
```
</li>
<li>
Whenever any Reactjs page gets refresh or loaded agian on the brower. Following request will be triggered automatuclly by the reactjs app to check if session still exists. For example if user's session get expire at server side(user user still at the user's dashboard) and user refersh page without calling any new request following request will be triggered and if session does not exist user will be redirected to login page.

```url   
/api/monitoring/sessioncheck (POST)
```
**Header**
```
    {
        "Authorization": "bearer <Token>"
    }
```

**Reqest**
```json
    /api/monitoring/sessioncheck"
```

**Response**
```json
    {
        "isLogin": true
    }
```
</li>
</ul>


