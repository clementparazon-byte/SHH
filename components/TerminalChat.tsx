import React, { useState, useEffect, useRef } from 'react';
import { Terminal, X, Minimize2, Send, Cpu } from 'lucide-react';
import { sendMessageToGemini } from '../services/geminiService';
import { ChatMessage } from '../types';

export const TerminalChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'SHF_UPLINK ESTABLISHED. READY FOR QUERY.', timestamp: Date.now() }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim() || isTyping) return;

    const userMsg: ChatMessage = { role: 'user', text: input, timestamp: Date.now() };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);

    try {
      const responseText = await sendMessageToGemini(userMsg.text);
      const modelMsg: ChatMessage = { role: 'model', text: responseText, timestamp: Date.now() };
      setMessages(prev => [...prev, modelMsg]);
    } catch (e) {
      setMessages(prev => [...prev, { role: 'model', text: 'ERR: NETWORK_FAILURE', timestamp: Date.now() }]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="terminal-toggle"
      >
        <div className="flex items-center gap-2" style={{ fontFamily: 'inherit' }}>
          <Terminal size={18} />
          <span>ASK_PARTNER_AI</span>
        </div>
      </button>
    );
  }

  return (
    <div className="terminal-window">
      {/* Header */}
      <div className="terminal-bar">
        <div className="terminal-status">
          <Cpu size={14} className="animate-pulse" />
          <span style={{ letterSpacing: '0.05em' }}>GEMINI_2.5_FLASH // SHF_NODE</span>
        </div>
        <div className="terminal-controls">
          <button onClick={() => setIsOpen(false)}><Minimize2 size={14} /></button>
          <button onClick={() => setIsOpen(false)} style={{ color: '#ef4444' }}><X size={14} /></button>
        </div>
      </div>

      {/* Messages */}
      <div className="terminal-content" ref={scrollRef}>
        {messages.map((msg, idx) => (
          <div key={idx} className={`chat-msg ${msg.role}`}>
            <span className="msg-label">
              {msg.role === 'user' ? 'USER@LOCAL' : 'ROOT@SHF'}
            </span>
            <div className="msg-bubble">
              {msg.text}
            </div>
          </div>
        ))}
        {isTyping && (
          <div className="animate-blink" style={{ color: '#525252', fontSize: '0.75rem' }}>
            AWAITING_RESPONSE...
          </div>
        )}
      </div>

      {/* Input */}
      <div className="terminal-input-area">
        <span className="prompt-sign">{'>'}</span>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Execute command..."
          className="input-field"
          autoFocus
        />
        <button onClick={handleSend} disabled={!input.trim()} className="btn-send">
          <Send size={16} />
        </button>
      </div>
    </div>
  );
};