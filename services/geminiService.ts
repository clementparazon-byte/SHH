import { GoogleGenAI, Chat } from "@google/genai";

let chatSession: Chat | null = null;

const SYSTEM_INSTRUCTION = `
You are the AI Partner for the Singapore Hackers Fund (SHF). 
Style: Minimalist, direct, technical, "hacker" aesthetic. Avoid corporate fluff. Be concise.
Context:
- SHF is a residency and fund for technical founders in Singapore.
- We back builders, not deck-writers.
- Deal: $100k for 7%. 12-week residency.
- Philosophy: High agency, high velocity.
- Location: Singapore.
- If asked about applying: Tell them to click the APPLY button in the top right.

Do not make up companies or specific people unless they are in the context provided.
Format your responses in plain text.
`;

export const getGeminiChat = (): Chat => {
  if (chatSession) return chatSession;

  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    console.error("API_KEY is missing");
    throw new Error("API Key not found");
  }

  const ai = new GoogleGenAI({ apiKey });
  
  chatSession = ai.chats.create({
    model: 'gemini-2.5-flash',
    config: {
      systemInstruction: SYSTEM_INSTRUCTION,
      temperature: 0.7,
      maxOutputTokens: 200,
    },
  });

  return chatSession;
};

export const sendMessageToGemini = async (message: string): Promise<string> => {
  try {
    const chat = getGeminiChat();
    const result = await chat.sendMessage({ message });
    return result.text || "Connection interrupted. Try again.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Error: Uplink unstable. Please check console.";
  }
};