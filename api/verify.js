export default async function handler(req, res) {

  if (req.method !== "POST") {
    return res.status(405).json({
      status: false,
      message: "CRACK BY TG@resdinasin"
    })
  }

  const body = req.body || {}

  await new Promise(resolve => setTimeout(resolve, 1200))

  return res.status(200).json({
    status: false,
    message: "CRACK BY TG@resdinasin"
  })
}
