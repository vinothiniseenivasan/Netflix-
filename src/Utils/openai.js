import OpenAI from 'openai';
import { OPEN_AI_KEY } from './constant';
// import OpenAI from 'https://deno.land/x/openai@v4.68.1/mod.ts';


const openai = new OpenAI({
  apiKey: process.env[OPEN_AI_KEY], // This is the default and can be omitted
});

export default openai;