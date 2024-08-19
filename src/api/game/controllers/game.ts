/**
 * game controller
 */

import { factories } from "@strapi/strapi";

export default factories.createCoreController(
  // @ts-ignore
  "api::game.game",
  ({ strapi }) => ({
    async populate(ctx) {
      console.log("Starting to populate...");

      await strapi.service("api::game.game").populate(ctx.query);
      ctx.send("Finished populating!");
    },
  })
);
