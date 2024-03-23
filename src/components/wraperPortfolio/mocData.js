export const mockData = [
	{
		id: 1, // id
		type: 'Ремонт под ключ', // тип ремонта
		description:
			'Однокомнатная квартира в современном стиле в бежевых оттенках с оливковым и терракотовым контрастами для семейной пары, с прихожей, кухней-гостиной, спальней, балконом, гардеробной и санузлом.', // короткое описание
		listWorks: [
			['штукатурка стен по маякам'],
			['шпаклёвка стен под покраску'],
			['покраска стен'],
			['подготовка под покраску и покраска потолка'],
			['настил ламината без порожков'],
			['монтаж плинтуса'],
			['плиточные работы'],
			['работы с гипсокартоном'],
			['сантехнические работы'],
			['электромонтажные работы'],
			['сборка нового электрощита'] //какие работы были проведены
		],
		area: 74, // площадь квартиры
		price: 850000, // цена ремонта
		location: 'Ул.Cавушкина 12к3',
		photos: [
			'/static/archive/MocPortfolio/object_01/item_01.jpeg',
			'/static/archive/MocPortfolio/object_01/item_02.jpeg',
			'/static/archive/MocPortfolio/object_01/item_03.jpeg',
			'/static/archive/MocPortfolio/object_01/item_04.jpeg',
			'/static/archive/MocPortfolio/object_01/item_05.jpeg',
			'/static/archive/MocPortfolio/object_01/item_06.jpeg',
			'/static/archive/MocPortfolio/object_01/item_07.jpeg'
		]
	},
	{
		id: 2, // id
		type: 'Дизайнерский ремонт', // тип ремонта
		description: 'Однокомнатная квартира в современном стиле', // короткое описание
		listWorks: [
			['штукатурка стен по маякам'],
			['шпаклёвка стен под покраску'],
			['покраска стен'],
			['подготовка под покраску и покраска потолка'],
			['настил ламината без порожков'],
			['монтаж плинтуса'],
			['плиточные работы']
		],
		area: 74, // площадь квартиры
		price: 730000, // цена ремонта
		location: 'Ул.Ленина 44',
		photos: [
			'/static/archive/MocPortfolio/object_02/item_01.jpeg',
			'/static/archive/MocPortfolio/object_02/item_02.jpeg',
			'/static/archive/MocPortfolio/object_02/item_03.jpeg',
			'/static/archive/MocPortfolio/object_02/item_04.jpeg',
			'/static/archive/MocPortfolio/object_02/item_05.jpeg',
			'/static/archive/MocPortfolio/object_02/item_06.jpeg',
			'/static/archive/MocPortfolio/object_02/item_07.jpeg'
		]
	},
	{
		id: 3, // id
		type: 'Косметический ремонт', // тип ремонта
		description: 'Однокомнатная квартира в современном стиле', // короткое описание
		listWorks: [
			['штукатурка стен по маякам'],
			['шпаклёвка стен под покраску'],
			['покраска стен'],
			['сантехнические работы'],
			['электромонтажные работы'],
			['сборка нового электрощита']
		],
		area: 84, // площадь квартиры
		price: 950000, // цена ремонта
		location: 'Ул.Марата 2',
		photos: [
			'/static/archive/MocPortfolio/object_03/item_01.jpeg',
			'/static/archive/MocPortfolio/object_03/item_02.jpeg',
			'/static/archive/MocPortfolio/object_03/item_03.jpeg',
			'/static/archive/MocPortfolio/object_03/item_04.jpeg',
			'/static/archive/MocPortfolio/object_03/item_05.jpeg',
			'/static/archive/MocPortfolio/object_03/item_06.jpeg'
		]
	}
]
