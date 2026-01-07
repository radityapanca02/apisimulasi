export default async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({
            status: "TG: @resdinasin",
            message: "WHAT R U DOING THERE?"
        });
    }

    const { client_tnuser } = req.body || {};

    if (!client_tnuser) {
        return res.status(400).json({
            status: "error",
            message: "client_tnuser required"
        });
    }

    return res.status(403).json({
        message: "UDID Bypass By TG @resdinasin",
        status: "active"
    });
}
