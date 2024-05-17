import { dispatchTask } from '@/api/test/testApi'

const Home = () => {

    const sendTask = () => {
        console.log('sendTask')
        dispatchTask().then(res => {
            console.log(res)
        })
    }

    return (
        <>
            <div>home</div>
            <button onClick={sendTask}>sendTask</button>
        </>
    )
}

export default Home