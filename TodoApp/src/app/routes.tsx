import { Route, Navigate } from 'react-router-dom'
import { generalAppRoutes } from './GeneralAppRoutes'
import { TodoPage } from './pages/todo/TodoPage'

export const GeneralRoutes = (
  <Route
    lazy={async () => {
      const module = await import('./GeneralLayoutContainer')
      return { Component: module.default }
    }}
  >
    <Route path="*" element={<Navigate to={generalAppRoutes.todoList.path} replace />} />
    <Route path={generalAppRoutes.todoList.pathName} element={<TodoPage />} />
  </Route>
)
