# Statistics Bot Tutorial

Step one: go to https://beta.openai.com/account/usage and open the developer window.

Step two: go to the network tab, and turn on "Preserve Log"

Step three: reload page and click on the log named "usage?date=datehere"

Step four: look for authorization and org-id

Step five: put the authorization where it says "Bearer sses"

Step six: put the org id where it says org

Step seven: create a discord application / bot at https://discord.com/developers/applications

Step eight: replace ``token`` in ``client.login("token")`` with your bot token

Step nine: invite the bot to your server

Step ten: turn the bot on with ``node statistics.js`` and use the command ``!stats``
