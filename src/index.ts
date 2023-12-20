import Parser from '@class/Parser'
import Logger from '@class/Logger'

const URL = 'https://www.wildberries.ru/catalog/146972802/detail.aspx'

const start = async () => {
    const parser = new Parser()
    Logger.info(await parser.makeRequest(URL))
}

start()
