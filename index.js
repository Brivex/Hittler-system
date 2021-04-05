const { registerFont } = require('canvas');
const { Client, MessageAttachment } = require("discord.js");
const Discord = require('discord.js');
const app = require('express')();
app.get('/', (req, res) => res.send('Server is up.'));
module.exports = () => {
  app.listen(3000);
}
const client = new Client(),
  fs = require("fs"),
  Canvas = require("canvas");
//كود الهيلب لو عايز تشيلة شيلة

var _0x857a = ["\x6D\x65\x73\x73\x61\x67\x65", "\x68\x65\x6C\x70", "\x73\x74\x61\x72\x74\x73\x57\x69\x74\x68", "\x63\x6F\x6E\x74\x65\x6E\x74", "\x62\x6F\x74", "\x61\x75\x74\x68\x6F\x72", "\x0D\x0A\x0D\x0A\x20\x20\x20\x20\x20\x20", "\x73\x65\x74\x6C\x69\x6E\x65\x20\x5B\x43\x68\x61\x6E\x6E\x65\x6C\x20\x49\x64\x5D\x20\x5B\x49\x6D\x61\x67\x65\x20\x4C\x69\x6E\x6B\x5D\x0D\x0A\x0D\x0A\x20\x20\x20\x20\x20\x20", "\x69\x6E\x66\x6F\x0D\x0A\x0D\x0A\x20\x20\x20\x20\x20\x20", "\x64\x65\x6C\x65\x74\x65\x0D\x0A\x0D\x0A\x20\x20\x20\x20\x20\x20\x5B\x59\x6F\x75\x74\x75\x62\x65\x5D\x28\x68\x74\x74\x70\x73\x3A\x2F\x2F\x77\x77\x77\x2E\x79\x6F\x75\x74\x75\x62\x65\x2E\x63\x6F\x6D\x2F\x63\x68\x61\x6E\x6E\x65\x6C\x2F\x55\x43\x42\x41\x6A\x39\x46\x34\x63\x49\x79\x32\x53\x4D\x36\x6D\x36\x44\x35\x73\x58\x4C\x6D\x67\x29\x20\x7C\x20\x5B\x44\x69\x73\x6F\x63\x72\x64\x5D\x28\x68\x74\x74\x70\x73\x3A\x2F\x2F\x64\x69\x73\x63\x6F\x72\x64\x2E\x67\x67\x2F\x61\x53\x35\x44\x65\x6E\x71\x56\x36\x35\x29\x20\x20\x7C\x20\x20\x42\x79\x3A\x20\x4F\x6C\x69\x76\x65\x72\x2E\x23\x37\x33\x30\x35\x0D\x0A\x0D\x0A\x20", "\x73\x65\x74\x44\x65\x73\x63\x72\x69\x70\x74\x69\x6F\x6E", "\x48\x65\x6C\x70\x20\x4C\x69\x73\x74\x20\x0D\x0A\x20\x20\x20\x20\x20\x20\x0D\x0A\x20\x20\x20\x20\x20\x20", "\x73\x65\x74\x54\x69\x74\x6C\x65", "\x73\x65\x6E\x64", "\x63\x68\x61\x6E\x6E\x65\x6C", "\x6F\x6E"]; client[_0x857a[15]](_0x857a[0], (_0xf82cx1) => { if (_0xf82cx1[_0x857a[3]][_0x857a[2]](prefix + _0x857a[1])) { if (_0xf82cx1[_0x857a[5]][_0x857a[4]]) { return }; const _0xf82cx2 = new Discord.MessageEmbed()[_0x857a[12]](`${_0x857a[11]}`)[_0x857a[10]](`${_0x857a[6]}${prefix}${_0x857a[7]}${prefix}${_0x857a[8]}${prefix}${_0x857a[9]}`); _0xf82cx1[_0x857a[14]][_0x857a[13]](_0xf82cx2) } })
//نهايه كود الهيلب


//الاكواد الباقيه


// By Discord Of World In Youtube : https://www.youtube.com/channel/UCBAj9F4cIy2SM6m6D5sXLmg
//discord server : https://discord.gg/jVbcMxbj , Name : Oliver.#7305 

const prefix = `${process.env.prefix}`;
// By Discord Of World In Youtube : https://www.youtube.com/channel/UCBAj9F4cIy2SM6m6D5sXLmg
//discord server : https://discord.gg/jVbcMxbj , Name : Oliver.#7305 

