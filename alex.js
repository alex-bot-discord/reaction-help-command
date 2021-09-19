let Discord = require('discord.js');

async function help(client, prefix) {
client.on('ready', () => { 
  console.log(`Commands [help] On`);
});


client.on('message', message => {  // help                 
    if(!message.channel.guild) return;
       if(message.content.startsWith(prefix + 'help')) {
       if(!message.channel.guild) return message.channel.send('> **This Command just for servers!**.').then(m => m.delete(5000));

        let helpemoji = client.emojis.find(emoji => emoji.name === "alexbot");
      let moderatoremoji = client.emojis.find(emoji => emoji.name === "settings2");
       let optionsemoji = client.emojis.find(emoji => emoji.name === "settings");
        let pro = client.emojis.find(emoji => emoji.name === "shield_1");
        let profilesemoji = client.emojis.find(emoji => emoji.name === "profile");
        let informationsemoji = client.emojis.find(emoji => emoji.id === "612329444698226761");

        let defembed = new Discord.RichEmbed()
        .setAuthor(message.author.tag, message.author.avatarURL)
        .setTitle("> قائمة المساعدة " + helpemoji)
        .setDescription(`> بوت يساعدك في اداره السيرفر وحمايته من الاختراق وبمميزات حصرية `)
        .addField("> لعرض الاوامر العامة", `**اضغط هذا الرياكشن 🌍**`,true)
        .addField("> لعرض اوامر البروفايل", `**اضغط هذا الرياكشن ${profilesemoji}**`, true)
        .addField("> لعرض اوامر معلومات البوت", `**اضغط هذا الرياكشن ${informationsemoji}**`, true)
        .addField("> لعرض الاوامر الإدارية", `**اضغط هذا الرياكشن ${moderatoremoji}**`, true)
        .addField("> لعرض اوامر الإعدادات", `**اضغط هذا الرياكشن ${optionsemoji}**`, true)
        .addField("> لعرض اوامر الحماية", `**اضغط هذا الرياكشن ${pro}**`, true)
        .setFooter(client.user.tag, client.user.avatarURL)
        .setTimestamp()
        .setColor("BLACK") 
      message.channel.send(defembed).then(msg => {

        msg.react('🌍').then(r=>{
         msg.react('593938799877160960').then(r=>{
           msg.react('612329444698226761').then(r=>{
   msg.react("593926316387074048").then(r=>{
        msg.react('593926268068692057').then(r=>{
   msg.react('612716168821604479').then(r=>{



        })
            let homeFilter = (reaction, user) => reaction.emoji.name === 'x_' && user.id === message.author.id;
                     let home = msg.createReactionCollector(homeFilter, { time: 120000 });
      
                home.on("collect", r => {
                   let homeh = new Discord.RichEmbed()
        .setAuthor(message.author.tag, message.author.avatarURL)
        .setTitle("> قائمة المساعدة " + helpemoji)
        .setDescription(`> بوت يساعدك في اداره السيرفر وحمايته من الاختراق وبمميزات حصرية `)
        .setDescription(`> بوت يساعدك في اداره السيرفر وحمايته من الاختراق وبمميزات حصرية `)
        .addField("> لعرض الاوامر العامة", `**اضغط هذا الرياكشن 🌍**`,true)
        .addField("> لعرض اوامر البروفايل", `**اضغط هذا الرياكشن ${profilesemoji}**`, true)
        .addField("> لعرض اوامر معلومات البوت", `**اضغط هذا الرياكشن ${informationsemoji}**`, true)
        .addField("> لعرض الاوامر الإدارية", `**اضغط هذا الرياكشن ${moderatoremoji}**`, true)
        .addField("> لعرض اوامر الإعدادات", `**اضغط هذا الرياكشن ${optionsemoji}**`, true)
        .addField("> لعرض اوامر الحماية", `**اضغط هذا الرياكشن ${pro}**`, true)
        .setFooter(client.user.tag, client.user.avatarURL)
        .setTimestamp()
        .setColor("BLACK") 
msg.edit(homeh)

})

 
let y1Filter = (reaction, user) => reaction.emoji.name === '🌍' && user.id === message.author.id;
     
let y1 = msg.createReactionCollector(y1Filter, { time: 120000 });
                 
                        y1.on("collect", r => {
           let publicCommands = new Discord.RichEmbed()
            .setAuthor(message.author.tag, message.author.avatarURL)
            .setTitle("**🌍 : الاوامر العامة**")
            .setDescription(`
           > **\`%user\` ⇏ رؤية معلومات عنك او عن الى تمنشنه **
            > **\`%color\` ⇏ تغير لونك فى السيرفر**
            > **\`%colors\` ⇏ قائمة ألالوان**
            > **\`%avatar [@user]\` ⇏ معرفة الصورة حقك او صورة الى تمنشنه**
            > **\`%avatar server\` ⇏ لروئية صورة السيرفر**
            > **\`%top\` ⇏ لعرض توب افضل 5 بالتيكست والفويس**
            > **\`%top text\` ⇏ لعرض توب افضل 5 بالتيكست **
            > **\`%top voice\` ⇏ لعرض توب افضل 5 بالفويس **
            > **\`%emojis\` ⇏ روئية جميع ايموجيات السيرفر**
            > **\`\`%emoji-search\`\` [name] : البحث عن ايموجي من سيرفرات البوت**
            > **\`%rank\` ⇏ معرفة معلومات عن الرانك**
            > **\`%8ball\` ⇏ اسئل البوت ويرد عشوائي**
            > **\`%playstore\` [Game Name] ⇏ البحث بمتجر بلاي**
            > **\`%game\` [Game Name] ⇏ معلومات عن العبة**
            > **\`%steam\` [Game Name] ⇏ معلومات عن لعبة بستيم**`)
            .setFooter(client.user.tag, client.user.avatarURL)
            msg.edit(publicCommands)
            msg.react("612375508809809982").then(publicmsg => {
              let y1Filter  = (reaction, user) => reaction.emoji.name === 'x_' && user.id === message.author.id;
              let y1 = msg.createReactionCollector(y1Filter, { time: 120000 });

                })
 
          })

let y2Filter = (reaction, user) => reaction.emoji.name === 'profile' && user.id === message.author.id;
     
let y2 = msg.createReactionCollector(y2Filter, { time: 120000 });
                 
                        y2.on("collect", r => {
                            
           let publicCommands = new Discord.RichEmbed()
            .setAuthor(message.author.tag, message.author.avatarURL)
            .setTitle("اوامر البروفايل:")
            .setDescription(`> **\`\`%credit\`\` : رؤية رصيدك**
> **\`\`%tansfer\`\` : لتحويل مبلغ **
> **\`\`%profile\`\` : رؤية بروفايلك**
> **\`\`%background\`\` [1/10] : خلفياتك**
> **\`\`%buy\`\` : للحصول على خلفية**
> **\`\`%set\`\` : لتعين خلفية البروفايل الخاص بك**
> **\`\`%mywalls\`\` : خلفياتك**
> **\`\`%setinfo\`\` : لوضع وصف عنك في بروفايلك**
> **\`\`%daily\`\` : اخذ مكافئتك اليومية**
> **\`\`%casino\`\` : لعبة الحظ**`)
           .setFooter(client.user.tag, client.user.avatarURL)
msg.edit(publicCommands)
            msg.react("612375508809809982").then(publicmsg => {
              let y1Filter  = (reaction, user) => reaction.emoji.name === 'x_' && user.id === message.author.id;
              let y1 = msg.createReactionCollector(y1Filter, { time: 120000 });

                })
 
          })

          let y3Filter = (reaction, user) => reaction.emoji.id === '612329444698226761' && user.id === message.author.id;
     
let y3 = msg.createReactionCollector(y3Filter, { time: 120000 });
                 
                        y3.on("collect", r => {
                            
           let info = new Discord.RichEmbed()
            .setAuthor(message.author.tag, message.author.avatarURL)
            .setTitle(`**${informationsemoji} : اوامر المعلومات**`)
            .setDescription(`> \`${prefix}links\` **⇏  لمعرفة روابط البوت مثل لوحة التحكم وسيرفر السبورت **
            > \`${prefix}error\` **⇏ للشكوي عن خطأ او ثغرة بالبوت**
            > \`%ping\` **⇏ معرفة سرعة اتصال البوت فى الوقت الحالى**
            > \`%speedtest\` **⇏ معرفة  سرعة االتحميل والرفع حقت البوت**`)
            .setFooter(client.user.tag, client.user.avatarURL)
         .addField('• **__Bot Link__**' , `[Invite Link](https://discordapp.com/api/oauth2/authorize?client_id=${client.user.id}&permissions=8&scope=bot)` ,true)
       .addField('• **__Support Server__**' , `[Support Server](https://discord.gg/quSAQdu)` ,true)
        .addField('• **__Dashboard__**' , `[Support Server](http://www.alex-bot.ga)` ,true)
      msg.edit(info)
            msg.react("612375508809809982").then(publicmsg => {
              let y1Filter  = (reaction, user) => reaction.emoji.name === 'x_' && user.id === message.author.id;
              let y1 = msg.createReactionCollector(y1Filter, { time: 120000 });

                })
 
          })


   


    let activeFilter = (reaction, user) => reaction.emoji.name === "settings2" && user.id === message.author.id;
                     let active = msg.createReactionCollector(activeFilter, { time: 120000 });
      
                active.on("collect", r => {
                      let mod = new Discord.RichEmbed()
            .setAuthor(message.author.tag, message.author.avatarURL)
            .setTitle("**<:settings2:593926316387074048> : الاوامر الادارية**")
            .setDescription(`> **\`\`%colorbox\`\` : علبة الالوان**
> **\`\`%clear [Number]\`\` : مسح عدد ما من الرسائل**
> **\`\`%ban\`\` [user] : إعطاء حظر**
> **\`\`%kick\`\` [user] : إعطاء طرد**
> **\`\`%mute\`\` [user] : لاعضاء ميوت لعضو**
> **\`\`%unmute\`\` [user] : لفك الميوت عن عضو بالسيرفر**
> **\`\`%emojie-add\`\` [link] [name] : اضافة ايموجي عن طريق الينك حقته**
> **\`\`%vote\`\` [message] : انشااء تصويت **
> **\`\`%mc\`\` : قفل الشات**
> **\`\`%umc\`\` : فتح الشات**`)
          .setFooter(client.user.tag, client.user.avatarURL)
msg.edit(mod)
            msg.react("612375508809809982").then(publicmsg => {
              let activeFilter = (reaction, user) => reaction.emoji.name === 'x_' && user.id === message.author.id;
                     let active = msg.createReactionCollector(activeFilter, { time: 120000 });
                })
 
          })

 
    let settingsfilter = (reaction, user) => reaction.emoji.name === "settings2" && user.id === message.author.id;
                     let settings = msg.createReactionCollector(settingsfilter, { time: 120000 });
      
                active.on("collect", r => {
                      let mod = new Discord.RichEmbed()
            .setAuthor(message.author.tag, message.author.avatarURL)
            .setTitle("**<:settings2:593926316387074048> : الاوامر الادارية**")
            .setDescription(`> **\`\`%colorbox\`\` : علبة الالوان**
> **\`\`%clear [Number]\`\` : مسح عدد ما من الرسائل**
> **\`\`%ban\`\` [user] : إعطاء حظر**
> **\`\`%kick\`\` [user] : إعطاء طرد**
> **\`\`%mute\`\` [user] : لاعضاء ميوت لعضو**
> **\`\`%unmute\`\` [user] : لفك الميوت عن عضو بالسيرفر**
> **\`\`%emojie-add\`\` [link] [name] : اضافة ايموجي عن طريق الينك حقته**
> **\`\`%vote\`\` [message] : انشااء تصويت **
> **\`\`%mc\`\` : قفل الشات**
> **\`\`%umc\`\` : فتح الشات**`)
          .setFooter(client.user.tag, client.user.avatarURL)
msg.edit(mod)
            msg.react("612375508809809982").then(publicmsg => {
              let activeFilter = (reaction, user) => reaction.emoji.name === 'x_' && user.id === message.author.id;
                     let active = msg.createReactionCollector(activeFilter, { time: 120000 });
                })
 
          })
 
          
          let y4Filter = (reaction, user) => reaction.emoji.name === 'shield_1' && user.id === message.author.id;
     
let y4 = msg.createReactionCollector(y4Filter, { time: 120000 });
                 
                        y4.on("collect", r => {
                            
           let Protection = new Discord.RichEmbed()
            .setAuthor(message.author.tag, message.author.avatarURL)
            .setTitle("**<:shield:612716168821604479> : اوامر الحماية**")
            .setDescription(`__**[Edit Protaction On Dashboard](https://www.alex-bot.ga/mange/${message.guild.id}/anti)**__
            > \`%pro on\` **⇏ تشغيل الحماية بالسيرفر**
            > \`%pro off\` **⇏ لأيقاف الحماية بالسيرفر**
            > \`${prefix}pro limits ban\` **⇏  تحديد الحد الأقصى للتبنيد قبل سحب رتبه الشخص **
            > \`${prefix}pro limit skick\` **⇏ تحديد الحد الأقصى للطرد قبل سحب رتبه الشخص**
            > \`%pro limits roleD\` **⇏  تحديد الحد الأقصى لإنشاء الرتب قبل سحب رتبه الشخص**
            > \`%pro limits roleC\` **⇏ تحديد الحد الأقصى لحذف الرتب قبل سحب رتبه الشخص**
            > \`%pro limits channelC\` **⇏ تحديد الحد الأقصى لإنشاء الرومات قبل سحب رتبه الشخص**
            > \`%pro limits channelD\` **⇏ تحديد الحد الأقصى لحذف الرومات قبل سحب رتبه الشخص**
            > \`%pro limits time\` **⇏ تحديد الوقت قبل سحب الرتبه من الشخص**
            > \`%pro-allow\` **⇏ لوضع احد بالقائمة البيضااء**
            > \`%pro-disallow\` **⇏ لحذف احد من القائمة البيضاء**
            > \`%pro config\` **⇏ تلعرض أعدادات الحماية فى سيرفرك**-
`)
            .setFooter(client.user.tag, client.user.avatarURL)
msg.edit(Protection)
            msg.react("612375508809809982").then(publicmsg => {
              let y1Filter  = (reaction, user) => reaction.emoji.name === 'x_' && user.id === message.author.id;
              let y1 = msg.createReactionCollector(y1Filter, { time: 120000 });

                })
 
          })




  

});
    })
});
     })

          })
       })
      }
})





}
module.exports = help;
