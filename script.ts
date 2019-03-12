// Задание 1.1 Базовые типы

function getAllWorkers() {
    return [
        {name: 'Ivan', surname: 'Ivanov', available: true, salary: 1000, category: Category.Developer, id: 1},
        {name: 'Petro', surname: 'Petrov', available: true, salary: 1500, category: Category.Designer, id: 2},
        {name: 'Vasyl', surname: 'Vasyliev', available: false, salary: 1600, category: Category.Developer, id: 3},
        {name: 'Evgen', surname: 'Zhukov', available: true, salary: 1300, category: Category.ScrumMaster, id: 4}
    ];
};

function logFirstAvailable(workers = {name: string, surname: string, available: boolean} = getAllWorkers()): void {
    console.log(`В списке ${workers.length} сотрудника`);
    console.log(`Доступные работники:`);
    for (let worker of workers) {
        if(worker.available)
            console.log(`${worker.name} ${worker.surname}`);
    }
}

//logFirstAvailable();

// Задание 1.2 Enum

const enum Category {
    BusinessAnalyst,
    Developer,
    Designer,
    QA,
    ScrumMaster
}

function getWorkersNamesByCategory(category: Category = Category.Designer) {
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

//logWorkersNames(getWorkersNamesByCategory(Category.Developer));

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

function createCustomerID(name: string, id: number) {
	return `${id}. ${name}`;
}

const myID: string = createCustomerID('Ann', 10);
//console.log(myID);

let IdGenerator: (name: string, id: number) => string;
IdGenerator = createCustomerID;

//console.log(IdGenerator('Bogdan', 10));

// Задание 1.5 Необходимые, дополнительные и остаточные параметры

function createCustomer(name: string, age?: number, city?: string): void {
	const nameStr = `Name: ${name}`;
	const ageStr = `Age: ${age}`;
	const cityStr = `City: ${city}`;

	console.log(`${name ? nameStr : ''} ${age ? ageStr : ''} ${city ? cityStr : ''}`);
} 

//createCustomer('Roma', 24, 'Kiev');

//logWorkersNames(getWorkersNamesByCategory());

function сheckoutWorkers(customer: string, workersIDs: number[]) {
	console.log(`Customer: ${customer}`);
	const availWorkers = (getAllWorkers()
						 	.filter((worker)=> workersIDs.indexOf(worker.id) && worker.available === true))
						 .map((worker)=>return {name: worker.name, surname: worker.surname});
	return availWorkers;
}

//const myWorkers = сheckoutWorkers('Bob', [1,2,4]).forEach((worker)=>console.log(`Name: ${worker.name} SurName: ${worker.surname}`));