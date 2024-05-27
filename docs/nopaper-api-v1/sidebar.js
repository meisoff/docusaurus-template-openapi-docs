module.exports = [
    { type: "doc", id: "nopaper-api/подписание-кэп-во-внешней-системе" },
    {
        type: "category",
        label: "Первоначальные проверки",
        link: { type: "doc", id: "nopaper-api/первоначальные-проверки" },
        items: [
            {
                type: "doc",
                id: "nopaper-api/nopaper",
                label: "Проверить наличие пользователя в nopaper",
                className: "api-method get",
            },
            {
                type: "doc",
                id: "nopaper-api/проверить-наличие-компании",
                label: "Проверить наличие компании",
                className: "api-method get",
            },
            {
                type: "doc",
                id: "nopaper-api/1",
                label: "Получить список компаний где пользователь является сотрудником",
                className: "api-method get",
            },
        ],
    },
    {
        type: "category",
        label: "Создание документа",
        link: { type: "doc", id: "nopaper-api/создание-документа" },
        items: [
            {
                type: "doc",
                id: "nopaper-api/2",
                label: "Создать черновик документа с заданным маршрутом",
                className: "api-method post",
            },
            {
                type: "doc",
                id: "nopaper-api/3",
                label: "Прикрепить файл к документу",
                className: "api-method post",
            },
            {
                type: "doc",
                id: "nopaper-api/4",
                label: "Отправить документ в работу",
                className: "api-method post",
            },
        ],
    },
    {
        type: "category",
        label: "Информация о документе",
        link: { type: "doc", id: "nopaper-api/информация-о-документе" },
        items: [
            {
                type: "doc",
                id: "nopaper-api/5",
                label:
                    "Получить список исходящих и входящих документов с использованием фильтров",
                className: "api-method get",
            },
            {
                type: "doc",
                id: "nopaper-api/6",
                label: "Получить детальную информацию о пакете документов",
                className: "api-method get",
            },
            {
                type: "doc",
                id: "nopaper-api/7",
                label: "Получить идентификаторы файлов",
                className: "api-method get",
            },
            {
                type: "doc",
                id: "nopaper-api/8",
                label: "Получить файлы по идентификаторам",
                className: "api-method post",
            },
            {
                type: "doc",
                id: "nopaper-api/9",
                label: "Получить подписи файлов",
                className: "api-method get",
            },
        ],
    },
    {
        type: "category",
        label: "Работа с документом",
        link: { type: "doc", id: "nopaper-api/работа-с-документом" },
        items: [
            {
                type: "doc",
                id: "nopaper-api/10",
                label: "Создать контейнер на подписание",
                className: "api-method post",
            },
            {
                type: "doc",
                id: "nopaper-api/11",
                label: "Отправить подписи на проверку",
                className: "api-method post",
            },
            {
                type: "doc",
                id: "nopaper-api/12",
                label: "Отозвать документ",
                className: "api-method put",
            },
            {
                type: "doc",
                id: "nopaper-api/13",
                label: "Отклонить документ от подписи",
                className: "api-method put",
            },
            {
                type: "doc",
                id: "nopaper-api/14",
                label: "Изменить разрешение редактирования маршрута",
                className: "api-method patch",
            },
            {
                type: "doc",
                id: "nopaper-api/15",
                label: "Напомнить о подписании документа",
                className: "api-method post",
            },
        ],
    },
];
