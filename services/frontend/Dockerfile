FROM node:22

WORKDIR /app

# Optional: install Python if needed
RUN apt-get update && apt-get install -y python3 python3-pip

COPY . .

RUN npm install

CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]