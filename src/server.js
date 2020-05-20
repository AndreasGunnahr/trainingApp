import { Server, Model } from "miragejs";

const makeServer = () => {
  return new Server({
    models: {
      user: Model,
    },

    // seeds(server) {
    //   server.create("todo", { text: "Learn Mirage" });
    //   server.create("todo", { text: "Learn Mirage" });
    //   server.create("todo", { text: "Learn Mirage" });
    // },

    routes() {
      this.namespace = "api";

      this.get("/users", (schema) => {
        return schema.users.all();
      });

      this.post("/users", (schema, request) => {
        let attrs = JSON.parse(request.requestBody);
        return schema.users.create(attrs);
      });
    },
  });
};

export default makeServer;
