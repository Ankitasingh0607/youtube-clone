import { legacy_createStore as createStore,applyMiddleware , combineReducers} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { authReducer } from './reducers/auth.reducer'
import { homeVideosReducer, relatedVideoReducer, searchedVideosReducer } from './reducers/video.reducer'
import { selectedVideoReducer } from './reducers/video.reducer'
import { channelDetailsReducer} from './reducers/channel.reducer'
import { commentListReducer} from './reducers/comment.reducer'


const rootReducer = combineReducers({
   auth: authReducer ,
   homeVideos: homeVideosReducer, 
  selectedVideo: selectedVideoReducer,
  channelDetails : channelDetailsReducer,
  commentList : commentListReducer,
  relatedVideos: relatedVideoReducer,
  searchedVideos:searchedVideosReducer,
})


const store = createStore(rootReducer,{},composeWithDevTools(applyMiddleware(thunk)))

export default store