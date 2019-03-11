function getAllWorkers() {
    return [
        {name: 'Ivan', surname: 'Ivanov', available: true, salary: 1000},
        {name: 'Petro', surname: 'Petrov', available: true, salary: 1500},
        {name: 'Vasyl', surname: 'Vasyliev', available: false, salary: 1600},
        {name: 'Evgen', surname: 'Zhukov', available: true, salary: 1300}
    ];
};

function logFirstAvailable(workers = {name: string, surname: string, available: boolean, salary: number}): void {
    console.log(`В списке ${workers.length} сотрудника`);
    console.log(`Доступные работники:`);
    for (let worker of workers) {
        if(worker.available)
            console.log(`${worker.name} ${worker.surname}`);
    }
}

logFirstAvailable(getAllWorkers());