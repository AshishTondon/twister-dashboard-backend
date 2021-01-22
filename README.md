# twister-dashboard-backend

This module is backend for Twister reactjs template.

## APIs
    1. /api/monitoring/validateuser (POST)
        ** Reqest **
        ```json
            {"email": "test1@twister.com","password":"abc"}
        ```
        
        ** Response **
        ``json
        {
            "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3QxQHR3aXN0ZXIuY29tIiwiaWF0IjoxNjExMzQwODYwfQ.Z3vhWiMTNOW83zUQb79Rwil5eyONxXnpGxxawfx4lGo",
            "name": "Ashish",
            "email": "test1@twister.com",
            "isLogin": true
        }
        ```