
import { GoogleGenAI } from "@google/genai";
import { Message } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

const SYSTEM_PROMPT = `You are the AI assistant for Peniel Healthcare Services, a leading consultancy in Chicago specializing in helping founders launch successful homecare agencies.
Your goal is to answer questions about homecare agency startup, compliance (IDOA/IDPH), licensing, and Peniel's specific packages.

Our Packages:
1. Start-Up Essentials ($6,000): Business registration, basic policies, 30 days support.
2. License & Compliance ($5,000): Detailed state licensing guidance, customized manual, QA setup.
3. Full Agency Setup ($15,000): Full strategy, HR forms, staff training, mock surveys, 60 days priority support.
4. Premium Launch & Mentorship ($20,000): End-to-end launch, 12 months mentorship, marketing strategy.

Always be professional, encouraging, and informative. If asked about prices, be clear. If asked about state-specifics for Illinois, mention our expertise in IDOA and IDPH compliance. 
Keep answers concise and invite the user to book a free consultation for personalized advice.`;

export const getGeminiResponse = async (history: Message[], userInput: string): Promise<string> => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-pro-preview',
      contents: [
        { role: 'user', parts: [{ text: SYSTEM_PROMPT }] },
        ...history.map(msg => ({
          role: msg.role,
          parts: [{ text: msg.text }]
        })),
        { role: 'user', parts: [{ text: userInput }] }
      ],
      config: {
        temperature: 0.7,
        topP: 0.95,
        topK: 40,
        maxOutputTokens: 1024,
      }
    });

    return response.text || "I'm sorry, I couldn't process that request.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm having trouble connecting right now. Please try again or contact us directly.";
  }
};
