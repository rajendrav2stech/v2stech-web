export const getPathName = (lastUrlPath = false) => {
    const pathname = window.location.pathname
    return lastUrlPath ? pathname.split('/').slice(-1) : pathname
}