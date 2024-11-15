import { StatusEnum } from "../types/status-enum";

export const updateLoadStatus = (state: any, status: StatusEnum) => {
  for (let i = 0; i < state.loadStatus.length; ++i) {
    if (state.loadStatus[i] !== status) {
      state.loadStatus[i] = status;
      break;
    }
  }
  const allDone = state.loadStatus.every(
    (status: StatusEnum) =>
      status === StatusEnum.DONE || status === StatusEnum.REJECTED
  );
  state.allRequestsComplete = allDone;
};
