import { Cards } from "../utils/Cards"
import Pack from "../utils/Pack"

type ServerResponse = {
    responseCode: number,
    message: string | Array<string>,
    data: Cards | Pack | null
}

export default ServerResponse;