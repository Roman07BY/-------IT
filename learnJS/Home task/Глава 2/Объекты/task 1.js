//Дан массив объектов: [ { name: 'Anna', age: 10 }, { name: 'Jack', age: 25 }, { name: 'Sveta', age: 55 } ];
// Вывести массив имен: [ 'Anna', 'Jack', 'Sveta' ];
 
function arrayOfObjectNames(arrayOfObject){                                                                                 
    for(index = 0; index < arrayOfObject.length; index++){                                                                  
        let name1;                                                                                                          
        let name2;                                                                                                          
        let name3;                                                                                                        
if(arrayOfObject[index] === 0){                                                                                             
    for (let key of arrayOfObject) {
        name1 = key.name;
    }                                                                                             
}                                                                                                                         
else if(arrayOfObject[index] === 1){                                                                                        
    for (let key of arrayOfObject) {
        name2 = key.name;
    }                                                                                               
}                                                                                                                          
else(arrayOfObject[index] === 2)                                                                                           
for (let key of arrayOfObject) {
    name3 = key.name;
}                                                                                                                                                                                                                      
    let arrayOfNames = [name1, name2, name3];                                                                               
    console.log(arrayOfNames);                                                                                              
}   
}                                                                                                                        

arrayOfObject = [ { name: 'Anna', age: 10 }, { name: 'Jack', age: 25 }, { name: 'Sveta', age: 55 } ];                       
console.log(arrayOfObjectNames([ { name: 'Anna', age: 10 }, { name: 'Jack', age: 25 }, { name: 'Sveta', age: 55 } ]));      




arrayOfObject = [ { name: 'Anna', age: 10 }, { name: 'Jack', age: 25 }, { name: 'Sveta', age: 55 } ];
for (let key of arrayOfObject) {
    key.name += key.name
	console.log([key.name]);
}