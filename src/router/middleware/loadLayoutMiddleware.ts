import type { RouteLocationNormalizedGeneric } from 'vue-router'

export async function loadLayoutMiddleware(
    route: RouteLocationNormalizedGeneric
) {
    try {
        const layout = route.meta.layout || 'DefaultLayout'

        const layoutComponent = await import(`layouts/${layout}.vue`)
        route.meta.layoutComponent = layoutComponent.default
    } catch (e) {
        console.error('Error occurred in processing of layouts: ', e)
        const layout = 'DefaultLayout'
        const layoutComponent = await import(`layouts/${layout}.vue`)
        route.meta.layoutComponent = layoutComponent.default
    }
}
