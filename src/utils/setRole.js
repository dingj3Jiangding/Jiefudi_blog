// src/scripts/setRole.js
export function setRole(role) {
    document.cookie = `role = ${role}; path=/; max-age = 86400`;
}

export function getRole() {
    // 判断运行环境是否为浏览器
    if (typeof document === 'undefined') {
      return 'visitor'; // 默认角色，服务端返回安全值
    }
  
    // 浏览器中读取 Cookie
    const match = document.cookie.match(/(?:^|; )role=([^;]*)/);
    return match ? match[1] : 'visitor';
  }