// Задание 1.1 Базовые типы
function getAllWorkers() {
    return [
        { name: 'Ivan', surname: 'Ivanov', available: true, salary: 1000, category: 'Developer' },
        { name: 'Petro', surname: 'Petrov', available: true, salary: 1500, category: 'Developer' },
        { name: 'Vasyl', surname: 'Vasyliev', available: false, salary: 1600, category: 'QA' },
        { name: 'Evgen', surname: 'Zhukov', available: true, salary: 1300, category: 'ScrumMaster' }
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
logWorkersNames(getWorkersNamesByCategory('Developer'));
