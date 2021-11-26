import './stylesheet.css'

class CheckListItem {
    constructor(title, checked = false) {
        this.title = title
        this.checked = checked
    }
}

class TodoItem {
    constructor(title,
                description = '',
                dueDate = null,
                priority = 0,
                checkListItems = null) {
        this.title = title
        this.description = description
        this.dueDate = dueDate
        this.priority = priority
        this.checkListItems = checkListItems === null ? [] : checkListItems
        this.completed = false
    }
}

class Project {
    constructor(title) {
        this.title = title
        this.todoItems = []
    }
}