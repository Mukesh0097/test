const epxress = require("express");

const app = epxress();

app.use(epxress.urlencoded({ extended: false }));
app.use(epxress.json());

app.get("/api", (req, res) => {
  res.send("hello world");
});

app.get("/api/users", (req, res) => {
  res.send("users");
});

app.listen(5000, () => {
  console.log("server is running on port 50000");
});
