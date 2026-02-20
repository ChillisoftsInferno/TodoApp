import { apiSlice, type ApiServices } from '../apiSlice'
import type { GetTodoListResponse } from '../../types/GetTodoListResponse';
import type { AddTodoTaskResponse } from '../../types/AddTodoTaskResponse';
import type { AddTodoTaskRequest } from '../../types/AddTodoTaskRequest';
import type { UpdateTodoTaskRequest } from '../../types/UpdateTodoTaskRequest';

export default apiSlice.injectEndpoints({
  endpoints: (build) => ({
    getTodoList: build.query<GetTodoListResponse, void>({
      query: () => {
        return {
          method: 'GET',
          url: 'todo-list',
        }
      },
      extraOptions: 'general' satisfies ApiServices,
      providesTags: ['todo-list']
    }),
    addTodoTask: build.mutation<AddTodoTaskResponse, AddTodoTaskRequest>({
      query: (params) => {
        return {
          method: 'POST',
          url: 'todo-task',
          body: params,
        }
      },
      extraOptions: 'general' satisfies ApiServices,
      invalidatesTags: ['todo-list']
    }),
    updateTodoTask: build.mutation<void, UpdateTodoTaskRequest>({
      query: (params) => {
        return {
          method: 'PUT',
          url: `todo-task/${params.task.id}`,
          body: params,
        }
      },
      extraOptions: 'general' satisfies ApiServices,
      invalidatesTags: ['todo-list']
    }),
  }),
  overrideExisting: true,
})

