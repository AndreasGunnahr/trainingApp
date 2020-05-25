import { Server, Model } from "miragejs";

const makeServer = () => {
  return new Server({
    // environment,
    models: {
      user: Model,
    },

    seeds(server) {
      server.create("user", {
        name: "Andreas Gunnhar",
        username: "Gunnahr",
        email: "Andreas.Gunnahr@hotmail.com",
        password: "test",
      });
    },

    routes() {
      this.namespace = "api";

      this.get("/user", (schema, request) => {
        let attrs = JSON.parse(request.requestBody);
        return schema.users.find(attrs.username);
        // return schema.users.all();
      });

      this.post("/user", (schema, request) => {
        let attrs = JSON.parse(request.requestBody);
        console.log(attrs.username);
        console.log(schema.users.find(attrs.username));
        return schema.users.find(attrs.username);
        // return schema.users.all();
      });

      this.post("/users", (schema, request) => {
        let attrs = JSON.parse(request.requestBody);
        return schema.users.create(attrs);
      });
    },
  });
};

export default makeServer;
