export default (req, res) => {
  res.status(200).json({
    categories: [
      {
        id: 'finance',
        title: 'Finance',
        description: 'All about money',
        iconForeground: 'text-green-700',
        iconBackground: 'bg-green-50',
      },
      {
        id: 'productivity',
        title: 'Productivity',
        description: 'Increasing productivity',
        iconForeground: 'text-purple-700',
        iconBackground: 'bg-purple-50',
      },
      {
        id: 'entertainment',
        title: 'Entertainment',
        description: 'Check out some memes',
        iconForeground: 'text-red-700',
        iconBackground: 'bg-red-50',
      },
      {
        id: 'countries',
        title: 'Country-based',
        description: 'Each country has its own channel',
        iconForeground: 'text-yellow-700',
        iconBackground: 'bg-yellow-50'
      },
      {
        id: 'technology',
        title: 'Technology',
        description: 'Technologies that we use',
        iconForeground: 'text-blue-700',
        iconBackground: 'bg-blue-50',
      },
      {
        id: 'design',
        title: 'Design',
        description: 'Design systems, tools',
        iconForeground: 'text-indigo-700',
        iconBackground: 'bg-indigo-50',
      },
  ]})
}