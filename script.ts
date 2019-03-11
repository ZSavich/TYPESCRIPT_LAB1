// Задание 1.1 Базовые типы

function getAllWorkers() {
    return [
        {name: 'Ivan', surname: 'Ivanov', available: true, salary: 1000, category: 'Developer', id: 1},
        {name: 'Petro', surname: 'Petrov', available: true, salary: 1500, category: 'Developer', id: 2},
        {name: 'Vasyl', surname: 'Vasyliev', available: false, salary: 1600, category: 'QA', id: 3},
        {name: 'Evgen', surname: 'Zhukov', available: true, salary: 1300, category: 'ScrumMaster', id: 4}
    ];
};

function logFirstAvailable(workers = {name: string, surname: string, available: boolean}): void {
    console.log(`В списке ${workers.length} сотрудника`);
    console.log(`Доступные работники:`);
    for (let worker of workers) {
        if(worker.available)
            console.log(`${worker.name} ${worker.surname}`);
    }
}

//logFirstAvailable(getAllWorkers());

// Задание 1.2 Enum

const enum Category {
    BusinessAnalyst,
    Developer,
    Designer,
    QA,
    ScrumMaster
}

function getWorkersNamesByCategory(category: string) {
    const workers = getAllWorkers();
    let ourWorkers: Array<string> = [];
    for (let worker of workers) {
        worker.category === category ? ourWorkers.push(worker.surname) : '';
    }
    return ourWorkers;
}

function logWorkersNames(workers: string []): void {
    console.log(workers.join(', '));
}

//logWorkersNames(getWorkersNamesByCategory('Developer'));

// Задание 1.3 Стрелочные функции

/*getAllWorkers().forEach((worker)=> {
    worker.category === "Developer" ? console.log(`${worker.name} ${worker.surname}`) : '';
});*/

function getWorkerByID(id: number) {
    const worker = getAllWorkers().find((worker)=> worker.id === id);
    return {name: worker.name, surname: worker.surname, salary: worker.salary};
}

//console.log(getWorkerByID(2));

// Задание 1.4 Типы функций

