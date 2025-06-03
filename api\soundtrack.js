export default function handler(req, res) {
  const { theme } = req.query;

  const recommendations = {
    rain: ["Rainy Mood – Chillhop", "Raindrops – Lo-Fi Jazz", "Soft Thunder – Ambient Rain"],
    sun: ["Sunshine – Acoustic Pop", "Summer Breeze – Chillout", "Warm Light – Bossa Nova"],
    night: ["Moonlight – Piano", "Starry Sky – Ambient", "Deep Night – Lo-Fi"]
  };

  const list = recommendations[theme?.toLowerCase()] || ["Default – No specific track"];

  res.status(200).json({ tracks: list });
}
