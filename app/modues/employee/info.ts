import getEmployeeInfo from "../../controllers/database/employee";

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

const getemployee = async (req:IN_pagination) => {
    
    const empdata = await getEmployeeInfo(req) ;

    return empdata;
}
export default getemployee;