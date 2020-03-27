let taskService = require('../services/taskService')
let ObjectId = require('mongoose').Types.ObjectId

exports.get_all_tasks = function(req, res) {
    taskService.get_all_tasks()
        .then(function (tasks) {
            res.json(tasks)
        })
        .catch(function (error) {
            res.send(error)
        })
};

exports.create_a_task = function(req, res) {
    taskService.create_a_task(req.body)
        .then(function (createdTask) {
            res.json(createdTask)
        })
        .catch(function (error) {
            res.status(400).send(error.message)
        })
};


exports.get_a_task = function(req, res) {
    let taskId = req.params.taskId
    if (ObjectId.isValid(taskId)) {

        taskService.get_a_task(req.params.taskId)
            .then(function (task) {
                res.json(task)
            })
            .catch(function (error) {
                res.status(404).send('Not Found')
            })

    } else {
        res.status(404).send('Not Found')
    }
};


exports.update_a_task = function(req, res) {
    let taskId = req.params.taskId
    if (ObjectId.isValid(taskId)) {

        taskService.update_a_task(taskId, req.body)
            .then(function (updatedTask) {
                res.json(updatedTask)
            })
            .catch(function (error) {
                if (error.message == 'Not Found') {
                    res.status(404)
                } else {
                    res.status(400)
                }
                res.send(error.message)
            })

    } else {
        res.status(404).send('Not Found')
    }
};


exports.delete_a_task = function(req, res) {
    let taskId = req.params.taskId
    if (ObjectId.isValid(taskId)) {

        taskService.delete_a_task(taskId)
            .then(function (response) {
                res.send('Task ' + taskId + ' deleted')
            })
            .catch(function (error) {
                res.status(404).send(error.message)
            })

    } else {
        res.status(404).send('Not Found')
    }
}