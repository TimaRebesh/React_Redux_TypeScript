import { TabBarAction, TABBAR_SWITCH } from "../reducers/tabBarReducer"

export const switchTabBar = (tabNumber: number): TabBarAction => {
    return {
        type: TABBAR_SWITCH,
        tab: tabNumber
    }
}
