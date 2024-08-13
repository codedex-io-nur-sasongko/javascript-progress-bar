import { useCallback, useState } from 'react'
import './App.css'
import ProgressBar from './components/ProgressBar'
import Button from './components/Button';
import PlusIcon from "./assets/plus.svg";
import MinusIcon from "./assets/minus.svg";
import BuiltWithLove from './components/Love';

function App() {
  const [progress, setProgress] = useState(0);

  const onProgressBtnClick = useCallback((mode) => {
    if (mode === 'increase' && progress < 100) {
      setProgress(progress + 10)
    }

    else if (mode === 'decrease' && progress > 0) {
      setProgress(progress - 10)
    }
  }, [progress])

  return (
    <div className=''>
      <ProgressBar progress={progress} />
      <div className='container-button'>
        <Button
          onClick={() => onProgressBtnClick('increase')}
        >
          <img src={PlusIcon} alt="Plus Icon" />
        </Button>
        <Button
          onClick={() => onProgressBtnClick('decrease')}
        >
          <img src={MinusIcon} alt="Minus Icon" />
        </Button>
      </div>
      <BuiltWithLove />
    </div>
  )
}

export default App
