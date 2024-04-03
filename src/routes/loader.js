import { getContacts } from "../contacts"

export async function loader({ contacts }) {
  contacts = await getContacts()
  return { contacts }
}
