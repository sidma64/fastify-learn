export const messageSchema = {
    type: "object",
    properties: {
        text: { type: "string" },
        added: { type: "string", format: "date-time" },
        user: { type: "string" },
    },
    required: ["text", "added", "user"],
} as const;