import React, { useState, useEffect } from 'react';
import {useParams} from 'react-router-dom';
import books from 'data/books';

const Book = () => {
	let { bookSlug } = useParams();
	const [currentBook, setCurrentBook] = useState(null);
	useEffect(() => {
		setCurrentBook(books.find((book) => book.slug === bookSlug));
	});

	if (currentBook) {
    return currentBook.description;
  } else {
    return "Ce livre n'existe pas... :'(";
  }
};

// Ensuite, je fais un conditional rendering.
// Si currentBook n'est pas nul, alors je return le contenu du livre.
// Sinon, je return un paragraphe d'erreur.
// Par défaut, j'indique que nous n'avons pas de livre sélectionné.

// Dès que le composant est monté où que l'URL change, j'appelle setCurrentBook, et je lui passe le livre.
// Alors, si currentBook contient bien un livre, je renvoie toutes ses informations.
// Sinon je mets un message d'erreur.
// Cela nous permet par exemple de ne pas avoir de bug, dans le cas où l'utilisateur rentrerait lui-même une URL personnalisée.
// C'est ce qu'on appelle un router dynamique.

export default Book;