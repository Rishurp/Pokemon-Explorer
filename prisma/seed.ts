import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.pokemon.createMany({
    data: [
        {
            name: "Bulbasaur",
            types: ["grass", "poison"],
            sprite: "https://pokemon.com/pictures/bulbasaur.png",
          },
          {
            name: "Ivysaur",
            types: ["grass", "poison"],
            sprite: "https://pokemon.com/pictures/ivysaur.png",
          },
          {
            name: "Venusaur",
            types: ["grass", "poison"],
            sprite: "https://pokemon.com/pictures/venusaur.png",
          },
          {
            name: "Charmander",
            types: ["fire"],
            sprite: "https://pokemon.com/pictures/charmander.png",
          },
          {
            name: "Charmeleon",
            types: ["fire"],
            sprite: "https://pokemon.com/pictures/charmeleon.png",
          },
          {
            name: "Charizard",
            types: ["fire", "flying"],
            sprite: "https://pokemon.com/pictures/charizard.png",
          },
          {
            name: "Squirtle",
            types: ["water"],
            sprite: "https://pokemon.com/pictures/squirtle.png",
          },
          {
            name: "Wartortle",
            types: ["water"],
            sprite: "https://pokemon.com/pictures/wartortle.png",
          },
          {
            name: "Pikachu",
            types: ["electric"],
            sprite: "https://pokemon.com/pictures/pikachu.png",
          }
    ],
  });
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
