const phoneBook = [
    { name: 'David', phone: '+380946534387' },
    { name: 'Roman', phone: '+380934675319' },
    { name: 'Danua', phone: '+380997356732' }
];

function findPhoneByName(name) {
    for (let entry of phoneBook) {
        if (entry.name === name) {
            return entry.phone; 
        }
    }
    return 'Phone not found'; 
}

console.log(findPhoneByName('David'));
console.log(findPhoneByName('Roman'));          
console.log(findPhoneByName('Danua')); 
