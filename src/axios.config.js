/*
 * @Author: your name
 * @Date: 2022-03-04 09:32:17
 * @LastEditTime: 2022-03-04 12:33:51
 * @LastEditors: your name
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \mono-luck-front\src\axios.config.js
 */
import Axios from "axios";

const axios = (baseURL) => {
  const instance = Axios.create({
    baseURL: baseURL || "https://f336-211-72-239-241.ngrok.io", //back-end
    headers: { "Content-Type": "application/json" },
    timeout: 1000,
  });

  return instance;
};

export { axios };
export default axios();
