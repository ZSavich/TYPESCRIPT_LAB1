// Задание 1.1 Базовые типы
function getAllWorkers() {
    return [
        { name: 'Ivan', surname: 'Ivanov', available: true, salary: 1000, category: 'Developer', id: 1 },
        { name: 'Petro', surname: 'Petrov', available: true, salary: 1500, category: 'Developer', id: 2 },
        { name: 'Vasyl', surname: 'Vasyliev', available: false, salary: 1600, category: 'QA', id: 3 },
        { name: 'Evgen', surname: 'Zhukov', available: true, salary: 1300, category: 'ScrumMaster', id: 4 }
    ];
}
;
function logFirstAvailable(workers) {
    if (workers === void 0) { workers = { name: string, surname: string, available: boolean }; }
    console.log("\u0412 \u0441\u043F\u0438\u0441\u043A\u0435 " + workers.length + " \u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0430");
    console.log("\u0414\u043E\u0441\u0442\u0443\u043F\u043D\u044B\u0435 \u0440\u0430\u0431\u043E\u0442\u043D\u0438\u043A\u0438:");
    for (var _i = 0, workers_1 = workers; _i < workers_1.length; _i++) {
        var worker = workers_1[_i];
        if (worker.available)
            console.log(worker.name + " " + worker.surname);
    }
}
function getWorkersNamesByCategory(category) {
    var workers = getAllWorkers();
    var ourWorkers = [];
    for (var _i = 0, workers_2 = workers; _i < workers_2.length; _i++) {
        var worker = workers_2[_i];
        worker.category === category ? ourWorkers.push(worker.surname) : '';
    }
    return ourWorkers;
}
function logWorkersNames(workers) {
    console.log(workers.join(', '));
}
//logWorkersNames(getWorkersNamesByCategory('Developer'));
// Задание 1.3 Стрелочные функции
getAllWorkers().forEach(function (worker) {
    worker.category === "Developer" ? console.log(worker.name + " " + worker.surname) : '';
});
function getWorkerByID(id) {
    var worker = getAllWorkers().find(function (worker) { return worker.id === id; });
    return { name: worker.name, surname: worker.surname, salary: worker.salary };
}
console.log(getWorkerByID(2));
