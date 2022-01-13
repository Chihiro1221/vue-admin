import store from "@/utils/store";
import {cacheEnum} from "@/enum/cacheEnum";
import router from "@/router";
import userApi, {IFormDate} from "@/apis/userApi";
import utils from "@/utils/index";
import {userStore} from "@/store/userStore";


export async function login(values: IFormDate) {
    const {result: {token}} = await userApi.login(values)
    utils.store.set(cacheEnum.TOKEN_NAME, {token})
    const routeName = utils.store.get(cacheEnum.REDIRECT_ROUTE_NAME)?.route_name ?? 'home'
    router.push({name: routeName})
}

export function logout() {
    store.remove(cacheEnum.TOKEN_NAME)
    router.push('/')
    userStore().info = null
}