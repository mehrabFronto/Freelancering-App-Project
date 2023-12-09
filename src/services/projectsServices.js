import http from "./httpService";

export function getOwnerProjects() {
   return http.get("/project/owner-projects").then(({ data }) => data.data);
}
