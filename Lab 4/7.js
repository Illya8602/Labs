function ages(persons) {
    const result = {};
    for (const key in persons) {
        const person = persons[key];
        result[key] = person.died - person.born;
    }
    return result;
}
