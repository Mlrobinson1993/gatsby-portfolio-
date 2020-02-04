const siteMetadata = {
	title: `Mikey Robinson | Web Designer and Developer`,
	description: `We can help craft your online presence with clear marketing strategies and engaging website design. We internationally with brands to offer services such as: website design, website development, digital marketing, search engine optimisation, social media management, social media marketing, branding, and logo design.`,
	image: `/m-robinson-web-developer-logo.png`,
	siteUrl: `https://mrobinsonwebdev.com`,
	siteLanguage: `en-GB`,
	siteLocale: `en_gb`,
	twitterUsername: `@mikeydevs`,
	authorName: `Mikey Robinson`,
};

module.exports = {
	siteMetadata: siteMetadata,
	plugins: [
		`gatsby-plugin-styled-components`,
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		`gatsby-plugin-react-helmet`,
		{
			resolve: `gatsby-plugin-mdx`,
			options: {
				extensions: [`.mdx`, `.md`],
				gatsbyRemarkPlugins: [
					{
						resolve: `gatsby-remark-images`,
						options: {
							maxWidth: 590,
						},
					},
				],
				plugins: [
					{
						resolve: `gatsby-remark-images`,
						options: {
							maxWidth: 590,
						},
					},
				],
			},
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: { path: `${__dirname}/posts`, name: `posts` },
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/posts/images/`,
			},
		},
		{
			resolve: 'gatsby-plugin-hubspot',
			options: {
				trackingCode: '6797356',
				respectDNT: true,
				productionOnly: true,
			},
		},
	],
};
