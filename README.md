# React Router Tutorial

- [Tutorial URL](https://reactrouter.com/en/main/start/tutorial)

> [!NOTE]
> The tutorial files were modified to be deployable to Git Pages (see [Configuring the Git Repo](#installation-and-configuring-the-git-repo), below).

## My additions

### CSS

- I moved the `h1` back to the top of the sidebar by removing `order: 1` from the rule.
- I added and styled a `footer` section in the sidebar to contain the Git Repository link and the 'Delete all contacts' button.
- I also added some **basic** responsive styling so that horizontal scrollbars don't occur on mobile devices.

### Delete All Button

I created a new component: `DeleteAllButton.jsx` in `/src`. The component is inserted into the `footer` in `/src/routes/Root.jsx`.

This button clears all key pairs from the Chrome console: `Application > IndexedDB > localforage > keyvaluepairs`, thus deleting all contacts.

> [!NOTE]
> Clicking this button launches a confirm dialog, so you have the option of changing your mind (by cancelling the operation).

> [!TIP]
> If you leave the console open after clearing contacts, the deleted contacts might still appear in the 'key/value' window. Furthermore, you might see a warning 'Data may be stale' at the top of the window. To update the 'key/value' pairs window, click the 'refresh' icon and the data will disappear.

### Contact Avatar

I replaced the existing tutorial code with the following:

```jsx
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
```

## Installation

- Download / clone
- `npm install` to install `node_modules`
- in progress...

## Installation and Configuring the Git Repo

### Installation

- In a terminal window, navigate and enter the the project folder.
- `npm install` to install `node_modules`.

#### Renaming the project

- Do a project-wide search for `/react-router-tutorial/`.
- Replace with `/name-of-your-project/`.
- In `package.json`,
  - change `"name"` to `"name-of-your-project"`.
  - Change the `"homepage"` url to `"https://[your-user-name].github.io/[name-of-your-project]"`.

#### Viewing the project

- Type `npm run dev` in the terminal and press `Enter` to get the local host url where you can view the project.

### Configuring the Git Repo

Once you've created a Git repository and pushed your files, you can visit the following pages to get detailed instructions.

- For all installation and configuration instructions see ["vite-react-router" (Github repo) by Erick Kuwahara](https://github.com/ErickKS/vite-react-router/tree/main).

- You can also watch his step-by-step YouTube tutorial: [Vite React App with Routes Deployed on Github | Reload error resolved!](https://youtu.be/uEEj2c3_ydg).

However, the instructions can be boiled down to the following:

- Settings -> Actions -> General -> Workflow permissions -> Click: Read and Write permissions -> Save.
- Actions -> failed deploy -> re-run-job failed jobs.
- Settings -> Pages -> Branch -> gh-pages -> save.

You can then click on 'Actions' in the main navigation, and watch the site being deployed. At the end of deployment you will see a link to the GH pages website.

---

## Testing

Tested on Windows 10 with:

- Chrome
- Firefox
- Microsoft Edge

Each snippet tested in both browser and device views.
