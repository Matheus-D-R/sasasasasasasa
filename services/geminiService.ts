import { GoogleGenAI } from "@google/genai";

const SYSTEM_INSTRUCTION = `
Você é o "Maestro", um assistente virtual especializado e elegante da "Virtuoso Piano Academy".
Seu objetivo é vender o curso de piano, tirando dúvidas sobre conteúdo, preço e metodologia.
O curso é focado em levar alunos do zero ao avançado, com foco em música clássica e contemporânea.
Use um tom encorajador, sofisticado, mas acessível. Fale sempre em Português do Brasil.
Seja conciso nas respostas.
Detalhes do curso:
- Módulos: Introdução, Leitura de Partitura, Harmonia, Técnica Avançada.
- Preço: R$ 497,00 (acesso vitalício).
- Professor: André Liszt (Pianista premiado).
- Plataforma: 100% online com suporte.
`;

export const sendMessageToGemini = async (
  history: { role: string; parts: { text: string }[] }[],
  message: string
): Promise<string> => {
  try {
    if (!process.env.API_KEY) {
      return "Erro: Chave de API não configurada. Por favor, verifique suas configurações.";
    }

    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    
    const chat = ai.chats.create({
      model: 'gemini-3-flash-preview',
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
      history: history,
    });

    const response = await chat.sendMessage({ message });
    return response.text || "Desculpe, não consegui processar sua resposta no momento.";
  } catch (error) {
    console.error("Erro ao comunicar com Gemini:", error);
    return "Desculpe, estou tendo dificuldades técnicas no momento. Tente novamente mais tarde.";
  }
};