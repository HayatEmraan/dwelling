const { default: dynamic } = require("next/dynamic");

const DetailsMapMain = dynamic(() => import('./DetailsMap'), {
    ssr: false
})
export default DetailsMapMain;