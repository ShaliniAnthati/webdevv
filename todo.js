const todoList = () => {
    let all = [];
    const add = (todoItem) => {
      all.push(todoItem);
    };
    const markAsComplete = (index) => {
      all[index].completed = true;
    };
  
    const overdue = () => {
      return all.filter(
        (item) => item.dueDate < new Date().toLocaleDateString("en-CA")
      );
    };
  
    const dueToday = () => {
      return all.filter(
        (item) => item.dueDate === new Date().toLocaleDateString("en-CA")
      );
    };
  
    const dueLater = () => {
      return all.filter(
        (item) => item.dueDate > new Date().toLocaleDateString("en-CA")
      );
    };
  
    const toDisplayableList = (list) => {
      return list
      .map((item) => {
        var display_status = item.completed ? "[x]" : "[ ]";
        var display_date = item.dueDate == new Date().toLocaleDateString("en-CA") ? "" : item.dueDate;

        return `${display_status} ${item.title} ${display_date}`;
      })
       .join("\n");
    };
  
    return {
      all,
      add,
      markAsComplete,
      overdue,
      dueToday,
      dueLater,
      toDisplayableList,
    };
  };
  
  module.exports = todoList;