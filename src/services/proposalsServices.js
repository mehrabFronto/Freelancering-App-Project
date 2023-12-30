import http from "./httpService";

export function changeProposalStatusApi({ id, data }) {
   return http.patch(`/proposal/${id}`, data).then(({ data }) => data.data);
}

export function getProposalsApi(data) {
   return http.get(`/proposal/list`, data).then(({ data }) => data.data);
}
