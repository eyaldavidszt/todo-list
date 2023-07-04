// factory function


export function cardMaker(title, description, dueDate, priority, status) {
    return {title, description, dueDate, priority, status};
}
const card = cardMaker('Title!', 'Description...', 'Due for tomorrow!', 'Important', 'Done');
