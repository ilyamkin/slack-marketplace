export default (req, res) => {
  res.status(200).json({
    channels: [
      {
        name: 'memes',
        category: 'Productivity',
        description: 'Improves productivity',
        members: 700,
      },
      {
        name: 'kgb',
        category: 'Country-based',
        description: 'Комитет государственной безопасности при Совете Министров СССР',
        members: 60,
      },
      {
        name: 'stonks',
        category: 'Finance',
        description: 'Buy High; Sell Low.',
        members: 163,
      },
  ]})
}
