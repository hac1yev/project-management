import { createSlice } from "@reduxjs/toolkit";

const initialProjectState = {
    projectCount: 0,
    createNewProject: false,
    addTask: false,
    projects: [],
    selectedProject: {
        id: '',
        title: '',
        description: '',
        date: null,
        tasks: []
    }
};

export const projectSlice = createSlice({
    name: 'projectSlice',
    initialState: initialProjectState,
    reducers: {
        getProject(state,action) {
            state.projects = [...state.projects, {...action.payload}];
            state.projectCount += 1;
        },
        deleteProject(state,action){
            let findedProject = state.projects.filter(project => project.id !== action.payload);
            state.projects = [...findedProject];
        },
        addProjectTask(state,action) {
            let selectedProjectIndex = state.projects.findIndex(project => project.id === action.payload.projectId);
            state.projects[selectedProjectIndex].tasks = [...state.projects[selectedProjectIndex].tasks, {id: action.payload.id, title: action.payload.title}];
        },
        removeTask(state,action) {
            let selectedProjectIndex = state.projects.findIndex(project => project.id === action.payload.projectId);
            const updatedTasks = state.projects[selectedProjectIndex].tasks.filter(task => task.id !== action.payload.id);
            state.projects[selectedProjectIndex].tasks = updatedTasks;
        }
    }
});

export const projectSliceAction = projectSlice.actions;