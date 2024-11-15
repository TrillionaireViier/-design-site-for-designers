import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Project } from "../types/project";

type TestBody = {
  accessToken: any;
  photo: any;
};
export const testSmth = createAsyncThunk<any, TestBody>(
  "test.ts/smth",
  async (body, { rejectWithValue }) => {
    try {
      const token = await body.accessToken({
        authorizationParams: {
          audience: "http://localhost:9071",
          scope: "read:current_user",
        },
      });

      const formData = new FormData();
      formData.append("bucketName", "parostok-test-aws");
      formData.append("objName", "cat-photo");
      formData.append("photo", body.photo);
      const response = await axios({
        method: "post",
        data: formData,
        url: `/api/bucket/uploadObj`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      return rejectWithValue({
        message: `Failed to get data from server. ${(error as Error).message}`,
      });
    }
  }
);

export const getNewProjects = createAsyncThunk<Project[]>(
  "projects/getNew",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios("/api/public/project/find-new", {
        method: "GET",
      });

      return response.data;
    } catch (error) {
      return rejectWithValue({
        message: `Failed to fetch new projects. ${(error as Error).message}`,
      });
    }
  }
);

export const getTopProjects = createAsyncThunk<Project[]>(
  "projects/getTop",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios("/api/projects/find-top", {
        method: "GET",
      });

      return response.data;
    } catch (error) {
      return rejectWithValue({
        message: `Failed to fetch top projects. ${(error as Error).message}`,
      });
    }
  }
);

export const getFilterSpec = createAsyncThunk<Project[]>(
  "sort/by-date-ascending",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios("/api/resume/sort/by-date-ascending", {
        method: "GET",
      });

      return response.data;
    } catch (error) {
      return rejectWithValue({
        message: `Failed to filter. ${(error as Error).message}`,
      });
    }
  }
);
