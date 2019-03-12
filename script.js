// Задание 1.1 Базовые типы
function getAllWorkers() {
    return [
        { name: 'Ivan', surname: 'Ivanov', available: true, salary: 1000, category: 1 /* Developer */, id: 1 },
        { name: 'Petro', surname: 'Petrov', available: true, salary: 1500, category: 2 /* Designer */, id: 2 },
        { name: 'Vasyl', surname: 'Vasyliev', available: false, salary: 1600, category: 1 /* Developer */, id: 3 },
        { name: 'Evgen', surname: 'Zhukov', available: true, salary: 1300, category: 4 /* ScrumMaster */, id: 4 }
    ];
}
;
function logFirstAvailable(workers) {
    if (workers === void 0) { workers = (_a = getAllWorkers(), string = _a.name, string = _a.surname, boolean = _a.available, _a); }
    var _a;
    console.log("\u0412 \u0441\u043F\u0438\u0441\u043A\u0435 " + workers.length + " \u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0430");
    console.log("\u0414\u043E\u0441\u0442\u0443\u043F\u043D\u044B\u0435 \u0440\u0430\u0431\u043E\u0442\u043D\u0438\u043A\u0438:");
    for (var _i = 0, workers_1 = workers; _i < workers_1.length; _i++) {
        var worker = workers_1[_i];
        if (worker.available)
            console.log(worker.name + " " + worker.surname);
    }
}
function getWorkersNamesByCategory(category) {
    if (category === void 0) { category = 2 /* Designer */; }
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
//logWorkersNames(getWorkersNamesByCategory(Category.Developer));
// Задание 1.3 Стрелочные функции
/*getAllWorkers().forEach((worker)=> {
    worker.category === "Developer" ? console.log(`${worker.name} ${worker.surname}`) : '';
});*/
function getWorkerByID(id) {
    var worker = getAllWorkers().find(function (worker) { return worker.id === id; });
    return { name: worker.name, surname: worker.surname, salary: worker.salary };
}
//console.log(getWorkerByID(2));
// Задание 1.4 Типы функций
function createCustomerID(name, id) {
    return id + ". " + name;
}
var myID = createCustomerID('Ann', 10);
//console.log(myID);
var IdGenerator;
IdGenerator = createCustomerID;
//console.log(IdGenerator('Bogdan', 10));
// Задание 1.5 Необходимые, дополнительные и остаточные параметры
function createCustomer(name, age, city) {
    var nameStr = "Name: " + name;
    var ageStr = "Age: " + age;
    var cityStr = "City: " + city;
    console.log((name ? nameStr : '') + " " + (age ? ageStr : '') + " " + (city ? cityStr : ''));
}
//createCustomer('Roma', 24, 'Kiev');
//logWorkersNames(getWorkersNamesByCategory());
function сheckoutWorkers(customer, workersIDs) {
    console.log("Customer: " + customer);
    var availWorkers = (getAllWorkers()
        .filter(function (worker) { return workersIDs.indexOf(worker.id) && worker.available === true; }))
        .map(function (worker) { return { name: worker.name, surname: worker.surname }; });
    return availWorkers;
}
var myWorkers = сheckoutWorkers('Bob', [1, 2, 4]).forEach(function (worker) { return console.log("Name: " + worker.name + " SurName: " + worker.surname); });
