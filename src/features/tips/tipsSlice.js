import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    { id: "1", title: "First ", description: "Hello! there" , img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTftAxbuoAvbpeke2YforlN_kP2UcYyW85CKw&usqp=CAU"},
    { id: "2", title: "Second ", description: "More text black", img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTftAxbuoAvbpeke2YforlN_kP2UcYyW85CKw&usqp=CAU" },
  ];


  const tipsSlice = createSlice({
    name: "tips",
    initialState,
    reducers: {
      tipsAdded(state, action) {
        state.push(action.payload)
      }
    }
  })

  export const {tipsAdded} = tipsSlice.actions;
  export default tipsSlice.reducer;