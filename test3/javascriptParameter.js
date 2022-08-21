function add(id,Callback)
{
    Callback();  
}

function refreshStudentList() {
    console.log('Hello');
}

add(1, refreshStudentList);