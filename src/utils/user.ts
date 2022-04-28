import store from "@/utils/store";
import {cacheEnum} from "@/enum/cacheEnum";
import router from "@/router";
import userApi, {IFormDate} from "@/apis/userApi";
import utils from "@/utils/index";
import {userStore} from "@/store/userStore";

export function isLogin() {
  return Boolean(utils.store.get(cacheEnum.TOKEN_NAME));
}

export async function login(values: IFormDate) {
  const {data: {token}} = await userApi.login(values)
  utils.store.set(cacheEnum.TOKEN_NAME, {token})
  await userStore().getUserInfo()
  const routeName = utils.store.get(cacheEnum.REDIRECT_ROUTE_NAME)?.route_name ?? 'home'
  await router.push({name: routeName})
}

export function logout() {
  store.remove(cacheEnum.TOKEN_NAME)
  void router.push('/')
  userStore().info = null
}