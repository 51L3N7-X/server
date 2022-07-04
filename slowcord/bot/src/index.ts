import "dotenv/config";
import Fosscord from "fosscord-gopnik";
import Bot from "./Bot";

const client = new Fosscord.Client({
	intents: ["GUILD_MESSAGES"],

	http: {
		api: process.env.ENDPOINT_API,
		cdn: process.env.ENDPOINT_CDN,
		invite: process.env.ENDPOINT_INV,
	},
});

const bot = new Bot(client);

client.on("ready", bot.onReady);

client.on("messageCreate", bot.onMessageCreate);

client.login(process.env.TOKEN);