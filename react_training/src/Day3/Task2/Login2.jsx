import React from 'react'
import ParentProvider, { ThemeProvider } from './Parent'
import Child from './Child'

const Login2 = () => {
  return (
    <div>
      <ThemeProvider>
       <ParentProvider>
         <Child/>
       </ParentProvider>
       </ThemeProvider>
    </div>
  )
}

export default Login2
