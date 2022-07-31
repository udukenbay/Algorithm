let words = ['banana', 'grapefruit', 'banana', 'grapefruit', 'banana', 'orange', 'banana']

const mySuperSort = (array) => {
    const result = [];
    const temp = array.reduce((acc, cur) => {
        acc[cur] = (acc[cur] || 0) + 1;
        return acc;
    }, {});
    
    let sortable = [];
    for(let el in temp) {
        sortable.push([el, temp[el]]);
    }

    sortable.sort(function(a, b) {
        return b[1] - a[1];
    });

    sortable.forEach(item => result.push(item[0]))
    return result;
}

console.log(mySuperSort(words));