import localforage from "localforage"
import { IoMdWarning } from "react-icons/io"
export default function DeleteAllButton() {
  const deleteAllContacts = () => {
    if (window.confirm("Do you really want to delete all contacts?")) {
      localforage
        .clear()
        .then(function () {
          // Run this code once the database has been entirely deleted.
          console.log("Database is now empty.")
        })
        .catch(function (err) {
          // This code runs if there were any errors
          console.log(err)
        })

      window.location.reload()
    }
  }

  return (
    <button
      onClick={deleteAllContacts}
      type="submit"
      className="delete-all-btn"
    >
      Delete all contacts <IoMdWarning />
    </button>
  )
}
