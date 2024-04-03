# React Router Tutorial

- [Tutorial URL](https://reactrouter.com/en/main/start/tutorial)

> [!NOTE]
> The tutorial files were modified to be deployable to Git Pages (see [Configuring the Git Repo](#installation-and-configuring-the-git-repo), below).

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
