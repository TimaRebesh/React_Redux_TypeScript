export const TABBAR_SWITCH = 'TABBAR_SWITCH'

export interface TabBarAction {
    type: typeof TABBAR_SWITCH;
    tab: number;
}

interface TabBarState {
    tab: number
}

const ititState: TabBarState = {
    tab: 1
}

export default function tabBarReducer(state = ititState, action: TabBarAction) {
    switch (action.type) {
        case TABBAR_SWITCH:
            return { tab: action.tab };
        default:
            return state;
    }
} 
