import styles from './App.module.scss'
import Items from '../Items'
import Header from '../Header/Header'
import Menu from '../Menu'
import Content from '../Content'
import { FloatingButton } from '../../shared/buttons'
import { ButtonContainer } from '../../shared/buttons'

function App() {

  return (
    <>
      <ButtonContainer>
        <div className={styles.app}>
          <Header />
          <Content>
            <Items />
            <FloatingButton primary>+</FloatingButton>
          </Content>
          <Menu />
        </div>
      </ButtonContainer>
    </>
  )
}

export default App
