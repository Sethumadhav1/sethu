import axios from "../../utils/axios";
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";





export const getTodos = createAsyncThunk(
  "fetch/getTodos",
  () => {
    const fetchPlannedData = axios
      .get("https://jsonplaceholder.typicode.com/todos")
      .then((response)=>response.data)
    return Promise.resolve(fetchPlannedData);
  }
);

const tripPlanSlice = createSlice({
  name: "TripPlan",
  initialState: {todos:[],todosLoading:true},
  reducers: {
  },
  extraReducers: (builder) => {
    builder.addCase(getTodos.pending, (state) => {
      state.todosLoading = true;
    });
    builder.addCase(
      getTodos.fulfilled,
      (state, action) => {
        state.todos=action.payload
        state.todosLoading=false;
      }
    );
    builder.addCase(getTodos.rejected, (state) => {
        state.todosLoading=false
    });
  },
});

export default tripPlanSlice.reducer;
