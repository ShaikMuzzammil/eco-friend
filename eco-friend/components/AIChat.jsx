import React, { useState } from 'react';
import axios from 'axios';

export default function AIChat() {
  const [messages, setMessages] = useState([{ from: 'ai', text: "Hi — I'm Lumina, your Eco Friend. Tell me how you feel." }]);
  const [input, setInput] = useState('');

  async function send() {
    if (!input.trim()) return;
    setMessages(m => [...m, { from: 'user', text: input }]);
    const prompt = input
