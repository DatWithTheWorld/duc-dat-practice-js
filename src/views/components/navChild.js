const navChild = (array) => {
    let listItems = "";
    for(let i = 0 ;i < array.length ;i++) {
    listItems += `<li>${array[i]}</li>`;
    
}
return listItems;

};

export default navChild;
