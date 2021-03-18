//Code made by ThioTech -  code at : https://replit.com/@mobileworld/Bot-js
// Import the discord.js module
const Discord = require('discord.js');
const {
    token,
    prefix,
} = require('./config.json')
const config = require('dotenv')
const fs = require('fs')
const got = require('got')
const db = require("quick.db");
var table = new db.table("Tickets")

// Create an instance of a Discord client
const client = new Discord.Client();
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
  "the repl.it terminal"

]; // creates an arraylist containing phrases you want your bot to switch through.

client.on('ready', () => {
  setInterval(() => {
    const index = Math.floor(Math.random() * (activities_list.length - 1) + 1); // generates a random number between 1 and the length of the activities array list (in this case 5).
    client.user.setActivity(activities_list[index], { type: 'Watching' }); // sets bot's activities to one of the phrases in the arraylist.
  }, 5000); // Runs this every 5 seconds.
});



 
client.on('message', message => {
  // Ignore messages that aren't from a guild
  if (!message.guild) return;

    const { guild } = message


  // If the message content starts with "!kick"
  if (message.content.startsWith('>kick')) {
  if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return message.channel.send("Sorry , You don't have the permission to operate this command.")
    // Assuming we mention someone in the message, this will return the user
    // Read more about mentions over at https://discord.js.org/#/docs/main/master/class/MessageMentions
    const user = message.mentions.users.first();
    // If we have a user mentioned
    if (user) {
      // Now we get the member from the user
      const member = message.guild.members.resolve(user);
      // If the member is in the guild
      if (member) {
        /**
         * Kick the member
         * Make sure you run this on a member, not a user!
         * There are big differences between a user and a member
         */
        console.log(message.author.username)
    console.log("Is Kicking Someone!")
        member
          .kick('Used me to ban people')
          .then(() => {
            // We let the message author know we were able to kick the person
            message.channel.send(`Successfully kicked ${user.tag}`);
          })
          .catch(err => {
            // An error happened
            // This is generally due to the bot not being able to kick the member,
            // either due to missing permissions or role hierarchy
            message.channel.send('I was unable to kick the member. This is either due to missing permissions or role hierarchy.');
            // Log the error
            console.error(err);
          });
      } else {
        // The mentioned user isn't in this guild
        message.channel.send("That user isn't in this Server/Guild!");
      }
      // Otherwise, if no user was mentioned
    } else {
      message.channel.send("You need to state the person you want to kick.");
    }
  }
});

/**
 * The ready event is vital, it means that only _after_ this will your bot start reacting to information
 * received from Discord
 */
client.on('ready', () => {
  console.log('');
});

client.on('message', message => {
  // Ignore messages that aren't from a guild
  if (!message.guild) return;

  // if the message content starts with "!ban"
  if (message.content.startsWith('>ban')) {
  if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.channel.send("Sorry , You don't have the permission to operate this command.")
    // Assuming we mention someone in the message, this will return the user
    // Read more about mentions over at https://discord.js.org/#/docs/main/master/class/MessageMentions
    const user = message.mentions.users.first();
    // If we have a user mentioned
    if (user) {
      // Now we get the member from the user
      const member = message.guild.members.resolve(user);
      // If the member is in the guild
      if (member) {
        /**
         * Ban the member
         * Make sure you run this on a member, not a user!
         * There are big differences between a user and a member
         * Read more about what ban options there are over at
         * https://discord.js.org/#/docs/main/master/class/GuildMember?scrollTo=ban
         */
         console.log(message.author.username)
    console.log("Is Banning Someone!")
        member
          .ban({
            reason: 'Used me To Ban People.',
          })
          .then(() => {
            // We let the message author know we were able to ban the person
            message.channel.send(`Successfully banned ${user.tag}`);
          })
          .catch(err => {
            // An error happened
            // This is generally due to the bot not being able to ban the member,
            // either due to missing permissions or role hierarchy
            message.channel.send('I was unable to ban the member. This is either due to missing permissions or role hierarchy.');
            // Log the error
            console.error(err);
          });
      } else {
        // The mentioned user isn't in this guild
        message.channel.send("That user isn't in this guild!");
      }
    } else {
      // Otherwise, if no user was mentioned
      message.channel.send("You need to state the person you want to ban.");
    }
  }
});
// Create an instance of a Discord client

/**
 * The ready event is vital, it means that only _after_ this will your bot start reacting to information
 * received from Discord
 */
client.on('ready', () => {
  console.log('Done 3!');
});

// Create an event listener for new guild members
client.on('guildMemberAdd', member => {
  // Send the message to a designated channel on a server:
  const channel = member.guild.channels.cache.find(ch => ch.name === '🌎》general');
  // Do nothing if the channel wasn't found on this server
  if (!channel) return;
  // Send the message, mentioning the member
  channel.send(`Welcome to This server, ${member} 😊`);
});

// Create an event listener for new guild members
client.on('guildMemberRemove', member => {
  // Send the message to a designated channel on a server:
  const channel = member.guild.channels.cache.find(ch => ch.name === '🌎》general');
  // Do nothing if the channel wasn't found on this server
  if (!channel) return;
  // Send the message, mentioning the member
  channel.send(`Goodbye, ${member} 😭`);
});

client.on('ready', () => {
  console.log('Updating Database. This may take a while.');
});

client.on('ready', () => {
  console.log('Done 5!');
});


client.on('ready', () => {
  console.log('Done starting your bot! Check below for errors. ');
});

// Create an event listener for messages
client.on('message', message => {
  // If the message is "ping"
  if (message.content === '>mod') {
    // Send "pong" to the same channel
    message.channel.send('Moderation commands: >kick , >ban , clearAll ');
  }
});
//

//warning

const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Im Up!')
});

app.listen(3000, () => {
  console.log('server started');
});

client.login(process.env.BOT_TOKEN);
