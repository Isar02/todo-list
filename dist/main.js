/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_UI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/UI */ \"./src/modules/UI.js\");\n\n\ndocument.addEventListener('DOMContentLoaded', _modules_UI__WEBPACK_IMPORTED_MODULE_0__[\"default\"].loadHomepage)\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/modules/Project.js":
/*!********************************!*\
  !*** ./src/modules/Project.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Project)\n/* harmony export */ });\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module 'date-fns'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n\n\nclass Project {\n    constructor(name) {\n        this.name = name\n        this.tasks = []\n    }\n\n    setName(name) {\n        this.name = name\n    }\n\n    getName() {\n        return this.name\n    }\n\n    setTasks(tasks) {\n        this.tasks = tasks\n    }\n\n    getTasks() {\n        return this.tasks\n    }\n\n    getTask(taskName) {\n        return this.tasks.find((task) => task.getName() === taskName)\n    }\n\n    contains(taskName) {\n        return this.tasks.some((task) => task.getName() === taskName)\n    }\n\n    addTask(newTask) {\n        if (this.tasks.find((task) => task.getName() === newTask.name)) return\n        this.tasks.push(newTask)\n    }\n\n    deleteTask(taskName) {\n        this.tasks = this.tasks.filter((task) => task.name !== taskName)\n    }\n\n    getTasksToday() {\n        return this.tasks.filter((task) => {\n            const taskDate = new Date(task.getDateFormatted())\n            return Object(function webpackMissingModule() { var e = new Error(\"Cannot find module 'date-fns'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(Object(function webpackMissingModule() { var e = new Error(\"Cannot find module 'date-fns'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(taskDate))\n        })\n    }\n\n    getTasksThisWeek() {\n        return this.tasks.filter((task) => {\n            const taskDate = new Date(task.getDateFormatted())\n            return Object(function webpackMissingModule() { var e = new Error(\"Cannot find module 'date-fns'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(Object(function webpackMissingModule() { var e = new Error(\"Cannot find module 'date-fns'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(Object(function webpackMissingModule() { var e = new Error(\"Cannot find module 'date-fns'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(taskDate), 1))\n        })\n    }\n}\n\n//# sourceURL=webpack://todo-list/./src/modules/Project.js?");

/***/ }),

/***/ "./src/modules/Storage.js":
/*!********************************!*\
  !*** ./src/modules/Storage.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Storage)\n/* harmony export */ });\n/* harmony import */ var _Project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Project */ \"./src/modules/Project.js\");\n/* harmony import */ var _Task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Task */ \"./src/modules/Task.js\");\n/* harmony import */ var _TodoList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TodoList */ \"./src/modules/TodoList.js\");\n\n\n\n\nclass Storage {\n    static saveTodoList(data) {\n        localStorage.setItem('todoList', JSON.stringify(data))\n    }\n\n    static getTodoList() {\n        const todoList = Object.assign(\n            new _TodoList__WEBPACK_IMPORTED_MODULE_2__[\"default\"](),\n            JSON.parse(localStorage.getItem('todoList'))\n        )\n\n        todoList.setProjects(\n            todoList\n                .getProjects()\n                .map((project) => Object.assign(new _Project__WEBPACK_IMPORTED_MODULE_0__[\"default\"](), project))\n        )\n\n        todoList\n            .getProjects()\n            .forEach((project) =>\n                project.setTasks(\n                    project.getTasks().map((task) => Object.assign(new _Task__WEBPACK_IMPORTED_MODULE_1__[\"default\"](), task))\n                )\n            )\n\n        return todoList\n    }\n\n    static addProject(project) {\n        const todoList = Storage.getTodoList()\n        todoList.addProject(project)\n        Storage.saveTodoList(todoList)\n    }\n\n    static deleteProject(projectName) {\n        const todoList = Storage.getTodoList()\n        todoList.deleteProject(projectName)\n        Storage.saveTodoList(todoList)\n    }\n\n    static addTask(projectName, task) {\n        const todoList = Storage.getTodoList()\n        todoList.getProject(projectName).addTask(task)\n        Storage.saveTodoList(todoList)\n    }\n\n    static deleteTask(projectName, taskName) {\n        const todoList = Storage.getTodoList()\n        todoList.getProject(projectName).deleteTask(taskName)\n        Storage.saveTodoList(todoList)\n    }\n\n    static renameTask(projectName, taskName, newTaskName) {\n        const todoList = Storage.getTodoList()\n        todoList.getProject(projectName).getTask(taskName).setName(newTaskName)\n        Storage.saveTodoList(todoList)\n    }\n\n    static setTaskDate(projectName, taskName, newDueDate) {\n        const todoList = Storage.getTodoList()\n        todoList.getProject(projectName).getTask(taskName).setDate(newDueDate)\n        Storage.saveTodoList(todoList)\n    }\n\n    static updateTodayProject() {\n        const todoList = Storage.getTodoList()\n        todoList.updateTodayProject()\n        Storage.saveTodoList(todoList)\n    }\n\n    static updateWeekProject() {\n        const todoList = Storage.getTodoList()\n        todoList.updateWeekProject()\n        Storage.saveTodoList(todoList)\n    }\n}\n\n//# sourceURL=webpack://todo-list/./src/modules/Storage.js?");

/***/ }),

