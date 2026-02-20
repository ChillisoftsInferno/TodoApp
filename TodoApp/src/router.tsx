import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router'
import GeneralRoute from './app/components/shared/routing/GeneralRoute'
import { GeneralRoutes } from './app/routes'

export const Router = () => (
  <RouterProvider
    router={createBrowserRouter(
      createRoutesFromElements(
        
        <Route>
          <Route
            lazy={async () => {
              const module = await import('./MasterLayout')
              return { Component: module.default }
            }}
          >
            <Route element={<GeneralRoute />}>{GeneralRoutes}</Route>
          </Route>
        </Route>
      ),
    )}
  />
)
