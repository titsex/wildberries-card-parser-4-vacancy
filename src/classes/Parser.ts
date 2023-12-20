import Logger from '@class/Logger'

class Parser {
    async makeRequest(url: string) {
        const productId = this.getProductIdFromURL(url)

        try {
            const response = await fetch(`https://card.wb.ru/cards/detail?dest=-1255987&nm=${productId}`)

            const { data } = await response.json()

            return data
        } catch (error) {
            Logger.error(error)
        }
    }

    private getProductIdFromURL(url: string) {
        return url.match(/(\d+)/)![0]
    }
}

export default Parser
