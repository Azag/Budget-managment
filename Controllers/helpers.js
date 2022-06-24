exports.findIndexById = (db, id) => {
    const index = db.findIndex(el => id == el.id);
    if (index === -1) {
        console.error('Invalid index');
    }
    return index;
}