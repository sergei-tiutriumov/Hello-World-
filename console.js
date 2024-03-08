'use strict'
const data = [
    {   "type": "parkovka",
        "publicationDate": "2023-08-20"   //  YYYY-MM-DDTHH:mm:ss.sssZ
    },

    {
        "type": "kladovka",
        "publicationDate": "2023-01-15"
    },

    {
        "type": "commercial",
        "publicationDate": "2024-02-13"
    }
];
const descend_dates = (a,b) => (new Date(b.publicationDate) - new Date(a.publicationDate));
console.log(data.sort(descend_dates));