type TelegramPayload = {
  name?: string;
  email?: string;
  message?: string;
  timestamp?: string;
};

type ServerRequest = {
  method?: string;
  body?: TelegramPayload;
};

type ServerResponse = {
  status: (code: number) => {
    json: (body: unknown) => void;
  };
};

export default async function handler(req: ServerRequest, res: ServerResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({error: 'Method not allowed'});
  }

  const botToken = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!botToken || !chatId) {
    return res.status(500).json({error: 'Telegram is not configured'});
  }

  const {name, email, message, timestamp} = req.body ?? {};

  if (!name || !email || !message || !timestamp) {
    return res.status(400).json({error: 'Missing contact message fields'});
  }

  const text = [
    'New Portfolio Enquiry',
    '',
    `Name: ${name}`,
    `Email: ${email}`,
    `Message: ${message}`,
    '',
    `Time: ${timestamp}`,
  ].join('\n');

  const telegramResponse = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
      chat_id: chatId,
      text,
    }),
  });

  if (!telegramResponse.ok) {
    return res.status(telegramResponse.status).json({error: 'Telegram request failed'});
  }

  return res.status(200).json({ok: true});
}
