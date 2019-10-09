Full stack application with Node and Express to simulate a hotel booking.

How to use it:

1st: Download the repo and execute 'npm install' to install the dependencies
2nd: Lift the server executing 'npm run dev' in the terminal
3d: Create inside the project folder a file named ".env" and paste inside this code:
"PORT=3000
ENV=development"
4th: Open the browser and go to "localhost:3000"

DB:
It doesn't have a database behind. If I implemented one I would need a model with the user schema, another one with the hotels and another for reservations. Each hotel would have in it's model the different type of rooms it has in an array of objects, the dates of availability and the bookings in each date . Each user would have his rooms booked as well, in the schema.


/////////////////

Aplicación full stack con Node y Express simulando una reserva de hotel.

Cómo usar:

1º: Descarga el repositorio y ejectura 'npm install' para instalar las dependencias
2º: Levanta el servidor ejercutando 'npm run dev' en la terminal
3º: Crea un archivo llamado ".env" en la misma carpeta del proyecto y pega dentro este código:
"PORT=3000
ENV=development"

4º: Abre el navegador y ve a la dirección "localhost:3000

BD: 
La aplicación no tiene implementada una base de datos. Si la creara, necesitaría un modelo para el usuario, otro con los hoteles y otro con las reservas.
Cada hotel tendría en su modelo los diferentes tipos de habitaciones disponibles. También contedría las fechas de disponibilidad, cada una de ellas con las habitaciones reservadas y las disponibles. Cada usuario tendría también sus reservas realizadas en su modelo.
