FROM node
WORKDIR /app
ADD . /app
RUN npm install

ENV PORT 3000
ENV IP "172.17.0.4"
ENV USER "root"
ENV PASS "12345"

CMD ["node","index.js"]
