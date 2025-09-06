# My website!

Check it out here: <https://tom-molotnikoff.github.io/>

## Implementation notes

### Framework

The overarching framework is Vite: React + Typescript.

### UI Component library

The main source of UI components is Shadcn: <https://ui.shadcn.com/>. They're simple and clean, and all the code resides inside the repo, so it can be modified if needed (which is sometimes needed for typescript)

### Blog

The blog posts are written in MDX, which makes it super easy to write without needing to remember to wrap everything in JSX. At build time, the posts are transpiled into JSX by Remark, which Vite then builds into JS.

### Contact

The contact form uses formspree, allowing a frontend-only form. Since this is a github pages site so there can be no backend service to respond to the form.
