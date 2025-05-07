import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Subscribe = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle subscription logic here
    console.log('Subscribing email:', email);
    setEmail('');
  };

  return (
    <section className="section bg-primary/10">
      
    </section>
  );
};

export default Subscribe; 