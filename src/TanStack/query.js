const getQuery = async () => {
    const res = await fetch(`https://food-loop-server.vercel.app/food?limit=6`)
    const data = await res.json()

    return data
}
export default getQuery

