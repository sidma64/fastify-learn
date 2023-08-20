export default {
    type: "object",
    properties: {
        text: { type: "string" },
        added: { type: "string", format: "date-time" },
        user: { type: "string" },
    },
    required: ["content"],
} as const;
