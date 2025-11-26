export default async function MealPage({ params }) {
    const {id} = await params
    return <h1>{id}</h1>
}