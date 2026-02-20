interface RouteName {
  pathName: string
  path: string
  childRoutes?: Record<string, RouteName>
}

type Merge<Obj> = {
  [k in keyof Obj]: Obj[k]
}

type AppRoute = typeof generalAppRoutes
type BaseRouteKeys = keyof AppRoute
type BaseRoute<T extends BaseRouteKeys = BaseRouteKeys> = AppRoute[T]
export type BaseRoutePaths<T extends BaseRouteKeys = BaseRouteKeys> = AppRoute[T]['pathName']

type Level1RouteChildRoutes<T extends BaseRouteKeys = BaseRouteKeys> = Merge<BaseRoute<T>['childRoutes']>
export type Level1Route<T extends BaseRouteKeys = BaseRouteKeys> = Merge<Level1RouteChildRoutes<T>[keyof Level1RouteChildRoutes<T>]>

export const generalAppRoutes = {
  todoList: {
    pathName: 'todo-list',
    path: '/todo-list',
    childRoutes: {},
  },
} as const satisfies Record<string, RouteName>
