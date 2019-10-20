//const argv = require('yargs').argv;
const argv = require('./config/yargs').argv;
const toDo = require('./ToDo/ToDo');
const colors = require('colors');

let comando = argv._[0];

switch (comando) {
    case 'crear':
        let task = toDo.create(argv.description);
        if(task){
            console.log("Tarea: ",argv.description +" creada".green );
        }
        break;
    case 'listar':
        let = tasks = toDo.list();
        console.log("list");
        for (let task of tasks) {
            console.log('=======Por hacer======'.green);
            console.log(task.description.blue);
            console.log('Estado: ', task.completed);
            console.log('======================'.green)
        }
        break;
    case 'actualizar':
        let updated = toDo.update(argv.description, argv.completed);
        if(updated){
            console.log("Tarea: ",argv.description +" actualizada".blue );
        }else{
            console.log("Tarea no encontrada".red );
        }
        break;
    case 'borrar':
        let removed = toDo.remove(argv.description);
        if(removed){
            console.log("Tarea: ",argv.description +" eliminada".red );
        }else{
            console.log("Tarea no encontrada".red );
        }
        break;
    default:
        console.log('comando desconocido')
        break;
}