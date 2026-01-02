export default async function handler(req, res) {

  // FILTER METHOD
  if (req.method !== "POST") {
    return res.status(405).json({
      status: "apa",
      message: "i don't know why?"
    })
  }

  // PARSE BODY (boleh ada / kosong)
  const body = req.body || {}

  // FAKE LATENCY (biar keliatan legit)
  await new Promise(resolve => setTimeout(resolve, 1200))

  // RESPONSE SELALU ACTIVE
  return res.status(200).json({
    status: "active",
    message: "crack by dina"
  })
}
