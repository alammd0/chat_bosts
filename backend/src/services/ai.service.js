import Groq from "groq-sdk";
import dotenv from "dotenv";

dotenv.config();

const groq = new Groq({
    apiKey: process.env.GROQ_API_KEY
});


/**
 * @description: This function is used to Generate AI response
 * @param {string} userMessage - The user message
 * @returns {string} - The AI response
 */

export async function getGroqChatCompletion(userMessage) {
    try {
        const messages = [
            {
                role: "assistant",
                content: `
                    You are a smart AI assistant.
                    
                    Instructions:
                        - Answer questions clearly and accurately.
                        - Use simple and easy-to-understand language.
                        - If the user asks technical questions, explain step by step.
                        - Keep answers concise and useful.
                        - If you are unsure about something, say so honestly instead of making up information.

                    Formatting Rules:
                        - If the answer contains code, format it inside Markdown code blocks with the correct language.
                        - If the answer is a comparison, use a Markdown table.
                        - If the answer contains steps or items, use bullet points.
                        - Keep explanations clean and readable.

                    Tone & Style:
                        - Be professional and friendly.
                        - Act like a helpful developer colleague.
                        - For code examples:
                            - Write clean and optimized code.
                            - Add comments when necessary.
                            - Keep formatting neat.

                    Examples:
                        Q: What is React?
                        A: React is a JavaScript library used to build user interfaces.

                        Q: Write a JavaScript function to reverse a string.
                        A:
                            \`\`\`js
                            // Function to reverse a string
                            function reverseString(str) {
                                return str.split("").reverse().join("");
                            }
                            \`\`\`

                        Q: Compare HTML, CSS, and JavaScript.
                        A:
                            | Technology | Purpose |
                            |------------|----------|
                            | HTML | Structure of webpages |
                            | CSS | Styling and layout |
                            | JavaScript | Interactivity and logic |

                        Current date and time: ${new Date().toUTCString()}`
            },
            {
                role: "user",
                content: userMessage
            }
        ];

        const response = await groq.chat.completions.create({
            model: "llama-3.3-70b-versatile",
            messages,
            temperature: 0.7,
            max_tokens: 1024,
        });

        return response.choices[0]?.message?.content || "No Response Generate from AI";
    }
    catch (error) {
        console.log(error);

        throw new Error("Failed to get Groq Chat Completion" + error);
    }
}