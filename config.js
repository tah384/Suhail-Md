const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://taha16511:4uPo1wMZxKzrqobP@cluster0.dvlwfxx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923103443197" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923103443197";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_06_02_07_14_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICAyNDEsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjIwLFxuICAgICAgICAxMjMsXG4gICAgICAgIDUsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjE3LFxuICAgICAgICAxMzYsXG4gICAgICAgIDExNyxcbiAgICAgICAgNDEsXG4gICAgICAgIDIxMCxcbiAgICAgICAgNDIsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjMwLFxuICAgICAgICAxNTcsXG4gICAgICAgIDQ4LFxuICAgICAgICAyMTIsXG4gICAgICAgIDE2NCxcbiAgICAgICAgNDgsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTQzLFxuICAgICAgICAyMixcbiAgICAgICAgMjEwLFxuICAgICAgICAxMjYsXG4gICAgICAgIDQzLFxuICAgICAgICAxMzgsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjA4LFxuICAgICAgICAxMjcsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTExXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjA5LFxuICAgICAgICAyNDcsXG4gICAgICAgIDkwLFxuICAgICAgICAxMDIsXG4gICAgICAgIDE4LFxuICAgICAgICAyMDQsXG4gICAgICAgIDExNyxcbiAgICAgICAgMzUsXG4gICAgICAgIDE0LFxuICAgICAgICAxNzQsXG4gICAgICAgIDIsXG4gICAgICAgIDEyMCxcbiAgICAgICAgNzMsXG4gICAgICAgIDI2LFxuICAgICAgICAxNzMsXG4gICAgICAgIDE3MixcbiAgICAgICAgNDYsXG4gICAgICAgIDE3NCxcbiAgICAgICAgNjksXG4gICAgICAgIDc1LFxuICAgICAgICAyNDksXG4gICAgICAgIDExOSxcbiAgICAgICAgMTk5LFxuICAgICAgICAyMDYsXG4gICAgICAgIDQsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjA5LFxuICAgICAgICAxNDAsXG4gICAgICAgIDE0MixcbiAgICAgICAgOTcsXG4gICAgICAgIDQ4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzIsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTk2LFxuICAgICAgICAxNTYsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTI3LFxuICAgICAgICAzNCxcbiAgICAgICAgMTIyLFxuICAgICAgICA0MSxcbiAgICAgICAgMjEwLFxuICAgICAgICAxNjIsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTksXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjE4LFxuICAgICAgICAyMzAsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjU1LFxuICAgICAgICA0OCxcbiAgICAgICAgMTUsXG4gICAgICAgIDI1MixcbiAgICAgICAgOTQsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTEwLFxuICAgICAgICAyNTUsXG4gICAgICAgIDEwOSxcbiAgICAgICAgOTcsXG4gICAgICAgIDM5LFxuICAgICAgICAxMixcbiAgICAgICAgMjE4LFxuICAgICAgICAxOTgsXG4gICAgICAgIDEwMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDgsXG4gICAgICAgIDQyLFxuICAgICAgICAyNDYsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTAsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjMzLFxuICAgICAgICAxMDQsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTA4LFxuICAgICAgICAxNTMsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjMyLFxuICAgICAgICAyMzcsXG4gICAgICAgIDk4LFxuICAgICAgICAxNDMsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTE1LFxuICAgICAgICAzNCxcbiAgICAgICAgMjAyLFxuICAgICAgICAzNSxcbiAgICAgICAgMTM5LFxuICAgICAgICAxODksXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjE5LFxuICAgICAgICAxODgsXG4gICAgICAgIDQzLFxuICAgICAgICAxODEsXG4gICAgICAgIDg1LFxuICAgICAgICAxNjMsXG4gICAgICAgIDk3LFxuICAgICAgICAxMDFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzMixcbiAgICAgICAgMTY5LFxuICAgICAgICAyMzcsXG4gICAgICAgIDI5LFxuICAgICAgICAzMCxcbiAgICAgICAgMTAzLFxuICAgICAgICAyMjUsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjM2LFxuICAgICAgICAyMjUsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNTEsXG4gICAgICAgIDQxLFxuICAgICAgICA3NSxcbiAgICAgICAgMTYsXG4gICAgICAgIDk2LFxuICAgICAgICAxMyxcbiAgICAgICAgMTE3LFxuICAgICAgICAyNTAsXG4gICAgICAgIDM2LFxuICAgICAgICAxMTYsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTY5LFxuICAgICAgICAxNzcsXG4gICAgICAgIDEyNCxcbiAgICAgICAgOTEsXG4gICAgICAgIDE2NyxcbiAgICAgICAgODUsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTg2LFxuICAgICAgICAxMjJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjcsXG4gICAgICAgIDczLFxuICAgICAgICAxMTYsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjUyLFxuICAgICAgICAxOTYsXG4gICAgICAgIDYwLFxuICAgICAgICA1OSxcbiAgICAgICAgMjAyLFxuICAgICAgICAxOTUsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjEsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMzMsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjUsXG4gICAgICAgIDcxLFxuICAgICAgICAyMTEsXG4gICAgICAgIDE3OSxcbiAgICAgICAgNjksXG4gICAgICAgIDE1NSxcbiAgICAgICAgNTAsXG4gICAgICAgIDQ4LFxuICAgICAgICAxMjcsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTA4LFxuICAgICAgICAxNzIsXG4gICAgICAgIDMzLFxuICAgICAgICAyMjQsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjQ4LFxuICAgICAgICA2OFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMixcbiAgICAgICAgICAyNixcbiAgICAgICAgICA1MixcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgOTRcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMSxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgNzJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4NixcbiAgICAgICAgMTAwLFxuICAgICAgICA4NyxcbiAgICAgICAgMjMzLFxuICAgICAgICAxNjgsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTc4LFxuICAgICAgICAxMzEsXG4gICAgICAgIDY3LFxuICAgICAgICA4NyxcbiAgICAgICAgNzEsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTE3LFxuICAgICAgICAxMixcbiAgICAgICAgMzksXG4gICAgICAgIDIzOSxcbiAgICAgICAgOCxcbiAgICAgICAgMzAsXG4gICAgICAgIDU0LFxuICAgICAgICA1MCxcbiAgICAgICAgMTcyLFxuICAgICAgICA3NCxcbiAgICAgICAgMixcbiAgICAgICAgMjQ4LFxuICAgICAgICAxOTEsXG4gICAgICAgIDQ4LFxuICAgICAgICAxNjUsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTQ3LFxuICAgICAgICA1NixcbiAgICAgICAgMjE3LFxuICAgICAgICAxMjUsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTc4LFxuICAgICAgICAxNDQsXG4gICAgICAgIDMwLFxuICAgICAgICAxNTksXG4gICAgICAgIDEyNyxcbiAgICAgICAgMixcbiAgICAgICAgMTM5LFxuICAgICAgICAxMzEsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjM3LFxuICAgICAgICA0OCxcbiAgICAgICAgMjQyLFxuICAgICAgICAyOSxcbiAgICAgICAgMTExLFxuICAgICAgICAxOTEsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTE1LFxuICAgICAgICA1NixcbiAgICAgICAgMTM0LFxuICAgICAgICAyMzgsXG4gICAgICAgIDEwLFxuICAgICAgICAxMjIsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTM2LFxuICAgICAgICA0NyxcbiAgICAgICAgMTk3LFxuICAgICAgICA4NixcbiAgICAgICAgMTk2LFxuICAgICAgICAxMzMsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDg2LFxuICBcImFkdlNlY3JldEtleVwiOiBcIkF5Nkl2c2ZoS0wwQUcvcmo5NDhDWTBuS0hnN05zUS9sSlV6eU9pK1hSVDQ9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTIzMTAzNDQzMTk3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI3Q0NFQTQyREM3MTVEMUQ2Mjc2QzIxRkZGOENDQjMwM1wiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjA5MzY5NjFcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiSmctU2JJM09RYk9NaGhJZm82alNjQVwiLFxuICBcInBob25lSWRcIjogXCJlYWYzYzU5Ni1lZDYxLTRlYjItOTdmYS00M2ViNzA0MmE0MWJcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMzAsXG4gICAgICAyMixcbiAgICAgIDgxLFxuICAgICAgMjE1LFxuICAgICAgNTcsXG4gICAgICAxMjQsXG4gICAgICAxMCxcbiAgICAgIDEyMixcbiAgICAgIDEwMixcbiAgICAgIDE3OSxcbiAgICAgIDQyLFxuICAgICAgMTcwLFxuICAgICAgNjcsXG4gICAgICAxMCxcbiAgICAgIDExNixcbiAgICAgIDMsXG4gICAgICAxMzYsXG4gICAgICAyMDAsXG4gICAgICAxNjYsXG4gICAgICAyNDNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgODgsXG4gICAgICAyNDksXG4gICAgICAxNjYsXG4gICAgICAxNzcsXG4gICAgICAxNzUsXG4gICAgICA1LFxuICAgICAgMTU2LFxuICAgICAgMjM0LFxuICAgICAgMTAxLFxuICAgICAgOTAsXG4gICAgICAxOTYsXG4gICAgICA5OCxcbiAgICAgIDEwMyxcbiAgICAgIDIyMCxcbiAgICAgIDI0OSxcbiAgICAgIDEyMyxcbiAgICAgIDE4OSxcbiAgICAgIDE2NyxcbiAgICAgIDQyLFxuICAgICAgMTcxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIks5U0JRVEI2XCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjMxMDM0NDMxOTc6MTJAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjE4MzAyNjI3MzIzNTE4ODoxMkBsaWRcIixcbiAgICBcIm5hbWVcIjogXCIuXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDS3pqa3JNQ0VQalR6YlFHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJmcWltMit0MnFZWXh2cnNxNGxxWFBlQVVhdUxneHkzRC9naWt4V3k5VTNjPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcInVYTDFzSDVOMVA0L2pjNHpVdFRUN2hOZEZlbEZFOUR5clAzWExIVy9QVzRFQmtQV2JFckxKZEF4MzU2YW1Xd3RPQVBTMFo0NWNyVHM4ZVVNL3R0dEFnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkFwbHZuNWxqTlBwbGZMRG80TEJBNmVhYy9QdEM1aklMQnVEbDdCMDdhQUxnb2VIbTlVQWpDVmVrQWNmZ0E5eVFQYUdta0N5MTNaZXBpOWRwS2pldENnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzEwMzQ0MzE5NzoxMkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAxMTlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMDkzNjk1NixcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQU5EWFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTkRYLmpzb24iOiAie1wia2V5RGF0YVwiOlwicTZMVlZhbkl3WkFSTWRsTStLUXE5MUlDbnFlMyszYnQ2THlPaEszMnRyWT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo2NDQxMzMyOTEsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjA5MzUwODU2OTNcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "T_Y",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
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
