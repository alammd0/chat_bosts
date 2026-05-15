import Groq from "groq-sdk";
import dotenv from "dotenv";

dotenv.config();

const groq = new Groq({
    apiKey: process.env.GROQ_API_KEY
});

/**
 * @description Generate AI response
 * @param {Array} userMessages
 * @returns {String}
 */

export async function getGroqChatCompletion(userMessages) {

    try {

        const messages = [

            {
                role: "assistant",
                content: `
                        You are a smart AI assistant.

                        Instructions:
                        - Answer clearly and accurately.
                        - Use simple language.
                        - Explain technical answers step by step.
                        - Keep responses concise.
                        - Never make up false information.

                        Formatting Rules:
                        - Use Markdown code blocks for code.
                        - Use tables for comparisons.
                        - Use bullet points when needed.

                        Tone:
                        - Professional and friendly.
                        - Helpful developer colleague.

                        Current Date:
                        ${new Date().toUTCString()}`
            },

            ...userMessages

        ];

        const response = await groq.chat.completions.create({

            model: "llama-3.3-70b-versatile",

            messages,

            temperature: 0.7,

            max_tokens: 1024

        });

        return (
            response.choices[0]?.message?.content || "No response generated from AI"
        );

    }

    catch (error) {

        console.log(error);

        throw new Error(
            "Failed to get Groq Chat Completion"
        );

    }

}