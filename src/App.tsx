import classes from './App.module.css';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { Home } from './pages/Home';
import { Page } from './pages/Page';
import { HookPage } from './pages/HookPage';
import { createContext, ReactNode, useContext, useState } from 'react';

interface ICounterContext {
  readonly count: number;
  readonly setCount: (value: number) => void;
}

export const CounterContext = createContext<ICounterContext>({
  count: 0,
  setCount: () => { return }
});

interface CounterWrapperProps {
  readonly children: ReactNode;
}

function CounterWrapper(props: CounterWrapperProps) {
  const [contextCount, setContextCount] = useState(0)

  return (
    <CounterContext.Provider value={{
      count: contextCount,
      setCount: setContextCount
    }}>
      {props.children}
    </CounterContext.Provider>
  )
}

function App() {
  const navigate = useNavigate()

  return (
    <CounterWrapper>
      <div className={classes.column}>
        <div className={classes.row}>
          <button onClick={() => navigate('/')}>Home</button>
          <button onClick={() => navigate('/pagina')}>Pagina</button>
          <button onClick={() => navigate('/hook')}>Hook Page</button>
          <DisplayCounter/>
        </div>
        <Routes>
          <Route element={<Home/>} path='/'></Route>
          <Route element={<Page/>} path='/pagina'></Route>
          <Route element={<HookPage/>} path='/hook'></Route>
        </Routes>
      </div>
    </CounterWrapper>
  );
}

function DisplayCounter() {
  const context = useContext(CounterContext)

  return (
    <p>
      {context.count}
    </p>
  )
}

export default App;
