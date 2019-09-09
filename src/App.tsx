import React from 'react'
import './App.css'

function foo() {
    return 'Vincent'
}

const App: React.FC = () => {
    return <div className="App">Hello {foo()}</div>
}

export default App
