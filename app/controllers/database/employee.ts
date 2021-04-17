// const mysql = require('mysql2/promise');
const { Pool } = require('pg');

let connection:any = null;

interface IN_orderby{
    column?: string,
    order?: string
}

interface IN_pagination{
    pageSize: number, 
    currentpage: number,
    userfilters: any,
    arrangement?: IN_orderby
}

const getConnection = async() =>{
    
    if(connection === null){
        connection = new Pool(
            {
                connectionString: process.env.DATABASE_URL,
                ssl: true
            }
        );

        // connection = new Pool({
        //         host: 'ec2-54-164-22-242.compute-1.amazonaws.com',
        //         user: 'ilnfyvnzpllmit',
        //         max: 20,
        //         idleTimeoutMillis: 30000,
        //         connectionTimeoutMillis: 2000,
        //         dbname: 'denrirfmj8mrv2',
        //         password: '41e32323500a322ddf9017c7efa14f57353bdf6dd2b81ce72189af1f8d1aa9f4',
        //         port: 5432
        //     });
        
        /*connection = await mysql.createConnection({
            host: 'localhost',
            user: 'ashish',
            database: 'twtables',
            password: 'ashish',
            waitForConnections: true,
            connectionLimit: 10,
            queueLimit: 0
        });*/
    }
};

const getEmployeeInfo = async (req:IN_pagination) => {
    console.log("getEmployeeInfo_req",req);

    try{
        const sqlstatment = `SELECT 
                            employee_id,
                            first_name,
                            last_name,
                            email,
                            phone_number,
                            salary 
                        FROM 
                            employees
                        OFFSET ? limit ?`;

        const sqlparam:any[] = [req.pageSize * req.currentpage, req.pageSize];

        console.log("sqlparam",sqlparam);

        await getConnection();
        
        const result = await connection.query(sqlstatment, sqlparam);

        if(result[0].length > 0){
            return(result[0]);
        }
    }catch(err){
        console.log("Error getEmployeeInfo", err);
    }
}

export default getEmployeeInfo;