import { query } from "./_generated/server";

export const getAllTemplates = query({
  args: {},
  handler: async (ctx, args) => {
    const templates = await ctx.db.query("templates").collect();
    return templates;
  },
});
