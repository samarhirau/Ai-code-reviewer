

import generateContent from "../Services/Cohere.ai.js"; 

export const getReview = async (req, res) => {
    const code = req.body.code;

    if (!code) {
        return res.status(400).json({ error: "Code is required" });
    }

    try {
        const response = await generateContent(code);
        res.json({ review: response });
    } catch (error) {
        console.error("Error generating review:", error);
        res.status(500).json({ error: "An error occurred while processing the request." });
    }
};
