db.createUser({
  user: "myappuser",
  pwd: "takashi123",
  roles: [{ role: "readWrite", db: "insuranceDB" }]
});

