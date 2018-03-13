

//USERS

class User {
    constructor(id,firstname, surname){
        this.id = uuidv4();
        this.firstname = firstname;
        this.surname = surname;
        this.tasks = [];
    }

    getFullName() {
        return (this.firstname + " " + this.surname);
    }

    createSimpleTask(title, status) {
        let task = new SimpleTask(title, status);
        this.tasks.push(task);

        return task;
    }

    deleteTask(taskId) {
        if( task.id === taskId ) {
            this.tasks.splice(i, 1);
        }
    }
}
class Student extends User {
    constructor(id, firstname, surname, specialization) {
        super(id,firstname, surname);
        this.specialization = specialization;
    }

    createHomeTask(title, status, description) {
        let task = new HomeTask(title, status, description);
        this.tasks.push(task);

        return task;
    }
}

class Developer extends Student {
    constructor(id, firstname, surname, specialization, jobtitle) {
        super(id, firstname, surname, specialization);
        this.jobtitle = jobtitle;
    }

    createProjectTask(title, status, description, deadlineDate) {
        let task = new ProjectTask(title, status, description, deadlineDate);
        this.tasks.push(task);

        return task;
    }
};


//TASKS


class SimpleTask {
    constructor(title, status, id) {
        this.title = title;
        this.status = status;
        this.id = uuidv4();
    }
};

class HomeTask extends SimpleTask {
    constructor(title, status, description, id) {
        super(title, status);
        this.description = description;

    }
};


class ProjectTask extends HomeTask {
    constructor(title, status, description, deadlineDate, id) {
        super(title, status, description);
        this.deadlineDate = deadlineDate;
    }
};


//Let the magic begin

function uuidv4() {
    return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
        (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
    )
};

function addEvent(el, event, callback) {
    if ("addEventListener" in el) {
        el.addEventListener(event, callback, false);
    } else {
        el["e" + event + callback] = callback;
        el[event + callback] = function () {
            el["e" + event + callback](window.event);
        };
        e.attachEvent("on" + event, el[event + callback]);

    }
};

const form = document.getElementById("create-user"),
    userTypeSelector = document.getElementById("user-type"),
    elList = document.getElementById("task-list");

addEvent(userTypeSelector, "change", function () {

        if (this.value === "User") {
            document.getElementById("hometask").classList.remove("active");
            document.getElementById("projecttask").classList.remove("active");
            document.getElementById("hometask").className += " disabled";
            document.getElementById("projecttask").className += " disabled";
            document.getElementById("simpletask").className += " active";
        } else if (this.value === "Student") {
            document.getElementById("projecttask").className += " disabled";
            document.getElementById("projecttask").classList.remove("active");
            document.getElementById("hometask").classList.remove("disabled");
        } else if (this.value === "Developer") {
            document.getElementById("hometask").classList.remove("disabled");
            document.getElementById("projecttask").classList.remove("disabled");
        }
    }
);

let users = [];
let worker;
let task;


addEvent(form, "submit", function (e) {
    e.preventDefault();
    let elements = this.elements;
    let username = elements.username.value;
    let surname = elements.surname.value;
    let type = elements.usertype.value;
    let taskType = document.getElementsByClassName("task active")[0].text;
    let id = this.id;

    switch (type) {
        case "User":
            worker = new User(id, username, surname);
            console.log(worker);
            break;
        case "Student":
            worker = new Student(id, username, surname, elements.specialization.value);
            console.log(worker);
            break;
        case "Developer":
            worker = new Developer(id, username, surname, elements.specialization.value, elements.jobtitle);
            console.log(worker);
            break;
    }


    users.push(worker);


    let activeTab = document.getElementsByClassName("tab-pane active")[0],
        taskTitle = activeTab.getElementsByClassName("title")[0].value,
        taskStatus = activeTab.getElementsByClassName("status")[0].value,
        taskDescription = activeTab.getElementsByClassName("task-text")[0].value,
        taskDeadlineDate = document.getElementById("date").value;


    let newEl = document.createElement("li");
    newEl.id = "list-item";
    newEl.className = "complete";
    let text;



    switch (taskType.toUpperCase()) {
        case "SIMPLE TASK":
            task = worker.createSimpleTask(taskTitle, taskStatus);
            text = "Type: " + taskType + " Title : " + taskTitle + " Status: " + taskStatus;
            break;
        case "HOME TASK":
            task = worker.createHomeTask(taskTitle, taskStatus, taskDescription);
            text = "Type: " + taskType + " Title : " + taskTitle + " Status: " + taskStatus +" Description: " + taskDescription;
            break;
        case "PROJECT TASK":
            task = worker.createProjectTask(taskTitle, taskStatus, taskDescription, taskDeadlineDate);
            text = "Type: " + taskType + " Title : " + taskTitle + " Status: " + taskStatus +" Description: " + taskDescription + " Deadline: " + taskDeadlineDate;
            break;
    }

    let newText = document.createTextNode(text);
    newEl.appendChild(newText);
    elList.appendChild(newEl);
    newEl.id = task.id;
    let listItem = document.getElementById(task.id);
    let link = document.createElement('div');
    link.setAttribute('class', 'remove');
    listItem.appendChild(link);

});
document.querySelector('ol').addEventListener("click", function(e, user) {
    if(e.target && e.target.classList.contains('remove')) {

        let elParent = e.target.parentNode;
        let taskId = this.parentNode.id;
        let elGrandParent = elParent.parentNode;
        elGrandParent.removeChild(elParent);
        user.deleteTask(taskId);
    }
})





