import request from "../request";

export function getIndex() {
  return request({
    url: "/v1/getIndex",
    method: "post"
  });
}
