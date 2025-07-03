import OpenAI from "openai";


const openai = new OpenAI({
    apiKey: import.meta.env.VITE_STOCK_KEY,


});

const messages = [
    {
        role: 'system',
        content: 'You are a helpful general knowledge expert.'
    },
    {
        role: 'user',
        content: 'Who invented the television?'
    }
]

const response = await openai.chat.completions.create({
    model: 'gpt-3.5-turbo',
    messages: messages
})

console.log(response)