/***/ "./src/modules/Task.js":
/*!*****************************!*\
  !*** ./src/modules/Task.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Task)\n/* harmony export */ });\nclass Task {\n    constructor(name, dueDate = 'No date') {\n        this.name = name\n        this.dueDate = dueDate\n    }\n\n    setName(name) {\n        this.name = name\n    }\n\n    getName() {\n        return this.name\n    }\n\n    setDate(dueDate) {\n        this.dueDate = dueDate\n    }\n\n    getDate() {\n        return this.dueDate\n    }\n\n    getDateFormatted() {\n        const day = this.dueDate.split('/')[0]\n        const month = this.dueDate.split('/')[1]\n        const year = this.dueDate.split('/')[2]\n        return `${month}/${day}/${year}`\n    }\n}\n\n//# sourceURL=webpack://todo-list/./src/modules/Task.js?");

/***/ }),

/***/ "./src/modules/TodoList.js":
/*!*********************************!*\
  !*** ./src/modules/TodoList.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ TodoList)\n/* harmony export */ });\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module 'date-fns'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n/* harmony import */ var _Project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Project */ \"./src/modules/Project.js\");\n/* harmony import */ var _Task__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Task */ \"./src/modules/Task.js\");\n\n\n\n\nclass TodoList {\n    constructor() {\n        this.projects = []\n        this.projects.push(new _Project__WEBPACK_IMPORTED_MODULE_1__[\"default\"]('Inbox'))\n        this.projects.push(new _Project__WEBPACK_IMPORTED_MODULE_1__[\"default\"]('Today'))\n        this.projects.push(new _Project__WEBPACK_IMPORTED_MODULE_1__[\"default\"]('This week'))\n    }\n\n    setProjects(projects) {\n        this.projects = projects\n    }\n\n    getProjects() {\n        return this.projects\n    }\n\n    getProject(projectName) {\n        return this.projects.find((project) => project.getName() === projectName)\n    }\n\n    contains(projectName) {\n        return this.projects.some((project) => project.getName() === projectName)\n    }\n\n    addProject(newProject) {\n        if (this.projects.find((project) => project.name === newProject.name))\n            return\n        this.projects.push(newProject)\n    }\n\n    deleteProject(projectName) {\n        const projectToDelete = this.projects.find(\n            (project) => project.getName() === projectName\n        )\n        this.projects.splice(this.projects.indexOf(projectToDelete), 1)\n    }\n\n    updateTodayProject() {\n        this.getProject('Today').tasks = []\n\n        this.projects.forEach((project) => {\n            if (project.getName() === 'Today' || project.getName() === 'This week')\n                return\n\n            const todayTasks = project.getTasksToday()\n            todayTasks.forEach((task) => {\n                const taskName = `${task.getName()} (${project.getName()})`\n                this.getProject('Today').addTask(new _Task__WEBPACK_IMPORTED_MODULE_2__[\"default\"](taskName, task.getDate()))\n            })\n        })\n    }\n\n    updateWeekProject() {\n        this.getProject('This week').tasks = []\n\n        this.projects.forEach((project) => {\n            if (project.getName() === 'Today' || project.getName() === 'This week')\n                return\n\n            const weekTasks = project.getTasksThisWeek()\n            weekTasks.forEach((task) => {\n                const taskName = `${task.getName()} (${project.getName()})`\n                this.getProject('This week').addTask(new _Task__WEBPACK_IMPORTED_MODULE_2__[\"default\"](taskName, task.getDate()))\n            })\n        })\n\n        this.getProject('This week').setTasks(\n            this.getProject('This week')\n                .getTasks()\n                .sort((taskA, taskB) =>\n                    Object(function webpackMissingModule() { var e = new Error(\"Cannot find module 'date-fns'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(\n                        Object(function webpackMissingModule() { var e = new Error(\"Cannot find module 'date-fns'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(new Date(taskA.getDateFormatted())),\n                        Object(function webpackMissingModule() { var e = new Error(\"Cannot find module 'date-fns'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(new Date(taskB.getDateFormatted()))\n                    )\n                )\n        )\n    }\n}\n\n//# sourceURL=webpack://todo-list/./src/modules/TodoList.js?");

