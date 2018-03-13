/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

//USERS

var User = function () {
    function User(id, firstname, surname) {
        _classCallCheck(this, User);

        this.id = uuidv4();
        this.firstname = firstname;
        this.surname = surname;
        this.tasks = [];
    }

    _createClass(User, [{
        key: "getFullName",
        value: function getFullName() {
            return this.firstname + " " + this.surname;
        }
    }, {
        key: "createSimpleTask",
        value: function createSimpleTask(title, status) {
            var task = new SimpleTask(title, status);
            this.tasks.push(task);

            return task;
        }
    }, {
        key: "deleteTask",
        value: function deleteTask(taskId) {
            if (task.id === taskId) {
                this.tasks.splice(i, 1);
            }
        }
    }]);

    return User;
}();

var Student = function (_User) {
    _inherits(Student, _User);

    function Student(id, firstname, surname, specialization) {
        _classCallCheck(this, Student);

        var _this = _possibleConstructorReturn(this, (Student.__proto__ || Object.getPrototypeOf(Student)).call(this, id, firstname, surname));

        _this.specialization = specialization;
        return _this;
    }

    _createClass(Student, [{
        key: "createHomeTask",
        value: function createHomeTask(title, status, description) {
            var task = new HomeTask(title, status, description);
            this.tasks.push(task);

            return task;
        }
    }]);

    return Student;
}(User);

var Developer = function (_Student) {
    _inherits(Developer, _Student);

    function Developer(id, firstname, surname, specialization, jobtitle) {
        _classCallCheck(this, Developer);

        var _this2 = _possibleConstructorReturn(this, (Developer.__proto__ || Object.getPrototypeOf(Developer)).call(this, id, firstname, surname, specialization));

        _this2.jobtitle = jobtitle;
        return _this2;
    }

    _createClass(Developer, [{
        key: "createProjectTask",
        value: function createProjectTask(title, status, description, deadlineDate) {
            var task = new ProjectTask(title, status, description, deadlineDate);
            this.tasks.push(task);

            return task;
        }
    }]);

    return Developer;
}(Student);

;

//TASKS


var SimpleTask = function SimpleTask(title, status, id) {
    _classCallCheck(this, SimpleTask);

    this.title = title;
    this.status = status;
    this.id = uuidv4();
};

;

var HomeTask = function (_SimpleTask) {
    _inherits(HomeTask, _SimpleTask);

    function HomeTask(title, status, description, id) {
        _classCallCheck(this, HomeTask);

        var _this3 = _possibleConstructorReturn(this, (HomeTask.__proto__ || Object.getPrototypeOf(HomeTask)).call(this, title, status));

        _this3.description = description;

        return _this3;
    }

    return HomeTask;
}(SimpleTask);

;

var ProjectTask = function (_HomeTask) {
    _inherits(ProjectTask, _HomeTask);

    function ProjectTask(title, status, description, deadlineDate, id) {
        _classCallCheck(this, ProjectTask);

        var _this4 = _possibleConstructorReturn(this, (ProjectTask.__proto__ || Object.getPrototypeOf(ProjectTask)).call(this, title, status, description));

        _this4.deadlineDate = deadlineDate;
        return _this4;
    }

    return ProjectTask;
}(HomeTask);

;

//Let the magic begin

function uuidv4() {
    return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, function (c) {
        return (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16);
    });
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

var form = document.getElementById("create-user"),
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
});

var users = [];
var worker = void 0;
var task = void 0;

addEvent(form, "submit", function (e) {
    e.preventDefault();
    var elements = this.elements;
    var username = elements.username.value;
    var surname = elements.surname.value;
    var type = elements.usertype.value;
    var taskType = document.getElementsByClassName("task active")[0].text;
    var id = this.id;

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

    var activeTab = document.getElementsByClassName("tab-pane active")[0],
        taskTitle = activeTab.getElementsByClassName("title")[0].value,
        taskStatus = activeTab.getElementsByClassName("status")[0].value,
        taskDescription = activeTab.getElementsByClassName("task-text")[0].value,
        taskDeadlineDate = document.getElementById("date").value;

    var newEl = document.createElement("li");
    newEl.id = "list-item";
    newEl.className = "complete";
    var text = void 0;

    switch (taskType.toUpperCase()) {
        case "SIMPLE TASK":
            task = worker.createSimpleTask(taskTitle, taskStatus);
            text = "Type: " + taskType + " Title : " + taskTitle + " Status: " + taskStatus;
            break;
        case "HOME TASK":
            task = worker.createHomeTask(taskTitle, taskStatus, taskDescription);
            text = "Type: " + taskType + " Title : " + taskTitle + " Status: " + taskStatus + " Description: " + taskDescription;
            break;
        case "PROJECT TASK":
            task = worker.createProjectTask(taskTitle, taskStatus, taskDescription, taskDeadlineDate);
            text = "Type: " + taskType + " Title : " + taskTitle + " Status: " + taskStatus + " Description: " + taskDescription + " Deadline: " + taskDeadlineDate;
            break;
    }

    var newText = document.createTextNode(text);
    newEl.appendChild(newText);
    elList.appendChild(newEl);
    newEl.id = task.id;
    var listItem = document.getElementById(task.id);
    var link = document.createElement('div');
    link.setAttribute('class', 'remove');
    listItem.appendChild(link);
});
document.querySelector('ol').addEventListener("click", function (e, user) {
    if (e.target && e.target.classList.contains('remove')) {

        var elParent = e.target.parentNode;
        var taskId = this.parentNode.id;
        var elGrandParent = elParent.parentNode;
        elGrandParent.removeChild(elParent);
        user.deleteTask(taskId);
    }
});

/***/ })
/******/ ]);