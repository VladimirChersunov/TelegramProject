export default function authHeader() {
    
  const userStr = localStorage.getItem("user");
  let user = null;
  if (userStr)
    user = JSON.parse(userStr);

  if (user && user.accessToken) {
    return { Authorization: 'Bearer ' + user.accessToken };
  } else {
    return { Authorization: '' };
  }
  }

//   Приведенный выше код проверяет локальное хранилище на наличие user элемента.
//    Если есть авторизованный пользователь user( accessTokenJWT), 
//    вернуть HTTP-заголовок авторизации. В противном случае вернуть пустой объект.