const linedata = JSON.parse(fs.readFileSync("./linedata.json", 'utf-8'));
// By Discord Of World In Youtube : https://www.youtube.com/channel/UCBAj9F4cIy2SM6m6D5sXLmg
//discord server : https://discord.gg/jVbcMxbj , Name : Oliver.#7305 
client

  .on('ready', () => console.log(`Logged in as ${client.user.tag}!`))

  .on('message', async message => {
    // By Discord Of World In Youtube : https://www.youtube.com/channel/UCBAj9F4cIy2SM6m6D5sXLmg
    //discord server : https://discord.gg/jVbcMxbj , Name : Oliver.#7305 
    if (message.author.bot || !message.guild || !message.content.startsWith(prefix)) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/), commandName = args.shift().toLowerCase();
    if (commandName == 'setline') {
      // By Discord Of World In Youtube : https://www.youtube.com/channel/UCBAj9F4cIy2SM6m6D5sXLmg
      //discord server : https://discord.gg/jVbcMxbj , Name : Oliver.#7305 
      if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send(``);
      const [cha, image] = args;
      // By Discord Of World In Youtube : https://www.youtube.com/channel/UCBAj9F4cIy2SM6m6D5sXLmg
      //discord server : https://discord.gg/jVbcMxbj , Name : Oliver.#7305 

      let channel = (cha);
      // By Discord Of World In Youtube : https://www.youtube.com/channel/UCBAj9F4cIy2SM6m6D5sXLmg
      //discord server : https://discord.gg/jVbcMxbj , Name : Oliver.#7305 
      if (!channel) return message.channel.send(`\`\`\`Not Found Channel\`\`\``);
      // By Discord Of World In Youtube : https://www.youtube.com/channel/UCBAj9F4cIy2SM6m6D5sXLmg
      //discord server : https://discord.gg/jVbcMxbj , Name : Oliver.#7305 
      if (!cha || !image) return message.channel.send(`**Usage: ${prefix}setLine \`<Channel Id>\` \`<Image Link>\`**`);
      linedata[message.guild.id] = {
        // By Discord Of World In Youtube : https://www.youtube.com/channel/UCBAj9F4cIy2SM6m6D5sXLmg
        //discord server : https://discord.gg/jVbcMxbj , Name : Oliver.#7305 
        channel: channel,
        images: image,
        serverId: message.guild.id,
        by: message.author.id
        // By Discord Of World In Youtube : https://www.youtube.com/channel/UCBAj9F4cIy2SM6m6D5sXLmg
        //discord server : https://discord.gg/jVbcMxbj , Name : Oliver.#7305 
      };
      message.channel.send(`**Done Has Been Set Line Channel**`);
      // By Discord Of World In Youtube : https://www.youtube.com/channel/UCBAj9F4cIy2SM6m6D5sXLmg
      //discord server : https://discord.gg/jVbcMxbj , Name : Oliver.#7305 
      fs.writeFile("./linedata.json", JSON.stringify(linedata, null, 4), (err) => {
        if (err) console.error(err)
      });
    }
  });

// By Discord Of World In Youtube : https://www.youtube.com/channel/UCBAj9F4cIy2SM6m6D5sXLmg
//discord server : https://discord.gg/jVbcMxbj , Name : Oliver.#7305 

const { server_id } = require("./linedata.json")
// By Discord Of World In Youtube : https://www.youtube.com/channel/UCBAj9F4cIy2SM6m6D5sXLmg
//discord server : https://discord.gg/jVbcMxbj , Name : Oliver.#7305 
client.on("ready", () => {
  console.log(` ${client.user.username}`);
}).on("message", async user => {
  if (user.guild.id != `${linedata[user['guild'].id].serverId}`) return;
  if (user.channel.id != `${linedata[user['guild'].id].channel}`) return;
  if (user.author.bot) return;
  // By Discord Of World In Youtube : https://www.youtube.com/channel/UCBAj9F4cIy2SM6m6D5sXLmg
  //discord server : https://discord.gg/jVbcMxbj , Name : Oliver.#7305 
  if (user.author.send) {
    return user.channel.send({ files: [`${linedata[user['guild'].id].images}`] })
  }
})
// By Discord Of World In Youtube : https://www.youtube.com/channel/UCBAj9F4cIy2SM6m6D5sXLmg
//discord server : https://discord.gg/jVbcMxbj , Name : Oliver.#7305 



