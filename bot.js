const Discord = require("discord.js");
const prefix = "*"


var kill = [
    "`Yes`", 
    "`No`",
    "`Maybe`",
    "*Sign pointing to yes*",
    "*Sign pointing to no*",
    "`It can be proved`",
    "`It is certain`",
    "`I don't know for sure, but I read it as negative`"
];

var fortunes = [
    "You try throwing a bomb at them. The bomb fails miserably and you are stared at with shame.",
    "You throw a bomb at them, they explode in blood and gore while you laugh",
    "You bring a knife to a gun fight, they pierce you with bullets.",
    "You stab them in the heart.",
    "You try stabbing them but they're 2 fst  4 u fag"

    
];


var bot = new Discord.Client();

bot.on("ready", () => {
    console.log("Ready");
});


bot.on("guildCreate", guild => {
    console.log(`New guild added : ${guild.name}, owned by ${guild.owner.user.username}`);
});

bot.on('guildMemberAdd',  (member) => {
    member.guild.channels.get("363514912531677197").send("Welcome to cursed! Hope you have fun! " + member);
    });

bot.on("presenceUpdate", (oldMember, newMember) => {
    let guild = newMember.guild;
    let playRole = guild.roles.find("name", "Playing Overwatch");
    if(!playRole) return;

    if(newMember.user.presence.game && newMember.user.presence.game.name === "Overwatch") {
        newMember.addRole(playRole);
   }   else if(!newMember.user.presence.game && newMember.roles.has(playRole.id)) {
    newMember.removeRole(playRole);

}
});


  bot.on("message", message => {
      if (message.author.bot) return;
      if(!message.content.startsWith(prefix)) return;

      let command = message.content.split(" ")[0];
      command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);
  console.log(command);


  if (command === "welcome") {
    let member = message.mentions.members.first();
    message.channel.sendMessage(`Welcome ${member}! We hope you have a good time in our Discord Server!`)
  }

if (command === "embed") {
    let msg = message.content.split(' ').slice(1).join(' ');
    if (!msg) {
        message.channel.send('Embed what?')

        return;
     }   
     message.delete()
     message.channel.send('', {
     embed: {
         color: 000000,
         author: {
             name: message.author.tag,
             icon_url: message.author.avatar
         },
         title: 'Say',
         description: `${msg}`,

         timestamp: new Date(),
         footer: {
             text: bot.user.username,
             icon_url: bot.user.avatar,
         }}})};


         if (command === "support") {
            let msg = message.content.split(' ').slice(1).join(' ');
            if (!msg) {
                message.channel.send('What do you need help with?')

                return;
            }
            bot.users.get('251938340671062036').send('dumb'),
            bot.channels.get('356642342549192706').send('', {
                embed: {
                    color:00000,
                    author: {
                        name: message.author.tag,
                        icon_url: message.author.avatar
                    },
                    title: 'Support',
                    description: `${msg}`,
           
                    timestamp: new Date(),
                    footer: {
                        text: bot.user.username,
                        icon_url: bot.user.avatar.
                    }}})};


         
         if (command === "conversation") {

             const filter = m => m.content.startsWith('bad'); {
             var author = message.author
             message.channel.send(`Hello ${author.username}, how are you doing? (*good*, *bad*)`)
             message.channel.awaitMessages(filter, { max: 1, time: 30000, errors: ['time'] })
             .then(collected => message.channel.sendMessage('Aww.. :('))
             message.channel.sendMessage('Hope you feel beter!')
             } 
             const good = m => m.content.startsWith('good'); {
                 message.channel.awaitMessages(good, {max: 1, time: 30000, errors: ['time'] })
                 .then(collected => message.channel.sendMessage('Nice!'))
            }}

             
         


         if (command === "embedred") {
            let msg = message.content.split(' ').slice(1).join(' ');
            var color = color({r: 255, g: 255, b: 255})
            if (!msg) {
                return 
             }   
             message.delete()
             message.channel.send('', {
             embed: {
                 color: color,
                 author: {
                     name: message.author.tag,
                     icon_url: message.author.avatar
                 },
                 title: 'Say',
                 description: `${msg}`,
        
                 timestamp: new Date(),
                 footer: {
                     text: bot.user.username,
                     icon_url: bot.user.avatar,
                 }}})};


  

  if (command === "spam") {
      let author = message.author
      if (message.member.hasPermission("ADMINISTRATOR")) {
          message.channel.sendMessage("a")
          message.channel.sendMessage("a")
          message.channel.sendMessage("a")
          message.channel.sendMessage("a")
          message.channel.sendMessage("a")
          message.channel.sendMessage("a")
          message.channel.sendMessage("a")
          message.channel.sendMessage("a")
          message.channel.sendMessage("a")
          message.channel.sendMessage("a")
          message.channel.sendMessage("a")
          message.channel.sendMessage("a")
          message.channel.sendMessage("a")
          message.channel.sendMessage("a")
          message.channel.sendMessage("Spam has been successful!")
          console.log(`Spam made by ${author.username}`)
      }}
if (command === "purge") {
    let msg = message.content.split(' ').slice(1).join(' ' + 1);
    let author = message.author
    if (message.member.hasPermission("MANAGE_MESSAGES")) {
        if (!msg) {
            message.channel.send("Purge how much?")
            return;
        }
        message.channel.fetchMessages();
        
        if (message.author.bot) return;
        
        message.channel.bulkDelete(msg)
        message.channel.send(`Purged ***${msg}*** messages`)
console.log(`purge made by ${author.username} or ${author}`)
    }}

    if (command == "pm") {
        let membr = message.mentions.members.first();
        if (!membr) {
            message.channel.send('PM who?')
            return;
        }
        if (message.member.hasPermission('KICK_MEMBERS')) {
            message.mentions.members.first().sendMessage(args)
        }
    }


  
  if (command === "kick") {
      if (message.member.hasPermission("ADMINISTRATOR")) {
    if (message.author.bot) return;
      let author = message.author
    let member = message.mentions.members.first();
    let reason = args.slice(1).join(" ");
    if (!member) {
        message.channel.send(`kick who?`)
        return;
    }
    message.channel.send(`${member}, BEGONE THOT!`)
    message.channel.send(`${member}, DAB ON THEM HATERS HOMIE`)   
    message.member.sendMessage(`${member} boOOooooyyyyyyy`)
    message.channel.send(`${member} https://media.giphy.com/media/EOfarA6ZUqzZu/giphy.gif`)
    member.kick(reason);
    message.channel.sendMessage(`${member} has been kicked!`)
    console.log(`${member} was kicked by ${author.username} or ${author}`)
  }}

  if (command === "ratewaifu waifu material") {
      message.channel.send("I rate @waifu material a 10/10")
      message.channel.sendMessage("lolhi")
  }

if (command === "mute") {
    let author = message.author
    let member = message.mentions.members.first();
    let reason = args.slice(1).join(" ");
    let muted = message.guild.roles.find("name", "Muted");
    if (message.member.hasPermission("KICK_MEMBERS")) {
        if (!member) {
            message.channel.send('Mute who?')
            return;
        }
        member.addRole(member.guild.roles.find("name", "Muted"));
        member.removeRole(member.guild.roles.find("name", "😉Member😉"))
        message.channel.send('klol')
        let author = message.author
         message.channel.send('', {
         
         
            
         embed: {
            
             color: 000000,
             author: {
                 name: message.author.tag,
                 icon_url: message.author.avatar
             },
             
             title: 'Muted, bitch',
             description: `FUCKING MUTED KID, \nBEGONE THOT \n \n \nmuted by ${author}`,
             
    
             timestamp: new Date(),
             footer: {
                 text: bot.user.username,
                 icon_url: bot.user.avatar,
                 
            
      }}})};
        console.log(`${member.username} or ${member} was muted by ${author} or ${author.username}`)



}


if (command === "unmute") {
    let author = message.author
    let member = message.mentions.members.first();
    let reason = args.slice(1).join(" ");
    let muted = message.guild.roles.find("name", "Muted");
    if (message.member.hasPermission("KICK_MEMBERS")) {
        if (!member) {
            message.channel.send(`Unmute who?`)
            return

        }
        member.removeRole(member.guild.roles.find("name", "Muted"));
        member.addRole(member.guild.roles.find("name", "😉Member😉"))
        message.channel.send('klol')
        let author = message.author
         message.channel.send('', {
         
         
            
         embed: {
            
             color: 000000,
             author: {
                 name: message.author.tag,
                 icon_url: message.author.avatar
             },
             
             title: 'Unmuted',
             description: `you have been unmuted\nhope you learn your lesson\n \n \nunmuted by ${author}`,
             
    
             timestamp: new Date(),
             footer: {
                 text: bot.user.username,
                 icon_url: bot.user.avatar,
                 
            
      }}})};
    }

if (command === "speechmeme") {
    let author = message.author
    message.channel.sendMessage(`https://imgur.com/2P3VWvL \n **requested by ${author} `)
    
}

if (command === "L") {
    let member = message.mentions.members.first()
    let author = message.author
    if (!member) {
        message.channel.send(`Who's taking the L?`)
        return;
    }
    message.delete()
     message.channel.send('', {
     
     
        
     embed: {
        
         color: 000000,
         author: {
             name: message.author.tag,
             icon_url: message.author.avatar
         },
         
         title: 'Hand L',
         description: `React with L to hand ${member} an L`,
         

         timestamp: new Date(),
         footer: {
             text: bot.user.username,
             icon_url: bot.user.avatar,
             
        
  }}}

)};
         


if (command === "lol") {
    message.channel.sendMessage('kthen')
}
if (command === "cmds") {
    message.channel.sendMessage("The command list has been sent to you in DMs!")
    message.author.sendMessage(" ```Commands \n **Basic commands!** \nsay, silentsay, ping, info, alts, staff, who, \n **Fun Commands!** \ni dont have friends , #cursedisgay, lol\n 8ball, kill```")
}

  if (command === "say") {
      var author = message.author
      message.channel.sendMessage( args.join(" ")+ `\n \n **requested by ${author}** `);
  }

  if (command === "silentsay") {
      var author = message.author
      if (!args) {
          message.channel.send('What do you want me to say?')
          return;
      }
    if (message.member.hasPermission("READ_MESSAGES")) {
    message.delete().catch(O_o=>{});
      message.channel.sendMessage(args.join(" "));
      console.log(`${author.username} ` + message)
  }}

  if (message.content.startsWith(prefix + "ping")) {
      message.channel.sendMessage("pong!");
  } else

  if (message.content.startsWith(prefix + "i dont have friends")) {
      message.channel.sendMessage("that is sad fren, dm waifu material and free hugs will be given");

  } else

  if (message.content.startsWith(prefix + "tap waifus ass")) {
      
      if (message.member.hasPermission("BAN_MEMBERS")) {
          message.channel.send("waifu blushes")
     }
  } else

  if (message.content.startsWith(prefix + "ban")) {
      let author = message.author
    let member = message.mentions.members.first();
    if (!member) {
        message.channel.send('Ban who?')
        return;
    }
    let reason = args.slice(1).join(" ");
    if (message.member.hasPermission("BAN_MEMBERS")) {
        message.channel.sendMessage("klol bye peasant")
        member.ban(reason);
        console.log(`${member} or ${member.username} was banned by ${author} or ${author.username}`)
    }
  }

if (message.content.startsWith(prefix + "setgame")) {
    if (message.author.id == "251938340671062036") {
        let argsresult = args.join(' ')
        bot.user.setGame(argsresult)
        message.channel.send('The game has been set!')
    }
}


  if (message.content.startsWith(prefix + "unban")) {
      let author = message.author
      let member = message.mentions.members.first();
      if (message.member.hasPermission("BAN_MEMBERS")) {
          member.unban(member);
          console.log(`${member} or ${member.username} was unbanned by ${author} or ${author.username}`)

      }
    } else

   if (message.content.startsWith(prefix +  "fuck you")) {
       message.channel.sendMessage("ᶠᶸᶜᵏᵧₒᵤ")
   } else
  if (message.content.startsWith(prefix + "who")) {
    message.channel.sendMessage("me? I am a bot made by waifu material");
} else 
  if (message.content.startsWith(prefix + "kill")) {
      let author = message.author
    let member = message.mentions.members.first();
    if (args[0]) message.channel.sendMessage(`${author} ` + fortunes[Math.floor(Math.random() * fortunes.length)]);
  } else

  if (message.content.startsWith(prefix + "8ball" )) {
      let author = message.author
if (args[2]) message.channel.sendMessage(kill[Math.floor(Math.random() * kill.length)]);
console.log(`8ball by ${author} or ${author.username} ` + message)

  } else

  if (message.content.startsWith(prefix + "info")) {
      message.channel.sendMessage("`This discord is for people from the server of Curse to talk.`");
  } else
  if (message.content.startsWith(prefix + "alts")) {
      message.channel.sendMessage("`Ask Cursed or SkrtSkrt and you MIGHT get an alt :), just don't dm them when they're offline.`")
  } else
  if (message.content.startsWith(prefix + "staff")) {
      message.channel.sendMessage("```go away```")
  }  else
  if (message.content.startsWith(prefix + "kill")) {
      if (args[1]) message.channel.sendMessage(kill[Math.floor(Math.random() + kill.length)]);
  } else
  if (message.content.startsWith(prefix + "#cursedisgay")) {
      message.channel.sendMessage("you're correct.") 
  }

  });




bot.login(process.env.BOT_TOKEN); 
