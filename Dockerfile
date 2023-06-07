FROM node:14

EXPOSE 8080

# RUN npm config set @sixthsense:registry https://artifacts-observability.sixthsense.rakuten.com/api/v4/projects/3/packages/npm/
# RUN npm config set -- '//artifacts-observability.sixthsense.rakuten.com/api/v4/projects/3/packages/npm/:_authToken' "M4A73Y4q8V5xru2iy8YQ"
# RUN npm install @sixthsense/sixthsense-node-js --force
RUN npm install --save dd-trace
RUN npm i

WORKDIR /opt/server

COPY . /opt/server/

CMD ["node", "server.js"]

