export default function sitemap() {
  return [
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/about`,
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/client`,
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/contact`,
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/our_company`,
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/serice`,
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/team`,
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}`,
    },
  ];
}
