import * as UserActionCreators from './users'
import * as CommentsActionCreators from './comments'
import * as PhotosActionCreators from './photos'
import * as TabBarActionCreators from './tabbar'

export default {
    ...UserActionCreators,
    ...CommentsActionCreators,
    ...PhotosActionCreators,
    ...TabBarActionCreators
}
