import { GoogleGenAI, Type } from "@google/genai";
import { AIGeneratedConcept } from "../types";

const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

export const generateCreativeBrief = async (
  brandName: string,
  industry: string,
  vision: string
): Promise<AIGeneratedConcept | null> => {
  if (!apiKey) {
    console.error("API Key is missing");
    return null;
  }

  const prompt = `
    You are the Senior Creative Director at Pair to Pair Studio, a high-end NYC visual production house.
    
    A client has approached us with the following details:
    Brand Name: ${brandName}
    Industry: ${industry}
    Vision/Goal: ${vision}

    Based on our studio's style (Bold, New York aesthetic, Cross-cultural, Production-first), generate a preliminary creative brief.
    
    Return the response in JSON format.
  `;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            conceptTitle: { type: Type.STRING },
            visualDirection: { type: Type.STRING },
            colorPalette: { 
              type: Type.ARRAY,
              items: { type: Type.STRING }
            },
            suggestedShotList: {
              type: Type.ARRAY,
              items: { type: Type.STRING }
            }
          },
          required: ["conceptTitle", "visualDirection", "colorPalette", "suggestedShotList"]
        }
      }
    });

    const text = response.text;
    if (!text) return null;

    return JSON.parse(text) as AIGeneratedConcept;

  } catch (error) {
    console.error("Error generating creative brief:", error);
    return null;
  }
};
