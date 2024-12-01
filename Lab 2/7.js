function fn() {
  
    const objConst = { name: "Object in L" };

    let objVar = { name: "Object in U" };
  
    objConst.name = "Updated Name in L"; 
    objVar.name = "Updated Name in U";     

   objConst = { name: "New Object in Const" }; 
    objVar = { name: "New Object in U" };      

    return { objConst, objVar };
}

console.log(fn());
