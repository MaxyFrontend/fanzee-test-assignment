import httpClient from '@/httpClient/'
import type { MovieDetail } from 'types/Movies'

type response = MovieDetail
interface result {
    data: MovieDetail | null
    error: unknown | null
    status: number | null
}

export default async function (): Promise<result> {
    const url: string = `${import.meta.env.APP_API_BASE_URL}detail.json`
    const result = await httpClient<response>(url)

    //emulate long request
    await new Promise((res) => {
        setTimeout(res, 200)
    })

    return result
}
