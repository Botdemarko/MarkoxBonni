const handler = async (m, {isOwner, isAdmin, conn, text, participants, args, command, usedPrefix}) => {
  if (usedPrefix == 'a' || usedPrefix == 'A') return;
  if (!(isAdmin || isOwner)) {
    global.dfail('admin', m, conn);
    throw false;
  }
  const pesan = args.join` `;
  const oi = `*𝙼𝙴𝙽𝚂𝙰𝙹𝙴:* ${pesan}`;
  let teks = `*𝐃𝐞𝐬𝐩𝐢𝐞𝐫𝐭𝐞𝐧 𝐛𝐨𝐭𝐜𝐢𝐭𝐨𝐬 🫣 𝐌𝐚𝐫𝐤𝐨 𝐲 𝐁𝐨𝐧𝐧𝐢 𝐥𝐨𝐬 𝐢𝐧𝐯𝐨𝐜𝐚𝐧👻*\n\n❏ ${oi}\n\n❏ *𝙴𝚃𝙸𝚀𝚄𝙴𝚃𝙰𝚂:*\n`;
  for (const mem of participants) {
    teks += `🥑✨@${mem.id.split('@')[0]}\n`;
  }
  teks += `𝐌𝐚𝐫𝐤𝐨𝐱𝐁𝐨𝐧𝐧𝐢`;
  conn.sendMessage(m.chat, {text: teks, mentions: participants.map((a) => a.id)} );
};
handler.help = ['tagall <mesaje>', 'invocar <mesaje>'];
handler.tags = ['group'];
handler.command = /^(tagall|invocar|invocacion|todos|invocación)$/i;
handler.admin = true;
handler.group = true;
export default handler;
