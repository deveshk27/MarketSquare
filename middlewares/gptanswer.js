import React from 'react';
import { ChatGPTAPI } from 'chatgpt'


export const Gptanswer = async (req,res) => {
    try {
        const api=new ChatGPTAPI({
            apiKey: process.env.OPEN_AI_API_KEY
        });
        const {prompt}=req.body;
        console.log(prompt);
        const response= await api.sendMessage(prompt)
        const {text}=response;
        return res.status(200).json(text);
    } catch (error) {
        return res.status(404).json({message:"something went wrong"})
    }
}

