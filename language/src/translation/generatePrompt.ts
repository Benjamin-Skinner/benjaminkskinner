export const generatePromptAssessment = (
	sentence: string,
	translation: string
) => {
	const prompt = `Act as a French tutor. I will give an English sentence and my French translation of it. You will tell me how a native speaker would react to the sentence. In your answer, include the following information: Does my translation correctly capture the original meaning of the sentence? Would my translation be easily understood by a native French speaker? Would my translation sound perfectly natural to a native French speaker?  Format your answer as a single, brief paragraph. Do not provide suggestion for how to improve the translation, and do not propose any edits. Just evaluate it. Follow the example:
Original sentence: "She told me that she would call back later, but she never did."
My translation: "Elle m'a dit qu'elle rappellerait plus tard, mais elle ne l'a jamais fait."
Your answer: "Your translation effectively conveys the idea that she promised to call back but never followed through. A native French speaker would easily understand what you're trying to say, and is quite close to how a native might express the idea, but there's a tiny bit of room for improvement."

Original sentence: "She told me that she's been practicing the piano for three hours every day."
My translation: "Elle m'a dit qu'elle pratiquait au piano trois heures par jour. "
Your answer: Your translation accurately captures the idea that she's dedicating three hours daily to practicing the piano. A native French speaker would comprehend the sentiment you're expressing without difficulty. However, the nuance of "has been practicing" (indicating an ongoing action) isn't perfectly captured in your translation, making it sound slightly off to a native ear.

Original sentence: "She told me she wants to find an ATM."
My translation: "Elle m'a dit qu'elle veut trouver un ATM."
Your answer: Your translation conveys the idea that she wants to locate an ATM. A native French speaker would understand the core message you're conveying, especially if they're familiar with the term "ATM". However, in France, the term "ATM" is not common, so your choice of term might not sound entirely natural to a native speaker.

Original sentence: "${sentence}"
My translation: "${translation}"
Your answer:
`

	return prompt
}

// phrase: "She told me that she would call back later, but she never did."
// response: ""Elle m'a dit qu'elle rappellerait plus tard, mais elle n'a jamais fais."
// {"summary":  "The beginning of the sentence is natural, but the ending 'elle n'a jamais fait' would sound off to a native speaker. In addition, 'fais' should be 'fait', since in this case it is the past partciple of 'faire'. Otherwise, the translation looks good",
// "suggestedAnswer": ""Elle m'a dit qu'elle rappellerait plus tard, mais elle ne l'a jamais fait."}

export const generatePromptImprovements = (
	sentence: string,
	translation: string
) => {
	const prompt = `Act as a French tutor. I will give an English sentence and my French translation of it. Give me a list of improvements I can make to my sentence to make it sound more natural to a native French speaker. Are there are misspelled words, incorrect verb conjugations, or vocabulary usage that is wrong? Is there any language that, while maybe technically correct, would sound unnatural to a native speaker, or that a native speaker would say differently? Are there idomatic expressions that I could use here that would improve my answer? How could I change my answer to capture the meaning of the original sentence more precisely?

Follow the example: 
Original sentence: "She told me she wants to find an ATM."
My translation: "Elle m'a dit qu'elle veut trouver un ATM."
Your answer: 
= In French, instead of using "ATM," you'd typically use "DAB" (distributeur automatique de billets) or "guichet automatique
= While your use of "veut" (wants) is technically correct, in French, it's more natural to use the imperfect after certain expressions of speech to report what someone else has said, especially in past contexts. So "voulait" (wanted) might be a better choice here.

Original sentence: "The weather has been unpredictable lately, so don't forget to bring an umbrella."
My translation: "Le méteo était très imprévisible récemment, donc n'oubliez pas de porter un parapluie."
Your answer: 
= Instead of 'Le méteo', you should use 'La météo'. 'Météo' is feminine in French.
= Instead of 'était', it would be better to use 'a été' to capture the meaning of 'has been' in the original sentence.
= Instead of 'porter', the verb 'emmener' or 'apporter' is more natural in this context when referring to 'bringing along' an object like an umbrella.
= For the expression 'lately', 'ces derniers temps' is a more natural translation than 'récemment' in this context.

Original sentence: "${sentence}"
My translation: "${translation}"
Your answer:
`

	return prompt
}
