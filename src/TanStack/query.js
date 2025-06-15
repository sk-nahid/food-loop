const getQuery = async () => {
    const res = await fetch(`http://localhost:3000/food?limit=6`)
    const data = await res.json()

    return data
}
export default getQuery

