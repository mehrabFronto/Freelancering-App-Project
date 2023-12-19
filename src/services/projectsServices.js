import http from "./httpService";

export function getOwnerProjects() {
   return http.get("/project/owner-projects").then(({ data }) => data.data);
}

export function removeOwnerProject(id) {
   return http.delete(`/project/${id}`).then(({ data }) => data.data);
}

export function createProject(data) {
   return http.post("/project/add", data).then(({ data }) => data.data);
}

export function editProjectApi({ id, newProject }) {
   return http
      .patch(`/project/update/${id}`, newProject)
      .then(({ data }) => data.data);
}
