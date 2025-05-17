import { v } from "convex/values";
import { mutation } from "./_generated/server";

export const CreateNewDesign = mutation({
  args: {
    name: v.string(),
    width: v.number(),
    height: v.number(),
    uid: v.id("users"),
  },
  handler: async (ctx, args) => {
    const design = await ctx.db.insert("designs", {
      name: args.name,
      width: args.width,
      height: args.height,
      uid: args.uid,
    });
    return design;
  },
});
