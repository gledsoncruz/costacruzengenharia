export async function getDataHome() {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/objects/66ccb1d11c372de233c1821b?read_key=${process.env.READ_KEY}&depth=1&props=slug,title,metadata,`)
        if (!res.ok) {
            throw new Error("Failed to fetch data")
        }
        return res.json()
    } catch(err) {
        throw new Error("Failed to fetch data")
    }
}