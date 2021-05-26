const { addBooksHandler, getAllBooksHandler, getBooksByIdHandler, editBooksByIdHandler, deleteBooksByIdHandler } = require("./handler");

const routes = [
    {
        method: '*',
        path: '/',
        handler: (request, h) => {
            return 'Tidak bisa menggunakan method tersebut';
        },
    },
    {
        method: 'GET',
        path: '/',
        handler: (request, h) => {
            return 'Homepage';
        },
    },
    {
        method: 'POST',
        path: '/books',
        handler: addBooksHandler,
    },
    {
        method: 'GET',
        path: '/books',
        handler: getAllBooksHandler,
    },
    {
        method: 'GET',
        path: '/books/{id}',
        handler: getBooksByIdHandler,
    },
    {
        method: 'PUT',
        path: '/books/{id}',
        handler: editBooksByIdHandler,
    },
    {
        method: 'DELETE',
        path: '/books/{id}',
        handler: deleteBooksByIdHandler,
    },
];
 
module.exports = routes;