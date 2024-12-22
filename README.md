# to_do_backend

first, create a .env file at the root project directory with the following variables
PORT=5000
DATABASE_URL="mysql://USERNAME:PASSWORD@DOMAIN:PORT/to_do"

replace PORT with your port and the MySQL username, password, domain, and port with the one from your mysql server

see .env.example

Then run yarn install
next run npx prisma migrate dev
next run npx prisma generate
finally run yarn start
