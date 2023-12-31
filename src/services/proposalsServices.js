import http from "./httpService";

export function changeProposalStatusApi({ proposalId, ...data }) {
   return http
      .patch(`/proposal/${proposalId}`, data)
      .then(({ data }) => data.data);
}

export function getProposalsApi(data) {
   return http.get(`/proposal/list`, data).then(({ data }) => data.data);
}

export function createNewProposalApi(data) {
   return http.post("/proposal/add", data).then(({ data }) => data.data);
}
