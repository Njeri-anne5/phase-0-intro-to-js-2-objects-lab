const employee={
    name: "Sam",
    streetAddress:"New York"

}

// non-destructive...
function  updateEmployeeWithKeyAndValue(employee, key, value){
    {
        const newObj={...employee};
        newObj[key]=value;
        return newObj;
    };
}//destructive

    function  destructivelyUpdateEmployeeWithKeyAndValue(employee,key,value){
        employee[key]=value;
        return employee;
}
//Delete key non-destructively
function deleteFromEmployeeByKey(employee, key){
    const newObj={...employee}//clones the obj
    delete newObj[key];//makes changes to newObj

    return newObj;
}

//destructively deletes key
function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key];
    return employee;

}

//







