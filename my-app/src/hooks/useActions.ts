import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import * as UseActionCreators from '../store/actiron-creators/users'

export const useActions = ()=> {
    const dispatch = useDispatch();
    return bindActionCreators(UseActionCreators, dispatch);
}
