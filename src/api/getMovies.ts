import httpClient from '@/httpClient/'
import type MoviesList from 'types/Movies'

type response = {
    items: MoviesList
}
interface result {
    data: MoviesList | null
    error: unknown | null
    status: number | null
}

export default async function (): Promise<result> {
    const url: string = `${import.meta.env.APP_API_BASE_URL}data.json`
    const result = await httpClient<response>(url)

    //emulate long request
    await new Promise((res) => {
        setTimeout(res, 200)
    })

    return {
        ...result,
        data: result.data?.items || null
    }
}
