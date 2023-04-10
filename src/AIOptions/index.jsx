export const arrayItems = [
{
    name: "Q&A",
    id: "q&a",
    description: "Answer Questions based on existing Knowledge",
    option: {
        model: "text-davinci-003",
        temperature: 1,
        max_tokens: 2500,
        top_p: 1,
        frequency_penalty: 0.0,
        presence_penalty: 0.6,
        stop: ["Human:", "AI:"],
        
    }
},
{
    name: "Grammar Correction",
    id: "grammarCorrection",
    description: "Correct sentences into correct English.",
    option: {
        model: "text-davinci-003",
        temperature: 0,
        max_tokens: 60,
        top_p: 1.0,
        frequency_penalty: 0.0,
        presence_penalty: 0.0,
    }
},
{
    name: "Summarize for a 2nd grader",
    id: "summary",
    description: "Translates difficult text into simpler concepts.",
    option: {
        model: "text-davinci-003",
        temperature: 0.7,
        max_tokens: 64,
        top_p: 1.0,
        frequency_penalty: 0.0,
        presence_penalty: 0.0,
    }
},
{
    name: "Explain Code",
    id: "explainCode",
    description: "Explain the Code.",
    option: {
        model: "text-davinci-003",
        temperature: 0,
        max_tokens: 150,
        top_p: 1.0,
        frequency_penalty: 0.0,
        presence_penalty: 0.0,
        stop: ["\"\"\""],
    }
},
{
    name: "Fix Python Bugs",
    id: "pythonBugs",
    description: "Fixes the Python bugs.",
    option: {
        model: "text-davinci-003",
        temperature: 0,
        max_tokens: 182,
        top_p: 1.0,
        frequency_penalty: 0.0,
        presence_penalty: 0.0,
        stop: ["###"],
    }
},
]