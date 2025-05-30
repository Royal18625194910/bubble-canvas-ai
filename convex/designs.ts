import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

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

// 获取design
export const GetDesign = query({
  args: {
    id: v.id("designs"),
  },
  handler: async (ctx, args) => {
    const design = await ctx.db.get(args.id);
    return design;
  },
})

export const SaveDesign = mutation({
  args: {
    id: v.id("designs"),
    jsonTemplate: v.any(),
  },
  handler: async (ctx, args) => {
    const design = await ctx.db.get(args.id);
    if (!design) {
      throw new Error("Design not found");
    }
    return await ctx.db.patch(args.id, {...design, jsonTemplate: args.jsonTemplate})
  }
})
