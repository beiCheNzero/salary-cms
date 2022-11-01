export const projectDir = `
salary_cms
├─ public
│  ├─ favicon.ico
│  └─ index.html
├─ src
│  ├─ assets
│  │  ├─ css
│  │  │  ├─ base.css
│  │  │  ├─ base.less
│  │  │  ├─ index.css
│  │  │  └─ index.less
│  │  └─ img
│  │     ├─ login-bg.svg
│  │     └─ logo.svg
│  ├─ base-ui
│  │  ├─ breadcrumb
│  │  │  ├─ src
│  │  │  │  └─ breadcrumb.vue
│  │  │  ├─ types
│  │  │  │  └─ index.ts
│  │  │  └─ index.ts
│  │  ├─ card
│  │  │  ├─ src
│  │  │  │  └─ card.vue
│  │  │  ├─ types
│  │  │  └─ index.ts
│  │  ├─ descriptions
│  │  │  ├─ src
│  │  │  │  └─ descriptions.vue
│  │  │  ├─ types
│  │  │  │  └─ types.ts
│  │  │  └─ index.ts
│  │  ├─ form
│  │  │  ├─ src
│  │  │  │  └─ form.vue
│  │  │  ├─ types
│  │  │  │  └─ index.ts
│  │  │  └─ index.ts
│  │  ├─ steps
│  │  │  ├─ src
│  │  │  │  └─ steps.vue
│  │  │  └─ type.ts
│  │  ├─ table
│  │  │  ├─ src
│  │  │  │  └─ table.vue
│  │  │  ├─ types
│  │  │  │  └─ index.ts
│  │  │  └─ index.ts
│  │  └─ text-link
│  │     ├─ src
│  │     │  └─ textlink.vue
│  │     └─ index.ts
│  ├─ components
│  │  ├─ nav-header
│  │  │  ├─ src
│  │  │  │  ├─ cpns
│  │  │  │  │  └─ user-info.vue
│  │  │  │  └─ nav-header.vue
│  │  │  └─ index.ts
│  │  ├─ nav-menu
│  │  │  ├─ src
│  │  │  │  └─ nav-menu.vue
│  │  │  └─ index.ts
│  │  ├─ page-content
│  │  │  ├─ src
│  │  │  │  └─ page-content.vue
│  │  │  ├─ index.ts
│  │  │  └─ type.ts
│  │  ├─ page-model
│  │  │  ├─ src
│  │  │  │  └─ page-model.vue
│  │  │  └─ index.ts
│  │  └─ page-search
│  │     ├─ src
│  │     │  └─ page-search.vue
│  │     └─ index.ts
│  ├─ global
│  │  ├─ index.ts
│  │  └─ register-properties.ts
│  ├─ hooks
│  │  ├─ usePageSearch.ts
│  │  ├─ usePermission.ts
│  │  └─ userPageModel.ts
│  ├─ router
│  │  ├─ main
│  │  │  ├─ index
│  │  │  │  └─ skill
│  │  │  │     └─ skill.ts
│  │  │  ├─ personal
│  │  │  │  └─ personal
│  │  │  │     └─ personal.ts
│  │  │  ├─ salary
│  │  │  │  └─ salary
│  │  │  │     └─ salary.ts
│  │  │  └─ system
│  │  │     ├─ department
│  │  │     │  └─ department.ts
│  │  │     ├─ menu
│  │  │     │  └─ menu.ts
│  │  │     ├─ role
│  │  │     │  └─ role.ts
│  │  │     └─ user
│  │  │        └─ user.ts
│  │  └─ index.ts
│  ├─ service
│  │  ├─ login
│  │  │  ├─ login.ts
│  │  │  └─ type.ts
│  │  ├─ main
│  │  │  ├─ salary
│  │  │  │  └─ salary.ts
│  │  │  └─ system
│  │  │     └─ system.ts
│  │  ├─ request
│  │  │  ├─ config.ts
│  │  │  ├─ index.ts
│  │  │  └─ type.ts
│  │  ├─ index.ts
│  │  └─ type.ts
│  ├─ store
│  │  ├─ login
│  │  │  ├─ login.ts
│  │  │  └─ types.ts
│  │  ├─ main
│  │  │  ├─ salary
│  │  │  │  ├─ salary.ts
│  │  │  │  └─ types.ts
│  │  │  ├─ system
│  │  │  │  ├─ system.ts
│  │  │  │  └─ types.ts
│  │  │  └─ user
│  │  ├─ index.ts
│  │  └─ types.ts
│  ├─ utils
│  │  ├─ cache.ts
│  │  ├─ date-format.ts
│  │  ├─ map-menus.ts
│  │  └─ types.ts
│  ├─ views
│  │  ├─ login
│  │  │  ├─ config
│  │  │  │  └─ account-config.ts
│  │  │  ├─ cpns
│  │  │  │  ├─ login-account.vue
│  │  │  │  └─ login-panel.vue
│  │  │  └─ login.vue
│  │  ├─ main
│  │  │  ├─ index
│  │  │  │  ├─ other
│  │  │  │  └─ skill
│  │  │  │     ├─ config
│  │  │  │     │  ├─ dependencies.ts
│  │  │  │     │  ├─ dev-dependencies.ts
│  │  │  │     │  ├─ index.ts
│  │  │  │     │  ├─ project-dir.ts
│  │  │  │     │  ├─ rugulates.ts
│  │  │  │     │  └─ technology-stacks.ts
│  │  │  │     └─ skill.vue
│  │  │  ├─ personal
│  │  │  │  └─ personal
│  │  │  │     ├─ config
│  │  │  │     │  └─ stepsConfig.ts
│  │  │  │     ├─ personal.vue
│  │  │  │     └─ types.ts
│  │  │  ├─ salary
│  │  │  │  └─ salary
│  │  │  │     ├─ config
│  │  │  │     │  ├─ content.config.ts
│  │  │  │     │  ├─ model.config.ts
│  │  │  │     │  └─ search.config.ts
│  │  │  │     └─ salary.vue
│  │  │  ├─ system
│  │  │  │  ├─ department
│  │  │  │  │  ├─ config
│  │  │  │  │  │  ├─ content.config.ts
│  │  │  │  │  │  ├─ model.config.ts
│  │  │  │  │  │  └─ search.config.ts
│  │  │  │  │  └─ department.vue
│  │  │  │  ├─ menu
│  │  │  │  │  ├─ config
│  │  │  │  │  │  ├─ content.config.ts
│  │  │  │  │  │  ├─ model.config.ts
│  │  │  │  │  │  └─ search.config.ts
│  │  │  │  │  └─ menu.vue
│  │  │  │  ├─ role
│  │  │  │  │  ├─ config
│  │  │  │  │  │  ├─ content.config.ts
│  │  │  │  │  │  ├─ model.config.ts
│  │  │  │  │  │  └─ search.config.ts
│  │  │  │  │  └─ role.vue
│  │  │  │  └─ user
│  │  │  │     ├─ config
│  │  │  │     │  ├─ content.config.ts
│  │  │  │     │  ├─ model.config.ts
│  │  │  │     │  └─ search.config.ts
│  │  │  │     └─ user.vue
│  │  │  └─ main.vue
│  │  └─ not-found
│  │     └─ not-found.vue
│  ├─ App.vue
│  ├─ main.ts
│  ├─ shims-vue.d.ts
│  └─ vuex.d.ts
├─ auto-imports.d.ts
├─ babel.config.js
├─ commitlint.config.js
├─ components.d.ts
├─ node.md
├─ package-lock.json
├─ package.json
├─ README.md
├─ tsconfig.json
└─ vue.config.js
`
