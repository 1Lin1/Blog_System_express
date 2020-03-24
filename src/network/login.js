import {request} from "./request";

export function loadUser(userName,passWord) {
  return request({
    url:'/user/register',
    method:'post',
    data:{
      userName:userName,
      passWord:passWord
    }
    
  })
}