/***/ }),

/***/ "./src/modules/UI.js":
/*!***************************!*\
  !*** ./src/modules/UI.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ UI)\n/* harmony export */ });\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module 'date-fns'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n/* harmony import */ var _Storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Storage */ \"./src/modules/Storage.js\");\n/* harmony import */ var _Project__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Project */ \"./src/modules/Project.js\");\n/* harmony import */ var _Task__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Task */ \"./src/modules/Task.js\");\n\n\n\n\n\nclass UI {\n    // LOADING CONTENT\n\n    static loadHomepage() {\n        UI.loadProjects()\n        UI.initProjectButtons()\n        UI.openProject('Inbox', document.getElementById('button-inbox-projects'))\n        document.addEventListener('keydown', UI.handleKeyboardInput)\n    }\n\n    static loadProjects() {\n        _Storage__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getTodoList()\n            .getProjects()\n            .forEach((project) => {\n                if (\n                    project.name !== 'Inbox' &&\n                    project.name !== 'Today' &&\n                    project.name !== 'This week'\n                ) {\n                    UI.createProject(project.name)\n                }\n            })\n\n        UI.initAddProjectButtons()\n    }\n\n    static loadTasks(projectName) {\n        _Storage__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getTodoList()\n            .getProject(projectName)\n            .getTasks()\n            .forEach((task) => UI.createTask(task.name, task.dueDate))\n\n        if (projectName !== 'Today' && projectName !== 'This week') {\n            UI.initAddTaskButtons()\n        }\n    }\n\n    static loadProjectContent(projectName) {\n        const projectPreview = document.getElementById('project-preview')\n        projectPreview.innerHTML = `\n        <h1 id=\"project-name\">${projectName}</h1>\n        <div class=\"tasks-list\" id=\"tasks-list\"></div>`\n\n        if (projectName !== 'Today' && projectName !== 'This week') {\n            projectPreview.innerHTML += `\n        <button class=\"button-add-task\" id=\"button-add-task\">\n          <i class=\"fas fa-plus\"></i>\n          Add Task\n        </button>\n        <div class=\"add-task-popup\" id=\"add-task-popup\">\n          <input\n            class=\"input-add-task-popup\"\n            id=\"input-add-task-popup\"\n            type=\"text\"\n          />\n          <div class=\"add-task-popup-buttons\">\n            <button class=\"button-add-task-popup\" id=\"button-add-task-popup\">\n              Add\n            </button>\n            <button\n              class=\"button-cancel-task-popup\"\n              id=\"button-cancel-task-popup\"\n            >\n              Cancel\n            </button>\n          </div>\n        </div>`\n        }\n\n        UI.loadTasks(projectName)\n    }\n\n    // CREATING CONTENT\n\n    static createProject(name) {\n        const userProjects = document.getElementById('projects-list')\n        userProjects.innerHTML += ` \n      <button class=\"button-project\" data-project-button>\n        <div class=\"left-project-panel\">\n          <i class=\"fas fa-tasks\"></i>\n          <span>${name}</span>\n        </div>\n        <div class=\"right-project-panel\">\n          <i class=\"fas fa-times\"></i>\n        </div>\n      </button>`\n\n        UI.initProjectButtons()\n    }\n\n    static createTask(name, dueDate) {\n        const tasksList = document.getElementById('tasks-list')\n        tasksList.innerHTML += `\n      <button class=\"button-task\" data-task-button>\n        <div class=\"left-task-panel\">\n          <i class=\"far fa-circle\"></i>\n          <p class=\"task-content\">${name}</p>\n          <input type=\"text\" class=\"input-task-name\" data-input-task-name>\n        </div>\n        <div class=\"right-task-panel\">\n          <p class=\"due-date\" id=\"due-date\">${dueDate}</p>\n          <input type=\"date\" class=\"input-due-date\" data-input-due-date>\n          <i class=\"fas fa-times\"></i>\n        </div>\n      </button>`\n\n        UI.initTaskButtons()\n    }\n\n    static clear() {\n        UI.clearProjectPreview()\n        UI.clearProjects()\n        UI.clearTasks()\n    }\n\n    static clearProjectPreview() {\n        const projectPreview = document.getElementById('project-preview')\n        projectPreview.textContent = ''\n    }\n\n    static clearProjects() {\n        const projectsList = document.getElementById('projects-list')\n        projectsList.textContent = ''\n    }\n\n    static clearTasks() {\n        const tasksList = document.getElementById('tasks-list')\n        tasksList.textContent = ''\n    }\n\n    static closeAllPopups() {\n        UI.closeAddProjectPopup()\n        if (document.getElementById('button-add-task')) {\n            UI.closeAddTaskPopup()\n        }\n        if (\n            document.getElementById('tasks-list') &&\n            document.getElementById('tasks-list').innerHTML !== ''\n        ) {\n            UI.closeAllInputs()\n        }\n    }\n\n    static closeAllInputs() {\n        const taskButtons = document.querySelectorAll('[data-task-button]')\n\n        taskButtons.forEach((button) => {\n            UI.closeRenameInput(button)\n            UI.closeSetDateInput(button)\n        })\n    }\n\n    static handleKeyboardInput(e) {\n        if (e.key === 'Escape') UI.closeAllPopups()\n    }\n\n    // PROJECT ADD EVENT LISTENERS\n\n    static initAddProjectButtons() {\n        const addProjectButton = document.getElementById('button-add-project')\n        const addProjectPopupButton = document.getElementById(\n            'button-add-project-popup'\n        )\n        const cancelProjectPopupButton = document.getElementById(\n            'button-cancel-project-popup'\n        )\n        const addProjectPopupInput = document.getElementById(\n            'input-add-project-popup'\n        )\n\n        addProjectButton.addEventListener('click', UI.openAddProjectPopup)\n        addProjectPopupButton.addEventListener('click', UI.addProject)\n        cancelProjectPopupButton.addEventListener('click', UI.closeAddProjectPopup)\n        addProjectPopupInput.addEventListener(\n            'keypress',\n            UI.handleAddProjectPopupInput\n        )\n    }\n\n    static openAddProjectPopup() {\n        const addProjectPopup = document.getElementById('add-project-popup')\n        const addProjectButton = document.getElementById('button-add-project')\n\n        UI.closeAllPopups()\n        addProjectPopup.classList.add('active')\n        addProjectButton.classList.add('active')\n    }\n\n    static closeAddProjectPopup() {\n        const addProjectPopup = document.getElementById('add-project-popup')\n        const addProjectButton = document.getElementById('button-add-project')\n        const addProjectPopupInput = document.getElementById(\n            'input-add-project-popup'\n        )\n\n        addProjectPopup.classList.remove('active')\n        addProjectButton.classList.remove('active')\n        addProjectPopupInput.value = ''\n    }\n\n    static addProject() {\n        const addProjectPopupInput = document.getElementById(\n            'input-add-project-popup'\n        )\n        const projectName = addProjectPopupInput.value\n\n        if (projectName === '') {\n            alert(\"Project name can't be empty\")\n            return\n        }\n\n        if (_Storage__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getTodoList().contains(projectName)) {\n            addProjectPopupInput.value = ''\n            alert('Project names must be different')\n            return\n        }\n\n        _Storage__WEBPACK_IMPORTED_MODULE_1__[\"default\"].addProject(new _Project__WEBPACK_IMPORTED_MODULE_2__[\"default\"](projectName))\n        UI.createProject(projectName)\n        UI.closeAddProjectPopup()\n    }\n\n    static handleAddProjectPopupInput(e) {\n        if (e.key === 'Enter') UI.addProject()\n    }\n\n    // PROJECT EVENT LISTENERS\n\n    static initProjectButtons() {\n        const inboxProjectsButton = document.getElementById('button-inbox-projects')\n        const todayProjectsButton = document.getElementById('button-today-projects')\n        const weekProjectsButton = document.getElementById('button-week-projects')\n        const projectButtons = document.querySelectorAll('[data-project-button]')\n        const openNavButton = document.getElementById('button-open-nav')\n\n        inboxProjectsButton.addEventListener('click', UI.openInboxTasks)\n        todayProjectsButton.addEventListener('click', UI.openTodayTasks)\n        weekProjectsButton.addEventListener('click', UI.openWeekTasks)\n        projectButtons.forEach((projectButton) =>\n            projectButton.addEventListener('click', UI.handleProjectButton)\n        )\n        openNavButton.addEventListener('click', UI.openNav)\n    }\n\n    static openInboxTasks() {\n        UI.openProject('Inbox', this)\n    }\n\n    static openTodayTasks() {\n        _Storage__WEBPACK_IMPORTED_MODULE_1__[\"default\"].updateTodayProject()\n        UI.openProject('Today', this)\n    }\n\n    static openWeekTasks() {\n        _Storage__WEBPACK_IMPORTED_MODULE_1__[\"default\"].updateWeekProject()\n        UI.openProject('This week', this)\n    }\n\n    static handleProjectButton(e) {\n        const projectName = this.children[0].children[1].textContent\n\n        if (e.target.classList.contains('fa-times')) {\n            UI.deleteProject(projectName, this)\n            return\n        }\n\n        UI.openProject(projectName, this)\n    }\n\n    static openProject(projectName, projectButton) {\n        const defaultProjectButtons = document.querySelectorAll(\n            '.button-default-project'\n        )\n        const projectButtons = document.querySelectorAll('.button-project')\n        const buttons = [...defaultProjectButtons, ...projectButtons]\n\n        buttons.forEach((button) => button.classList.remove('active'))\n        projectButton.classList.add('active')\n        UI.closeAddProjectPopup()\n        UI.loadProjectContent(projectName)\n    }\n\n    static deleteProject(projectName, button) {\n        if (button.classList.contains('active')) UI.clearProjectPreview()\n        _Storage__WEBPACK_IMPORTED_MODULE_1__[\"default\"].deleteProject(projectName)\n        UI.clearProjects()\n        UI.loadProjects()\n    }\n\n    static openNav() {\n        const nav = document.getElementById('nav')\n\n        UI.closeAllPopups()\n        nav.classList.toggle('active')\n    }\n\n    // ADD TASK EVENT LISTENERS\n\n    static initAddTaskButtons() {\n        const addTaskButton = document.getElementById('button-add-task')\n        const addTaskPopupButton = document.getElementById('button-add-task-popup')\n        const cancelTaskPopupButton = document.getElementById(\n            'button-cancel-task-popup'\n        )\n        const addTaskPopupInput = document.getElementById('input-add-task-popup')\n\n        addTaskButton.addEventListener('click', UI.openAddTaskPopup)\n        addTaskPopupButton.addEventListener('click', UI.addTask)\n        cancelTaskPopupButton.addEventListener('click', UI.closeAddTaskPopup)\n        addTaskPopupInput.addEventListener('keypress', UI.handleAddTaskPopupInput)\n    }\n\n    static openAddTaskPopup() {\n        const addTaskPopup = document.getElementById('add-task-popup')\n        const addTaskButton = document.getElementById('button-add-task')\n\n        UI.closeAllPopups()\n        addTaskPopup.classList.add('active')\n        addTaskButton.classList.add('active')\n    }\n\n    static closeAddTaskPopup() {\n        const addTaskPopup = document.getElementById('add-task-popup')\n        const addTaskButton = document.getElementById('button-add-task')\n        const addTaskInput = document.getElementById('input-add-task-popup')\n\n        addTaskPopup.classList.remove('active')\n        addTaskButton.classList.remove('active')\n        addTaskInput.value = ''\n    }\n\n    static addTask() {\n        const projectName = document.getElementById('project-name').textContent\n        const addTaskPopupInput = document.getElementById('input-add-task-popup')\n        const taskName = addTaskPopupInput.value\n\n        if (taskName === '') {\n            alert(\"Task name can't be empty\")\n            return\n        }\n        if (_Storage__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getTodoList().getProject(projectName).contains(taskName)) {\n            alert('Task names must be different')\n            addTaskPopupInput.value = ''\n            return\n        }\n\n        _Storage__WEBPACK_IMPORTED_MODULE_1__[\"default\"].addTask(projectName, new _Task__WEBPACK_IMPORTED_MODULE_3__[\"default\"](taskName))\n        UI.createTask(taskName, 'No date')\n        UI.closeAddTaskPopup()\n    }\n\n    static handleAddTaskPopupInput(e) {\n        if (e.key === 'Enter') UI.addTask()\n    }\n\n    // TASK EVENT LISTENERS\n\n    static initTaskButtons() {\n        const taskButtons = document.querySelectorAll('[data-task-button]')\n        const taskNameInputs = document.querySelectorAll('[data-input-task-name')\n        const dueDateInputs = document.querySelectorAll('[data-input-due-date')\n\n        taskButtons.forEach((taskButton) =>\n            taskButton.addEventListener('click', UI.handleTaskButton)\n        )\n        taskNameInputs.forEach((taskNameInput) =>\n            taskNameInput.addEventListener('keypress', UI.renameTask)\n        )\n        dueDateInputs.forEach((dueDateInput) =>\n            dueDateInput.addEventListener('change', UI.setTaskDate)\n        )\n    }\n\n    static handleTaskButton(e) {\n        if (e.target.classList.contains('fa-circle')) {\n            UI.setTaskCompleted(this)\n            return\n        }\n        if (e.target.classList.contains('fa-times')) {\n            UI.deleteTask(this)\n            return\n        }\n        if (e.target.classList.contains('task-content')) {\n            UI.openRenameInput(this)\n            return\n        }\n        if (e.target.classList.contains('due-date')) {\n            UI.openSetDateInput(this)\n        }\n    }\n\n    static setTaskCompleted(taskButton) {\n        const projectName = document.getElementById('project-name').textContent\n        const taskName = taskButton.children[0].children[1].textContent\n\n        if (projectName === 'Today' || projectName === 'This week') {\n            const parentProjectName = taskName.split('(')[1].split(')')[0]\n            _Storage__WEBPACK_IMPORTED_MODULE_1__[\"default\"].deleteTask(parentProjectName, taskName.split(' ')[0])\n            if (projectName === 'Today') {\n                _Storage__WEBPACK_IMPORTED_MODULE_1__[\"default\"].updateTodayProject()\n            } else {\n                _Storage__WEBPACK_IMPORTED_MODULE_1__[\"default\"].updateWeekProject()\n            }\n        } else {\n            _Storage__WEBPACK_IMPORTED_MODULE_1__[\"default\"].deleteTask(projectName, taskName)\n        }\n        UI.clearTasks()\n        UI.loadTasks(projectName)\n    }\n\n    static deleteTask(taskButton) {\n        const projectName = document.getElementById('project-name').textContent\n        const taskName = taskButton.children[0].children[1].textContent\n\n        if (projectName === 'Today' || projectName === 'This week') {\n            const mainProjectName = taskName.split('(')[1].split(')')[0]\n            _Storage__WEBPACK_IMPORTED_MODULE_1__[\"default\"].deleteTask(mainProjectName, taskName)\n        }\n        _Storage__WEBPACK_IMPORTED_MODULE_1__[\"default\"].deleteTask(projectName, taskName)\n        UI.clearTasks()\n        UI.loadTasks(projectName)\n    }\n\n    static openRenameInput(taskButton) {\n        const taskNamePara = taskButton.children[0].children[1]\n        let taskName = taskNamePara.textContent\n        const taskNameInput = taskButton.children[0].children[2]\n        const projectName = taskButton.parentNode.parentNode.children[0].textContent\n\n        if (projectName === 'Today' || projectName === 'This week') {\n            ;[taskName] = taskName.split(' (')\n        }\n\n        UI.closeAllPopups()\n        taskNamePara.classList.add('active')\n        taskNameInput.classList.add('active')\n        taskNameInput.value = taskName\n    }\n\n    static closeRenameInput(taskButton) {\n        const taskName = taskButton.children[0].children[1]\n        const taskNameInput = taskButton.children[0].children[2]\n\n        taskName.classList.remove('active')\n        taskNameInput.classList.remove('active')\n        taskNameInput.value = ''\n    }\n\n    static renameTask(e) {\n        if (e.key !== 'Enter') return\n\n        const projectName = document.getElementById('project-name').textContent\n        const taskName = this.previousElementSibling.textContent\n        const newTaskName = this.value\n\n        if (newTaskName === '') {\n            alert(\"Task name can't be empty\")\n            return\n        }\n\n        if (_Storage__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getTodoList().getProject(projectName).contains(newTaskName)) {\n            this.value = ''\n            alert('Task names must be different')\n            return\n        }\n\n        if (projectName === 'Today' || projectName === 'This week') {\n            const mainProjectName = taskName.split('(')[1].split(')')[0]\n            const mainTaskName = taskName.split(' ')[0]\n            _Storage__WEBPACK_IMPORTED_MODULE_1__[\"default\"].renameTask(\n                projectName,\n                taskName,\n                `${newTaskName} (${mainProjectName})`\n            )\n            _Storage__WEBPACK_IMPORTED_MODULE_1__[\"default\"].renameTask(mainProjectName, mainTaskName, newTaskName)\n        } else {\n            _Storage__WEBPACK_IMPORTED_MODULE_1__[\"default\"].renameTask(projectName, taskName, newTaskName)\n        }\n        UI.clearTasks()\n        UI.loadTasks(projectName)\n        UI.closeRenameInput(this.parentNode.parentNode)\n    }\n\n    static openSetDateInput(taskButton) {\n        const dueDate = taskButton.children[1].children[0]\n        const dueDateInput = taskButton.children[1].children[1]\n\n        UI.closeAllPopups()\n        dueDate.classList.add('active')\n        dueDateInput.classList.add('active')\n    }\n\n    static closeSetDateInput(taskButton) {\n        const dueDate = taskButton.children[1].children[0]\n        const dueDateInput = taskButton.children[1].children[1]\n\n        dueDate.classList.remove('active')\n        dueDateInput.classList.remove('active')\n    }\n\n    static setTaskDate() {\n        const taskButton = this.parentNode.parentNode\n        const projectName = document.getElementById('project-name').textContent\n        const taskName = taskButton.children[0].children[1].textContent\n        const newDueDate = Object(function webpackMissingModule() { var e = new Error(\"Cannot find module 'date-fns'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(new Date(this.value), 'dd/MM/yyyy')\n\n        if (projectName === 'Today' || projectName === 'This week') {\n            const mainProjectName = taskName.split('(')[1].split(')')[0]\n            const mainTaskName = taskName.split(' (')[0]\n            _Storage__WEBPACK_IMPORTED_MODULE_1__[\"default\"].setTaskDate(projectName, taskName, newDueDate)\n            _Storage__WEBPACK_IMPORTED_MODULE_1__[\"default\"].setTaskDate(mainProjectName, mainTaskName, newDueDate)\n            if (projectName === 'Today') {\n                _Storage__WEBPACK_IMPORTED_MODULE_1__[\"default\"].updateTodayProject()\n            } else {\n                _Storage__WEBPACK_IMPORTED_MODULE_1__[\"default\"].updateWeekProject()\n            }\n        } else {\n            _Storage__WEBPACK_IMPORTED_MODULE_1__[\"default\"].setTaskDate(projectName, taskName, newDueDate)\n        }\n        UI.clearTasks()\n        UI.loadTasks(projectName)\n        UI.closeSetDateInput(taskButton)\n    }\n}\n\n//# sourceURL=webpack://todo-list/./src/modules/UI.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;