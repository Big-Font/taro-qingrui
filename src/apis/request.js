import Taro from "@tarojs/taro";
import config from "../config";

export default (options = { method: "GET", data: {} }) => {
  return Taro.request({
    url: `${config.baseUrl}${options.url}`,
    data: { ...options.data },
    header: {
      "Content-Type": "application/json"
    },
    method: options.method.toUpperCase()
  }).then(res => {
    const { statusCode, data } = res;
    if (statusCode >= 200 && statusCode < 300) {
      if (data.code !== 0) {
        Taro.showToast({
          title: `${data.message}` || `${data.code}`,
          icon: "none",
          mask: true
        });
      }
      return data;
    } else {
      throw new Error(`网络请求错误，状态码${statusCode}`);
    }
  });
};
