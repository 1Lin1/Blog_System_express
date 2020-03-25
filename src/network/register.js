import {request} from "./request";

export function registerUser(userName,passWord) {
  return request({
    url:'/user/register',
    method:'post',
    data:{
      userName:userName,
      passWord:passWord,
    }
    
  })
}