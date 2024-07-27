const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Diyatalawa,Sri lanka."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "94763504328" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_15_27_07_27_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkyLFxuICAgICAgICAyLFxuICAgICAgICAxNDEsXG4gICAgICAgIDE4MSxcbiAgICAgICAgNzIsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjEyLFxuICAgICAgICAzMixcbiAgICAgICAgNDYsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTQ3LFxuICAgICAgICA4NSxcbiAgICAgICAgMTY5LFxuICAgICAgICA3OSxcbiAgICAgICAgNzksXG4gICAgICAgIDgxLFxuICAgICAgICAxMjgsXG4gICAgICAgIDIzOCxcbiAgICAgICAgNDEsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxOTMsXG4gICAgICAgIDE0OSxcbiAgICAgICAgODMsXG4gICAgICAgIDE3NyxcbiAgICAgICAgNDYsXG4gICAgICAgIDEyNixcbiAgICAgICAgMyxcbiAgICAgICAgMTY3LFxuICAgICAgICAxNzEsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTI2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjQyLFxuICAgICAgICAyMzcsXG4gICAgICAgIDEyOCxcbiAgICAgICAgNTgsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjcsXG4gICAgICAgIDQ3LFxuICAgICAgICAxMjQsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjA1LFxuICAgICAgICAxNTEsXG4gICAgICAgIDE4NixcbiAgICAgICAgNyxcbiAgICAgICAgMTQzLFxuICAgICAgICAxNjIsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjU0LFxuICAgICAgICAxODUsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTIyLFxuICAgICAgICAyNTAsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjMwLFxuICAgICAgICAxMTgsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjMyLFxuICAgICAgICAxNTYsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjQxLFxuICAgICAgICAxODAsXG4gICAgICAgIDU1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTIsXG4gICAgICAgIDc4LFxuICAgICAgICAyNTQsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTQsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjUsXG4gICAgICAgIDUzLFxuICAgICAgICAxNjIsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTM5LFxuICAgICAgICAyMTIsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjE1LFxuICAgICAgICAxNTEsXG4gICAgICAgIDYwLFxuICAgICAgICA3NSxcbiAgICAgICAgNTgsXG4gICAgICAgIDEyMixcbiAgICAgICAgNzQsXG4gICAgICAgIDk0LFxuICAgICAgICAyNDksXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjAwLFxuICAgICAgICAxNixcbiAgICAgICAgMjA3LFxuICAgICAgICA0OCxcbiAgICAgICAgMjUsXG4gICAgICAgIDk0LFxuICAgICAgICA2MSxcbiAgICAgICAgMjAxLFxuICAgICAgICA3NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTksXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMTYsXG4gICAgICAgIDIwMCxcbiAgICAgICAgNTAsXG4gICAgICAgIDMyLFxuICAgICAgICAxMTQsXG4gICAgICAgIDEzOSxcbiAgICAgICAgOTUsXG4gICAgICAgIDIzOCxcbiAgICAgICAgNjIsXG4gICAgICAgIDIwMixcbiAgICAgICAgNDQsXG4gICAgICAgIDIsXG4gICAgICAgIDQyLFxuICAgICAgICAyMTgsXG4gICAgICAgIDgzLFxuICAgICAgICAxMixcbiAgICAgICAgMTczLFxuICAgICAgICAxOTAsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTYyLFxuICAgICAgICAxNzYsXG4gICAgICAgIDIzMCxcbiAgICAgICAgNjIsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjEsXG4gICAgICAgIDEzNCxcbiAgICAgICAgOTQsXG4gICAgICAgIDE4MixcbiAgICAgICAgNTRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQwLFxuICAgICAgICA5LFxuICAgICAgICAyMjQsXG4gICAgICAgIDcxLFxuICAgICAgICA3MCxcbiAgICAgICAgNTksXG4gICAgICAgIDEyMixcbiAgICAgICAgMTEyLFxuICAgICAgICAxMTcsXG4gICAgICAgIDI2LFxuICAgICAgICAyNTMsXG4gICAgICAgIDI0LFxuICAgICAgICAxOTQsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTMxLFxuICAgICAgICAxNjUsXG4gICAgICAgIDE4LFxuICAgICAgICA3MCxcbiAgICAgICAgMTYzLFxuICAgICAgICAxNDcsXG4gICAgICAgIDUsXG4gICAgICAgIDY1LFxuICAgICAgICAzNCxcbiAgICAgICAgODQsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTMzLFxuICAgICAgICAxNTMsXG4gICAgICAgIDQ4LFxuICAgICAgICAyMDgsXG4gICAgICAgIDg2LFxuICAgICAgICAxOSxcbiAgICAgICAgMTI3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDMyLFxuICAgICAgICA5MyxcbiAgICAgICAgMjE5LFxuICAgICAgICAxNzAsXG4gICAgICAgIDM2LFxuICAgICAgICAxNCxcbiAgICAgICAgMTI3LFxuICAgICAgICA4MSxcbiAgICAgICAgNTIsXG4gICAgICAgIDE3MSxcbiAgICAgICAgNDgsXG4gICAgICAgIDYxLFxuICAgICAgICAyMDgsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjMzLFxuICAgICAgICAxNixcbiAgICAgICAgMjM0LFxuICAgICAgICAxMjYsXG4gICAgICAgIDkxLFxuICAgICAgICAxMDQsXG4gICAgICAgIDEyNyxcbiAgICAgICAgNTUsXG4gICAgICAgIDU4LFxuICAgICAgICAxODQsXG4gICAgICAgIDcwLFxuICAgICAgICAxODQsXG4gICAgICAgIDY2LFxuICAgICAgICAyMzMsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjI4LFxuICAgICAgICAxMzAsXG4gICAgICAgIDhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICA5NixcbiAgICAgICAgICA2OVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICA0MSxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjM4LFxuICAgICAgICAyMDYsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjAxLFxuICAgICAgICAxNDEsXG4gICAgICAgIDc5LFxuICAgICAgICAxMzcsXG4gICAgICAgIDUwLFxuICAgICAgICA5NSxcbiAgICAgICAgMTQxLFxuICAgICAgICAxNTAsXG4gICAgICAgIDYzLFxuICAgICAgICAxNDUsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTYsXG4gICAgICAgIDYyLFxuICAgICAgICAxMjIsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjA1LFxuICAgICAgICAxMixcbiAgICAgICAgMjEwLFxuICAgICAgICA4NSxcbiAgICAgICAgMixcbiAgICAgICAgMTEsXG4gICAgICAgIDQ0LFxuICAgICAgICAxMDcsXG4gICAgICAgIDM2LFxuICAgICAgICAxMDcsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTkwLFxuICAgICAgICAyMTMsXG4gICAgICAgIDg1LFxuICAgICAgICAxNzAsXG4gICAgICAgIDYsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTczLFxuICAgICAgICAxNzIsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTI1LFxuICAgICAgICAxNzMsXG4gICAgICAgIDgsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTE4LFxuICAgICAgICAyMDAsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTc0LFxuICAgICAgICAwLFxuICAgICAgICAxMjMsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjMsXG4gICAgICAgIDg0LFxuICAgICAgICAxNzYsXG4gICAgICAgIDQsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTM1LFxuICAgICAgICAxOSxcbiAgICAgICAgMTIyLFxuICAgICAgICAxNTAsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyOSxcbiAgICAgICAgNDIsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTM3XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxODgsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiVVNmV3dQUk4vMnJ3YnJBblBacGp1dGdMZ1pIVkFmcGNDWmpra29sVmZDVT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5NDc2MzUwNDMyOEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiNUM0QjdFNDM3Njg1MTkzQUFCRDE1MTNFRDNFNDczMjlcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIyMDk0MDQ2XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIlUwT1VyU09rU1dLNGU4S1lDMW9OalFcIixcbiAgXCJwaG9uZUlkXCI6IFwiMWQyYzZiYzItNTQxMC00YThkLWEwOGMtNDJhMDIzZmU3OGEyXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDUyLFxuICAgICAgMTIwLFxuICAgICAgMSxcbiAgICAgIDE3NCxcbiAgICAgIDE1MyxcbiAgICAgIDEyNyxcbiAgICAgIDI0NixcbiAgICAgIDgwLFxuICAgICAgMTMxLFxuICAgICAgMzQsXG4gICAgICAyNTMsXG4gICAgICA0OCxcbiAgICAgIDExNSxcbiAgICAgIDE4MixcbiAgICAgIDE4NyxcbiAgICAgIDY1LFxuICAgICAgOTEsXG4gICAgICAyMDQsXG4gICAgICAyMzIsXG4gICAgICAxNjJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiBmYWxzZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEzNSxcbiAgICAgIDc4LFxuICAgICAgNjMsXG4gICAgICAxMjEsXG4gICAgICAzOSxcbiAgICAgIDYsXG4gICAgICAxODYsXG4gICAgICAyMzksXG4gICAgICA1MyxcbiAgICAgIDY3LFxuICAgICAgMTY1LFxuICAgICAgMTY2LFxuICAgICAgMTYwLFxuICAgICAgMTEzLFxuICAgICAgMTEzLFxuICAgICAgOTAsXG4gICAgICAyMjQsXG4gICAgICAxNTIsXG4gICAgICAxNTcsXG4gICAgICAxOTdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNMUEY3OFVDRU5PamxMVUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIm41WkdhZTN0Q0VsejZVdU1hQ25xeVlnVjFRSWN2cDhSV09hQzRDczR5blU9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiZEdaYXBaQXJmS0U4QlNrWjExVmFhUHB1UEgyblloZ2hmeGRvU3hTNnhHQTNiRVdDdGtYMHNhd3VrbmJsR1ZZZVl3ZG9JRFF4d2Z4ZDdOUHhYYS9ZQkE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiTHgxZHlrZXJtK0FPQWFYZmhWVFhnNE5qU21SdDdGaUZScUFLWEYybzd4b2xZbG1WZ09oeWtJeityRmMyT1crT3E1bjFYR1pVU1RNSVJOL0xIb2IzakE9PVwiXG4gIH0sXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5NDc2MzUwNDMyODoyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwi77y277yp77yy77y177yzXCIsXG4gICAgXCJsaWRcIjogXCI0NDQxMDQ2NTE4NTk5OToyQGxpZFwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTQ3NjM1MDQzMjg6MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgOCxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMTE3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjIwOTQwMzgsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFNRzlcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU1HOC5qc29uIjogIntcImtleURhdGFcIjpcIk8vRDZMYXhuT055SE94TXF0bzk2Ti83K2pVeVZlanludGlsRkJxZ0llTEE9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NjgzNDAxOTA2LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFNRzkuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJvRDQ5Y1MrYzJLWUtFZkg2NTREWmlSNDhhVmpYMXNLc0lHc1JCRmNEcC84PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjY4MzQwMTkwNixcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzBdfSxcInRpbWVzdGFtcFwiOlwiMTcyMjA4Njk3MzA0NVwifSIKfQ=="  // PUT your SESSION_ID 


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


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
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
