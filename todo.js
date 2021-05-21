let enter = prompt('What Do You Wanna Do?');
const list = ['Walk Dogs', 'Collect Eggs'];
while (enter !== 'quit' && enter !== 'q') {
    if (enter === 'list') {
        console.log('**********');
        for (let i = 0; i < list.length; i++) {
            console.log(`${i}: ${list[i]}`);
        };
        console.log('**********');
    } else if (enter === 'new') {
        const newList = prompt('Add your new to-do!');
        list.push(newList);
        console.log(`You added ${newList} to your list!`);
    } else if (enter === 'delete') {
        const index = parseInt(prompt('Ok, enter an index'));
        if (!Number.isNaN(index)) {
            console.log(`${list[index]} was deleted`);
            list.splice(index, 1);
        } else {
            console.log('Unknown Index');
        }
    }
    enter = prompt('What Do You Wanna Do?');
}
console.log('OK, YOU QUIT THE APP!')
