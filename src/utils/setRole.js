// src/scripts/setRole.js
export function setRole(role) {
    document.cookie = `role = ${role}; path=/; max-age = 86400`;
}

export function getRole() {
    const match = document.cookie.match(/(?:^|; )role=([^;]*)/);
    return match ? match[1] : 'visitor';
}