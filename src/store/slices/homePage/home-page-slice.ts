import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getNewProjects, getTopProjects, testSmth } from "../../../api/api";
import { StatusEnum } from "../../../types/status-enum";
import {Education} from "../../../types/education.ts";
import {Project} from "../../../types/project.ts";
import {updateLoadStatus} from "../../../functions/update-status.ts";

export type HomePageSlice = {
  education: Education | null;
  newProjects: Project[] | null;
  topProjects: Project[] | null;
  loadStatus: StatusEnum[];
  allRequestsComplete: boolean;
};

const initialState: HomePageSlice = {
  education: null,
  newProjects: [],
  topProjects: [],
  loadStatus: [StatusEnum.LOADING, StatusEnum.LOADING],
  allRequestsComplete: false,
};

const homePageSlice = createSlice({
  name: "homePageSlice",
  initialState,
  reducers: {
    resetState: (state) => {
      state.education = null;
      state.newProjects = [];
      state.topProjects = [];
      state.loadStatus = state.loadStatus.map(() => StatusEnum.LOADING);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(
        testSmth.fulfilled,
        (state, action: PayloadAction<Education>) => {
          state.education = action.payload;
          updateLoadStatus(state, StatusEnum.DONE);
        }
      )
      .addCase(testSmth.pending, (state) => {
        updateLoadStatus(state, StatusEnum.LOADING);
      })
      .addCase(testSmth.rejected, (state) => {
        updateLoadStatus(state, StatusEnum.REJECTED);
      })
      .addCase(
        getNewProjects.fulfilled,
        (state, action: PayloadAction<Project[]>) => {
          state.newProjects = action.payload;
          updateLoadStatus(state, StatusEnum.DONE);
        }
      )
      .addCase(getNewProjects.pending, (state) => {
        updateLoadStatus(state, StatusEnum.LOADING);
      })
      .addCase(getNewProjects.rejected, (state) => {
        updateLoadStatus(state, StatusEnum.REJECTED);
      })
      .addCase(
        getTopProjects.fulfilled,
        (state, action: PayloadAction<Project[]>) => {
          state.topProjects = action.payload;
          updateLoadStatus(state, StatusEnum.DONE);
        }
      )
      .addCase(getTopProjects.pending, (state) => {
        updateLoadStatus(state, StatusEnum.LOADING);
      })
      .addCase(getTopProjects.rejected, (state) => {
        updateLoadStatus(state, StatusEnum.REJECTED);
      });
  },
});

export const { resetState } = homePageSlice.actions;
export default homePageSlice.reducer;
