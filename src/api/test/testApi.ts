import request from "@/utils/request";

const dispatchTask = () => {
  return request.get('/index/dispatch')
}


export {
  dispatchTask
}