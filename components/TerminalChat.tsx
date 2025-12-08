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
        className="fixed bottom-6 right-6 z-50 bg-neutral-900 border border-neutral-700 text-white p-4 rounded-none hover:bg-neutral-800 transition-all shadow-[4px_4px_0px_0px_rgba(255,255,255,0.2)]"
      >
        <div className="flex items-center gap-2 font-mono text-sm">
          <Terminal size={18} />
          <span>ASK_PARTNER_AI</span>
        </div>
      </button>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 w-[350px] md:w-[450px] h-[500px] bg-black border border-neutral-700 shadow-[8px_8px_0px_0px_rgba(40,40,40,0.5)] flex flex-col font-mono text-sm">
      {/* Header */}
      <div className="flex items-center justify-between p-3 bg-neutral-900 border-b border-neutral-800 select-none">
        <div className="flex items-center gap-2 text-neutral-400">
          <Cpu size={14} className="animate-pulse" />
          <span className="text-xs tracking-wider">GEMINI_2.5_FLASH // SHF_NODE</span>
        </div>
        <div className="flex items-center gap-3">
          <button onClick={() => setIsOpen(false)} className="hover:text-white text-neutral-500"><Minimize2 size={14} /></button>
          <button onClick={() => setIsOpen(false)} className="hover:text-red-500 text-neutral-500"><X size={14} /></button>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 no-scrollbar bg-black" ref={scrollRef}>
        {messages.map((msg, idx) => (
          <div key={idx} className={`flex flex-col ${msg.role === 'user' ? 'items-end' : 'items-start'}`}>
            <span className="text-[10px] text-neutral-600 mb-1 font-bold">
              {msg.role === 'user' ? 'USER@LOCAL' : 'ROOT@SHF'}
            </span>
            <div className={`max-w-[85%] p-3 border ${
              msg.role === 'user' 
                ? 'border-white text-white bg-neutral-900' 
                : 'border-neutral-700 text-neutral-300 bg-black'
            }`}>
              {msg.text}
            </div>
          </div>
        ))}
        {isTyping && (
          <div className="flex items-center gap-1 text-neutral-500 text-xs">
            <span className="animate-bounce">.</span>
            <span className="animate-bounce delay-75">.</span>
            <span className="animate-bounce delay-150">.</span>
          </div>
        )}
      </div>

      {/* Input */}
      <div className="p-3 bg-black border-t border-neutral-800 flex items-center gap-2">
        <span className="text-green-500 text-lg">{'>'}</span>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Execute command..."
          className="flex-1 bg-transparent border-none outline-none text-white placeholder-neutral-700 font-mono"
          autoFocus
        />
        <button onClick={handleSend} disabled={!input.trim()} className="text-neutral-500 hover:text-white disabled:opacity-30">
          <Send size={16} />
        </button>
      </div>
    </div>
  );
};