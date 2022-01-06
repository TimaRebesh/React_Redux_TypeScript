import * as UserActionCreators from './users'
import * as CommentsActionCreators from './comments'
import * as PhotosActionCreators from './photos'

export default {
    ...UserActionCreators,
    ...CommentsActionCreators,
    ...PhotosActionCreators
}
