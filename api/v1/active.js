export default async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({
            status: "TG: @resdinasin",
            message: "WHAT R U DOING THERE?"
        });
    }

    const { client_tnuser, device_info } = req.body || {};

    if (!client_tnuser || !device_info) {
        return res.status(400).json({
            status: "error",
            message: "client_tnuser & device_info required"
        });
    }

    const ip =
        req.headers["x-forwarded-for"]?.split(",")[0] ||
        req.socket.remoteAddress ||
        "unknown";

    const time = new Date().toLocaleString("id-ID", {
        timeZone: "Asia/Jakarta"
    });

    // ⚠️ location optional (tanpa web lookup)
    const locate = "Unknown";

    const message = `
==========LOGIN TNK SUCCESS============
client_user : ${client_tnuser}
device_info : ${device_info}
ip          : ${ip}
time        : ${time}
`;

    // Kirim ke Telegram
    await fetch(`https://api.telegram.org/bot${process.env.BOT_TOKEN}/sendMessage`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            chat_id: process.env.CHAT_ID,
            text: message
        })
    });

    return res.status(200).json({
        message: "VIP login bypass by TG@resdinasin",
        status: "vip",
        activated: true
    });
}
