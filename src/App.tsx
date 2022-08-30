import React from 'react';
import logo from './logo.svg';
import './App.css';
import { ChakraProvider } from '@chakra-ui/react';
import Card from './components/Card';

function App() {
  return (
	<ChakraProvider>
		{[1,1,1,1,1].map((_, i) => {
			return <Card key={i}/>
		})}
	</ChakraProvider>
  );
}

export default App;
