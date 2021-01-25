



function getUser(id){
    if(id==1){
        return 'John'
    }
    else{
        return 'Peter'
    }
}

getUser(1, (user)=>{
    console.log(user)
})


getUser(2, (user)=>{
    console.log(user)
})



const a = 1+33
console.log(a)