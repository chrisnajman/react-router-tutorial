import { redirect } from "react-router-dom"
import { deleteContact } from "../contacts"

export async function Action({ params }) {
  await deleteContact(params.contactId)
  return redirect("/react-router-tutorial/")
}
