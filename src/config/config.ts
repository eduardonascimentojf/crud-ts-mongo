const MONGO_OPTIONS = {
     useNewUrlParser: true,
     useUnifiedTopology: true
}
// const MONGO_USERNAME = process.env.MONGO_USERNAME || 'superuser';
// const MONGO_PASSWORD = process.env.MONGO_USERNAME || 'supersecretpassword1';
// const MONGO_HOST = process.env.MONGO_URL || `ds343895.mlab.com:43895/mongobongo`;
const MONGO = {
//     host: MONGO_HOST,
    url: 'mongodb://localhost:27017/crud-ts-mongo',
    options: MONGO_OPTIONS
}
const SERVER_PORT = 5050;

const SERVER = {
    port: SERVER_PORT
};

const config = {
    mongo: MONGO,
    server: SERVER
};

export default config;