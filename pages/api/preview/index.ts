export default async (req: any, res: any) => {
  // Check the secret and next parameters
  // This secret should only be known to this API route and the CMS
  if (req.query.secret !== `${process.env.NEXT_PUBLIC_PREVIEW_TOKEN}` || !req.query.slug) {
    return res.status(401).json({ message: 'Invalid token' })
  }

  res.setPreviewData({})
  const slug = req.query.slug
  
  res.redirect(`${process.env.NEXT_PUBLIC_SITE_URL}/blog/${slug}`)
}