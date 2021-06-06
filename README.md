# Opis API

Aplikacja prostym API służącym przechowywania ksiązek w domowej biblioteczce. 

##Aplikacja zostala napisana z wykorzystaniem: 

Node.js

MongoDB (Atlas)

Dependecies: 
"bcrypt": "^5.0.1",

"body-parser": "^1.19.0",

"dotenv": "^10.0.0",

"express": "^4.17.1",

"jsonwebtoken": "^8.5.1",

"mongoose": "^5.12.12"

## Enpointy dla Books:

GET   /books/all => wyswietla wszyskie ksiązki znajdujące sie w biblioteczce   (WYMAGANY TOKEN)

POST  /books/add => dodaje ksiązkę do biblioteki

DELETE /books/:bookId => usuwa ksiązke z danym Id z biblioteki   (WYMAGANY TOKEN)

PUT    /books/:bookId => wykonuje update na książce o danym Id w biblioteczce   (WYMAGANY TOKEN)

GET   /books/subject/:subject => znajduje wszyskie ksiązki o wybranej tematyce (np. Przyroda, Historia, etc)

GET   /books/author/:lname => znajduje wszyskie ksiązki wybranego autora


## Enpointy dla Users:

POST /users/signup  => tworzy nowego użytkownika

POST /users/login   => możliwosć logowania sie i uzskania tokena

