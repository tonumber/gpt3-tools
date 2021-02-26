const axios = require("axios")
const discord = require("discord.js")

const client = new discord.Client()

client.on("ready", () => {
  console.log("ready rofl")
})

const reqOpts = {
  headers: {
    "authorization": "Bearer sess-tutorial to get this is in readme",
    "openai-organization": "org-urorgid"
  }
}

async function getstats(msg) {
var date_ob = new Date();
var date = ("0" + date_ob.getDate()).slice(-2);
var month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
var year = date_ob.getFullYear();
console.log(year+"-"+month+"-"+date)
const req = await axios.get("https://api.openai.com/v1/usage?date="+year+"-"+month+"-"+date,reqOpts)
console.log(req.data.credits_used)
var embed = new discord.MessageEmbed()
.setTitle("OpenAI GPT-3 Statistics Bot")
.setDescription("These stats may be somewhat off due to rate limits.\n\n\n**Total Credits Used**:\n``"+req.data.credits_used+"``\n\n**Total USD Spent on Credits**:\n``"+req.data.current_usage_usd+"``")
.setColor("#ff7043")
.setFooter("made with love by Agent#9895 - current statistics are for the account: Agentie")
msg.channel.send(embed)
}
client.on("message", async m =>{
  if (m.content=="!stats") {
    getstats(m)
  }
})

client.login("token here")
