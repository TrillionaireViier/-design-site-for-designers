import {createSlice} from "@reduxjs/toolkit";
import {testSmth} from "../../../api/api";
import {StatusEnum} from "../../../types/status-enum";

export type TestSlice = {
    photo: File | null;
    status: StatusEnum;
};

const initialState: TestSlice = {
  photo: null,
  status: StatusEnum.LOADING
};

const testSlice = createSlice({
  name: "testSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(testSmth.fulfilled, (state) => {
        state.status = StatusEnum.DONE;
      })
      .addCase(testSmth.pending, (state) => {
        state.status = StatusEnum.LOADING;
      })
      .addCase(testSmth.rejected, (state) => {
        state.status = StatusEnum.REJECTED;
      })
  },
});

export default testSlice.reducer;
