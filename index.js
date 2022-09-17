const todoList = () => {
    all = []
    const add = (todoItem) => {
      all.push(todoItem)
    }
    const markAsComplete = (index) => {
      all[index].completed = true
    }
  
    const overdue = () => {
      // Write the date check condition here and return the array of overdue items accordingly.
      // FILL YOUR CODE HERE
      over=[]
      for(let i=0;i<all.length;i++)
      {
        if(all[i].dueDate==yesterday)
        {
             over.push(all[i]);
             
        }
      }
      x=""
      for(let i=0;i<over.length;i++)
      {
        if(over[i].completed==false)
        {
            x=x+'[ ] '+over[i].title+" "+over[i].dueDate;
        }
        else
        {
          x=x+'[x]'+over[i].title+" "+over[i].dueDate;
        }
        
      }
      
      return x;
    }
  
    const dueToday = () => {
      // Write the date check condition here and return the array of todo items that are due today accordingly.
      // FILL YOUR CODE HERE
      due=[]
      for(let i=0;i<all.length;i++)
      {
        if(all[i].dueDate==today)
        {
            due.push(all[i]);  
        }
      }
      x=""
      for(let i=0;i<due.length;i++)
      {
        if(due[i].completed==false)
        {
            x=x+'[ ] '+due[i].title;
        }
        else
        {
          x=x+'[x] '+due[i].title+"\n";
        }
       
      }
      return x;
    }
  
    const dueLater = () => {
      // Write the date check condition here and return the array of todo items that are due later accordingly.
      // FILL YOUR CODE HERE
      later=[]
      for(let i=0;i<all.length;i++)
      {
        if(all[i].dueDate==tomorrow)
        {
            later.push(all[i])
        }
      }
      x=""
      for(let i=0;i<later.length;i++)
      {
        if(later[i].completed==false)
        {
            x=x+'[ ] '+later[i].title+" "+later[i].dueDate;
        }
        else
        {
          x=x+'[x] '+later[i].title+" "+later[i].dueDate;
        }
        x=x+"\n";
      }
      return x;
    }
  
    const toDisplayableList = (list) => {
      // Format the To-Do list here, and return the output string as per the format given above.
      // FILL YOUR CODE HERE
      return list;
      
    }
  
    return { all, add, markAsComplete, overdue, dueToday, dueLater, toDisplayableList };
  }
  
  // ####################################### #
  // DO NOT CHANGE ANYTHING BELOW THIS LINE. #
  // ####################################### #
  
  const todos = todoList();
  
  const formattedDate = d => {
    return d.toISOString().split("T")[0]
  }
  
  var dateToday = new Date()
  const today = formattedDate(dateToday)
  const yesterday = formattedDate(
    new Date(new Date().setDate(dateToday.getDate() - 1))
  )
  const tomorrow = formattedDate(
    new Date(new Date().setDate(dateToday.getDate() + 1))
  )
  
  todos.add({ title: 'Submit assignment', dueDate: yesterday, completed: false })
  todos.add({ title: 'Pay rent', dueDate: today, completed: true })
  todos.add({ title: 'Service Vehicle', dueDate: today, completed: false })
  todos.add({ title: 'File taxes', dueDate: tomorrow, completed: false })
  todos.add({ title: 'Pay electric bill', dueDate: tomorrow, completed: false })
  
  console.log("My Todo-list\n\n")
  
  console.log("Overdue")
  var overdues = todos.overdue()
  var formattedOverdues = todos.toDisplayableList(overdues)
  console.log(formattedOverdues)
  console.log("\n\n")
  
  console.log("Due Today")
  let itemsDueToday = todos.dueToday()
  let formattedItemsDueToday = todos.toDisplayableList(itemsDueToday)
  console.log(formattedItemsDueToday)
  console.log("\n\n")
  
  console.log("Due Later")
  let itemsDueLater = todos.dueLater()
  let formattedItemsDueLater = todos.toDisplayableList(itemsDueLater)
  console.log(formattedItemsDueLater)
  console.log("\n\n")