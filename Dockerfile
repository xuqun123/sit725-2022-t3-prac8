from node

WORKDIR /app

COPY . .

expose 3000

run npm install

CMD ["npm", "start"]
