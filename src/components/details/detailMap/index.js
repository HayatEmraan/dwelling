const { default: dynamic } = require("next/dynamic");

const DetailsMap = dynamic(() => import('./DetailsMap'), {
    ssr: false
})
export default DetailsMap