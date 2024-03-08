
// var jsonArray = [
//     {"id": 1, "creation_date": "2023-01-15T10:30:00"},
//     {"id": 2, "creation_date": "2022-12-05T14:45:00"},
//     {"id": 3, "creation_date": "2024-02-13T08:00:00"},
//     // Добавьте остальные объекты с полями creation_date
// ];

// // Сортировка массива по полю creation_date
// jsonArray.sort(function(a, b) {
//     // Преобразование строковых дат в объекты Date для сравнения
//     var dateA = new Date(a.creation_date);
//     var dateB = new Date(b.creation_date);

//     // Сравнение дат для определения порядка сортировки
//     return dateB - dateA;
// });

// // Вывод отсортированного массива
// console.log(JSON.stringify(jsonArray, null, 2));


'use strict'
const x = 10;
console.log(x);
// const data = [
//     {   "type": "parkovka",
//         "publicationDate": "2023-08-20"   //    YYYY-MM-DDTHH:mm:ss.sssZ
//     },

//     {
//         "type": "kladovka",
//         "publicationDate": "2023-01-15"
//     },

//     {
//         "type": "commercial",
//         "publicationDate": "2024-02-13"
//     }
// ];
// console.log('sfsdfscsdsd');
// const descend_dates = (a,b) => (new Date(a.publicationDate) - new Date(b.publicationDate));
// console.log(data.sort(descend_dates));