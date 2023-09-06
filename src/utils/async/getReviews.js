export default async function () {
    const res = await fetch('https://raw.githubusercontent.com/habibur-pro/firxing/main/public/review/review.json')
    return await res.json()
}