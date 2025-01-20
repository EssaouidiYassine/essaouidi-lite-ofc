import fetch from 'node-fetch'
let handler = async (m, { conn }) => {
  let caption = `
*「 معلومات عن صاحب البوت 」*\n\n
*Whatsapp owner:*\nhttps://wa.me/+212648753294

*instagram:*\ninstagram.com/essaouidi_yassine

*facebook page:*\nwww.facebook.com/Essaouidi67

*script bot :* github.com/EssaouidiYassine

`.trim()
  m.reply(caption)
}
handler.help = ['owner']
handler.tags = ['infobot']
handler.command = /^(owner)$/i
handler.limit = false

export default handler
