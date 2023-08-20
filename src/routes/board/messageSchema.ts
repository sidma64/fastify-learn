import { FromSchema } from "json-schema-to-ts";

const messageSchema = {
    type: "object",
    properties: {
        content: { type: "string" },
        date: { type: "string", format: "date-time" },
    },
    required: ["content"],
} as const;

export default messageSchema;

export type Message = FromSchema<typeof messageSchema>
