export default {
    type: "object",
    properties: {
        content: { type: "string" },
        date: { type: "string", format: "date-time" },
    },
    required: ["content"],
} as const;
