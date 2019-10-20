const fs = require('fs');

let tasks = [];

const loadDB = () => {
    try {
        tasks = require('../db/data.json');
    } catch (error) {
        tasks = [];
    }
}

const saveDB = () => {
    let data = JSON.stringify(tasks);
    fs.writeFile('db/data.json', data, (err) => {
        if (err) throw new Error("no se pudo guardar");
    });
}

const create = (description) => {
    loadDB();
    let task = {
        description,
        completed: false
    }

    tasks.push(task);
    saveDB();
    return task;
}

const update = (description, completed = true) => {
    loadDB();
    let index = tasks.findIndex(task => task.description === description);
    if (index >= 0) {
        tasks[index].completed = completed;
        saveDB();
        return true;
    }
    return false;
}

const list = () => {
    loadDB();
    return tasks;
}

const remove = (description) => {
    loadDB();
    let index = tasks.findIndex(task => task.description === description);
    if (index >= 0) {
        tasks.splice(index, 1);
        saveDB();
        return true;
    }
    return false;
}

module.exports = {
    create,
    update,
    list,
    remove

}