import { CanActivateFn, Router } from '@angular/router';

export const myAuthGuardServiceGuard: CanActivateFn = (route, state) => {
  const router = new Router();
  // const localService = new LocalStorageService();
  const loginfo = localStorage.getItem("admin");
  if(loginfo!=null)
  {
    return true;
  }
  else
  {
    return false;
  }
};
