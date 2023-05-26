import './styles.css'
import Image from './react.png'
import ReactLogo from './logo.svg'
import ClickCounter from './clickCounter'
export const App = () => {
  return (
    <div>
      <h1>React-Template for scratch - {process.env.NODE_ENV}</h1>
      <img src={Image} alt="react logo" width="50" height="50" />
      <img src={ReactLogo} alt="react logo" width="50" height="50" />
      <ClickCounter />
    </div>
  )
}
