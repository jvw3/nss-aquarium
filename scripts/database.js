export const getFish = () => {
    return database.fish.map(fish => ({...fish}))
}

const database = {
    fish: [
        {
            species: 'Salmon',
            length: 1.5,
            name: "Herbert",
            harvestLocation: "Percy Priest Lake",
            fishFood: "worms, herring, and laternfish"

        },
        {
            species: 'Bluegill',
            length: 3,
            name: "Amy",
            harvestLocation: "Cumberland River",
            fishFood: "worms, herring, and laternfish"
        },
        {
            species: 'Sturgeon',
            length: 2.3,
            name: "Reginald",
            harvestLocation: "Old Hickory Lake",
            fishFood: "worms, herring, and laternfish"
        },
        {
            species: 'Sturgeon',
            length: 1.5,
            name: "Lebron",
            harvestLocation: "Percy Priest Lake",
            fishFood: "worms, herring, and laternfish"
        },
        {
            species: 'Sturgeon',
            Length: 1.5,
            name: "Saquon",
            harvestLocation: "Percy Priest Lake",
            fishFood: "worms, herring, and laternfish"
        },
    ]
}

