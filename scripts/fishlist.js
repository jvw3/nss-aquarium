import { getFish } from './database.js'

export const FishList = () => {
    // Invoke the function that you imported from the database module
    const fishes = getFish()

    // Start building a string filled with HTML syntax
    let htmlString = '<article class="allfish">\n'

    // Create HTNL representations of each fish here
    for (const fish of fishes) {

        // Why is there a backtick used for this string?
        htmlString += `<h3>Species: ${fish.species}</h3>
        <div class="${fish.species}image">
            <p>Length: ${fish.length} ft</p>
            <p>Fish name: ${fish.name}</p>
            <p>Harvest Location: ${fish.harvestLocation}</p>
            <p>Fish Food: ${fish.fishFood}</p>
        </div>
`
    }
    htmlString += `</article>`

    return htmlString
}



