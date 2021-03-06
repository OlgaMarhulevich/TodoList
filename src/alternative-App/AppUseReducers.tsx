export function foo () {}

// import React, {useReducer} from 'react';
// import '../Header.moule.css';
// import {Todolist} from '../components/Todolist/Todolist';
// import {v1} from 'uuid';
// import {AddItemForm} from "../components/AddItemForm/AddItemForm";
// import {AppBar, Button, Container, Grid, IconButton, Paper, Toolbar, Typography} from "@material-ui/core";
// import {Menu} from "@material-ui/icons";
// import {
//     addTodoListAC,
//     changeTodoListFilterAC, changeTodoListTitleAC,
//     removeTodoListAC,
//     todoListsReducer
// } from "../store/todoListsReducer";
// import {
//     addTaskAC,
//     changeTaskStatusAC,
//     changeTaskTitleAC,
//     removeTaskAC,
//     tasksReducer
// } from "../store/tasksReducer";
//
// type FilterValuesType = "all" | "active" | "completed";
//
// type TodoListType = {
//     id: string
//     title: string
//     filter: FilterValuesType
// }
//
// function AppUseReducers() {
//     const todoListID_1 = v1()
//     const todoListID_2 = v1()
//
//     let [todoLists, dispatchToTodoLists] = useReducer(todoListsReducer, [
//         {id: todoListID_1, title: 'What to learn?', filter: 'all'},
//         {id: todoListID_2, title: 'What to buy?', filter: 'all'},
//     ])
//
//     let [tasks, dispatchToTasks] = useReducer(tasksReducer, {
//         [todoListID_1]: [
//             {id: v1(), title: "HTML&CSS", isDone: true},
//             {id: v1(), title: "JS", isDone: true},
//             {id: v1(), title: "ReactJS", isDone: false},
//             {id: v1(), title: "Rest API", isDone: false},
//             {id: v1(), title: "GraphQL", isDone: false}
//         ],
//         [todoListID_2]: [
//             {id: v1(), title: "Bear", isDone: false},
//             {id: v1(), title: "Milk", isDone: false}
//         ]
//     })
//
//     //TASKS
//     const addTask = (title: string, todoListID: string) => {
//         dispatchToTasks(addTaskAC(todoListID, title))
//     }
//     const removeTask = (id: string, todoListID: string) => {
//         dispatchToTasks(removeTaskAC(todoListID, id))
//     }
//     const changeTaskStatus = (isDone: boolean, taskID: string, todoListID: string) => {
//         dispatchToTasks(changeTaskStatusAC(todoListID, taskID, isDone))
//     }
//     const changeTaskTitle = (title: string, taskID: string, todoListID: string) => {
//         dispatchToTasks(changeTaskTitleAC(todoListID, taskID, title))
//     }
//
//     //TODOLISTS
//     const addTodoList = (title: string) => {
//         const action = addTodoListAC(title)
//         dispatchToTodoLists(action)
//         dispatchToTasks(action)
//     }
//     const removeTodoList = (todoListID: string) => {
//         const action = removeTodoListAC(todoListID)
//         dispatchToTodoLists(action)
//         dispatchToTasks(action)
//     }
//     const changeTodoListFilter = (filter: FilterValuesType, todoListID: string) => {
//         dispatchToTodoLists(changeTodoListFilterAC(filter, todoListID))
//     }
//     const changeTodoListTitle = (title: string, todoListID: string) => {
//         dispatchToTodoLists(changeTodoListTitleAC(title, todoListID))
//     }
//
//     const getTasksForTodoList = (tdl: TodoListType) => {
//         switch (tdl.filter) {
//             case 'active':
//                 return tasks[tdl.id].filter(t => !t.isDone)
//             case 'completed':
//                 return tasks[tdl.id].filter(t => t.isDone)
//             default:
//                 return tasks[tdl.id]
//         }
//     }
//
//     const tdlComponents = todoLists.map(tdl =>
//         <Grid item key={tdl.id}>
//             <Paper elevation={5} className={"tdl"}>
//                 <Todolist
//                     key={tdl.id}
//                     id={tdl.id}
//                     title={tdl.title}
//                     filter={tdl.filter}
//                     tasks={getTasksForTodoList(tdl)}
//                     removeTask={removeTask}
//                     addTask={addTask}
//                     changeTaskStatus={changeTaskStatus}
//                     changeTodoListFilter={changeTodoListFilter}
//                     removeTodoList={removeTodoList}
//                     changeTodoListTitle={changeTodoListTitle}
//                     changeTaskTitle={changeTaskTitle}/>
//             </Paper>
//         </Grid>
//         )
//
//     return (
//         <>
//             <AppBar position="static">
//                 <Toolbar className={"appBar"}>
//                     <IconButton color="inherit" aria-label="menu">
//                         <Menu/>
//                     </IconButton>
//                     <Typography variant="h6">
//                         TodoLists
//                     </Typography>
//                     <Button variant="outlined" color={"inherit"}>Login</Button>
//                 </Toolbar>
//             </AppBar>
//             <Container fixed>
//                 <Grid container className={"addTdlGrid"}>
//                     <AddItemForm addItem={addTodoList}/>
//                 </Grid>
//                 <Grid container spacing={5} className={"tdlsGrid"}>
//                     { tdlComponents }
//                 </Grid>
//             </Container>
//         </>
//     )
// }
//
// export default AppUseReducers;