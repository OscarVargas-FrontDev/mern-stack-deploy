const mongoose = require("mongoose");
const connection =
    "mongodb+srv://safsasd:sNtLZgLyUF7jDURp@cluster0.tpq0k.mongodb.net/test?authSource=admin&replicaSet=atlas-11rjuj-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true";
mongoose
    .connect(connection, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
    })
    .then(() => console.log("Database Connected Successfully"))
    .catch((err) => console.log(err));