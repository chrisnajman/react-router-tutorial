import * as React from "react"
import * as ReactDOM from "react-dom/client"
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom"
import "./index.css"
import Root, { Loader as rootLoader, Action as rootAction } from "./routes/Root"
import Contact, {
  Loader as contactLoader,
  Action as contactAction,
} from "./routes/Contact"
import ErrorPage from "./ErrorPage"
import EditContact, { Action as editAction } from "./routes/Edit"
import { Action as destroyAction } from "./routes/Destroy"
import Index from "./routes/Index"

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/react-router-tutorial/"
      element={<Root />}
      loader={rootLoader}
      action={rootAction}
      errorElement={<ErrorPage />}
    >
      <Route errorElement={<ErrorPage />}>
        <Route
          index
          element={<Index />}
        />
        <Route
          path="/react-router-tutorial/contacts/:contactId"
          element={<Contact />}
          loader={contactLoader}
          action={contactAction}
        />
        <Route
          path="/react-router-tutorial/contacts/:contactId/edit"
          element={<EditContact />}
          loader={contactLoader}
          action={editAction}
        />
        <Route
          path="/react-router-tutorial/contacts/:contactId/destroy"
          action={destroyAction}
        />
      </Route>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
