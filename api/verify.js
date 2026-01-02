export default async function handler(req, res) {

  // FILTER METHOD
  if (req.method !== "POST") {
    return res.status(405).json({
      status: "TG: @resdinasin",
      message: "Please Don't Bully Me"
    })
  }

  // PARSE BODY (boleh ada / kosong)
  const body = req.body || {}

  // FAKE LATENCY (biar keliatan legit)
  await new Promise(resolve => setTimeout(resolve, 1200))

  // RESPONSE SELALU ACTIVE
  return res.status(200).json({
    status: "autowin",
    message: "Crack by tg@resdinasin"
  })
}
