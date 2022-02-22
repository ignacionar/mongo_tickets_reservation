import Header from "../components/Header";
import { toggleHiddenMenu } from '../redux/user/user-actions';
import { useSelector, useDispatch } from 'react-redux';
import { Background } from '../components/Background'
import Footer from "../components/Footer";
import PassageForm from './../components/PassageForm/PassageForm';

export default function Home() {

  const hiddenMenu = useSelector(state => {
    return state.user.hiddenMenu
  })

  const dispatch = useDispatch()

  const handlerToggle = () => {
    if (hiddenMenu) {
      dispatch(toggleHiddenMenu())
    }
  }
  

  return (
    <span onClick={() => {handlerToggle()}}>
      <Header/>
      <Background src={'airplane.jpg'}/>
      <PassageForm/>
      <Footer/>
    </span>

    
  )
}
