import styles from './App.module.scss'
import Items from '../Items'
import Header from '../Header/Header'
import Menu from '../Menu'
import Content from '../Content'
import { FloatingButton } from '../../shared/buttons'
import { ButtonContainer } from '../../shared/buttons'
import Stats from '../Stats'
import Settings from '../Settings'

function App() {

  return (
    <>
      <ButtonContainer>
        <div className={styles.app}>
          <Header />
          <Content>
          <Settings />
          </Content>
          <Menu />
        </div>
      </ButtonContainer>
    </>
  )
}

export default App
