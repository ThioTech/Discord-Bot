//Code made by ThioTech and Tech4Help - code at : https://replit.com/@mobileworld/Discordjs 
const Discord = require('discord.js');


// Create an instance of a Discord client
const client = new Discord.Client();
const bot = new Discord.Client()
const config = require("./config.json")
/**
 * The ready event is vital, it means that only _after_ this will your bot start reacting to information
 * received from Discord
 */
client.on('ready', () => {
  console.log('Done 1! ');
});
const activities_list = [
  "YOU to make sure that you don't break rules",
  "everyone",
  "the world burn",
  "everything go wrong",
  "ThioTech On Youtube",
  "the news",
  "YOU",
  "and Stopping people from raiding!",
  "& Playing Minecraft!",
  "out for Server Raiders and banning them",
  "For Rule Breakers and warning them",
  "#general",
  "COVID-19",
  "Staff Applications",
  "Mod Applications",
  "People DM me to send ModMail (or StaffMail lol)",
  "the audit log",
  "out for >commands",
  "The other bots",
  "#general",
  "The staff do their job",
  "The mods do their job",
  "the repl.it terminal",
  "The Discord Developer Portal ",
  "Tech4Help ",

]; // creates an arraylist containing phrases you want your bot to switch through.

client.on('ready', () => {
  setInterval(() => {
    const index = Math.floor(Math.random() * (activities_list.length - 1) + 1); // generates a random number between 1 and the length of the activities array list (in this case 5).
    client.user.setActivity(activities_list[index], { type: 'LISTENING' }); // sets bot's activities to one of the phrases in the arraylist.
  }, 6000); // Runs this every 7 seconds.
});




//warning

const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('✔ 50% In Javascript/Node.js ♥ | 24/7 Script by Tech4Help for JS | Other half : https://thiotechs-utilities-py.mobileworld.repl.co')
});

app.listen(3000, () => {
  console.log('Server Started! More info below VV.');
});



bot.on("ready", () => {
    console.log("Loaded up!")
});

