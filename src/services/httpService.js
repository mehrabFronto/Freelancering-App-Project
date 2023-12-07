import axios from "axios";

const BASE_URL = "http://localhost:5000/api";

const app = axios.create({
   baseURL: BASE_URL,
   withCredentials: true,
});

app.interceptors.request.use(
   (res) => res,
   async (err) => Promise.reject(err),
);

app.interceptors.response.use(
   (res) => res,
   (err) => {
      const originalConfig = err.config;
      if (err.response.status === 401 && !originalConfig._retry) {
         // to prevent loop
         originalConfig._retry = true;

         // get new tokens
         try {
            const { data } = axios.get(`${BASE_URL}/user/refresh-token`, {
               withCredentials: true,
            });

            // continue the process that caused the 401 error
            if (data) return app(originalConfig);
         } catch (error) {
            return Promise.reject(error);
         }
      }
      return Promise.reject(err);
   },
);

const http = {
   get: app.get,
   post: app.post,
   delete: app.delete,
   put: app.put,
   patch: app.patch,
};

export default http;
