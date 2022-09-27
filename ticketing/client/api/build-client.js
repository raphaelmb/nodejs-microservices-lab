import axios from "axios";

export default ({ request }) => {
  if (typeof window === "undefined") {
    return axios.create({
      baseURL:
        "http://ingress-nginx-controller.ingress-nginx.svc.cluster.local",
      headers: request.headers,
    });
  } else {
    return axios.create({
      baseURL: "/",
    });
  }
};
