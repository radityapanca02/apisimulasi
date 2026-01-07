export default async function handler(req, res) {

  if (req.method !== "POST") {
    return res.status(405).json({
      status: "TG: @resdinasin",
      message: "Please Don't Bully Me"
    })
  }

  const body = req.body || {}

  await new Promise(resolve => setTimeout(resolve, 1200))

  return res.status(403).json({
    status: false,
    message: "CRACK BY TG@resdinasin"
  })
}
