import {
  Outlet,
  NavLink,
  useLoaderData,
  Form,
  redirect,
  useNavigation,
  useSubmit,
} from "react-router-dom"

import { getContacts, createContact } from "../contacts"

import DeleteAllButton from "../DeleteAllButton"

export async function Action() {
  const contact = await createContact()
  return redirect(`/react-router-tutorial/contacts/${contact.id}/edit`)
}

export async function Loader({ request }) {
  const url = new URL(request.url)
  const q = url.searchParams.get("q")
  const contacts = await getContacts(q)
  return { contacts, q }
}

import { useEffect } from "react"

export default function Root() {
  const { contacts, q } = useLoaderData()
  const navigation = useNavigation()
  const submit = useSubmit()

  const searching =
    navigation.location &&
    new URLSearchParams(navigation.location.search).has("q")

  useEffect(() => {
    document.getElementById("q").value = q
  }, [q])

  return (
    <>
      <div id="sidebar">
        <h1>React Router Contacts</h1>

        <div>
          <Form
            id="search-form"
            role="search"
          >
            <input
              id="q"
              className={searching ? "loading" : ""}
              aria-label="Search contacts"
              placeholder="Search"
              type="search"
              name="q"
              defaultValue={q}
              onChange={(event) => {
                const isFirstSearch = q == null
                submit(event.currentTarget.form, {
                  replace: !isFirstSearch,
                })
              }}
            />
            <div
              id="search-spinner"
              aria-hidden
              hidden={!searching}
            />
            <div
              className="sr-only"
              aria-live="polite"
            ></div>
          </Form>
          <Form method="post">
            <button type="submit">New</button>
          </Form>
        </div>
        <nav>
          {contacts.length ? (
            <ul>
              {contacts.map((contact) => (
                <li key={contact.id}>
                  <NavLink
                    to={`contacts/${contact.id}`}
                    className={({ isActive, isPending }) =>
                      isActive ? "active" : isPending ? "pending" : ""
                    }
                  >
                    {contact.first || contact.last ? (
                      <>
                        {contact.first} {contact.last}
                      </>
                    ) : (
                      <i>No Name</i>
                    )}{" "}
                    {contact.favorite && <span>★</span>}
                  </NavLink>
                </li>
              ))}
            </ul>
          ) : (
            <p>
              <i>No contacts</i>
            </p>
          )}
        </nav>
        <footer className="footer">
          {contacts.length ? <DeleteAllButton /> : null}

          <a
            href="https://github.com/chrisnajman/react-router-tutorial"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub Repository
          </a>
        </footer>
      </div>
      <div
        id="detail"
        className={navigation.state === "loading" ? "loading" : ""}
      >
        <Outlet />
      </div>
    </>
  )
}
