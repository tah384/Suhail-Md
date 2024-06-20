const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || "https://github.com/tah384/Suhail-Md/"                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv:/taha16511:4uPo1wMZxKzrqobP@cluster0.dvlwfxx.mongodb.net/"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv:/taha16511:4uPo1wMZxKzrqobP@cluster0.dvlwfxx.mongodb.net/"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VaiOrc559PwVqANc6d3v";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923052432382" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923052432382";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_05_34_06_20_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDU1LFxuICAgICAgICA3MyxcbiAgICAgICAgMjAxLFxuICAgICAgICAyNDcsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTAyLFxuICAgICAgICAxMDAsXG4gICAgICAgIDQsXG4gICAgICAgIDUxLFxuICAgICAgICA4OSxcbiAgICAgICAgNyxcbiAgICAgICAgMTQxLFxuICAgICAgICAxMTAsXG4gICAgICAgIDgzLFxuICAgICAgICAxMDIsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTU4LFxuICAgICAgICAyNTQsXG4gICAgICAgIDIxLFxuICAgICAgICAxMjMsXG4gICAgICAgIDI0LFxuICAgICAgICAxNDcsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTU2LFxuICAgICAgICA1MixcbiAgICAgICAgMTU3LFxuICAgICAgICAzLFxuICAgICAgICA3NCxcbiAgICAgICAgMTkxLFxuICAgICAgICA5NixcbiAgICAgICAgMTEyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjM2LFxuICAgICAgICA1MixcbiAgICAgICAgNixcbiAgICAgICAgMjE1LFxuICAgICAgICA0NSxcbiAgICAgICAgNDMsXG4gICAgICAgIDg4LFxuICAgICAgICAxNDcsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjMsXG4gICAgICAgIDIwLFxuICAgICAgICAxNCxcbiAgICAgICAgNDEsXG4gICAgICAgIDE0NSxcbiAgICAgICAgODEsXG4gICAgICAgIDQwLFxuICAgICAgICA0NSxcbiAgICAgICAgMTg1LFxuICAgICAgICAyMTksXG4gICAgICAgIDEyNixcbiAgICAgICAgMCxcbiAgICAgICAgMjE2LFxuICAgICAgICAyMDAsXG4gICAgICAgIDExMixcbiAgICAgICAgMTAwLFxuICAgICAgICAxNSxcbiAgICAgICAgMTI1LFxuICAgICAgICAxMzAsXG4gICAgICAgIDgyLFxuICAgICAgICA5LFxuICAgICAgICA3OFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICAxMzksXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTM5LFxuICAgICAgICA3MCxcbiAgICAgICAgMTExLFxuICAgICAgICAxNjksXG4gICAgICAgIDgxLFxuICAgICAgICA0MixcbiAgICAgICAgMjEwLFxuICAgICAgICAxODEsXG4gICAgICAgIDcxLFxuICAgICAgICAxNjEsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjMyLFxuICAgICAgICAxMDQsXG4gICAgICAgIDQ5LFxuICAgICAgICAyMSxcbiAgICAgICAgMTA5LFxuICAgICAgICA2NyxcbiAgICAgICAgNjksXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTYyLFxuICAgICAgICAxNzksXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTU5LFxuICAgICAgICAxNDksXG4gICAgICAgIDExNCxcbiAgICAgICAgNTksXG4gICAgICAgIDExNyxcbiAgICAgICAgNSxcbiAgICAgICAgODNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNzcsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjExLFxuICAgICAgICAyNDYsXG4gICAgICAgIDEwMCxcbiAgICAgICAgNzAsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTY3LFxuICAgICAgICA1NyxcbiAgICAgICAgMjcsXG4gICAgICAgIDIzMyxcbiAgICAgICAgOTMsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjIsXG4gICAgICAgIDc0LFxuICAgICAgICAxNDMsXG4gICAgICAgIDM4LFxuICAgICAgICAyLFxuICAgICAgICAyMzAsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNTUsXG4gICAgICAgIDI1MyxcbiAgICAgICAgNzksXG4gICAgICAgIDg5LFxuICAgICAgICA3NCxcbiAgICAgICAgMjgsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTEyLFxuICAgICAgICAxMjcsXG4gICAgICAgIDU0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDgsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjM3LFxuICAgICAgICAxMzEsXG4gICAgICAgIDYxLFxuICAgICAgICAxMjUsXG4gICAgICAgIDE3MSxcbiAgICAgICAgNzksXG4gICAgICAgIDUxLFxuICAgICAgICA4NCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyOCxcbiAgICAgICAgMjI0LFxuICAgICAgICA1NyxcbiAgICAgICAgMTk1LFxuICAgICAgICAxNzgsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTM2LFxuICAgICAgICAxMTQsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTQ3LFxuICAgICAgICA0LFxuICAgICAgICAxNTUsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjUxLFxuICAgICAgICA1NCxcbiAgICAgICAgMzgsXG4gICAgICAgIDEyOCxcbiAgICAgICAgOCxcbiAgICAgICAgMjMwLFxuICAgICAgICA1NSxcbiAgICAgICAgMTIwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTM1LFxuICAgICAgICA0NCxcbiAgICAgICAgNDYsXG4gICAgICAgIDIzLFxuICAgICAgICAxODYsXG4gICAgICAgIDIyOSxcbiAgICAgICAgOTcsXG4gICAgICAgIDE4NSxcbiAgICAgICAgNDIsXG4gICAgICAgIDQzLFxuICAgICAgICAxNjEsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTU4LFxuICAgICAgICAxNTQsXG4gICAgICAgIDk5LFxuICAgICAgICA3MyxcbiAgICAgICAgMTY5LFxuICAgICAgICAxNjcsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTc3LFxuICAgICAgICA3NCxcbiAgICAgICAgODYsXG4gICAgICAgIDEwNCxcbiAgICAgICAgODMsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTU5LFxuICAgICAgICAxOTcsXG4gICAgICAgIDM2LFxuICAgICAgICAxNzgsXG4gICAgICAgIDkyLFxuICAgICAgICAyN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgOTlcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAyMixcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgODZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOCxcbiAgICAgICAgMjEyLFxuICAgICAgICAxOTIsXG4gICAgICAgIDM2LFxuICAgICAgICA3NSxcbiAgICAgICAgMTM0LFxuICAgICAgICAyNTIsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTg4LFxuICAgICAgICAxNSxcbiAgICAgICAgNTcsXG4gICAgICAgIDMyLFxuICAgICAgICAyMTYsXG4gICAgICAgIDEyLFxuICAgICAgICAxODQsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTkwLFxuICAgICAgICAyMTAsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTQ4LFxuICAgICAgICA3OSxcbiAgICAgICAgMjQwLFxuICAgICAgICAxNSxcbiAgICAgICAgOCxcbiAgICAgICAgMjQwLFxuICAgICAgICAyMDksXG4gICAgICAgIDEyMixcbiAgICAgICAgMTQzLFxuICAgICAgICAyMzgsXG4gICAgICAgIDIwMCxcbiAgICAgICAgNSxcbiAgICAgICAgMTI3LFxuICAgICAgICAyMjksXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjU1LFxuICAgICAgICAyNTQsXG4gICAgICAgIDY4LFxuICAgICAgICAxNixcbiAgICAgICAgMTUsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjIwLFxuICAgICAgICAxMzgsXG4gICAgICAgIDkxLFxuICAgICAgICAxNjQsXG4gICAgICAgIDcwLFxuICAgICAgICA4OCxcbiAgICAgICAgMjM4LFxuICAgICAgICAxNjQsXG4gICAgICAgIDgxLFxuICAgICAgICAxMzMsXG4gICAgICAgIDYsXG4gICAgICAgIDE5MCxcbiAgICAgICAgNSxcbiAgICAgICAgMCxcbiAgICAgICAgMjIwLFxuICAgICAgICA1MCxcbiAgICAgICAgMjMyLFxuICAgICAgICAxODIsXG4gICAgICAgIDQ3LFxuICAgICAgICAzLFxuICAgICAgICA1OSxcbiAgICAgICAgMTUxLFxuICAgICAgICAxMjEsXG4gICAgICAgIDEzNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjE5LFxuICBcImFkdlNlY3JldEtleVwiOiBcInJWREJ2R1U4L2hNUDFBdXdPN3IrYXhjZStEeGExM1Q2N21IQXJXdmZlMXc9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIjFyOG9NU2hqUVpPZ1prdmdMNFo2WEFcIixcbiAgXCJwaG9uZUlkXCI6IFwiZjJkNDRhMWEtNDI1Ni00Y2VmLThmM2YtYWU5YTZlNWY1MTdmXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE2NCxcbiAgICAgIDIwMixcbiAgICAgIDE2NCxcbiAgICAgIDIzNyxcbiAgICAgIDE4NixcbiAgICAgIDQ4LFxuICAgICAgNDUsXG4gICAgICAxNjEsXG4gICAgICA1NyxcbiAgICAgIDI3LFxuICAgICAgMTcwLFxuICAgICAgODgsXG4gICAgICAxNDYsXG4gICAgICAxMDcsXG4gICAgICAxNSxcbiAgICAgIDIwLFxuICAgICAgNDMsXG4gICAgICAxODcsXG4gICAgICAyLFxuICAgICAgNTJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNDMsXG4gICAgICAxNzcsXG4gICAgICAyMixcbiAgICAgIDIzNixcbiAgICAgIDEyLFxuICAgICAgMTI1LFxuICAgICAgNzUsXG4gICAgICA2NyxcbiAgICAgIDE4OCxcbiAgICAgIDIxOSxcbiAgICAgIDIwMyxcbiAgICAgIDIwNyxcbiAgICAgIDUyLFxuICAgICAgMTExLFxuICAgICAgMjQ5LFxuICAgICAgMTA4LFxuICAgICAgMTUwLFxuICAgICAgMTU3LFxuICAgICAgMTU5LFxuICAgICAgMjQ0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlQ0QTlDRUo2XCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjMwNTI0MzIzODI6MTNAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJUX1lcIixcbiAgICBcImxpZFwiOiBcIjE2MjU4NjQ3MzU1NDAxMToxM0BsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNORER4ZFVDRVBUK3pyTUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjJiN1dyR1hNUTRQNkgvZ21XR2h2ODk0MU1jeEtqcENoMDRlMWc4RlhjQW89XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwidlNoMFhOcVQ2WkxiQVZUMEkxcnpBZjRMeTI3cFA3ejl2Mm5PcHVBZXQrcC9oOUxEZWpnT0lKVE1ORC9zaTM3ckgvWXIwZmRMcjdBOWxHN3JCTXN4QkE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiNWljNS85S1ZLUHRvU2l4OVdDVnljMzl4OCtRa0xEK21zSmxPaHl3ckRSVUJHS1BjRGhqSm1Wb3dsb2JHSnh4Vi82VmpYZU52L3RoT3MvaTgvNURzZ2c9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzMDUyNDMyMzgyOjEzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAxMFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE4ODYxNjg4LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBQlp1XCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFCWnUuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJLZ0Z0MnViQnR3U2hkKytwaGt3ck9oQ2VuM0l5UzUvNWRUU3pZNDBWYnNzPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjcxNjI2Nzk3NyxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| ",public",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
