# Boilerplate app

## Getting Started

Install packages:

```bash
yarn
```

This app was built based on Next.js which communicates to the backend server in the same repository.

This boilerplate supports basic CRUD functionality for the User entity which has username, email, and password as properties.

The detail environments for the app is below.

- Next.js
- Apollo-client
- next-apollo
- Graphql
- Typescript
- Formik
- Chakra-ui

### Environment Variables

You should add `.env.local` file under the web directory, and fill your graphql-server url next to the environment vairable like below.(ex: `http://localhost:4000/graphql`)

```bash
NEXT_PUBLIC_API_URL=<YOUR GRAPHQL-SERVER URL>
```

### How to run

Before you run the app, please make sure your backend-server is running properly.

```bash
yarn dev
```
