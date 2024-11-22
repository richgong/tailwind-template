import React from 'react';
import { Button } from './components/ui/button'; // Adjust the path based on your Shadcn setup

const App: React.FC = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Welcome to Webp App with Shadcn</h1>
      <Button className="mt-4">Click Me</Button>
    </div>
  );
};

export default App;
