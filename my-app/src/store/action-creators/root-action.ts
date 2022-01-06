import * as UserActionCreators from './users'
import * as CommentsActionCreators from './comments'
import * as AlbumsActionCreators from './albums'
import * as PhotosActionCreators from './photos'
import * as TabBarActionCreators from './tabbar'

export default {
    ...TabBarActionCreators,
    ...UserActionCreators,
    ...CommentsActionCreators,
    ...AlbumsActionCreators,
    ...PhotosActionCreators,
}
