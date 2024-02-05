
import { configDotenv } from "dotenv";
import OpenAI,{ Configuration, OpenAIAPI } from "openai";



configDotenv();


interface OpenAIWithCompletion extends OpenAI {
    complete(params: any): Promise<any>; // Adjust the type of 'params' and 'Promise<any>' as per the actual API
  }

const configuration = new Configuration({
    apiKey: process.env.OPENAI_KEY
});

const openai = new OpenAI(configuration)

const ALLOWED_PROMPTS = [
    "course",
    "best course",
    "trending course",
    "best ai coures",
    "future trending course",
    "Hello",
    "hello",
    "Hi",
    "How are you",
    "What's up",
    "health",
    "nutrition",
    "diet",
    "meal",
    "recipe",
    "grocery",
    "navigation",
    "meal plan",
    "course list",
    "course list",
    "navigation",
    "Live Support",
    "doubt session",
    "clear doubt",
    "support",
    "teachers",
  ];

  export const askGPT = async (req, res) => {
    console.log("Started asking GPT");
  
    try {
      const { prompt } = req.body;
  
      // Check if the user's prompt contains any of the allowed keywords/phrases
      const isAllowedPrompt = ALLOWED_PROMPTS.some((keyword) =>
        prompt.toLowerCase().includes(keyword.toLowerCase())
      );
  
      if (prompt.toLowerCase().includes("live support" || "teachers")) {
        return res.status(200).json({
          result: `Support page link: ${process.env.BASE_URL}/support`,
        });
      }
      if (prompt.toLowerCase().includes("coures")) {
        return res.status(200).json({
          result: `Meal plan page link: ${process.env.BASE_URL}/user/courses`,
        });
      }
  
      // If the prompt is not related to the allowed topics, return an error message
      if (!isAllowedPrompt) {
        return res.status(200).json({
          result:
            "Sorry, I can only help you with that related questions and navigating the app",
        });
      }
  
      // If the prompt is related to the allowed topics, send it to the GPT model for processing
      const completion = await openai.complete({
        model: "text-davinci-003",
        prompt: ` ${prompt} `,
        temperature: 0.6,
        max_tokens: 500,
      });
  
      // Extract any image URLs from the GPT response
      const urls = completion.data.choices[0].text.match(
        /(https?:\/\/[^\s]+\.(?:jpg|jpeg|png|gif))/
      );
      let result = completion.data.choices[0].text;
  
      // If image URLs were found, append them to the response
      if (urls) {
        const imgTags = urls
          .map((url) => `<img src="${url}" alt="related image" width="300">`)
          .join("");
        result += "\n" + imgTags;
      }
  
      console.log({ result });
      return res.status(200).json({ result });
    } catch (error) {
      // Consider adjusting the error handling logic for your use case
      if (error.response) {
        console.error(error.response.status, error.response.data);
        res.status(error.response.status).json(error.response.data);
      } else {
        console.error(`Error with OpenAI API request: ${error.message}`);
        res.status(500).json({
          error: {
            message: "An error occurred during your request.",
          },
        });
      }
    }
  };
  
 
  
 