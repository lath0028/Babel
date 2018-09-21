/*******************
ASYNC WITH AWAIT
********************/

    
function resolveAsync(){
    return new Promise(resolve=>{
        setTimeout(()=>{
            resolve('Resolved!');
            
        },3000);
    });
}

async function asyncCall(){
    console.log('Calling the function...');
    var result=await resolveAsync();
    console.log(result);
    
}

asyncCall();

/************************
METHOD SHORTHAND IN ES6
************************/

let obj={
    
    prop1:'John',
    prop2:'The Demon',
    Concatanation(){
        console.log( obj )
        console.log( this )
        console.log(prop1 + prop2)
    }
}
    obj.Concatanation();


/************************
DESTRUCTURING
*************************/
function getUser() {
    return {
    name: 'Parshant lathiya',
    id: 1234567,
    location: 'toronto'
};
}

var { name, id, location} = getUser();

/***************************
FETCH
***************************/



let url="https://jsonplaceholder.typicode.com/comments?postId=42";

fetch(url)
.then(response=> response.json())
.then(data=>{
    let str= JSON.stringify(data,null,'\t')
})
.catch(err=>{
let nm=err.name;
let msg=err.message;
alert(`CATCH:${nm}${msg}`);
});