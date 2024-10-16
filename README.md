
# Pokémon Explorer

A web application built with TypeScript, Next.js, Prisma ORM, and tRPC that allows users to explore Pokémon data, filter by types, and display results in a dynamic and responsive user interface using Material UI.

## 🚀 Tech Stack

- **TypeScript**: Strongly typed language for JavaScript
- **Next.js**: React framework for server-side rendering, routing, and more
- **Prisma ORM**: SQL database management and ORM tool
- **tRPC**: Type-safe APIs with React Query integration
- **Material UI**: Component library for styling

## 📂 Project Structure

- `/app`: 
  - `_trpc/`: Contains the tRPC client setup and provider.
  - `api/trpc/[trpc]/route.ts`: tRPC route handling.
  - `part1/`: Implementation of Part 1, fetching single Pokémon.
  - `part2/`: Implementation of Part 2, fetching multiple Pokémon.
  - `part3/`: Implementation of Part 3, Pokémon type filtering.
  - `fonts/`, `globals.css`, `layout.tsx`, `page.tsx`: Global styling and layout components.

- `/components`: Reusable React components such as:
  - `FilterablePokedexTable.tsx`: Combines filtering and displaying Pokémon.
  - `Pokedex.tsx`: Main interface to interact with the Pokémon data.
  - `PokedexTable.tsx`: Renders a table of Pokémon data.
  - `Pokemon.tsx`, `PokemonRow.tsx`: Individual Pokémon component and row component.
  - `PokemonTypeSelection.tsx`: Dropdown for selecting Pokémon types.

- `/lib`: Utility functions, including Prisma client setup:
  - `prisma.ts`: Manages connection to the Prisma ORM.

- `/prisma`: Database schema, migrations, and seed data:
  - `schema.prisma`: Defines the database structure.
  - `migrations/`: Tracks changes to the database schema.
  - `seed.ts`: Script to seed the database with mock Pokémon data.

- `/server`: 
  - `index.ts`: Main server configuration.
  - `trpc.ts`: tRPC router setup and API routes.

- `.env`: Configuration file for environment variables.
- `.eslintc.json`: ESLint configuration for maintaining code quality.
- `.gitignore`: Specifies files to be ignored by Git.
- `next-env.d.ts`: Next.js environment setup.

## 🎯 Features

1. **Pokémon Retrieval**: 
   - Retrieve a single Pokémon's details by entering the Pokémon's name.
   - Dynamically display the Pokémon data using a reusable `<PokemonRow />` component.

2. **Multiple Pokémon Query**: 
   - Retrieve multiple Pokémon data by entering an array of Pokémon names.
   - Render all the Pokémon details using a `<PokedexTable />` component.

3. **Filter by Type**:
   - Select Pokémon types using the `<PokemonTypeSelection />` component.
   - Display only the Pokémon that match the selected type using a `<FilterablePokedexTable />` component.

## 🛠️ Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/Rishurp/Pokemon-Explorer.git
cd pokemon-web-app
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Set Up Environment Variables

Create a `.env` file at the root of the project and add the following variables:
```
DATABASE_URL="your-database-url"
```

### 4. Set Up the Database

Make sure your SQL database is up and running. To initialize the database schema, run:
```bash
npx prisma migrate dev
```

### 5. Seed the Database

To add mock Pokémon data to your database, run:
```bash
npx prisma db seed
```

### 6. Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📦 Prisma ORM Configuration

Prisma is used to manage the SQL database. The database schema includes a `Pokemon` model:

```prisma
model Pokemon {
  id     Int    @id @default(autoincrement())
  name   String
  types  String[]
  sprite String
}
```

Use the Prisma client in your tRPC routers to interact with the database.

## 🧩 tRPC Endpoints

- **`getPokemonDetails(name: string)`**: Retrieve details for a single Pokémon by name.
- **`getPokemonArray(names: string[])`**: Retrieve details for multiple Pokémon based on an array of names.
- **`getPokemonByType(type: string)`**: Fetch Pokémon data filtered by type.


## ✨ Demo

Check out the live demo of Pokémon Explorer [here](https://pokemon-explorer-rishu-pandey.vercel.app/). 

---


## 💻 Application Screenshots
Here are some screenshots:

![Home Page](https://github.com/user-attachments/assets/fcb7943c-0af3-40e8-bc46-26fb27f401da)
![Part 1](https://github.com/user-attachments/assets/5927ce67-c7fa-4e85-9c38-300ebf5835c7)
![Part 2](https://github.com/user-attachments/assets/2e2e74e6-2f3d-4576-850b-0271eb3f40d3)
![Part 3](https://github.com/user-attachments/assets/536e1f02-2741-4518-ad5a-71dbcada94aa)

---
## 📄 License

This project is licensed under the MIT License.
