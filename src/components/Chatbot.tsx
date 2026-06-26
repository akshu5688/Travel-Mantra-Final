import { useState, useRef, useEffect } from 'react';
import { ChatsCircle, X, Microphone, MicrophoneSlash, PaperPlaneTilt } from '@phosphor-icons/react';
import { chatbotChips } from '../data/content';



type Message = { role: 'bot' | 'user'; text: string };



const chipReplies: Record<string, string> = {

  Tashkent: 'Great choice! Tashkent is available with LOI and visa assistance. Do you want a 4N/5D package or a customized itinerary?',

  Almaty: 'Almaty packages start from ₹44,500 with easy e-visa support. Would you like a fixed departure or custom dates?',

  Baku: 'Our Baku Holiday Package 5N/6D includes Flame Towers, Old City tour, and visa on arrival. Want pricing details?',

  Bishkek: 'Bishkek packages include Issyk-Kul day trips and mountain scenery. Shall I connect you with our Central Asia expert?',

  'Visa Help': 'We offer LOI support, tourist visa guidance, and document checklists for all Central Asian countries. Which destination?',

  'Build My Package': 'Tell me your destination, travel dates, and budget — I\'ll help you build a custom Central Asia itinerary!',

};



export default function Chatbot() {

  const [open, setOpen] = useState(false);

  const [messages, setMessages] = useState<Message[]>([

    { role: 'bot', text: 'Hi! I can help you find the best Central Asia tour package. Where are you planning to travel?' },

  ]);

  const [input, setInput] = useState('');

  const [voiceState, setVoiceState] = useState<'idle' | 'listening' | 'recognized'>('idle');

  const bottomRef = useRef<HTMLDivElement>(null);



  useEffect(() => {

    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });

  }, [messages, voiceState]);



  const addBotReply = (text: string) => {

    setTimeout(() => setMessages((m) => [...m, { role: 'bot', text }]), 400);

  };



  const handleChip = (chip: string) => {

    setMessages((m) => [...m, { role: 'user', text: chip }]);

    addBotReply(chipReplies[chip] ?? 'Let me connect you with our Central Asia travel expert for the best options.');

  };



  const handleSend = () => {

    if (!input.trim()) return;

    const text = input.trim();

    setInput('');

    setMessages((m) => [...m, { role: 'user', text }]);

    if (text.toLowerCase().includes('tashkent')) {

      addBotReply('Great choice! Tashkent is available with LOI and visa assistance. Do you want a 4N/5D package or a customized itinerary?');

    } else {

      addBotReply('Thank you! Our Central Asia team will share the best package options shortly. You can also call 1800 2121 225.');

    }

  };



  const handleVoice = () => {

    const recognizedText = 'I want a Tashkent package with visa support.';

    const botReply = 'Great choice! Tashkent is available with LOI and visa assistance. Do you want a 4N/5D package or a customized itinerary?';



    if (voiceState === 'listening') {

      setVoiceState('recognized');

      setMessages((m) => [...m, { role: 'user', text: recognizedText }]);

      addBotReply(botReply);

      setTimeout(() => setVoiceState('idle'), 2000);

      return;

    }

    setVoiceState('listening');

    setTimeout(() => {

      setVoiceState('recognized');

      setMessages((m) => [...m, { role: 'user', text: recognizedText }]);

      addBotReply(botReply);

      setTimeout(() => setVoiceState('idle'), 2000);

    }, 2200);

  };



  return (

    <div className="chatbot-root fixed bottom-20 sm:bottom-6 right-4 z-[60] flex flex-col items-end gap-3">

      {open && (

        <div className="w-[calc(100vw-2rem)] max-w-[340px] bg-white rounded-2xl shadow-2xl border border-[#E5E5E5] overflow-hidden flex flex-col max-h-[min(70vh,520px)]">

          <div className="bg-[#1f2a1d] text-white px-4 py-3 flex items-center justify-between shrink-0">

            <div className="flex items-center gap-2.5">

              <ChatsCircle size={28} weight="duotone" className="text-[#85AB8B] shrink-0" />

              <div>

                <p className="font-semibold text-sm">Travels Mantra Assistant</p>

                <p className="text-[10px] text-white/60">Central Asia tour recommendations</p>

              </div>

            </div>

            <button onClick={() => setOpen(false)} className="p-1.5 rounded-full hover:bg-white/10 transition-colors" aria-label="Close chat">

              <X size={18} weight="bold" />

            </button>

          </div>



          <div className="flex-1 overflow-y-auto p-3 space-y-3 min-h-[200px]">

            {messages.map((msg, i) => (

              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>

                <div

                  className={`max-w-[85%] text-sm px-3 py-2 rounded-2xl leading-relaxed ${

                    msg.role === 'user'

                      ? 'bg-[#336443] text-white rounded-br-sm'

                      : 'bg-[#FAFAFA] text-[#1f2a1d] border border-[#E5E5E5] rounded-bl-sm'

                  }`}

                >

                  {msg.text}

                </div>

              </div>

            ))}

            {voiceState === 'listening' && (

              <p className="text-xs text-[#336443] font-medium animate-pulse text-center">Listening...</p>

            )}

            {voiceState === 'recognized' && (

              <p className="text-[10px] text-[#4b5b47] text-center italic">Recognized: &ldquo;I want a Tashkent package with visa support.&rdquo;</p>

            )}

            <div ref={bottomRef} />

          </div>



          <div className="px-3 pb-2 flex flex-wrap gap-1.5 shrink-0">

            {chatbotChips.map((chip) => (

              <button

                key={chip}

                onClick={() => handleChip(chip)}

                className="text-[10px] font-semibold text-[#336443] bg-[#85AB8B]/15 hover:bg-[#85AB8B]/25 px-2.5 py-1 rounded-full transition-colors min-h-[32px]"

              >

                {chip}

              </button>

            ))}

          </div>



          <div className="border-t border-[#E5E5E5] p-3 flex items-center gap-2 shrink-0">

            <input

              value={input}

              onChange={(e) => setInput(e.target.value)}

              onKeyDown={(e) => e.key === 'Enter' && handleSend()}

              placeholder="Type your message..."

              className="flex-1 text-sm px-3 py-2 rounded-xl border border-[#E5E5E5] focus:border-[#336443] focus:outline-none focus:ring-2 focus:ring-[#336443]/15 min-w-0 min-h-[44px]"

            />

            <button

              onClick={handleVoice}

              className={`shrink-0 w-11 h-11 rounded-full flex items-center justify-center transition-colors ${

                voiceState === 'listening' ? 'bg-red-500 text-white animate-pulse' : 'bg-[#FAFAFA] border border-[#E5E5E5] text-[#336443] hover:bg-[#85AB8B]/15'

              }`}

              aria-label={voiceState === 'listening' ? 'Listening' : 'Tap to speak'}

              title={voiceState === 'listening' ? 'Listening...' : 'Tap to speak'}

            >

              {voiceState === 'listening' ? (

                <MicrophoneSlash size={18} weight="fill" />

              ) : (

                <Microphone size={18} weight="duotone" />

              )}

            </button>

            <button onClick={handleSend} className="shrink-0 w-11 h-11 rounded-full bg-[#1f2a1d] text-white flex items-center justify-center hover:bg-[#2a3827] transition-colors" aria-label="Send">

              <PaperPlaneTilt size={18} weight="fill" />

            </button>

          </div>

          {voiceState === 'idle' && (

            <p className="text-[10px] text-[#4b5b47] text-center pb-2 -mt-1">Tap to speak</p>

          )}

        </div>

      )}



      {!open && (

        <span className="hidden sm:block text-xs font-semibold text-[#1f2a1d] bg-white px-3 py-1.5 rounded-full shadow-md border border-[#E5E5E5] mr-1">

          Travels Mantra Assistant

        </span>

      )}



      <button

        onClick={() => setOpen((v) => !v)}

        className="w-14 h-14 rounded-full bg-[#336443] hover:bg-[#2a5235] text-white shadow-lg flex items-center justify-center transition-all hover:scale-105"

        aria-label={open ? 'Close Travels Mantra Assistant' : 'Open Travels Mantra Assistant'}

      >

        {open ? <X size={26} weight="bold" /> : <ChatsCircle size={28} weight="duotone" />}

      </button>

    </div>

  );

}


