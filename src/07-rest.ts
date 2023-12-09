import { User, ROLES } from "./01-enum"

const currentUser: User = {
  username:'nico',
  role: ROLES.CUSTOMER
}

export const checkAdminRole = () => {
  if (currentUser.role == ROLES.ADMIN) {
    return true;
  }
  return false;
}

console.log('checkAdminRole',checkAdminRole())

export const checkRole = (...roles:string[]) => {
  if (roles.includes(currentUser.role)) {
    return true;
  }
  return false;
}

console.log('checkRole',checkRole(ROLES.ADMIN, ROLES.CUSTOMER));