bot.on("message", message => {
    if (message.author.bot) return;
    if (message.content.indexOf(config.prefix) !== 0) return;

    const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase()

    if (command === "help") {
        const helpEmbed = new Discord.MessageEmbed()
            .setTitle(`${bot.user.username}'s commands`)
            .setDescription(`**Prefix:** ${config.prefix}`)
            .addField(`\`ping\``, `Check your bot's ping`)
            .addField(`\`kick\``, `Usage: **${config.prefix}kick [@User]**\n**${config.prefix}kick [@User][Reason]**`)
            .addField(`\`ban\``, `Usage: **${config.prefix}ban [@User]**\n**${config.prefix}ban [@User][Reason]**`)
            .addField(`\`add\``, `Adds a role to a user \nUsage: **${config.prefix}add [@User] [Role]**`)
            .addField(`\`remove\``, `Removes a role from a user \nUsage: **${config.prefix}remove [@User] [Role]**`)
            .addField(`\`purge\``, `Clears a number of messages between 2 or 100 \nUsage: **${config.prefix}purge [number]**`)
            .addField(`\`rps\``, `Play rock paper scissors`)
            .addField(`\`say\``, `Have the bot say something`)
        message.channel.send(helpEmbed)
    }

    if (command === "ping") {
        message.channel.send(`Pong **(${Date.now() - message.createdTimestamp}ms)**`)
    }

    if (command === "kick") {
        if (!message.member.hasPermission('KICK_MEMBERS'))
            return message.channel.send("Insufficient permissions (Requires permission `Kick members`)").then(msg => {
        msg.delete({ timeout: 30000 })
    })
        const member = message.mentions.members.first();
        if (!member)
            return message.channel.send("You have not mentioned a user").then(msg => {
        msg.delete({ timeout: 30000 })
    })
        if (!member.kickable)
            return message.channel.send("This user is unkickable").then(msg => {
        msg.delete({ timeout: 30000 })
    })
        const reason = args.slice(1).join(" ")
        if (member) {
            if (!reason) return member.kick().then(member => {
                message.channel.send(`${member.user.tag} was kicked, no reason was provided`);
            })

            if (reason) return member.kick().then(member => {
                message.channel.send(`${member.user.tag} was kicked for ${reason}`);
            })
        }
    }

    if (command === "ban") {
        if (!message.member.hasPermission('BAN_MEMBERS'))
            return message.channel.send("Insufficient permissions (Requires permission `Ban members`)").then(msg => {
        msg.delete({ timeout: 30000 })
    })
        const member = message.mentions.members.first();
        if (!member)
            return message.channel.send("You have not mentioned a user").then(msg => {
        msg.delete({ timeout: 30000 })
    })
        if (!member.bannable)
            return message.channel.send("This user is unbannable").then(msg => {
        msg.delete({ timeout: 30000 })
    })
        const reason = args.slice(1).join(" ")
        if (member) {
            if (!reason) return member.ban().then(member => {
                message.channel.send(`${member.user.tag} was banned, no reason was provided`);
            })

            if (reason) return member.ban(reason).then(member => {
                message.channel.send(`${member.user.tag} was banned for ${reason}`);
            })
        }
    }

    if (command === "add") {
        if (!message.member.hasPermission('MANAGE_ROLES'))
            return message.channel.send("Insufficient permissions (Requires permission `Manage roles`)").then(msg => {
        msg.delete({ timeout: 30000 })
    })
        const member = message.mentions.members.first()
        if (!member)
            return message.channel.send("You have not mentioned a user").then(msg => {
        msg.delete({ timeout: 30000 })
    })
        const add = args.slice(1).join(" ")
        if (!add)
            return message.channel.send("You have not specified a role").then(msg => {
        msg.delete({ timeout: 30000 })
    })
        const roleAdd = message.guild.roles.cache.find(role => role.name === add)
        if (!roleAdd)
            return message.channel.send("This role does not exist").then(msg => {
        msg.delete({ timeout: 30000 })
    })
        if (member.roles.cache.get(roleAdd.id))
            return message.channel.send(`This user already has the ${add} role`).then(msg => {
        msg.delete({ timeout: 30000 })
    })
        member.roles.add(roleAdd.id).then((member) => {
            message.channel.send(`${add} added to ${member.displayName}`)
        })
    }

    if (command === "remove") {
        if (!message.member.hasPermission('MANAGE_ROLES'))
            return message.channel.send("Insufficient permissions (Requires permission `Manage roles`)").then(msg => {
        msg.delete({ timeout: 30000 })
    })
        const member = message.mentions.members.first()
        if (!member)
            return message.channel.send("You have not mentioned a user").then(msg => {
        msg.delete({ timeout: 30000 })
    })
        const remove = args.slice(1).join(" ")
        if (!remove)
            return message.channel.send("You have not specified a role").then(msg => {
        msg.delete({ timeout: 30000 })
    })
        const roleRemove = message.guild.roles.cache.find(role => role.name === remove)
        if (!roleRemove)
            return message.channel.send("This role does not exist").then(msg => {
        msg.delete({ timeout: 30000 })
    })
        if (!member.roles.cache.get(roleRemove.id))
            return message.channel.send(`This user does not have the ${remove} role`).then(msg => {
        msg.delete({ timeout: 30000 })
    })
        member.roles.remove(roleRemove.id).then((member) => {
            message.channel.send(`${remove} removed from ${member.displayName}`)
        })
    }

    if (command === "say") {
    const text = args.join(" ")
    if(!text) return message.channel.send("You have not specified something to say").then(msg => {
        msg.delete({ timeout: 30000 })
    })
    message.channel.send(text)
    
    }
   
    if (command === "purge") {
    if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send("Insufficient permissions (requires permission `Manage messages`)").then(msg => {
        msg.delete({ timeout: 30000 })
    })
    const number = args.join(" ")
    if(!number) return message.channel.send("You haven't specified a number to purge").then(msg => {
        msg.delete({ timeout: 30000 })
    })
   message.channel.bulkDelete(number).catch(console.error)
   
   }
    
   if (command === "rps") {
        const options = [
            "rock :shell: ",
            "paper :newspaper2:",
            "scissors :scissors: "
        ]
        const option = options[Math.floor(Math.random() * options.length)]
        message.channel.send(`You got ${option}`)
    }

});

client.login(process.env.BOT_TOKEN);
