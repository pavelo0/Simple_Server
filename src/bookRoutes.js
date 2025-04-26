"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
const books = [
    { id: 1, title: 'Book1', author: 'Author1' },
    { id: 2, title: 'Book2', author: 'Author2' },
    { id: 3, title: 'Book3', author: 'Author3' },
    { id: 4, title: 'Book4', author: 'Author4' },
    { id: 5, title: 'Book5', author: 'Author5' },
    { id: 6, title: 'Book6', author: 'Author6' },
    { id: 8, title: 'Book7', author: 'Author7' },
    { id: 9, title: 'Book8', author: 'Author8' },
    { id: 10, title: 'Book9', author: 'Author9' },
    { id: 11, title: 'Book10', author: 'Author10' },
    { id: 12, title: 'Book11', author: 'Author11' },
    { id: 13, title: 'Book12', author: 'Author12' },
    { id: 14, title: 'Book13', author: 'Author13' },
    { id: 15, title: 'Book14', author: 'Author14' },
];
router.get('/books', (req, res) => {
    res.json(books);
});
router.get('/books/:id', (req, res) => {
    const bookID = parseInt(req.params.id);
    const book = books.find((b) => b.id === bookID);
    book ? res.json(book) : res.status(404).json({ message: 'Book not found' });
});
router.post('/books', (req, res) => {
    const newBook = {
        id: books.length + 1,
        title: req.body.title,
        author: req.body.author,
    };
    books.push(newBook);
    res.status(201).json(newBook);
});
router.put('/books/:id', (req, res) => {
    const bookID = parseInt(req.params.id);
    const bookIndex = books.findIndex((b) => b.id === bookID);
    if (bookIndex !== -1) {
        books[bookIndex] = {
            id: bookID,
            title: req.body.title,
            author: req.body.author,
        };
        res.json(books[bookIndex]);
    }
    else {
        res.status(404).json({ massage: 'Book not found' });
    }
});
router.delete('/books/:id', (req, res) => {
    const bookID = parseInt(req.params.id);
    const bookIndex = books.findIndex((b) => b.id === bookID);
    if (bookIndex !== -1) {
        const delBook = books.find((b) => b.id === bookID);
        books.splice(bookIndex, 1);
        res.json(delBook);
    }
    else {
        res.status(404).json({ message: 'Book not found' });
    }
});
exports.default = router;
