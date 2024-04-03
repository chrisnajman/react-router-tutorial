import PropTypes from "prop-types"
import { Form, useLoaderData, useFetcher } from "react-router-dom"
import { getContact, updateContact } from "../contacts"

export async function Action({ request, params }) {
  let formData = await request.formData()
  return updateContact(params.contactId, {
    favorite: formData.get("favorite") === "true",
  })
}

export async function Loader({ params }) {
  const contact = await getContact(params.contactId)
  if (!contact) {
    throw new Response("", {
      status: 404,
      statusText: "Not Found",
    })
  }
  return { contact }
}

export default function Contact() {
  const { contact } = useLoaderData()

  return (
    <div
      id="contact"
      className="contact"
    >
      <div className="avatar">
        {contact.avatar ? (
          <img
            key={contact.avatar}
            src={contact.avatar || null}
            alt={`${contact.first} ${contact.last}`}
            width="192"
            height="192"
          />
        ) : (
          <p>No avatar uploaded</p>
        )}
      </div>

      <div>
        <h1>
          {contact.first || contact.last ? (
            <>
              {contact.first} {contact.last}
            </>
          ) : (
            <i>No Name</i>
          )}{" "}
          <Favorite contact={contact} />
        </h1>

        {contact.twitter && (
          <p>
            <a
              target="_blank"
              href={`https://twitter.com/${contact.twitter}`}
            >
              {contact.twitter}
            </a>
          </p>
        )}

        {contact.notes && <p>{contact.notes}</p>}

        <div>
          <Form action="edit">
            <button type="submit">Edit</button>
          </Form>
          <Form
            method="post"
            action="destroy"
            onSubmit={(event) => {
              if (!confirm("Please confirm you want to delete this record.")) {
                event.preventDefault()
              }
            }}
          >
            <button type="submit">Delete</button>
          </Form>
        </div>
      </div>
    </div>
  )
}

function Favorite({ contact }) {
  const fetcher = useFetcher()
  // yes, this is a `let` for later
  let favorite = contact.favorite
  if (fetcher.formData) {
    favorite = fetcher.formData.get("favorite") === "true"
  }
  return (
    <fetcher.Form method="post">
      <button
        name="favorite"
        value={favorite ? "false" : "true"}
        aria-label={favorite ? "Remove from favorites" : "Add to favorites"}
      >
        {favorite ? "★" : "☆"}
      </button>
    </fetcher.Form>
  )
}

Favorite.propTypes = {
  contact: PropTypes.shape({
    first: PropTypes.string,
    last: PropTypes.string,
    avatar: PropTypes.string,
    twitter: PropTypes.string,
    notes: PropTypes.string,
    favorite: PropTypes.bool,
  }),
}
