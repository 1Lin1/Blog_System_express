import {request} from "./request";

export function registerUser(userName,passWord) {
  return request({
    url:'',
    method:'post',
    data:{
      userName:userName,
      passWord:passWord,
    }
    
  })
}