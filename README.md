> По ТЗ, нужно одним fetch запросом на "https://www.wildberries.ru/catalog/${ID}/detail.aspx?" получить данные о товаре,
> но сделать это невозможно, так как wildberries подгружает информацию о товаре после загрузки страницы.

## Имитация браузера
> Решение №1 - Использовать, например, puppeteer для имитации браузера и ожидания подгрузки карточки товара после загрузки всей страницы.

## Сделать запрос на card.wb.ru
> Решение №2 - Мы можем одним Fetch запросом получить всю необходимую информацию, но не по указанной в ТЗ ссылке, а по типу "https://card.wb.ru/cards/detail?dest=${dest}&nm=${ID}"
