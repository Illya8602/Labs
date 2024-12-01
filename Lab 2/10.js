 const phoneBook = new Map([
    ['Danua', '+380934675319'],
    ['Roman', '+380946534387'],
    ['David', '+380997356732']
]);

function findPhoneByName(name) {
    return phoneBook.get(name) || 'Phone not found';
}

console.log(findPhoneByName('Danua')); 
console.log(findPhoneByName('Roman'));           
console.log(findPhoneByName('David'));       
