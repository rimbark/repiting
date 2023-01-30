export const SET_FOLLOW = 'SET_FOLLOW'
export const setFollow = (userId) => ({type: SET_FOLLOW, userId})
export const SET_UNFOLLOW = 'SET_UNFOLLOW'
export const setUnFollow = (userId) => ({type: SET_UNFOLLOW, userId})
export const SET_PAGE = 'SET_PAGE'
export const setPage = (page) => ({type: SET_PAGE, page})
export const LOAD_USERS = 'LOAD_USERS'
export const loadUsers = (users) => ({type: LOAD_USERS, users})
export const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
export const setTotalUsersCount = (usersCount) => ({type: SET_TOTAL_USERS_COUNT , usersCount})

const initialState = {
  users: [],
  totalUsersCount: 0,
  currentPage: 1,
  pageSize: 10
}
const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_USERS:
      return {
        ...state,
        users: [...action.users]
      }
    case SET_FOLLOW:
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.userId)
            return {...u, followed: true}
          return u
        })
      }
    case SET_UNFOLLOW:
      return {
        ...state,
        users: state.users.map(u => {
              if (u.id === action.userId)
                return {...u, followed: false}
          return u
          })
        }
    case SET_PAGE:
      return {
        ...state,
        currentPage: action.page
      }
    case SET_TOTAL_USERS_COUNT:
      return {
        ...state,
        totalUsersCount: action.usersCount
      }
    default:
      return state
  }
}

export default usersReducer