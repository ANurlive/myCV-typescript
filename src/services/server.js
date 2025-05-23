import { createServer, Model } from "miragejs";
import { educationData } from "../constants/aboutMe";

createServer({
  models: {
    skill: Model,
  },

  seeds(server) {
    const savedSkills = localStorage.getItem("skills");
    if (savedSkills) {
      JSON.parse(savedSkills).skills.forEach((element) => {
        server.create("skill", element);
      });
    }
  },

  routes() {
    this.namespace = "api";

    this.get(
      "/educations",
      () => {
        return educationData;
      },
      { timing: 3000 }
    );

    this.get(
      "/skills",
      (schema) => {
        return schema.all("skill");
      },
      { timing: 3000 }
    );

    this.post("/skills", (schema, request) => {
      const newSkill = JSON.parse(request.requestBody);
      schema.create("skill", newSkill);

      const allSkills = schema.all("skill").models.map((model) => model.attrs);
      localStorage.setItem("skills", JSON.stringify(allSkills));

      return schema.all("skill");
    });
  },
});
