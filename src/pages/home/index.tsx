import { dispatchTask } from '@/api/test/testApi'
import { useDispatch, useSelector } from 'react-redux'
import { setUserInfo } from '@/store/model/user'

const Home = () => {
    
    const username = useSelector((state:any) => state.user.userInfo.username)
    const dispatch = useDispatch()
    const sendTask = () => {
        console.log('sendTask')
        dispatchTask().then(res => {
            console.log(res)
        })
        dispatch(setUserInfo({username: 'admin'}))
    }

    return (
        <>
            <div>home</div>
            <div>{username}</div>
            <button onClick={sendTask}>sendTask</button>
        </>
    )
}

export default Home