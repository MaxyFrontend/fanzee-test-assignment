type Result<T> = {
    data: T | null
    error: unknown | null
    status: number | null
}

export default async function fetchData<T>(url: string): Promise<Result<T>> {
    try {
        const response = await fetch(url)
        if (response.ok) {
            const res: T = await response.json()
            return { data: res, error: null, status: response.status }
        }
        return {
            data: null,
            error: null,
            status: response.status
        }
    } catch (err: unknown) {
        console.error(err)
        return {
            data: null,
            error: err,
            status: null
        }
    }
}
