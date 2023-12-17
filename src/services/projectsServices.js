import http from "./httpService";

export function getOwnerProjects() {
   return http.get("/project/owner-projects").then(({ data }) => data.data);
}

export function removeOwnerProject(id) {
   return http.delete(`/project/${id}`).then(({ data }) => data.data);
}