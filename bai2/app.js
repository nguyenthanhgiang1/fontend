let data = [{
        name: 'Matero',
        age: '30'
    },
    {
        name: 'Sarah',
        age: '30'
    },
    {
        name: 'Matero',
        age: '30'
    },
    {
        name: 'John',
        age: '30'
    },
    {
        name: 'Tim',
        age: '30'
    },
    {
        name: 'Sam',
        age: '30'
    },
    {
        name: 'Joey',
        age: '30'
    },
]
const info = document.querySelector('#info')
let details = data.map(function(item) {
    return '<div>' + item.name + ' ' + item.age + '</div>';
});
info.innerHTML = details.join('\n');