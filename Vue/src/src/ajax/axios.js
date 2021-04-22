

import axios from 'axios'
  
// const ins = axios.create(); // 创建一个axios的实例
// ins.interceptors.response.use(function(resp) {
//   if (resp.data.code !== 0) {
//     return null;
//   }
//   return resp.data.data;
// });


export async  function getBanners() {
  let req = await axios.get('api/banner')
  return(req.data.data)
  
}

export async function getblogs(page=1,limit=10,cate=-1) {
  return await (await axios.get('api/blog', {
    params: {
      page,
      limit,
      cate
    }
  })).data.data
}

export async function getblogTypes() {
  return await (await axios.get('api/blogtypes')).data.data
}

// getBanners()