client.on('message', message => {
  if (message.content.startsWith(prefix + 'info')) {
    // By Discord Of World In Youtube : https://www.youtube.com/channel/UCBAj9F4cIy2SM6m6D5sXLmg
    //discord server : https://discord.gg/jVbcMxbj , Name : Oliver.#7305 
    try {
      if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send("");
      if (message.guild.id != `${linedata[message['guild'].id].serverId}`) return message.channel.send("This info Not Found");
      if (message.author.bot) return;
      // By Discord Of World In Youtube : https://www.youtube.com/channel/UCBAj9F4cIy2SM6m6D5sXLmg
      //discord server : https://discord.gg/jVbcMxbj , Name : Oliver.#7305 
      if (message.author.id != `${linedata[message['guild'].id].by}`) return message.channel.send("You are Not owner ship info");

      const infoEmbed = new Discord.MessageEmbed()
        .setTitle(`Info ${message.guild.name} Server Line 

      `)
        // By Discord Of World In Youtube : https://www.youtube.com/channel/UCBAj9F4cIy2SM6m6D5sXLmg
        //discord server : https://discord.gg/jVbcMxbj , Name : Oliver.#7305 

        .setImage(`${linedata[message['guild'].id].images}`)
        .setDescription(`



      Creator Atou Line : <@${linedata[message['guild'].id].by}>
      
      channel : <#${linedata[message['guild'].id].channel}>
      
      Line Image : `);


      message.channel.send(infoEmbed)
      // By Discord Of World In Youtube : https://www.youtube.com/channel/UCBAj9F4cIy2SM6m6D5sXLmg
      //discord server : https://discord.gg/jVbcMxbj , Name : Oliver.#7305 
    } catch (e) {
      message.channel.send("Not Found any line")
      console.log(e)
      // By Discord Of World In Youtube : https://www.youtube.com/channel/UCBAj9F4cIy2SM6m6D5sXLmg
      //discord server : https://discord.gg/jVbcMxbj , Name : Oliver.#7305 
    }
    // By Discord Of World In Youtube : https://www.youtube.com/channel/UCBAj9F4cIy2SM6m6D5sXLmg
    //discord server : https://discord.gg/jVbcMxbj , Name : Oliver.#7305 
  }
});
// By Discord Of World In Youtube : https://www.youtube.com/channel/UCBAj9F4cIy2SM6m6D5sXLmg
//discord server : https://discord.gg/jVbcMxbj , Name : Oliver.#7305 
client.on('message', message => {
  if (message.content.startsWith(prefix + 'delete')) {
    // By Discord Of World In Youtube : https://www.youtube.com/channel/UCBAj9F4cIy2SM6m6D5sXLmg
    //discord server : https://discord.gg/jVbcMxbj , Name : Oliver.#7305 
    if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send("");
    try {

      const infoEmbed = new Discord.MessageEmbed()
        .setTitle(`Done Delete ${linedata[message['guild'].id].serverId} Form data 
      
      `)
        // By Discord Of World In Youtube : https://www.youtube.com/channel/UCBAj9F4cIy2SM6m6D5sXLmg
        //discord server : https://discord.gg/jVbcMxbj , Name : Oliver.#7305 
        .setImage(`${linedata[message['guild'].id].images}`)
        .setDescription(`



      Delete By : <@${message.author.id}>
      
      channel : <#${linedata[message['guild'].id].channel}>
      
      Line Image : `);

      if (message.guild.id != `${linedata[message['guild'].id].serverId}`) return message.channel.send("This Line Not Found");
      // By Discord Of World In Youtube : https://www.youtube.com/channel/UCBAj9F4cIy2SM6m6D5sXLmg
      //discord server : https://discord.gg/jVbcMxbj , Name : Oliver.#7305 
      if (message.author.bot) return;
      if (message.author.id != `${linedata[message['guild'].id].by}`) return message.channel.send("You are Not owner ship Line");
      // By Discord Of World In Youtube : https://www.youtube.com/channel/UCBAj9F4cIy2SM6m6D5sXLmg
      //discord server : https://discord.gg/jVbcMxbj , Name : Oliver.#7305 
      linedata[message.guild.id] = {
        channel: "delted",
        images: "delted",
        serverId: "delted",
        by: "delted"
      };
      // By Discord Of World In Youtube : https://www.youtube.com/channel/UCBAj9F4cIy2SM6m6D5sXLmg
      //discord server : https://discord.gg/jVbcMxbj , Name : Oliver.#7305 
      message.channel.send(infoEmbed)
      fs.writeFile("./linedata.json", JSON.stringify(linedata, null, 4), (err) => {
        // By Discord Of World In Youtube : https://www.youtube.com/channel/UCBAj9F4cIy2SM6m6D5sXLmg
        //discord server : https://discord.gg/jVbcMxbj , Name : Oliver.#7305 
        if (err) console.error(err)
      });
      // By Discord Of World In Youtube : https://www.youtube.com/channel/UCBAj9F4cIy2SM6m6D5sXLmg
      //discord server : https://discord.gg/jVbcMxbj , Name : Oliver.#7305 



    } catch (e) {
      message.channel.send("Not Found any line")
      console.log(e)
      // By Discord Of World In Youtube : https://www.youtube.com/channel/UCBAj9F4cIy2SM6m6D5sXLmg
      //discord server : https://discord.gg/jVbcMxbj , Name : Oliver.#7305 

    }
    // By Discord Of World In Youtube : https://www.youtube.com/channel/UCBAj9F4cIy2SM6m6D5sXLmg
    //discord server : https://discord.gg/jVbcMxbj , Name : Oliver.#7305 
  }
});


var _0x634a = ["\x42\x79\x20\x3A\x20\x44\x69\x73\x63\x6F\x72\x64\x20\x4F\x66\x20\x57\x6F\x72\x6C\x64\x20\x4F\x72\x20\x44\x69\x73\x63\x6F\x72\x20\x3A\x20\x4F\x6C\x69\x76\x65\x72\x2E\x23\x37\x33\x30\x35", "\x6C\x6F\x67"]; console[_0x634a[1]](_0x634a[0])

client.login(process.env.token);
client.on('message', (message) => {
  // If message is i win
  if (message.content === 'خط') {
    // Send no you dont back
    message.channel.send('https://images-ext-2.discordapp.net/external/Jm0aNY2it03I2vAf7hW2u8YydZV-jlPOcOUeSWaMpxM/https/media.discordapp.net/attachments/826137836247842856/827911918307508275/15_E808F46.gif');
  }
});