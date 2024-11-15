import { getNewProjects, getTopProjects } from '../../api/api';
import { Project } from '../../types/project';
import { StatusEnum } from '../../types/status-enum';
import homePageReducer, { resetState } from '../slices/homePage/home-page-slice';

describe('homePageSlice', () => {
  const initialState = {
    newProjects: [],
    topProjects: [],
    loadStatus: [StatusEnum.LOADING, StatusEnum.LOADING],
    allRequestsComplete: false
  };

  const mockNewProjects: Project[] = [
    {
      id: 1,
      title: 'Project 1',
      description: 'Description 1',
      views: 100,
      likes: 10,
      createDate: new Date('2024-10-06T07:33:46.275Z')
    },
    {
      id: 2,
      title: 'Project 2',
      description: 'Description 2',
      views: 200,
      likes: 20,
      createDate: new Date('2024-10-06T07:33:46.275Z')
    }
  ];

  const mockTopProjects: Project[] = [
    {
      id: 3,
      title: 'Top Project 1',
      description: 'Top Description 1',
      views: 300,
      likes: 30,
      createDate: new Date('2024-09-30T07:33:46.275Z')
    }
  ];

  it('should handle initial state', () => {
    expect(homePageReducer(undefined, { type: 'unknown' })).toEqual(initialState);
  });

  it('should handle resetState', () => {
    const modifiedState = {
      newProjects: mockNewProjects,
      topProjects: mockTopProjects,
      loadStatus: [StatusEnum.LOADING, StatusEnum.LOADING],
      allRequestsComplete: false,
    };

    const action = resetState();
    const newState = homePageReducer(modifiedState, action);
    expect(newState).toEqual(initialState);
  });

  it('should handle getNewProjects fulfilled action', async () => {
    const action = { type: getNewProjects.fulfilled.type, payload: mockNewProjects };
    const newState = homePageReducer(initialState, action);
    expect(newState.newProjects).toEqual(mockNewProjects);
    expect(newState.loadStatus[0]).toBe(StatusEnum.DONE);
  });

  it('should handle getNewProjects rejected action', async () => {
    const action = { type: getNewProjects.rejected.type };
    const newState = homePageReducer(initialState, action);
    expect(newState.loadStatus[0]).toBe(StatusEnum.REJECTED);
  });

  it('should handle getTopProjects fulfilled action', () => {
    const action = { type: getTopProjects.fulfilled.type, payload: mockTopProjects };
    const newState = homePageReducer(initialState, action);
    expect(newState.topProjects).toEqual(mockTopProjects);
    expect(newState.loadStatus[0]).toBe(StatusEnum.DONE); 
  });

  it('should handle getTopProjects rejected action', () => {
    const action = { type: getTopProjects.rejected.type };
    const newState = homePageReducer(initialState, action);
    expect(newState.loadStatus[0]).toBe(StatusEnum.REJECTED); 
  });
});
